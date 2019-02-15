import { forEach, reduce } from "lodash";

declare var Homey: any;
declare var PRODUCTION: boolean;
declare var HOMEY_LANG: string;

let translate: (id: string, param?: any) => string = null;

if (PRODUCTION) {
    translate = Homey.__;
} else {
    // tslint:disable-next-line: no-var-requires
    const lang = require(`../../../locales/${HOMEY_LANG}.json`);

    translate = (id: string, param?: any) => {
        let value = reduce(id.split("."), (r, v, k) => {
            if (r == null) { throw new Error(`Resource ${id} not found.`); }
            return r[v];
        }, lang);

        if (value == null) { throw new Error(`Resource ${id} not found.`); }

        if (param != null) {
            forEach(Object.keys(param), (k) => {
                value = value.replace(`__${k}__`, param[k]);
            });
        }

        return value;
    };
}

export default translate;
