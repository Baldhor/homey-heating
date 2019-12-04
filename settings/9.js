(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{149:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(394))},151:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(401))},378:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(377);function r(e,t,a=null){return Object(n.b)(this,void 0,void 0,(function*(){return yield new Promise((n,r)=>{Homey.api(e,t,a,(e,t)=>{e?r(e):n(t)})})}))}},379:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return i}));var n=a(377),r=a(19),l=a(378);const o=e=>Object(n.b)(void 0,void 0,void 0,(function*(){const t=Object.assign({},e);return t.zones&&0!==t.zones.length||(t.zones=void 0),t.devices&&0!==t.devices.length||(t.devices=void 0),yield Object(l.a)("PUT",`/plans/${e.id}`,t)})),c={fetchPlans:()=>Object(n.b)(void 0,void 0,void 0,(function*(){const e=yield Object(l.a)("GET","/plans");return Object(r.sortBy)(Object(r.map)(e,e=>(e.zones=e.zones||[],e.devices=e.devices||[],e)),e=>e.name)})),fetchPlanById:e=>Object(n.b)(void 0,void 0,void 0,(function*(){const t=yield Object(l.a)("GET",`/plans/${e}`);if(null==t)throw new Error(`Plan ${e} not found.`);return t.zones=t.zones||[],t.devices=t.devices||[],t})),fetchSchedule:()=>Object(n.b)(void 0,void 0,void 0,(function*(){const e=yield Object(l.a)("GET","/schedule");return e.temperatures=Object(r.sortBy)(e.temperatures,[e=>e.device.name]),e})),updatePlan:o,removePlan:e=>Object(n.b)(void 0,void 0,void 0,(function*(){return yield Object(l.a)("DELETE",`/plans/${e}`)})),togglePlanState:e=>Object(n.b)(void 0,void 0,void 0,(function*(){return e.enabled=!e.enabled,yield o(e),!0}))},i={fetchMode:()=>Object(n.b)(void 0,void 0,void 0,(function*(){return(yield Object(l.a)("GET","/mode")).mode})),setMode:e=>Object(n.b)(void 0,void 0,void 0,(function*(){return yield Object(l.a)("PUT","/mode",{mode:e})}))}},380:function(e,t,a){"use strict";var n=a(146),r=a.n(n),l=a(17),o=a(147),c=a.n(o),i=a(40),s=a.n(i),d=a(0),u=a.n(d);t.a=Object(l.withStyles)(e=>({appBar:{},grow:{flexGrow:1},buttons:{display:"flex"},toolbar:{alignItems:"center",justifyContent:"space-between"}}))(e=>{const{classes:t}=e,{button:a,title:n,actions:l,subBar:o}=e.children||{button:null,title:null,actions:null,subBar:null};return u.a.createElement(d.Fragment,null,u.a.createElement(r.a,{position:"absolute",color:"primary",className:t.appBar},u.a.createElement(c.a,{className:t.toolbar},e.button||a,u.a.createElement(s.a,{variant:"h6",color:"inherit",noWrap:!0},e.title||n),u.a.createElement("div",{className:t.grow}),null!=l&&u.a.createElement("div",{className:t.buttons},l)),null!=o&&o))})},381:function(e,t,a){"use strict";var n=a(17),r=a(0),l=a.n(r);t.a=Object(n.withStyles)(e=>({inputContainer:{width:"100%",paddingLeft:2*e.spacing.unit,paddingRight:3*e.spacing.unit}}))(e=>l.a.createElement("div",{className:e.classes.inputContainer},e.children))},382:function(e,t,a){"use strict";var n=a(377),r=a(50),l=a(17),o=a(148),c=a.n(o),i=a(393),s=a.n(i),d=a(0),u=a.n(d),b=a(25),m=a(91),p=a(92);function f(e){var{innerRef:t}=e,a=Object(n.d)(e,["innerRef"]);return a.to.toString().match(/https/)?u.a.createElement("a",Object.assign({onClick:()=>Homey.openURL(a.to.toString())},a),a.children):u.a.createElement(p.b,Object.assign({},a))}var v=e=>u.a.createElement(r.n,Object.assign({},e,{component:f}),e.children);a.d(t,"a",(function(){return y})),a.d(t,"b",(function(){return O}));const g=e=>({text:{padding:2*e.spacing.unit,paddingBottom:0},version:{padding:2*e.spacing.unit,paddingTop:0},normal:{},selected:{color:e.palette.primary.main},otherButton:{},firstButton:{marginLeft:-12}}),y=e=>{const[t,a]=u.a.useState(!1);return u.a.createElement(u.a.Fragment,null,u.a.createElement(h,{open:t,onClose:()=>{a(!1)}}),u.a.createElement(O,{first:!0,onClick:()=>{a(!0)},icon:u.a.createElement(s.a,null)}))},h=Object(b.f)(Object(l.withStyles)(g)(e=>{const{classes:t}=e,a=[{type:"entry",to:"/",text:Object(m.a)("menu.plans")},{to:"/temperatures",text:Object(m.a)("menu.temperatures")},{to:"/schedules",text:Object(m.a)("menu.schedules")},{to:"/settings",text:Object(m.a)("menu.settings")},{to:"https://homey-heating.mskg.app",text:Object(m.a)("menu.help")}];return u.a.createElement(c.a,{open:e.open,onClose:e.onClose},u.a.createElement(r.v,{className:t.text,variant:"h5",gutterBottom:!0},Object(m.a)("menu.title")),u.a.createElement(r.v,{className:t.version,variant:"body2",color:"textSecondary",gutterBottom:!0},"Version ","1.2.2-rc8"," (","1137",")"),u.a.createElement(r.h,null),u.a.createElement(r.m,null,a.map(a=>"Divider"===a.type?u.a.createElement(r.h,null):u.a.createElement(v,{key:a.to,to:a.to,disabled:e.match.url===a.to,button:!0},u.a.createElement(r.q,{primary:a.text,classes:{primary:e.match.url!==a.to?t.normal:t.selected}})))))})),O=Object(l.withStyles)(g)(e=>{const{classes:t,first:a,icon:l}=e,o=Object(n.d)(e,["classes","first","icon"]);return u.a.createElement(r.j,Object.assign({className:a?t.firstButton:t.otherButton,color:"inherit"},o),l)})},383:function(e,t,a){"use strict";var n=a(17),r=a(0),l=a.n(r);t.a=Object(n.withStyles)(e=>({root:{webkitOverflowScrolling:"touch",display:"flex",flexFlow:"column",height:"100vh",width:"100vw",backgroundColor:"#fff"},body:{flex:"1 0 100%",margin:0,maxWidth:"100%",overflowY:"scroll"}}))(e=>{const{classes:t}=e,{header:a,body:n,paddingTop:r,paddingBottom:o}=e.children,c=o||"auto";return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:t.root},a,l.a.createElement("div",{className:t.body,style:{paddingTop:r,paddingBottom:c}},n)))})},385:function(e,t,a){"use strict";var n=a(377),r=a(17),l=a(40),o=a.n(l),c=a(0),i=a.n(c);t.a=Object(r.withStyles)(e=>({text:{paddingLeft:2*e.spacing.unit,paddingRight:2*e.spacing.unit}}))(e=>{const{classes:t,text:a}=e,r=Object(n.d)(e,["classes","text"]);return i.a.createElement(o.a,Object.assign({className:t.text,color:"textSecondary"},r),a)})},387:function(e,t,a){"use strict";var n=a(377),r=a(17),l=a(40),o=a.n(l),c=a(0),i=a.n(c);t.a=Object(r.withStyles)(e=>({headline:{marginTop:4*e.spacing.unit,paddingLeft:2*e.spacing.unit,paddingRight:2*e.spacing.unit}}))(e=>{const{classes:t,text:a}=e,r=Object(n.d)(e,["classes","text"]);return i.a.createElement(o.a,Object.assign({className:t.headline,variant:"h5",color:"textSecondary",gutterBottom:!0},r),a)})},388:function(e,t,a){"use strict";var n=a(377),r=a(150),l=a.n(r),o=a(0),c=a.n(o),i=a(381);t.a=e=>{var{classes:t}=e,a=Object(n.d)(e,["classes"]);return c.a.createElement(i.a,null,c.a.createElement(l.a,Object.assign({fullWidth:!0,margin:"normal"},a)))}},394:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(3)),l=n(a(4)),o=n(a(0)),c=(n(a(2)),n(a(5))),i=n(a(6)),s=a(18),d=n(a(155)),u=function(e){return{root:{display:"inline-flex",width:62,position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle"},icon:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},iconChecked:{boxShadow:e.shadows[2]},switchBase:{padding:0,height:48,width:48,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},checked:{transform:"translateX(14px)","& + $bar":{opacity:.5}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"& + $bar":{backgroundColor:e.palette.primary.main}}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"& + $bar":{backgroundColor:e.palette.secondary.main}}},disabled:{"& + $bar":{opacity:"light"===e.palette.type?.12:.1},"& $icon":{boxShadow:e.shadows[1]},"&$switchBase":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800],"& + $bar":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}}},bar:{borderRadius:7,display:"block",position:"absolute",zIndex:-1,width:34,height:14,top:"50%",left:"50%",marginTop:-7,marginLeft:-17,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}};function b(e){var t=e.classes,a=e.className,n=e.color,i=(0,l.default)(e,["classes","className","color"]);return o.default.createElement("span",{className:(0,c.default)(t.root,a)},o.default.createElement(d.default,(0,r.default)({type:"checkbox",icon:o.default.createElement("span",{className:t.icon}),classes:{root:(0,c.default)(t.switchBase,t["color".concat((0,s.capitalize)(n))]),checked:t.checked,disabled:t.disabled},checkedIcon:o.default.createElement("span",{className:(0,c.default)(t.icon,t.iconChecked)})},i)),o.default.createElement("span",{className:t.bar}))}t.styles=u,b.defaultProps={color:"secondary"};var m=(0,i.default)(u,{name:"MuiSwitch"})(b);t.default=m},397:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return s})),a.d(t,"d",(function(){return d})),a.d(t,"e",(function(){return b}));var n=a(0),r=a(400),l=a(379),o=a(94);const c=()=>{const e=Object(o.b)(),t=Object(o.c)("loaded"),a=Object(n.useCallback)(()=>e({type:"savePoint"}),[e]),r=Object(n.useCallback)(()=>e({type:"undo"}),[e]),l=Object(n.useCallback)(()=>e({type:"commit"}),[e]);return Object(n.useEffect)(()=>{a()},[t]),{savePoint:a,undo:r,commit:l}},i=()=>{const e=Object(o.b)();return{setName:Object(n.useCallback)(t=>e({type:"setName",name:t.target.value}),[e]),setDescription:Object(n.useCallback)(t=>e({type:"setDescription",description:t.target.value}),[e]),toggleState:Object(n.useCallback)(()=>e({type:"toggleEnabled"}),[e]),toggleZone:Object(n.useCallback)(t=>e({type:"toggleZone",zone:t}),[e]),toggleDevice:Object(n.useCallback)(t=>e({type:"toggleDevice",device:t}),[e])}},s=()=>{const e=Object(o.b)(),[t,a]=Object(n.useState)(!1),r=Object(n.useCallback)((t,n)=>{e({type:"setOverride",mode:t,temperature:n}),a(!0)},[e]),l=Object(n.useCallback)(t=>{e({type:"clearOverride",mode:t}),a(!0)},[e]),c=Object(n.useCallback)((e,t)=>{0===t?l(e):r(e,t)},[e]);return Object(n.useEffect)(()=>{a(!1)},[]),{isDirty:t,setOverride:r,clearOverride:l,updateOverride:c}},d=()=>{const[e,t]=Object(n.useState)(!1),a=Object(o.b)(),r=Object(n.useCallback)(e=>{a({type:"selectDay",day:e})},[a]),l=Object(o.c)("selectedDay"),c=Object(o.c)("setPoint"),i=Object(n.useCallback)((e,n)=>{null!=n&&n.length>0&&(t(!0),a({type:"copyDays",source:e,targets:n}))},[a]),s=Object(n.useCallback)(e=>{t(!0),a({type:"removeSetPoint",index:e})},[a]),d=Object(n.useCallback)(e=>{a({type:"loadSetPoint",setPoint:e})},[a]),u=Object(n.useCallback)(e=>{a({type:"newSetPoint",day:e})},[a]),b=Object(n.useCallback)(e=>{-1===e.index?a({type:"addSetPoint",setPoint:e}):a({type:"updateSetPoint",setPoint:e})},[a]),m=Object(n.useCallback)(e=>a({type:"setStart",start:e}),[a]),p=Object(n.useCallback)(e=>a({type:"setTargetTemperature",temperature:parseFloat(e.target.value)}),[a]);return Object(n.useEffect)(()=>{t(!1)},[]),{setDirty:t,isDirty:e,selectedDay:l,setPoint:c,copyDays:i,removeSetPoint:s,loadSetPoint:d,newSetPoint:u,selectDay:r,saveSetPoint:b,setStart:m,setTargetTemperature:p}};let u=!1;const b=(e,t=!0)=>{const a=Object(o.b)(),c=Object(o.c)("plan"),i=Object(o.c)("loaded"),s=Object(o.c)("dirty");if(!i||!t)if(null!=e&&"new"!==e||u){if(!u)throw l.b.fetchPlanById(e).then(e=>{u=!0,a({type:"loadPlan",plan:e})})}else u=!0,a({type:"loadPlan",plan:{id:r(),enabled:!1,name:"",zones:[],devices:[],schedule:[],overrides:void 0}});return Object(n.useEffect)(()=>()=>{u=!1},[e,t]),{plan:c,isDirty:s,loaded:i}}},398:function(e,t,a){"use strict";var n=a(384);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),l=(0,n(a(386)).default)(r.default.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");t.default=l},400:function(e,t,a){var n,r,l=a(412),o=a(413),c=0,i=0;e.exports=function(e,t,a){var s=t&&a||0,d=t||[],u=(e=e||{}).node||n,b=void 0!==e.clockseq?e.clockseq:r;if(null==u||null==b){var m=l();null==u&&(u=n=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==b&&(b=r=16383&(m[6]<<8|m[7]))}var p=void 0!==e.msecs?e.msecs:(new Date).getTime(),f=void 0!==e.nsecs?e.nsecs:i+1,v=p-c+(f-i)/1e4;if(v<0&&void 0===e.clockseq&&(b=b+1&16383),(v<0||p>c)&&void 0===e.nsecs&&(f=0),f>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");c=p,i=f,r=b;var g=(1e4*(268435455&(p+=122192928e5))+f)%4294967296;d[s++]=g>>>24&255,d[s++]=g>>>16&255,d[s++]=g>>>8&255,d[s++]=255&g;var y=p/4294967296*1e4&268435455;d[s++]=y>>>8&255,d[s++]=255&y,d[s++]=y>>>24&15|16,d[s++]=y>>>16&255,d[s++]=b>>>8|128,d[s++]=255&b;for(var h=0;h<6;++h)d[s+h]=u[h];return t||o(d)}},401:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(3)),l=n(a(7)),o=n(a(4)),c=n(a(0)),i=(n(a(2)),n(a(5))),s=n(a(31)),d=n(a(6)),u=n(a(40)),b=a(18),m=function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-14,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-14},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}};function p(e){e.checked;var t,a=e.classes,n=e.className,s=e.control,d=e.disabled,m=(e.inputRef,e.label),p=e.labelPlacement,f=e.muiFormControl,v=(e.name,e.onChange,e.value,(0,o.default)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","muiFormControl","name","onChange","value"])),g=d;void 0===g&&void 0!==s.props.disabled&&(g=s.props.disabled),void 0===g&&f&&(g=f.disabled);var y={disabled:g};return["checked","name","onChange","value","inputRef"].forEach((function(t){void 0===s.props[t]&&void 0!==e[t]&&(y[t]=e[t])})),c.default.createElement("label",(0,r.default)({className:(0,i.default)(a.root,(t={},(0,l.default)(t,a["labelPlacement".concat((0,b.capitalize)(p))],"end"!==p),(0,l.default)(t,a.disabled,g),t),n)},v),c.default.cloneElement(s,y),c.default.createElement(u.default,{component:"span",className:(0,i.default)(a.label,(0,l.default)({},a.disabled,g))},m))}t.styles=m,p.defaultProps={labelPlacement:"end"};var f=(0,d.default)(m,{name:"MuiFormControlLabel"})((0,s.default)(p));t.default=f},408:function(e,t,a){"use strict";var n=a(384);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),l=(0,n(a(386)).default)(r.default.createElement("path",{d:"M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");t.default=l},412:function(e,t){var a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(a){var n=new Uint8Array(16);e.exports=function(){return a(n),n}}else{var r=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255;return r}}},413:function(e,t){for(var a=[],n=0;n<256;++n)a[n]=(n+256).toString(16).substr(1);e.exports=function(e,t){var n=t||0,r=a;return[r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]]].join("")}},417:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return l})),function(e){e.TargetTemperature="target_temperature",e.MeasureTemperature="measure_temperature",e.ThermostatOverride="thermostat_override"}(n||(n={}));const r=4,l=35},467:function(e,t,a){"use strict";a.r(t);var n=a(50),r=a(17),l=a(408),o=a.n(l),c=a(398),i=a.n(c),s=a(0),d=a.n(s),u=a(25),b=a(64),m=a(380),p=a(385),f=a(382),v=a(151),g=a.n(v),y=a(149),h=a.n(y),O=a(417),j=a(91),E=a(388);var w=Object(r.withStyles)(e=>({planOverride:{marginBottom:2*e.spacing.unit}}))(e=>d.a.createElement(s.Fragment,null,d.a.createElement("div",{className:e.classes.planOverride},d.a.createElement(g.a,{style:{marginLeft:0},control:d.a.createElement(h.a,{checked:e.enabled,onChange:(t,a)=>{e.setOverride(e.mode,a?0===e.targetTemperature?16:e.targetTemperature:0)}}),label:e.text,labelPlacement:"end"}),d.a.createElement(E.a,{label:Object(j.a)("plan.target.label"),placeholder:Object(j.a)("plan.target.placeholder"),disabled:!e.enabled,hidden:!e.enabled,type:"number",InputProps:{inputProps:{min:O.b,max:O.a,step:.5}},value:e.targetTemperature,onChange:t=>{e.setOverride(e.mode,parseFloat(t.target.value))}})))),k=a(387),C=a(383),x=a(397);t.default=Object(u.f)(Object(r.withStyles)(e=>({resetPadding:{paddingBottom:100,paddingLeft:0,paddingRight:0}}))(e=>{const{history:t,classes:a}=e,{plan:r}=Object(x.e)(e.match.params.id),{isDirty:l,updateOverride:c}=Object(x.b)(),{undo:s,commit:u}=Object(x.a)();const v=e=>{const t=null!=r.overrides?r.overrides[b.b[e]]||r.overrides[e]:null;return{mode:e,enabled:null!=t&&0!==t.targetTemperature,targetTemperature:null!=t?t.targetTemperature:0}};return d.a.createElement(C.a,null,{header:d.a.createElement(m.a,null,{title:Object(j.a)("overrides.title"),button:d.a.createElement(f.b,{first:!0,onClick:function(){s(),t.replace({pathname:`/plans/${r.id}`,state:!0})},icon:l?d.a.createElement(i.a,null):d.a.createElement(o.a,null)}),actions:d.a.createElement(d.a.Fragment,null,l&&d.a.createElement(n.a,{color:"inherit",onClick:function(){u(),t.replace({pathname:`/plans/${r.id}`,state:!0})}},Object(j.a)("schedule.save")))}),paddingTop:50,body:d.a.createElement("div",{className:a.resetPadding},d.a.createElement(k.a,{text:Object(j.a)("overrides.section")}),d.a.createElement(p.a,{text:Object(j.a)("overrides.text")}),d.a.createElement(w,Object.assign({text:Object(j.a)("overrides.athome"),setOverride:c},v(b.b.DayAtHome))),d.a.createElement(w,Object.assign({text:Object(j.a)("overrides.away"),setOverride:c},v(b.b.DayAway))),d.a.createElement(w,Object.assign({text:Object(j.a)("overrides.sleeping"),setOverride:c},v(b.b.Sleep))),d.a.createElement(w,Object.assign({text:Object(j.a)("overrides.holiday"),setOverride:c},v(b.b.Holiday))),d.a.createElement(w,Object.assign({text:Object(j.a)("overrides.outofseason"),setOverride:c},v(b.b.OutOfSeason))))})}))}}]);
//# sourceMappingURL=https://raw.githubusercontent.com/mskg/homey-heating/release/v1.2.2-rc8/settings/9.js.map