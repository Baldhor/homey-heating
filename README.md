# [Heating scheduler for Athom Homey](https://homey-heating.mskg.app) &middot; [![Build Status](https://travis-ci.com/mskg/homey-heating.svg?branch=master)](https://travis-ci.com/mskg/homey-heating) [![Coverage Status](https://coveralls.io/repos/github/mskg/homey-heating/badge.svg?branch=master)](https://coveralls.io/github/mskg/homey-heating?branch=master) [![Greenkeeper badge](https://badges.greenkeeper.io/mskg/homey-heating.svg)](https://greenkeeper.io/)

Easily control the temperature of your thermostats.

## This is a FORK
This is not the official version of the app on homey store, and as such it is not available on the store!
This is a personnal fork to solve severals issues I met, and you need to build it by your own:
1. Install git (https://git-scm.com/download/win) + node-js (https://nodejs.org/en/download/)
2. Install homey package: npm i -g homey
3. log into homey: homey login
4. Checkout the repo: git clone https://github.com/Baldhor/homey-heating.git
5. Update dependancies: npm i
6. Build and install (on your homey): npm run homey:install

/!\ It is highly adviced to save your configuration before doing so! check in settings screen of the app
/!\ I hereby deny all responsabilities (however I confirm I'm using this version at the moment)

## Known Issues
See [Issue Tracker](https://github.com/mskg/homey-heating/issues)

## Supported Languages

* English
* Dutch
* Deutsch

## Notes
* Build
  * `npm run homey:run` to run the dev build of the App on your homey.
    * This exposes the API public but does not change thermostat values.
    * Schedules are not read from configuration and are not persisted. You always start with clean values.
  * `npm run start:web` to run the settings app localy. Don't forget to set your Homey url below.
  * `npm run homey:install` to drop a production build onto your Homey.

* Change environment variable HOMEY_DEV_URL to point to your Homey's url, e.g. http://192.168.0.1
* Change environment variable HOMEY_LANG to view the web in either `en` or `nl`

* If you enable remote logging inside the app, you can watch the live trace of the application via [console.re/yourcategory](console.re)

* There is a script `scripts\translate.js` to translate new values from `en` to `nl`. The tool does not touch existing translations in the `app.json`, or `nl.json`.

* Install a *released build onto your Homey* `npm run release:install <tag>`. If you omit the tag, all available version will be printed.

## Change Log
* **1.2.4a** [Release notes](docs/releasenotes/v01-02-04a.md)
* **1.2.4** [Release notes](docs/releasenotes/v01-02-04.md)
* **1.2.3** [Release notes](docs/releasenotes/v01-02-03.md)
* **1.2.2** [Release notes](docs/releasenotes/v01-02-02.md)
* **1.2.1** [Release notes](docs/releasenotes/v01-02-01.md)
* **1.2.0** [Release notes](docs/releasenotes/v01-02-00.md)
* **1.1.2** [Release notes](docs/releasenotes/v01-01-02.md)
* **1.1.1** [Release notes](docs/releasenotes/v01-01.md)
* **1.0** Initial release

## Feedback

Please report issues at the [issues section on GitHub](https://github.com/mskg/homey-heating/issues) or contact me on [Slack](https://athomcommunity.slack.com/team/mskg).
