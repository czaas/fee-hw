!function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){e.exports=r(12)},function(e,t,r){!function(e,r){r(t)}(this,function(e){"use strict";var t=function(e,t){for(var r,n=[],a=[],o=arguments.length;o-- >2;)n[n.length]=arguments[o];for(;n.length;)if(Array.isArray(r=n.pop()))for(o=r.length;o--;)n[n.length]=r[o];else null!=r&&!0!==r&&!1!==r&&("number"==typeof r&&(r+=""),a[a.length]=r);return"string"==typeof e?{tag:e,data:t||{},children:a}:e(t,a)},r=function(e){function t(e,r,i){Object.keys(r||[]).map(function(s){var l=r[s],u=i?i+"."+s:s;"function"==typeof l?e[s]=function(e){var t=l(m,g,n("action",{name:u,data:e}).data,n);return null==t||"function"==typeof t.then?t:void a(m=o(m,n("update",t)),p)}:t(e[s]||(e[s]={}),l,u)})}function r(){a(m,p),n("loaded")}function n(e,t){return(v[e]||[]).map(function(e){var r=e(m,g,t,n);null!=r&&(t=r)}),t}function a(t,r){f=d(e.root||(e.root=document.body),f,h,h=n("render",r)(t,g))}function o(e,t){var r={};if("object"!=typeof t||Array.isArray(t))return t;for(var n in e)r[n]=e[n];for(var n in t)r[n]=t[n];return r}function i(e,t){if("string"==typeof e)r=document.createTextNode(e);else{for(var r=(t=t||"svg"===e.tag)?document.createElementNS("http://www.w3.org/2000/svg",e.tag):document.createElement(e.tag),n=0;n<e.children.length;)r.appendChild(i(e.children[n++],t));for(var n in e.data)"oncreate"===n?e.data[n](r):s(r,n,e.data[n])}return r}function s(e,t,r,n){if("key"===t);else if("style"===t)for(var a in o(n,r=r||{}))e.style[a]=r[a]||"";else{try{e[t]=r}catch(e){}"function"!=typeof r&&(r?e.setAttribute(t,r):e.removeAttribute(t))}}function l(e,t,r){for(var n in o(t,r)){var a=r[n],i="value"===n||"checked"===n?e[n]:t[n];"onupdate"===n&&a?a(e):a!==i&&s(e,n,a,i)}}function u(e){if(e&&(e=e.data))return e.key}function c(e,t,r){function n(){e.removeChild(t)}(r.data&&r.data.onremove||n)(t,n)}function d(e,t,r,n){if(null==r)t=e.insertBefore(i(n),t);else if(n.tag&&n.tag===r.tag){l(t,r.data,n.data);for(var a=n.children.length,o=r.children.length,s={},h=[],f={},m=0;m<o;m++)g=t.childNodes[m],h[m]=g,null!=(w=u(v=r.children[m]))&&(s[w]=[g,v]);for(var m=0,p=0;p<a;){var g=h[m],v=r.children[m],_=n.children[p];if(f[w=u(v)])m++;else{var b=u(_),y=s[b]||[];null==b?(null==w&&(d(t,g,v,_),p++),m++):(w===b?(d(t,y[0],y[1],_),m++):y[0]?(t.insertBefore(y[0],g),d(t,y[0],y[1],_)):d(t,g,null,_),p++,f[b]=_)}}for(;m<o;){var w=u(v=r.children[m]);null==w&&c(t,h[m],v),m++}for(var m in s){var P=(y=s[m])[1];f[P.data.key]||c(t,y[0],P)}}else n!==r&&(m=t,e.replaceChild(t=i(n),m));return t}for(var h,f,m={},p=e.view,g={},v={},_=-1,b=e.mixins||[];_<b.length;_++){var y=b[_]?b[_](e):e;null!=y.mixins&&y!==e&&(b=b.concat(y.mixins)),null!=y.state&&(m=o(m,y.state)),t(g,y.actions),Object.keys(y.events||[]).map(function(e){v[e]=(v[e]||[]).concat(y.events[e])})}"l"!==document.readyState[0]?r():addEventListener("DOMContentLoaded",r)},n=function(e,t){function r(r){for(var n,a={},o=0,i=e.view.length;o<i;o++){var s=e.view[o][0],l=[];n||r.replace(RegExp("*"===s?"."+s:"^"+s.replace(/\//g,"\\/").replace(/:([\w]+)/g,function(e,t){return l.push(t),"([-\\.\\w]+)"})+"/?$","g"),function(){for(var r=1;r<arguments.length-2;)a[l.shift()]=arguments[r++];n=s,t=e.view[o][1]})}return{match:n,params:a}}return{state:{router:r(location.pathname)},actions:{router:{match:function(e,t,n,a){return{router:a("route",r(n))}},go:function(e,t,r){history.pushState({},"",r),t.router.match(r.split("?")[0])}}},events:{loaded:function(e,t){function r(){t.router.match(location.pathname)}r(),addEventListener("popstate",r)},render:function(){return t}}}};e.h=t,e.app=r,e.Router=n})},function(e,t){"use strict";function r(e){var t=""+e,r="",n="";if(t.indexOf(".")){var a=t.split(".");r=a[1],n=a[0]}else n=t;for(var o=n.split("").reverse(),i=[],s=0;s<o.length;s++)0!==s&&s%3===0&&i.push(","),i.push(o[s]);var l=r?"."+r:"";return i.reverse().join("")+l}Object.defineProperty(t,"__esModule",{value:!0}),t.commaPlacer=r},function(e,t,r){"use strict";function n(e){var t=e.NavItems.sort(function(e,t){return e.order-t.order}).filter(function(t){return t.id!==e.activeNavId}).map(function(t){if(t.id!==e.activeNavId)return(0,a.h)("li",{onclick:function(){return e.updateMainNav(t.id)},class:""+(e.activeNavId===t.id,"")},(0,a.h)("a",null,t.name))}),r=e.mmenuOpen?44*t.length:0;return(0,a.h)("nav",{class:"header__mmenu",style:{height:r+"px"}},(0,a.h)("ul",{class:"mmenu"},t))}Object.defineProperty(t,"__esModule",{value:!0});var a=r(1);t.default=n},function(e,t,r){"use strict";function n(e){return(0,a.h)("nav",{class:"header__main-nav"},(0,a.h)("ul",{class:"header__main-nav__tabs tabs"},e.NavItems.sort(function(e,t){return e.order-t.order}).map(function(t){return(0,a.h)("li",{onclick:function(){return e.updateMainNav(t.id)},class:"tabs__tab "+(e.activeNavId===t.id?"tabs__tab--active":"")},(0,a.h)("a",null,t.name))})))}Object.defineProperty(t,"__esModule",{value:!0});var a=r(1);t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=[{name:"Dashboard",order:1,id:1,children:[{name:"Dashboard",order:1},{name:"Business Overview",order:2,default:!0},{name:"Schedule",order:3},{name:"Reports",order:4}]},{name:"Sign In",order:2,id:2,children:[{name:"Sign In",order:1},{name:"More items",order:2,default:!0},{name:"For Testing",order:3}]},{name:"Classes",order:3,id:3,children:[{name:"Classes",order:1},{name:"More items again",order:2,default:!0},{name:"Still Testing",order:3},{name:"Again",order:4}]},{name:"Workshops",order:4,id:4,children:[{name:"Workshops",order:1},{name:"Click me",order:2},{name:"Default Active",order:3,default:!0},{name:"Once again",order:4}]},{name:"Appointments",order:5,id:5,children:[{name:"Appointments",order:1},{name:"A test",order:2},{name:"For all tests",order:3,default:!0},{name:"And once again",order:4}]},{name:"Client Home",order:6,id:6,children:[{name:"Client Home",order:1},{name:"Click me",order:2,default:!0}]},{name:"Retail",order:7,id:7,children:[{name:"Retail",order:1},{name:"Buy Stuff",order:2,default:!0}]}];t.default=r},function(e,t,r){"use strict";function n(e){var t=e.activeChildren.map(function(t){var r=!1;return""==e.activeSubNav&&t.default?r=!0:e.activeSubNav===t.name&&(r=!0),(0,a.h)("li",{class:"subnav__item "+(r?"subnav__item--active":"")},(0,a.h)("a",{onclick:function(){return e.updateSubNav(t.name)}},t.name))});return(0,a.h)("nav",{class:"header__subnav subnav"},(0,a.h)("ul",{class:"subnav__inner"},t))}Object.defineProperty(t,"__esModule",{value:!0});var a=r(1);t.default=n},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),o=r(5),i=n(o),s=r(3),l=n(s),u=r(4),c=n(u),d=r(6),h=n(d),f=function(e){return(0,a.h)("header",{class:"header nav"},(0,a.h)("div",{class:"header__top"},(0,a.h)("div",{class:"header__logo"},"Urban Yogo"),(0,a.h)(c.default,{NavItems:i.default,updateMainNav:e.actions.updateMainNav,activeNavId:e.state.activeNavId}),(0,a.h)("div",{class:"header__mmenu-button",onclick:function(){return e.actions.toggleMmenu()}},(0,a.h)("svg",{width:"30",height:"30",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"},(0,a.h)("path",{d:"M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"})))),(0,a.h)(l.default,{NavItems:i.default,activeNavId:e.state.activeNavId,updateMainNav:e.actions.updateMainNav,mmenuOpen:e.state.mmenuOpen}),(0,a.h)(h.default,{activeSubNav:e.state.activeSubNav,activeChildren:i.default.filter(function(t){return t.id===e.state.activeNavId})[0].children,updateSubNav:e.actions.updateSubNav}))};t.default=f},function(e,t,r){"use strict";function n(e){var t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=[],n=72,a=0;e.prevYear.forEach(function(e){e>a&&(a=e)}),e.currentYear.forEach(function(e){e>a&&(a=e)});for(var s=0;s<e.currentYear.length;s++){var l=e.currentYear[s],u=e.prevYear[s],c=(0,o.h)("div",{class:"graph__item"},(0,o.h)("div",{class:"graph__item__bars"},(0,o.h)("div",{class:"graph__item__bars__bar graph__item__bars__bar--prev",value:"$"+(0,i.commaPlacer)(l),style:{height:Math.floor(l/a*n)+"px"}}),(0,o.h)("div",{class:"graph__item__bars__bar graph__item__bars__bar--current",value:"$"+(0,i.commaPlacer)(u),style:{height:Math.floor(u/a*n)+"px"}})),(0,o.h)("div",{class:"graph__item__month"},t[s]));r.push(c)}return(0,o.h)("div",{class:"graph"},r)}function a(e){var t=e.pricingOptions.filter(function(t){return t.ProgramID===parseInt(e.ProgramID,10)}),r={height:e.isVisible?20*(t.length+1)+1+"px":"0"};return(0,o.h)("div",{class:"card__bottom-sales__table-wrapper",style:r},(0,o.h)("table",{class:"card__bottom-sales__table",cellspacing:"0",cellpadding:"0"},(0,o.h)("tr",null,(0,o.h)("th",null,"Price Name"),(0,o.h)("th",null,"Current"),(0,o.h)("th",null,"1 - Year")),t.map(function(e){return(0,o.h)("tr",null,(0,o.h)("td",null,e.Name),(0,o.h)("td",null,"$",(0,i.commaPlacer)(e.Sales)),(0,o.h)("td",{class:"card__bottom-sales__table__multi-graph"}," "))})))}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),i=r(2),s=function(e){return(0,o.h)("div",{class:"card cards__card"},(0,o.h)("div",{class:"card__top"},(0,o.h)("h2",{class:"card__top__name"},e.program.Name),(0,o.h)("div",{class:"card__top__edit"})),(0,o.h)("p",{class:"card__graph-sales"},"Sales by month"),(0,o.h)(n,{currentYear:e.program.Sales.CurrentYear,prevYear:e.program.Sales.PreviousYear}),(0,o.h)("section",{class:"card__current-sales"},(0,o.h)("table",{class:"card__current-sales__table",cellspacing:"0",cellpadding:"0"},(0,o.h)("tbody",null,(0,o.h)("tr",null,(0,o.h)("th",null,"Total Monthly"),(0,o.h)("th",null,"Current"),(0,o.h)("th",null,"1 - Year")),(0,o.h)("tr",null,(0,o.h)("th",null,"Sales"),(0,o.h)("td",null,"$",(0,i.commaPlacer)(e.program.TotalMonthlySales)),(0,o.h)("td",null,(0,o.h)("img",{src:"/assets/spark_line.png"})))))),(0,o.h)("section",{class:"card__bottom-sales"},(0,o.h)(a,{pricingOptions:e.pricingOptions,ProgramID:e.program.ProgramID,isVisible:e.visiblePricingTables["id"+e.program.ProgramID]}),(0,o.h)("p",{class:"card__bottom-sales__table-toggle",onclick:function(){return e.togglePricingTable(e.program.ProgramID)}},e.visiblePricingTables["id"+e.program.ProgramID]?"less":"more")))};t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),a=r(2),o=function(e){var t=(0,a.commaPlacer)(e.program.TotalMonthlySales);return t.indexOf(".")===-1&&(t+=".00"),(0,n.h)("tr",null,(0,n.h)("td",null,e.program.Name,(0,n.h)("br",null),(0,n.h)("span",{onclick:function(){return e.togglePricingTable(e.program.ProgramID)}},e.state.visiblePricingTables["id"+e.program.ProgramID]?"less":"more")),(0,n.h)("td",null,"$",t),(0,n.h)("td",null,(0,a.commaPlacer)(e.program.MonthlyAttendance)," visits"))};t.default=o},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),o=r(8),i=n(o),s=r(9),l=n(s),u=function(e){return(0,a.h)("div",{class:"main-wrapper"},(0,a.h)("aside",{class:"main-wrapper__aside aside"},(0,a.h)("a",{class:"aside__button",onclick:function(){return e.actions.toggleForm(!0)}},(0,a.h)("img",{src:"/assets/plus_icon.png"})),"New Program"),(0,a.h)("main",{class:"main-wrapper__main main"},(0,a.h)("div",{class:"cards"},e.state.programs.map(function(t){return(0,a.h)(i.default,{program:t,pricingOptions:e.state.pricingOptions,togglePricingTable:e.actions.togglePricingTable,visiblePricingTables:e.state.visiblePricingTables})})),(0,a.h)("div",{class:"all-programs-wrapper"},(0,a.h)("table",{class:"all-programs"},(0,a.h)("tr",null,(0,a.h)("th",null,"All Programs"),(0,a.h)("th",null,"Monthly Sales"),(0,a.h)("th",null,"Monthly Attendance")),e.state.programs.map(function(t){return(0,a.h)(l.default,{togglePricingTable:e.actions.togglePricingTable,state:e.state,program:t})})))))};t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),a=["Count Series","Time Series","Membership"],o=["Classes","Appointments","Workshops","Outside","Inside","Gym"],i=function(e){function t(t){t&&t.preventDefault();var r=document.getElementById("programName").value;e.actions.newProgram.setProgramName(r)}function r(t){t&&t.preventDefault();var r=t.target.value;e.actions.newProgram.setOnlineScheduling(r)}function i(t){t&&t.preventDefault();var r=t.target.value;e.actions.newProgram.setDefaultCapacity(parseInt(r,10))}function s(t){t&&t.preventDefault();var r=t.target.value;e.state.tabsProgramIsOn.indexOf(r)===-1?e.actions.newProgram.addTab(r):e.actions.newProgram.removeTab(r)}var l=a.map(function(t){return(0,n.h)("a",{class:"new-program__form__button "+(e.state.programType===t?"new-program__form__button--active":""),onclick:function(){return e.actions.newProgram.setProgramType(t)}},t)}),u=o.map(function(t){return(0,n.h)("label",null,(0,n.h)("input",{name:t,checked:e.state.tabsProgramIsOn.indexOf(t)!==-1,type:"checkbox",value:t,onchange:s}),t)});return(0,n.h)("div",{class:"new-program "+(e.state.isOpen?"new-program--active":"new-program--hidden")},(0,n.h)("div",{class:"new-program__bg",onclick:function(){return e.actions.toggleForm(!1)}}),(0,n.h)("div",{class:"new-program__form",id:"form-container"},(0,n.h)("p",{style:{textAlign:"center"}},"Choose one program type"),(0,n.h)("div",{class:"new-program__form__part new-program__form__part--one new-program__form__part__inner"},l),(0,n.h)("div",{class:"disabled-until-state "+(""!==e.state.programType?"":"disabled-until-state--disabled"),"data-message":"Choose One Program Type"},(0,n.h)("div",{class:"new-program__form__part new-program__form__part--two"},(0,n.h)("form",{onsubmit:t,class:"new-program__form__part__inner"},(0,n.h)("label",{class:"new-program__form__part__name"},"Program Name",(0,n.h)("input",{type:"text",id:"programName",onchange:t,value:e.state.Name}),(0,n.h)("button",null,"Save")))),(0,n.h)("div",{class:"new-program__form__part new-program__form__part--two"},(0,n.h)("div",{class:"new-program__form__part__inner disabled-until-state "+(""!==e.state.Name?"":"disabled-until-state--disabled"),"data-message":"Enter Program Name"},(0,n.h)("form",{onchange:r},(0,n.h)("p",null,"Allow Online Scheduling?"),(0,n.h)("div",{class:"new-program__form__part__online-scheduling"},(0,n.h)("label",null,"Yes ",(0,n.h)("input",{type:"radio",name:"online-scheduling",value:"true",checked:e.state.onlineScheduling,onselect:r})),(0,n.h)("label",null,"No ",(0,n.h)("input",{type:"radio",name:"online-scheduling",value:"false",checked:!e.state.onlineScheduling,onselect:r})))),(0,n.h)("form",{class:"block-element"},(0,n.h)("label",{class:"new-program__form__part__name"},"Default Capactiy ",(0,n.h)("input",{type:"number",defaultValue:"10",onblur:i}))),(0,n.h)("form",null,"Tabs this program is on:",(0,n.h)("span",{class:"hint"},"Choose as many as you would like"),(0,n.h)("div",{class:"checkboxes block-element"},u)),(0,n.h)("form",null,(0,n.h)("a",{class:"new-program__form__button new-program__form__button--add",onclick:e.actions.addNewProgram},"Add New Program")))))))};t.default=i},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}r(13);var a=r(1);r(14);var o=r(7),i=n(o),s=r(10),l=n(s),u=r(11),c=n(u);(0,a.app)({root:document.getElementById("mount"),state:{programs:[{ProgramID:32,Name:"TEST",TotalMonthlySales:0,MonthlyAttendance:0,Sales:{CurrentYear:[0,0,0,0,0,0],PreviousYear:[0,0,0,0,0,0]}}],pricingOptions:[],visiblePricingTables:{},activeNavId:1,activeSubNav:"",mmenuOpen:!1,addNewProgram:{isOpen:!1,programType:"",Name:"",onlineScheduling:!0,capacity:10,tabsProgramIsOn:[]}},events:{loaded:function(e,t){fetch("https://api.myjson.com/bins/5bdb3").then(function(e){return e.json()}).then(function(e){t.updatePrograms(e)}),fetch("https://api.myjson.com/bins/47axv").then(function(e){return e.json()}).then(function(e){t.updatePricingOptions(e)})}},actions:{togglePricingTable:function(e,t,r){return e.visiblePricingTables["id"+r]=!e.visiblePricingTables["id"+r],e},updatePrograms:function(e,t,r){return e.programs=e.programs.concat(r),e},updatePricingOptions:function(e,t,r){return e.pricingOptions=e.pricingOptions.concat(r),e},updateMainNav:function(e,t,r){if(e.mmenuOpen&&t.toggleMmenu(!1),r!==e.activeNavId)return e.activeNavId=r,e.activeSubNav="",e},updateSubNav:function(e,t,r){if(r!==e.activeSubNav)return e.activeSubNav=r,e},toggleMmenu:function(e,t,r){return void 0!==r?e.mmenuOpen=r:e.mmenuOpen=!e.mmenuOpen,e},toggleForm:function(e,t,r){return void 0!==r?e.addNewProgram.isOpen=r:e.addNewProgram.isOpen=!e.addNewProgram.isOpen,e.addNewProgram.isOpen||(t.resetNewProgramForm(),document.getElementById("form-container").scrollTop=0),e},resetNewProgramForm:function(e,t){return e.addNewProgram={isOpen:e.addNewProgram.isOpen,programType:"",Name:"",onlineScheduling:!0,amountOfStudents:10,tabsProgramIsOn:[]},e},addNewProgram:function(e,t){var r=0;e.programs.forEach(function(e){e.ProgramID>0&&(r=e.ProgramID)});var n={ProgramID:r+1,Name:"",TotalMonthlySales:0,MonthlyAttendance:0,Sales:{CurrentYear:[0,0,0,0,0,0],PreviousYear:[0,0,0,0,0,0]}},a=Object.assign({},n,e.addNewProgram);t.updatePrograms([a]),t.toggleForm(!1)},newProgram:{setProgramType:function(e,t,r){return e.addNewProgram.programType=r,e},setProgramName:function(e,t,r){return e.addNewProgram.Name=r,e},setOnlineScheduling:function(e,t,r){return e.addNewProgram.onlineScheduling="true"===r,e},setDefaultCapacity:function(e,t,r){return e.addNewProgram.capacity=r,e},addTab:function(e,t,r){return e.addNewProgram.tabsProgramIsOn.push(r),e},removeTab:function(e,t,r){var n=e.addNewProgram.tabsProgramIsOn.indexOf(r);return e.addNewProgram.tabsProgramIsOn.splice(n,1),e}}},view:function(e,t){return(0,a.h)("div",{class:"app",style:{overflow:e.addNewProgram.isOpen?"hidden":"auto"}},(0,a.h)(i.default,{state:e,actions:t}),(0,a.h)(l.default,{state:e,actions:t}),(0,a.h)(c.default,{state:e.addNewProgram,actions:t}))}})},function(e,t){},function(e,t){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function r(e){return"string"!=typeof e&&(e=String(e)),e}function n(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return v.iterable&&(t[Symbol.iterator]=function(){return t}),t}function a(e){this.map={},e instanceof a?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function o(e){return e.bodyUsed?Promise.reject(new TypeError("Already read")):void(e.bodyUsed=!0)}function i(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function s(e){var t=new FileReader,r=i(t);return t.readAsArrayBuffer(e),r}function l(e){var t=new FileReader,r=i(t);return t.readAsText(e),r}function u(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}function c(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function d(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(v.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(v.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(v.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(v.arrayBuffer&&v.blob&&b(e))this._bodyArrayBuffer=c(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!v.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!y(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=c(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):v.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},v.blob&&(this.blob=function(){var e=o(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?o(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var e=o(this);if(e)return e;if(this._bodyBlob)return l(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(u(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},v.formData&&(this.formData=function(){return this.text().then(m)}),this.json=function(){return this.text().then(JSON.parse)},this}function h(e){var t=e.toUpperCase();return w.indexOf(t)>-1?t:e}function f(e,t){t=t||{};var r=t.body;if(e instanceof f){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new a(e.headers)),this.method=e.method,this.mode=e.mode,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new a(t.headers)),this.method=h(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function m(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),a=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(a))}}),t}function p(e){var t=new a;return e.split(/\r?\n/).forEach(function(e){var r=e.split(":"),n=r.shift().trim();if(n){var a=r.join(":").trim();t.append(n,a)}}),t}function g(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new a(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var v={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(v.arrayBuffer)var _=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],b=function(e){return e&&DataView.prototype.isPrototypeOf(e)},y=ArrayBuffer.isView||function(e){return e&&_.indexOf(Object.prototype.toString.call(e))>-1};a.prototype.append=function(e,n){e=t(e),n=r(n);var a=this.map[e];this.map[e]=a?a+","+n:n},a.prototype.delete=function(e){delete this.map[t(e)]},a.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},a.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},a.prototype.set=function(e,n){this.map[t(e)]=r(n)},a.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},a.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),n(e)},a.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),n(e)},a.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),n(e)},v.iterable&&(a.prototype[Symbol.iterator]=a.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];f.prototype.clone=function(){return new f(this,{body:this._bodyInit})},d.call(f.prototype),d.call(g.prototype),g.prototype.clone=function(){return new g(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new a(this.headers),url:this.url})},g.error=function(){var e=new g(null,{status:0,statusText:""});return e.type="error",e};var P=[301,302,303,307,308];g.redirect=function(e,t){if(P.indexOf(t)===-1)throw new RangeError("Invalid status code");return new g(null,{status:t,headers:{location:e}})},e.Headers=a,e.Request=f,e.Response=g,e.fetch=function(e,t){return new Promise(function(r,n){var a=new f(e,t),o=new XMLHttpRequest;o.onload=function(){var e={status:o.status,statusText:o.statusText,headers:p(o.getAllResponseHeaders()||"")};e.url="responseURL"in o?o.responseURL:e.headers.get("X-Request-URL");var t="response"in o?o.response:o.responseText;r(new g(t,e))},o.onerror=function(){n(new TypeError("Network request failed"))},o.ontimeout=function(){n(new TypeError("Network request failed"))},o.open(a.method,a.url,!0),"include"===a.credentials&&(o.withCredentials=!0),"responseType"in o&&v.blob&&(o.responseType="blob"),a.headers.forEach(function(e,t){o.setRequestHeader(t,e)}),o.send("undefined"==typeof a._bodyInit?null:a._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)}]);
//# sourceMappingURL=bundle.js.map