(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{149:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c.default}});var c=n(a(394))},151:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c.default}});var c=n(a(401))},378:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(377);function c(e,t,a=null){return Object(n.b)(this,void 0,void 0,(function*(){return yield new Promise((n,c)=>{Homey.api(e,t,a,(e,t)=>{e?c(e):n(t)})})}))}},379:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i}));var n=a(377),c=a(19),l=a(378);const o=e=>Object(n.b)(void 0,void 0,void 0,(function*(){const t=Object.assign({},e);return t.zones&&0!==t.zones.length||(t.zones=void 0),t.devices&&0!==t.devices.length||(t.devices=void 0),yield Object(l.a)("PUT",`/plans/${e.id}`,t)})),r={fetchPlans:()=>Object(n.b)(void 0,void 0,void 0,(function*(){const e=yield Object(l.a)("GET","/plans");return Object(c.sortBy)(Object(c.map)(e,e=>(e.zones=e.zones||[],e.devices=e.devices||[],e)),e=>e.name)})),fetchPlanById:e=>Object(n.b)(void 0,void 0,void 0,(function*(){const t=yield Object(l.a)("GET",`/plans/${e}`);if(null==t)throw new Error(`Plan ${e} not found.`);return t.zones=t.zones||[],t.devices=t.devices||[],t})),fetchSchedule:()=>Object(n.b)(void 0,void 0,void 0,(function*(){const e=yield Object(l.a)("GET","/schedule");return e.temperatures=Object(c.sortBy)(e.temperatures,[e=>e.device.name]),e})),updatePlan:o,removePlan:e=>Object(n.b)(void 0,void 0,void 0,(function*(){return yield Object(l.a)("DELETE",`/plans/${e}`)})),togglePlanState:e=>Object(n.b)(void 0,void 0,void 0,(function*(){return e.enabled=!e.enabled,yield o(e),!0}))},i={fetchMode:()=>Object(n.b)(void 0,void 0,void 0,(function*(){return(yield Object(l.a)("GET","/mode")).mode})),setMode:e=>Object(n.b)(void 0,void 0,void 0,(function*(){return yield Object(l.a)("PUT","/mode",{mode:e})}))}},380:function(e,t,a){"use strict";var n=a(146),c=a.n(n),l=a(17),o=a(147),r=a.n(o),i=a(40),s=a.n(i),d=a(0),u=a.n(d);t.a=Object(l.withStyles)(e=>({appBar:{},grow:{flexGrow:1},buttons:{display:"flex"},toolbar:{alignItems:"center",justifyContent:"space-between"}}))(e=>{const{classes:t}=e,{button:a,title:n,actions:l,subBar:o}=e.children||{button:null,title:null,actions:null,subBar:null};return u.a.createElement(d.Fragment,null,u.a.createElement(c.a,{position:"absolute",color:"primary",className:t.appBar},u.a.createElement(r.a,{className:t.toolbar},e.button||a,u.a.createElement(s.a,{variant:"h6",color:"inherit",noWrap:!0},e.title||n),u.a.createElement("div",{className:t.grow}),null!=l&&u.a.createElement("div",{className:t.buttons},l)),null!=o&&o))})},381:function(e,t,a){"use strict";var n=a(17),c=a(0),l=a.n(c);t.a=Object(n.withStyles)(e=>({inputContainer:{width:"100%",paddingLeft:2*e.spacing.unit,paddingRight:3*e.spacing.unit}}))(e=>l.a.createElement("div",{className:e.classes.inputContainer},e.children))},382:function(e,t,a){"use strict";var n=a(377),c=a(50),l=a(17),o=a(148),r=a.n(o),i=a(393),s=a.n(i),d=a(0),u=a.n(d),b=a(25),m=a(91),f=a(92);function g(e){var{innerRef:t}=e,a=Object(n.d)(e,["innerRef"]);return a.to.toString().match(/https/)?u.a.createElement("a",Object.assign({onClick:()=>Homey.openURL(a.to.toString())},a),a.children):u.a.createElement(f.b,Object.assign({},a))}var p=e=>u.a.createElement(c.n,Object.assign({},e,{component:g}),e.children);a.d(t,"a",(function(){return v})),a.d(t,"b",(function(){return E}));const h=e=>({text:{padding:2*e.spacing.unit,paddingBottom:0},version:{padding:2*e.spacing.unit,paddingTop:0},normal:{},selected:{color:e.palette.primary.main},otherButton:{},firstButton:{marginLeft:-12}}),v=e=>{const[t,a]=u.a.useState(!1);return u.a.createElement(u.a.Fragment,null,u.a.createElement(y,{open:t,onClose:()=>{a(!1)}}),u.a.createElement(E,{first:!0,onClick:()=>{a(!0)},icon:u.a.createElement(s.a,null)}))},y=Object(b.f)(Object(l.withStyles)(h)(e=>{const{classes:t}=e,a=[{type:"entry",to:"/",text:Object(m.a)("menu.plans")},{to:"/temperatures",text:Object(m.a)("menu.temperatures")},{to:"/schedules",text:Object(m.a)("menu.schedules")},{to:"/settings",text:Object(m.a)("menu.settings")},{to:"https://homey-heating.mskg.app",text:Object(m.a)("menu.help")}];return u.a.createElement(r.a,{open:e.open,onClose:e.onClose},u.a.createElement(c.v,{className:t.text,variant:"h5",gutterBottom:!0},Object(m.a)("menu.title")),u.a.createElement(c.v,{className:t.version,variant:"body2",color:"textSecondary",gutterBottom:!0},"Version ","1.2.3-rc7"," (","1209",")"),u.a.createElement(c.h,null),u.a.createElement(c.m,null,a.map(a=>"Divider"===a.type?u.a.createElement(c.h,null):u.a.createElement(p,{key:a.to,to:a.to,disabled:e.match.url===a.to,button:!0},u.a.createElement(c.q,{primary:a.text,classes:{primary:e.match.url!==a.to?t.normal:t.selected}})))))})),E=Object(l.withStyles)(h)(e=>{const{classes:t,first:a,icon:l}=e,o=Object(n.d)(e,["classes","first","icon"]);return u.a.createElement(c.j,Object.assign({className:a?t.firstButton:t.otherButton,color:"inherit"},o),l)})},383:function(e,t,a){"use strict";var n=a(17),c=a(0),l=a.n(c);t.a=Object(n.withStyles)(e=>({root:{webkitOverflowScrolling:"touch",display:"flex",flexFlow:"column",height:"100vh",width:"100vw",backgroundColor:"#fff"},body:{flex:"1 0 100%",margin:0,maxWidth:"100%",overflowY:"scroll"}}))(e=>{const{classes:t}=e,{header:a,body:n,paddingTop:c,paddingBottom:o}=e.children,r=o||"auto";return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:t.root},a,l.a.createElement("div",{className:t.body,style:{paddingTop:c,paddingBottom:r}},n)))})},385:function(e,t,a){"use strict";var n=a(377),c=a(17),l=a(40),o=a.n(l),r=a(0),i=a.n(r);t.a=Object(c.withStyles)(e=>({text:{paddingLeft:2*e.spacing.unit,paddingRight:2*e.spacing.unit}}))(e=>{const{classes:t,text:a}=e,c=Object(n.d)(e,["classes","text"]);return i.a.createElement(o.a,Object.assign({className:t.text,color:"textSecondary"},c),a)})},387:function(e,t,a){"use strict";var n=a(377),c=a(17),l=a(40),o=a.n(l),r=a(0),i=a.n(r);t.a=Object(c.withStyles)(e=>({headline:{marginTop:4*e.spacing.unit,paddingLeft:2*e.spacing.unit,paddingRight:2*e.spacing.unit}}))(e=>{const{classes:t,text:a}=e,c=Object(n.d)(e,["classes","text"]);return i.a.createElement(o.a,Object.assign({className:t.headline,variant:"h5",color:"textSecondary",gutterBottom:!0},c),a)})},388:function(e,t,a){"use strict";var n=a(377),c=a(150),l=a.n(c),o=a(0),r=a.n(o),i=a(381);t.a=e=>{var{classes:t}=e,a=Object(n.d)(e,["classes"]);return r.a.createElement(i.a,null,r.a.createElement(l.a,Object.assign({fullWidth:!0,margin:"normal"},a)))}},389:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(377),c=a(19),l=a(378);const o={fetchHeatingDevices:()=>Object(n.b)(void 0,void 0,void 0,(function*(){const e=yield Object(l.a)("GET","/devices"),t=Object(c.sortBy)(e,"name").reduce((e,t,a)=>(e[a]=t,e[t.id]=t,e),{});return t.length=e.length,t}))}},390:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(377),c=a(19),l=a(378);const o={fetchHeatingZones:()=>Object(n.b)(void 0,void 0,void 0,(function*(){const e=yield Object(l.a)("GET","/zones"),t=Object(c.sortBy)(e,"name").reduce((e,t,a)=>(e[a]=t,e[t.id]=t,e),{});return t.length=e.length,t}))}},391:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(377),c=a(378);const l={fetchSettings:()=>Object(n.b)(void 0,void 0,void 0,(function*(){return yield Object(c.a)("GET","/settings")})),updateSettings:e=>Object(n.b)(void 0,void 0,void 0,(function*(){return yield Object(c.a)("PUT","/settings",e)}))}},394:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var c=n(a(3)),l=n(a(4)),o=n(a(0)),r=(n(a(2)),n(a(5))),i=n(a(6)),s=a(18),d=n(a(155)),u=function(e){return{root:{display:"inline-flex",width:62,position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle"},icon:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},iconChecked:{boxShadow:e.shadows[2]},switchBase:{padding:0,height:48,width:48,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},checked:{transform:"translateX(14px)","& + $bar":{opacity:.5}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"& + $bar":{backgroundColor:e.palette.primary.main}}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"& + $bar":{backgroundColor:e.palette.secondary.main}}},disabled:{"& + $bar":{opacity:"light"===e.palette.type?.12:.1},"& $icon":{boxShadow:e.shadows[1]},"&$switchBase":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800],"& + $bar":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}}},bar:{borderRadius:7,display:"block",position:"absolute",zIndex:-1,width:34,height:14,top:"50%",left:"50%",marginTop:-7,marginLeft:-17,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}};function b(e){var t=e.classes,a=e.className,n=e.color,i=(0,l.default)(e,["classes","className","color"]);return o.default.createElement("span",{className:(0,r.default)(t.root,a)},o.default.createElement(d.default,(0,c.default)({type:"checkbox",icon:o.default.createElement("span",{className:t.icon}),classes:{root:(0,r.default)(t.switchBase,t["color".concat((0,s.capitalize)(n))]),checked:t.checked,disabled:t.disabled},checkedIcon:o.default.createElement("span",{className:(0,r.default)(t.icon,t.iconChecked)})},i)),o.default.createElement("span",{className:t.bar}))}t.styles=u,b.defaultProps={color:"secondary"};var m=(0,i.default)(u,{name:"MuiSwitch"})(b);t.default=m},395:function(e,t,a){"use strict";var n=a(389),c=a(379),l=a(391),o=a(377),r=a(0),i=a.n(r);const s=new Map,d="Loading...";function u(e,t){return(a=!1,n=!1)=>{const c=s.get(e);let[l,u]=[null,null];a&&([l,u]=i.a.useState(c!==d?c:null));const[b,m]=i.a.useState(!1);function f(a=!1){if(null==s.get(e)||a)throw s.set(e,d),function(e,t){return Object(o.b)(this,void 0,void 0,(function*(){try{t(yield e())}catch(e){t(()=>{throw e})}}))}(t,t=>{"function"==typeof t?s.set(e,t(s.get(e))):s.set(e,t)}).catch(e=>{m(!!n||(()=>{throw e}))})}return f(),Object(r.useEffect)(()=>()=>{s.delete(e)},[]),{[e]:a?l:c,[`set${e.charAt(0).toUpperCase()+e.slice(1)}`]:a?u:function(){0},[`load${e.charAt(0).toUpperCase()+e.slice(1)}`]:f,[`load${e.charAt(0).toUpperCase()+e.slice(1)}Failed`]:b}}}var b=a(390);a.d(t,"c",(function(){return m})),a.d(t,"a",(function(){return f})),a.d(t,"f",(function(){return g})),a.d(t,"d",(function(){return p})),a.d(t,"e",(function(){return h})),a.d(t,"b",(function(){return v}));const m=u("plans",c.b.fetchPlans),f=u("devices",n.a.fetchHeatingDevices),g=u("zones",b.a.fetchHeatingZones),p=u("scheduleInformation",c.b.fetchSchedule),h=u("settings",l.a.fetchSettings),v=u("mode",c.a.fetchMode)},398:function(e,t,a){"use strict";var n=a(384);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(0)),l=(0,n(a(386)).default)(c.default.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");t.default=l},401:function(e,t,a){"use strict";var n=a(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var c=n(a(3)),l=n(a(7)),o=n(a(4)),r=n(a(0)),i=(n(a(2)),n(a(5))),s=n(a(31)),d=n(a(6)),u=n(a(40)),b=a(18),m=function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-14,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-14},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}};function f(e){e.checked;var t,a=e.classes,n=e.className,s=e.control,d=e.disabled,m=(e.inputRef,e.label),f=e.labelPlacement,g=e.muiFormControl,p=(e.name,e.onChange,e.value,(0,o.default)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","muiFormControl","name","onChange","value"])),h=d;void 0===h&&void 0!==s.props.disabled&&(h=s.props.disabled),void 0===h&&g&&(h=g.disabled);var v={disabled:h};return["checked","name","onChange","value","inputRef"].forEach((function(t){void 0===s.props[t]&&void 0!==e[t]&&(v[t]=e[t])})),r.default.createElement("label",(0,c.default)({className:(0,i.default)(a.root,(t={},(0,l.default)(t,a["labelPlacement".concat((0,b.capitalize)(f))],"end"!==f),(0,l.default)(t,a.disabled,h),t),n)},p),r.default.cloneElement(s,v),r.default.createElement(u.default,{component:"span",className:(0,i.default)(a.label,(0,l.default)({},a.disabled,h))},m))}t.styles=m,f.defaultProps={labelPlacement:"end"};var g=(0,d.default)(m,{name:"MuiFormControlLabel"})((0,s.default)(f));t.default=g},462:function(e,t,a){"use strict";a.r(t);var n=a(377),c=a(50),l=a(151),o=a.n(l),r=a(17),i=a(149),s=a.n(i),d=a(398),u=a.n(d),b=a(97),m=a(0),f=a.n(m),g=a(25),p=a(395),h=a(391),v=a(380),y=a(385),E=a(388),j=a(381),O=a(382),w=a(387),x=a(91),k=a(383);t.default=Object(b.withSnackbar)(Object(g.f)(Object(r.withStyles)(e=>({}))(e=>{const{settings:t,setSettings:a,loadSettings:l}=Object(p.e)(!0),[r,i]=f.a.useState(!1);function d(e,a=null){const n=t[e];return null==n?a:n}const b=(e,t="value")=>n=>{const c=n.target[t];a(t=>Object.assign(Object.assign({},t),{[e]:c})),i(!0)};return f.a.createElement(k.a,null,{header:f.a.createElement(v.a,null,{title:Object(x.a)("settings.title"),button:f.a.createElement(f.a.Fragment,null,!r&&f.a.createElement(O.a,null),r&&f.a.createElement(O.b,{first:!0,onClick:()=>Object(n.b)(void 0,void 0,void 0,(function*(){yield l(),i(!1)})),icon:f.a.createElement(u.a,null)})),actions:f.a.createElement(f.a.Fragment,null,r&&f.a.createElement(c.a,{color:"inherit",onClick:()=>{h.a.updateSettings(t).then(t=>{e.enqueueSnackbar(Object(x.a)("settings.saved")),i(!1)})}},"save"))}),paddingTop:50,paddingBottom:50,body:f.a.createElement(f.a.Fragment,null,f.a.createElement(w.a,{text:Object(x.a)("settings.notifications.category")}),f.a.createElement(y.a,{text:Object(x.a)("settings.notifications.text")}),f.a.createElement(j.a,null,f.a.createElement(o.a,{control:f.a.createElement(s.a,{checked:!0===d("NotifyModeChange",!0),onChange:b("NotifyModeChange","checked")}),label:Object(x.a)("settings.notifications.NotifyModeChange"),labelPlacement:"end"})),f.a.createElement(j.a,null,f.a.createElement(o.a,{control:f.a.createElement(s.a,{checked:!0===d("NotifySetError",!0),onChange:b("NotifySetError","checked")}),label:Object(x.a)("settings.notifications.NotifySetError"),labelPlacement:"end"})),f.a.createElement(j.a,null,f.a.createElement(o.a,{control:f.a.createElement(s.a,{checked:!0===d("NotifySetSuccess",!0),onChange:b("NotifySetSuccess","checked")}),label:Object(x.a)("settings.notifications.NotifySetSuccess"),labelPlacement:"end"})),f.a.createElement(w.a,{text:Object(x.a)("settings.sentry.category")}),f.a.createElement(y.a,{text:Object(x.a)("settings.sentry.text")}),f.a.createElement(j.a,null,f.a.createElement(o.a,{control:f.a.createElement(s.a,{checked:!0===d("SentryEnabled",!0),onChange:b("SentryEnabled","checked")}),label:Object(x.a)("settings.enabled.label"),labelPlacement:"end"})),f.a.createElement(w.a,{text:Object(x.a)("settings.log.category")}),f.a.createElement(y.a,{text:Object(x.a)("settings.log.text")}),f.a.createElement(j.a,null,f.a.createElement(o.a,{control:f.a.createElement(s.a,{checked:!0===d("ConsoleReLogEnabled"),onChange:b("ConsoleReLogEnabled","checked")}),label:Object(x.a)("settings.enabled.label"),labelPlacement:"end"})),f.a.createElement(E.a,{label:Object(x.a)("settings.category.label"),placeholder:Object(x.a)("settings.category.placeholder"),required:!0===d("ConsoleReLogEnabled"),value:d("ConsoleReLogCategory",""),onChange:b("ConsoleReLogCategory")}),f.a.createElement(w.a,{text:Object(x.a)("settings.backup.title")}),f.a.createElement(y.a,{text:Object(x.a)("settings.backup.text")}),f.a.createElement(E.a,{label:Object(x.a)("settings.backup.label"),placeholder:Object(x.a)("settings.backup.placeholder"),multiline:!0,rowsMax:"10",value:d("Plans",""),onChange:b("Plans")}))})})))}}]);
//# sourceMappingURL=https://raw.githubusercontent.com/mskg/homey-heating/release/v1.2.3-rc7/settings/11.js.map