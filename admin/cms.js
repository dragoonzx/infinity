!function(){var t={318:function(t){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.default=t.exports,t.exports.__esModule=!0},855:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return o}});var o=function(t){return t=t||Object.create(null),{on:function(n,e){(t[n]||(t[n]=[])).push(e)},off:function(n,e){t[n]&&t[n].splice(t[n].indexOf(e)>>>0,1)},emit:function(n,e){(t[n]||[]).slice().map((function(t){t(e)})),(t["*"]||[]).slice().map((function(t){t(n,e)}))}}}()},251:function(t){"use strict";t.exports=NetlifyCmsApp},983:function(t){"use strict";t.exports=netlifyIdentity}},n={};function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{}};return t[o](i,i.exports,e),i.exports}e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},function(){"use strict";var t=e(318),n=t(e(251)),o=t(e(855));window.___emitter=o.default,window.___loader={enqueue:function(){},hovering:function(){}},n.default.init(),n.default.registerPreviewStyle("cms.css")}(),function(){"use strict";var t=e(318)(e(983));window.netlifyIdentity=t.default;var n=function(){return t.default.on("login",(function(){document.location.href="/admin/"}))};t.default.on("init",(function(e){e?t.default.on("logout",(function(){n()})):n()})),setImmediate((function(){t.default.init()}))}(),function(){"use strict";var t=e(251);e.n(t)().init({config:{backend:{name:"git-gateway"}}})}()}();
//# sourceMappingURL=cms.js.map