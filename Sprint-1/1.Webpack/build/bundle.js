(()=>{"use strict";var e,r,t,n,o,a,i,c,s,u,l,p,d,f,v={424:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(81),o=t.n(n),a=t(645),i=t.n(a)()(o());i.push([e.id,"#container {\r\n    width: 40%;\r\n    background-color: rgb(165, 165, 165);\r\n    height: 600px;\r\n    text-align: center;\r\n    border: 20px solid black;\r\n    border-radius: 20px;\r\n    margin: auto;\r\n  }\r\n\r\n  th,\r\n  td {\r\n    border: 1px solid black;\r\n    padding: 5px 15px;\r\n  }\r\n  table {\r\n    width: 100%;\r\n    margin: 0px auto;\r\n    border-collapse: collapse;\r\n  }",""]);const c=i},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t="",n=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),n&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),n&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(e,t,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);n&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function t(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function n(e,n){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=n.base?s[0]+n.base:s[0],l=a[u]||0,p="".concat(u," ").concat(l);a[u]=l+1;var d=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)r[d].references++,r[d].updater(f);else{var v=o(f,n);n.byIndex=c,r.splice(c,0,{identifier:p,updater:v,references:1})}i.push(p)}return i}function o(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;t.update(e=r)}else t.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);r[c].references--}for(var s=n(e,o),u=0;u<a.length;u++){var l=t(a[u]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=s}}},569:e=>{var r={};e.exports=function(e,t){var n=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,t)=>{e.exports=function(e){var r=t.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,o&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(n,e,r.options)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},h={};function m(e){var r=h[e];if(void 0!==r)return r.exports;var t=h[e]={id:e,exports:{}};return v[e](t,t.exports,m),t.exports}m.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return m.d(r,{a:r}),r},m.d=(e,r)=>{for(var t in r)m.o(r,t)&&!m.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},m.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e=m(379),r=m.n(e),t=m(795),n=m.n(t),o=m(569),a=m.n(o),i=m(565),c=m.n(i),s=m(216),u=m.n(s),l=m(589),p=m.n(l),d=m(424),(f={}).styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=n(),f.insertStyleElement=u(),r()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals})();