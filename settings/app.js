!function(e){function t(t){for(var a,c,i=t[0],l=t[1],o=t[2],d=0,p=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&p.push(s[c][0]),s[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(u&&u(t);p.length;)p.shift()();return r.push.apply(r,o||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==s[l]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},s={5:0},r=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=s[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=s[e]=[t,a]}));t.push(n[2]=a);var r,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=function(e){return c.p+""+({}[e]||e)+".js"}(e);var l=new Error;r=function(t){i.onerror=i.onload=null,clearTimeout(o);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,n[1](l)}s[e]=void 0}};var o=setTimeout((function(){r({type:"timeout",target:i})}),12e4);i.onerror=i.onload=r,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var u=l;r.push([376,6]),n()}({111:function(e,t,n){"use strict";var a,s,r,c;n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return r})),function(e){e[e.Monday=1]="Monday",e[e.Tuesday=2]="Tuesday",e[e.Wednesday=3]="Wednesday",e[e.Thursday=4]="Thursday",e[e.Friday=5]="Friday",e[e.Saturday=6]="Saturday",e[e.Sunday=0]="Sunday"}(a||(a={})),function(e){e[e.Automatic=0]="Automatic"}(s||(s={})),function(e){e[e.DayAtHome=1]="DayAtHome",e[e.DayAway=2]="DayAway",e[e.Sleep=3]="Sleep",e[e.Holiday=4]="Holiday",e[e.OutOfSeason=5]="OutOfSeason"}(r||(r={})),function(e){e[e.OverrideDay=6]="OverrideDay",e[e.FullManual=7]="FullManual"}(c||(c={}))},29:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return c}));var a=n(19);const s=e=>Object(a.sortBy)(e,[e=>0===e.day?7:e.day,"hour","minute"]).map((e,t)=>Object.assign(Object.assign({},e),{index:t}));function r(e,t,n){if(0===t.schedule.length)return null;if(0!==n.length&&0===n[0].index)return t.schedule[t.schedule.length-1].day!==n[0].day?t.schedule[t.schedule.length-1]:null;if(0===n.length){let n=e-1;for(n<0&&(n=6);n>=0;){const e=t.schedule.filter(e=>e.day===n);if(e.length>0)return e[e.length-1];n-=1}return null}return t.schedule[n[0].index-1]}function c(e,t){const n=e.schedule.filter(e=>e.day===t);return{last:r(t,e,n),schedules:n}}},376:function(e,t,n){"use strict";n.r(t);var a=n(17),s=n(50),r=n(103),c=n.n(r),i=n(96),l=n.n(i),o=n(97),u=n(0),d=n.n(u),p=n(16),b=n(91);class g extends u.Component{constructor(e){super(e),this.state={hasError:!1}}componentDidCatch(e,t){this.setState({hasError:!0,error:e,info:t})}render(){return this.state.hasError?d.a.createElement(u.Fragment,null,d.a.createElement("h1",null,Object(b.a)("confirm.title")),d.a.createElement("div",{style:{whiteSpace:"pre-wrap"}},this.state.error&&this.state.error.toString(),d.a.createElement("br",null),this.state.info.componentStack)):this.props.children}}var O=n(25),j=n(92);const m=()=>u.createElement(s.c,{style:{position:"absolute",top:"50%",left:"50%",marginTop:-40,marginLeft:-40},color:"secondary",size:80});var h=n(94);const y=u.lazy(()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(8)]).then(n.bind(null,465))),f=u.lazy(()=>Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,467))),v=u.lazy(()=>Promise.all([n.e(0),n.e(2),n.e(12)]).then(n.bind(null,459))),P=u.lazy(()=>Promise.all([n.e(0),n.e(13)]).then(n.bind(null,460))),E=({match:e})=>u.createElement(h.a,null,u.createElement(O.a,{path:`${e.url}/:id/exceptions`,exact:!0,component:f}),u.createElement(O.a,{path:`${e.url}/:id/schedule`,exact:!0,component:v}),u.createElement(O.a,{path:`${e.url}/:id`,exact:!0,component:y})),S=u.lazy(()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,461))),x=u.lazy(()=>Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,462))),w=u.lazy(()=>Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,463)));class z extends u.Component{constructor(e){super(e)}render(){return u.createElement(u.Suspense,{fallback:u.createElement(m,null)},u.createElement(j.a,null,u.createElement(u.Fragment,null,u.createElement(O.c,null,u.createElement(O.a,{exact:!0,path:"/",component:S}),u.createElement(O.a,{exact:!0,path:"/settings",component:x}),u.createElement(O.a,{exact:!0,path:"/temperatures",component:w}),u.createElement(O.a,{exact:!0,path:"/schedules",component:P}),u.createElement(O.a,{path:"/plans",component:E})))))}}const T=Object(a.createMuiTheme)({palette:{primary:c.a,secondary:l.a},typography:{useNextVariants:!0}});p.render(u.createElement(g,null,u.createElement(a.MuiThemeProvider,{theme:T},u.createElement(s.d,null),u.createElement(o.SnackbarProvider,{maxSnack:3,anchorOrigin:{vertical:"bottom",horizontal:"left"},style:{maxWidth:280}},u.createElement(z,null)))),document.querySelector("#root"))},64:function(e,t,n){"use strict";var a=n(111);n.d(t,"a",(function(){return a.a})),n.d(t,"b",(function(){return a.c}))},91:function(e,t,n){"use strict";n(19);let a;a=Homey.__,t.a=a},94:function(e,t,n){"use strict";var a=n(0),s=n(19),r=n(64),c=n(29);const i={index:-1,day:0,hour:0,minute:0,targetTemperature:0},l={loaded:!1,dirty:!1,savePoint:null,setPoint:Object.assign({},i),zones:{},devices:{},plan:{id:"",enabled:!1,name:"",description:"",zones:[],devices:[],schedule:[],overrides:null},selectedDay:{last:null,schedules:[]}},o=(e,t)=>{switch(t.type){case"loadDevices":return Object.assign(Object.assign({},e),{devices:t.devices});case"loadZones":return Object.assign(Object.assign({},e),{zones:t.zones});case"savePoint":return Object.assign(Object.assign({},e),{savePoint:JSON.stringify(Object.assign(Object.assign({},e),{savePoint:null}))});case"undo":return null==e.savePoint?e:JSON.parse(e.savePoint);case"commit":return Object.assign(Object.assign({},e),{savePoint:null});case"setOverride":return Object.assign(Object.assign({},e),{dirty:!0,plan:Object.assign(Object.assign({},e.plan),{overrides:Object.assign(Object.assign({},e.plan.overrides),{[r.b[t.mode]]:{targetTemperature:t.temperature}})})});case"clearOverride":{const n=e.plan.overrides||{};return delete n[t.mode],delete n[r.b[t.mode]],Object.assign(Object.assign({},e),{dirty:!0,plan:Object.assign(Object.assign({},e.plan),{overrides:n})})}case"loadSetPoint":return Object.assign(Object.assign({},e),{setPoint:t.setPoint});case"setStart":{let n=null;return n="string"==typeof t.start?new Date("1970-01-01T"+t.start+"Z"):t.start,Object.assign(Object.assign({},e),{setPoint:Object.assign(Object.assign({},e.setPoint),{hour:n.getUTCHours(),minute:n.getUTCMinutes()})})}case"setTargetTemperature":return Object.assign(Object.assign({},e),{setPoint:Object.assign(Object.assign({},e.setPoint),{targetTemperature:t.temperature})});case"newSetPoint":return Object.assign(Object.assign({},e),{setPoint:Object.assign(Object.assign({},i),{day:t.day})});case"toggleEnabled":return Object.assign(Object.assign({},e),{dirty:!0,plan:Object.assign(Object.assign({},e.plan),{enabled:!e.plan.enabled})});case"setName":return Object.assign(Object.assign({},e),{dirty:!0,plan:Object.assign(Object.assign({},e.plan),{name:t.name})});case"setDescription":return Object.assign(Object.assign({},e),{dirty:!0,plan:Object.assign(Object.assign({},e.plan),{description:t.description})});case"toggleDevice":{const n=e.plan.devices||[];return Object(s.isEmpty)(Object(s.remove)(n,e=>e===t.device))&&n.push(t.device),Object.assign(Object.assign({},e),{dirty:!0,plan:Object.assign(Object.assign({},e.plan),{devices:n})})}case"toggleZone":{const n=e.plan.zones||[];return Object(s.isEmpty)(Object(s.remove)(n,e=>e===t.zone))&&n.push(t.zone),Object.assign(Object.assign({},e),{dirty:!0,plan:Object.assign(Object.assign({},e.plan),{zones:n})})}case"copyDays":{const n=Object(s.filter)(e.plan.schedule,e=>e.day===t.source),a=Object(s.map)(e.plan.schedule,e=>Object.assign({},e));return Object(s.forEach)(t.targets,e=>{Object(s.remove)(a,t=>t.day===e),Object(s.forEach)(n,t=>{a.push(Object.assign(Object.assign({},t),{day:e}))})}),Object.assign(Object.assign({},e),{dirty:!0,plan:Object.assign(Object.assign({},e.plan),{schedule:Object(c.b)(a)})})}case"addSetPoint":{const n=[...e.plan.schedule];return n.push(Object.assign(Object.assign({},t.setPoint),{index:-1})),Object.assign(Object.assign({},e),{dirty:!0,plan:Object.assign(Object.assign({},e.plan),{schedule:Object(c.b)(n)})})}case"updateSetPoint":{const n=[...e.plan.schedule];return n[t.setPoint.index]=t.setPoint,Object.assign(Object.assign({},e),{dirty:!0,plan:Object.assign(Object.assign({},e.plan),{schedule:Object(c.b)(n)})})}case"removeSetPoint":{const n=[...e.plan.schedule];return n.splice(t.index,1),Object.assign(Object.assign({},e),{dirty:!0,plan:Object.assign(Object.assign({},e.plan),{schedule:Object(c.b)(n)})})}case"selectDay":return Object.assign(Object.assign({},e),{selectedDay:Object(c.a)(e.plan,t.day)});case"loadPlan":return Object.assign(Object.assign({},JSON.parse(JSON.stringify(e))),{loaded:!0,dirty:!1,plan:Object.assign(Object.assign({},t.plan),{description:t.plan.description,name:t.plan.name||"",zones:t.plan.zones||[],devices:t.plan.devices||[],overrides:t.plan.overrides||{},schedule:Object(c.b)([...t.plan.schedule])})});default:return e}},u=o;n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return h}));const{createContext:d,useContext:p,useReducer:b}=a,g=d(l),O=d(()=>0),j=({children:e})=>{const[t,n]=b(u,l);return a.createElement(O.Provider,{value:n},a.createElement(g.Provider,{value:t},e))},m=()=>p(O),h=e=>{return p(g)[e]}}});
//# sourceMappingURL=https://raw.githubusercontent.com/mskg/homey-heating/release/v1.2.3-rc5/settings/app.js.map