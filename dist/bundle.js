!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(7);const r=document.querySelector("#sets"),o={setMain(t){const e=document.createElement("div"),n=document.createElement("div"),o=document.createElement("h1"),i=document.createElement("div"),a=document.createElement("button"),s=document.createElement("div"),c=document.createElement("input"),l=document.createElement("div");c.setAttribute("id","reminder-input"),e.setAttribute("class","set"),e.setAttribute("id",t),o.setAttribute("contenteditable",!0),n.setAttribute("class","set-title"),o.textContent="Name this reminder",i.setAttribute("class","control"),a.setAttribute("id","create-reminder-btn"),a.textContent="Add new",s.setAttribute("class","list"),n.appendChild(o),i.appendChild(a),i.appendChild(c),r.appendChild(e),e.appendChild(n),e.appendChild(i),e.appendChild(s),l.setAttribute("class","a-reminder"),l.textContent="default",s.appendChild(l)},setTask(t,e){const n=document.createElement("div");n.setAttribute("class","a-reminder"),n.textContent=t,e.appendChild(n)},setList(t,e){const n=new f(t),r=e.previousElementSibling.previousElementSibling.firstElementChild.textContent;console.log(r),e.children.length?Array.prototype.slice.call(e.children).forEach(t=>{n.handleTask(new m(r,t.innerText))}):localStorage.removeItem(t)},setRebuild(t){let e,n,o=Object.keys(localStorage),i=0;try{for(;e=o[i];i++){var a=0;const t=localStorage.getItem(e);n=JSON.parse(t);const o=document.createElement("div"),i=document.createElement("div"),s=document.createElement("h1"),c=document.createElement("div"),l=document.createElement("button"),d=document.createElement("div"),u=document.createElement("input");for(u.setAttribute("id","reminder-input"),o.setAttribute("class","set"),o.setAttribute("id",e),s.setAttribute("contenteditable",!0),i.setAttribute("class","set-title"),s.textContent=n[a].title,c.setAttribute("class","control"),l.setAttribute("id","create-reminder-btn"),l.textContent="Add new",d.setAttribute("class","list"),i.appendChild(s),c.appendChild(l),c.appendChild(u),r.appendChild(o),o.appendChild(i),o.appendChild(c),o.appendChild(d);a<n.length;a++)this.setTask(n[a].task,d)}}catch(t){return!1}}};n.d(e,"SetModel",function(){return f}),n.d(e,"Task",function(){return m});const i=document.querySelector("#name-setting-btn"),a=document.querySelector(".modal-parent"),s=document.querySelector(".modal"),c=document.querySelector("#name-setting-input"),l=document.querySelector(".main-interface"),d=document.querySelector("#create-set-btn"),u=(document.querySelector("#create-reminder-btn"),document.querySelector("#sets")),p=function(){return{validateName(){const t=c.value,e=t.length;if(""===t||e<5)alert("You're name should be at least 5 characters to 10 characters long");else{if(!(e>10))return localStorage.setItem("username",t),s.setAttribute("style","width:30%;opacity:0"),a.style.opacity="0",setTimeout(()=>{a.style.display="none"},600),void h.setUI();alert("You're name must only be at least 10 characters long")}}}}();function f(t){this.setID=t,this.tasks=[]}function m(t,e){this.title=t,this.task=e}f.prototype.handleTask=function(t){return this.tasks.push(t),localStorage.setItem(this.setID,JSON.stringify(this.tasks)),this},f.prototype.selectedSet=function(){console.log(this)},f.loadSet=function(){o.setRebuild()};const h=function(){return{checkUser(){localStorage.getItem("username")&&(a.style.display="none",this.setUI(),f.loadSet())},setUI(){const t=new Date;document.querySelector("#date-string").innerText=t.toDateString();const e=document.querySelector("#date-time");setInterval(()=>{e.innerText=(new Date).toLocaleTimeString()},1e3);return document.querySelector("#greet").innerText=`Welcome!, ${localStorage.getItem("username")}`,void setTimeout(()=>{l.style.display="block"},800)},controlID(){let t=u.children.length;return t+=1},validateInput(t){const e=t.replace(/^\s\s*/,"").replace(/\s\s*$/,"");return!!(e&&e.length>5)},initTask(t){const[e,n,r]=t,i=e.target.parentElement.parentElement.id;e.target.parentElement.previousElementSibling.firstElementChild.textContent;this.validateInput(n.value)?(o.setTask(n.value,r),o.setList(i,r),n.style.border="none"):n.style.border="1px solid red"},initRemoveTask(t){const[e,n,r]=t;r.removeChild(e.target),o.setList(n.id,r)}}}();h.checkUser(),d.addEventListener("click",()=>{const t=h.controlID();o.setMain(t)}),u.addEventListener("click",t=>{if(t.target&&"create-reminder-btn"===t.target.id){const e=[t,t.target.nextElementSibling,t.target.parentElement.nextElementSibling];h.initTask(e)}else if(t.target&&"a-reminder"===t.target.className){const e=[t,t.target.parentElement.parentElement,t.target.parentElement];h.initRemoveTask(e)}}),i.addEventListener("click",()=>{p.validateName()})},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),c=null,l=0,d=[],u=n(1);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(v(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(v(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function f(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function m(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),d.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function h(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=d.indexOf(t);e>=0&&d.splice(e,1)}function b(t){var e=document.createElement("style");return t.attrs.type="text/css",g(e,t.attrs),m(t,e),e}function g(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function v(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var a=l++;n=c||(c=b(e)),r=w.bind(null,n,a,!1),o=w.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",g(e,t.attrs),m(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){h(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=f(t,e);return p(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}t&&p(f(t,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var x,y=(x=[],function(t,e){return x[t]=e,x.filter(Boolean).join("\n")});function w(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e,n){t.exports=n.p+"bedda3fe3d7a158b94079c6705f65e72.png"},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,e,n){var r=n(5);(t.exports=n(4)(!1)).push([t.i,"*{\r\n\tbox-sizing: content-box;\r\n}\r\nbody{\r\n   -moz-transition: all .5s ease;\r\n   -webkit-transition: all .5s ease;\r\n   -o-transition: all .5s ease;\r\n   transition: all .5s ease;\r\n\r\n}\r\nhtml{\r\n   background: url(\"https://source.unsplash.com/1600x900/daily?sky\") no-repeat center center fixed; \r\n  -webkit-background-size: cover;\r\n  -moz-background-size: cover;\r\n  -o-background-size: cover;\r\n  background-size: cover;\r\n}\r\ninput{\r\n    color: #000000;\r\n    padding: 8px;\r\n}\r\n.modal-parent{\r\n    min-height: 500px;\r\n    background: rgba(14, 14, 14, 0.38);\r\n    transition: opacity .9s ease-in;\r\n}\r\n\r\n.modal{\r\n\tmargin: 0 auto;\r\n    margin-top: 120px;\r\n    max-width: 600px;\r\n    text-align: center;\r\n    font-family: 'Segoe UI';\r\n    min-height: 500px;\r\n    height: 100%;\r\n    width: 100%;\r\n   \ttransition: width .5s cubic-bezier(0.74, 0.22, 0.09, 0.81), opacity .6s ease-in;\r\n}\r\n\r\n.contain-header h1, .greeting-header h1{\r\n\tfont-family: 'Segoe UI';\r\n\tfont-weight: lighter;\r\n    font-size: 40px;\r\n    color: #ffffff;\r\n}\r\n.modal .contain-header h1{\r\n    padding: 25px;\r\n}\r\n\r\n.modal-body{\r\n\tmax-width: 600px;\r\n    width: 100%;\r\n}\r\n\r\n.modal-body input[type=\"text\"]{\r\n\tmargin-top: 35px;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    padding: 10px;\r\n    border: 0;\r\n    text-align: center;\r\n    background: transparent;\r\n    border-bottom: 1px solid #ffffff;\r\n\toutline-width: thin;\r\n    outline-color: rgba(255, 255, 255, 0.12);\r\n}\r\n\r\n.modal-body .btn-contain{\r\n    margin: 70px;\r\n}\r\n\r\n.default-btn{\r\n  \toutline-color: #0c0c0c;\r\n  \tbackground: #ff533d;\r\n  \tborder: 0;\r\n    color: #ffffff;\r\n    font-family: 'Segoe UI';\r\n}\r\n\r\n#create-set-btn{\r\n    max-width: 90px;\r\n    width: 100%;\r\n    padding: 10px;\r\n    margin-top: 20px;\r\n}\r\n\r\n\r\n\r\n#name-setting-btn{\r\n  \tmax-width: 150px;\r\n  \theight: 35px;\r\n    text-shadow: 1px 1px 4px black;\r\n    font-size: 17px;\r\n}\r\n\r\n.small-data-display{\r\n\tcolor: #ffffff;\r\n\tfont-family: 'Segoe UI'\r\n}\r\n\r\n.setting-display{\r\n    background-image: url("+r(n(3))+");\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    width: 40px;\r\n    height: 40px;\r\n    float: right;\r\n    position: relative;\r\n    top: -90px;\r\n}\r\n\r\n.setting-display:hover{\r\n  cursor: pointer;\r\n}\r\n\r\n.main-interface{\r\n\tdisplay: none;\r\n\tmargin: 5px;\r\n}\r\n\r\n.set{\r\n    margin: 10px;\r\n    vertical-align: top;\r\n    max-width: 350px;\r\n    padding: 25px;\r\n    color: #ffffff;\r\n    font-family: 'Segoe UI';\r\n    margin-top: 20px;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n    background-color: rgba(0, 0, 0, 0.43);\r\n}\r\n\r\n.set-title h1{\r\n  font-size: 20px;\r\n}\r\n\r\n.list{\r\n  cursor: pointer;\r\n}\r\n.a-reminder{\r\n    padding: 5px;\r\n    margin: 5px;\r\n    transition: all 0.5s linear;\r\n    opacity: 0;\r\n}\r\n.a-reminder:hover{\r\n    outline: 1px solid rgba(156, 156, 156, 0.16);\r\n\r\n}\r\n.a-reminder:not(:empty){    \r\n    opacity: 1;\r\n}\r\n.control{\r\n    margin: 5px;\r\n    margin-bottom: 20px;\r\n}\r\n#create-reminder-btn{\r\n    background-color: rgba(80,80,80,.2);\r\n    -webkit-box-shadow: -1px 1px 6pt 0 #101010;\r\n    box-shadow: -1px 1px 6pt 0 #101010;\r\n    border: 0;\r\n    font-size: 17px;\r\n    outline: 0;\r\n    margin-right: 10px;\r\n    color: #ffffff;\r\n    padding: 10px;\r\n}\r\n#create-reminder-btn:hover{\r\n    background-color: rgba(12, 12, 12, 0.06);\r\n    cursor: pointer;\r\n}",""])},function(t,e,n){var r=n(6);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(t.exports=r.locals)}]);
//# sourceMappingURL=bundle.js.map