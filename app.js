module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=83)}({0:function(t,e,n){"use strict";n.r(e),n.d(e,"__extends",(function(){return o})),n.d(e,"__assign",(function(){return i})),n.d(e,"__rest",(function(){return u})),n.d(e,"__decorate",(function(){return c})),n.d(e,"__param",(function(){return a})),n.d(e,"__metadata",(function(){return f})),n.d(e,"__awaiter",(function(){return l})),n.d(e,"__generator",(function(){return s})),n.d(e,"__exportStar",(function(){return p})),n.d(e,"__values",(function(){return d})),n.d(e,"__read",(function(){return y})),n.d(e,"__spread",(function(){return h})),n.d(e,"__await",(function(){return _})),n.d(e,"__asyncGenerator",(function(){return v})),n.d(e,"__asyncDelegator",(function(){return g})),n.d(e,"__asyncValues",(function(){return b})),n.d(e,"__makeTemplateObject",(function(){return m})),n.d(e,"__importStar",(function(){return w})),n.d(e,"__importDefault",(function(){return S}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function o(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var i=function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function u(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]])}return n}function c(t,e,n,r){var o,i=arguments.length,u=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(u=(i<3?o(u):i>3?o(e,n,u):o(e,n))||u);return i>3&&u&&Object.defineProperty(e,n,u),u}function a(t,e){return function(n,r){e(n,r,t)}}function f(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function l(t,e,n,r){return new(n||(n=Promise))((function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(u,c)}a((r=r.apply(t,e||[])).next())}))}function s(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}function p(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}function d(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}}function y(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),u=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return u}function h(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(y(arguments[e]));return t}function _(t){return this instanceof _?(this.v=t,this):new _(t)}function v(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(t,e||[]),i=[];return r={},u("next"),u("throw"),u("return"),r[Symbol.asyncIterator]=function(){return this},r;function u(t){o[t]&&(r[t]=function(e){return new Promise((function(n,r){i.push([t,e,n,r])>1||c(t,e)}))})}function c(t,e){try{(n=o[t](e)).value instanceof _?Promise.resolve(n.value.v).then(a,f):l(i[0][2],n)}catch(t){l(i[0][3],t)}var n}function a(t){c("next",t)}function f(t){c("throw",t)}function l(t,e){t(e),i.shift(),i.length&&c(i[0][0],i[0][1])}}function g(t){var e,n;return e={},r("next"),r("throw",(function(t){throw t})),r("return"),e[Symbol.iterator]=function(){return this},e;function r(r,o){e[r]=t[r]?function(e){return(n=!n)?{value:_(t[r](e)),done:"return"===r}:o?o(e):e}:o}}function b(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=d(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise((function(r,o){(function(t,e,n,r){Promise.resolve(r).then((function(e){t({value:e,done:n})}),e)})(r,o,(e=t[n](e)).done,e.value)}))}}}function m(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function w(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function S(t){return t&&t.__esModule?t:{default:t}}},1:function(t,e){t.exports=require("tsyringe")},15:function(t,e){t.exports=require("reflect-metadata")},6:function(t,e){t.exports=require("@app/services")},7:function(t,e){t.exports=require("homey")},83:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n(0);n(15);const o=n(6),i=n(7),u=n(1);let c=class{constructor(t,e,n,r){this.loggerFactory=t,this.heatingScheduler=e,this.heatingManager=n,this.flowService=r,this.logger=this.loggerFactory.createLogger("App")}run(){return r.__awaiter(this,void 0,void 0,(function*(){this.logger.information("Bootstrapping App v1.2.3-rc2 (1165)"),process.on("uncaughtException",t=>{this.logger.error(t,"uncought Exception")}),process.on("unhandledRejection",(t,e)=>{this.logger.error(t,"Unhandled Rejection at:",e,"reason:",t)}),yield this.flowService.init(),yield this.heatingManager.init(),yield this.heatingScheduler.start()}))}};r.__decorate([o.trycatchlog(!0),r.__metadata("design:type",Function),r.__metadata("design:paramtypes",[]),r.__metadata("design:returntype",Promise)],c.prototype,"run",null),c=r.__decorate([u.injectable(),r.__param(3,u.inject("FlowService")),r.__metadata("design:paramtypes",[o.LoggerFactory,o.HeatingSchedulerService,o.HeatingManagerService,o.FlowService])],c),e.HeatingSchedulerApp=c;class a extends i.App{onInit(){return r.__awaiter(this,void 0,void 0,(function*(){console.info("Bootstrapping App v1.2.3-rc2 (1165)"),o.LogService.init(this),yield o.BootStrapper();const t=u.container.resolve(c);yield t.run()}))}}e.default=a,t.exports=a}});
//# sourceMappingURL=https://raw.githubusercontent.com/mskg/homey-heating/release/v1.2.3-rc2/app.js.map