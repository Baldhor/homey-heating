
import { Mutex } from "@app/helper";
import { NormalOperationMode, OverrideMode, ThermostatMode } from "@app/model";
import { ManagerCron } from "homey";
import { first, sortBy } from "lodash";
import { singleton } from "tsyringe";
import { HeatingPlanCalculator } from "../calculator";
import { HeatingManagerService } from "../heating-manager";
import { HeatingPlanRepositoryService } from "../heating-plan-repository";
import { asynctrycatchlog, ILogger, LoggerFactory, trycatchlog } from "../log";

@singleton()
export class HeatingSchedulerService {
    private mutex: Mutex = new Mutex();
    private logger: ILogger;
    private next: Date = null;

    constructor(
        private manager: HeatingManagerService,
        private calculator: HeatingPlanCalculator,
        private repository: HeatingPlanRepositoryService,

        loggerFactory: LoggerFactory) {
        this.logger = loggerFactory.createLogger("Scheduler");

        this.repository.onChanged.subscribe(async () => {
            await this.start();
        });

        this.manager.onModeChanged.subscribe(async () => {
            await this.start();
        });
    }

    // api only, null is ok
    @trycatchlog(true, null)
    public get nextSchedule(): Date {
        return this.next;
    }

    // we live on our own, ok to kill
    @asynctrycatchlog(true)
    public async stop() {
        const unlock = await this.mutex.lock();

        try {
            this.logger.information("Stop");
            await ManagerCron.unregisterAllTasks();
        } finally {
            unlock();
        }
    }

    // we live on our own, ok to kill
    @asynctrycatchlog(true)
    public async start() {
        const unlock = await this.mutex.lock();

        try {
            this.logger.information("Start");
            await this.registerTasks();
        } finally {
            unlock();
        }
    }

    // we live on our own, ok to kill
    @asynctrycatchlog(true)
    private async run() {
        try {
            this.logger.information("Execute");
            this.manager.applyPlans();
        } finally {
            this.registerTasks();
        }
    }

    // we live on our own, ok to kill
    @asynctrycatchlog(true)
    private async clearOverrides() {
        let skipRegister = false;
        try {
            this.logger.information("Cleaning up overrides");

            const plans = await this.repository.plans;
            await Promise.all(plans.map(async (plan) => {
                if (plan.thermostatMode === ThermostatMode.OverrideDay) {
                    this.logger.information(`Reset thermostat mode of ${plan.id}`);

                    plan.thermostatMode = NormalOperationMode.Automatic;
                    await this.repository.update(plan, false);
                }
            }));

            if (this.manager.operationMode === OverrideMode.DayAtHome
                || this.manager.operationMode === OverrideMode.DayAway
                || this.manager.operationMode === OverrideMode.Sleep) {

                this.logger.information("Reverting to normal mode");
                this.manager.operationMode = NormalOperationMode.Automatic;

                // mode change triggers start()
                skipRegister = true;
            }

            this.manager.applyPlans();
        } finally {
            if (!skipRegister) {
                this.registerTasks();
            }
        }
    }

    // TODO: We are dump now => we check everything.
    //  Should only apply the plan with a schedule now?
    private async registerTasks() {
        this.logger.debug("Updating Cron");
        await ManagerCron.unregisterAllTasks();

        // check again tomorrow
        const eod = new Date();
        eod.setHours(0, 0, 0, 0);
        eod.setDate(eod.getDate() + 1);

        const resetPlans = await ManagerCron.registerTask("HeatingManagerService - Overrides", eod);
        resetPlans.once("run", async (data) => await this.clearOverrides());

        if (this.manager.operationMode === OverrideMode.Holiday
            || this.manager.operationMode === OverrideMode.OutOfSeason) {
            this.logger.information(`Mode is ${OverrideMode[this.manager.operationMode]}, no check required.`);
            return;
        }

        const allDates: Date[] = [];
        const plans = await this.repository.activePlans;
        plans.forEach((plan) => {
            this.logger.debug(`Checking plan ${plan.id}`);

            const next = this.calculator.getNextSchedule(plan);
            if (next != null) {
                allDates.push(next);
            }
        });

        // do we need to convert to ms?
        this.next = first(sortBy(allDates, ((d: Date) => d)));

        // nothing to do, we wait for a plan/mode change then
        if (this.next == null) {
            this.logger.information(`No setpoint execution planned.`);
            return;
        }

        this.logger.information(`Next execution is at ${this.next.toLocaleString()}`);

        const task = await ManagerCron.registerTask("HeatingManagerService - SetPoint", this.next);
        task.once("run", async (data) => await this.run());
    }
}
