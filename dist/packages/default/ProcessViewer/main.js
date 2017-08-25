/**
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2017, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 * @preserve
 */
!function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,i){i(1),t.exports=i(3)},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),u=function t(e,i,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,i);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:t(r,i,n)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(n)},l=OSjs.require("core/window"),c=OSjs.require("core/application"),p=function(t){function e(t,i){n(this,e);var r=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,"ApplicationProcessViewerWindow",{icon:i.icon,title:i.name,width:400,height:300},t));return r.interval=null,r}return r(e,t),a(e,[{key:"init",value:function(t,n){function o(){var t=new Date,e=[];c.getProcesses().forEach(function(i){if(i){var n=t-i.__started,o={value:i.__pid,id:i.__pid,columns:[{label:i.__pname},{label:i.__pid.toString(),textalign:"right"},{label:n.toString(),textalign:"right"}]};e.push(o)}}),a.patch(e)}var r=u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"init",this).apply(this,arguments);this._render("ProcessViewerWindow",i(2));var a=this._find("View");return a.set("columns",[{label:"Name"},{label:"PID",size:"60px",textalign:"right"},{label:"Alive",size:"60px",textalign:"right"}]),this._find("ButtonKill").on("click",function(){var t=a.get("selected");t&&t[0]&&void 0!==t[0].data&&c.kill(t[0].data)}),this.interval=setInterval(function(){o()},1e3),o(),r}},{key:"destroy",value:function(){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"destroy",this).apply(this,arguments),this.interval=clearInterval(this.interval)}}]),e}(l),s=function(t){function e(t,i){return n(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,"ApplicationProcessViewer",t,i))}return r(e,t),a(e,[{key:"init",value:function(t,i){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"init",this).apply(this,arguments),this._addWindow(new p(this,i))}}]),e}(c);OSjs.Applications.ApplicationProcessViewer=s},function(t,e){t.exports='<application-window data-id="ProcessViewerWindow"> <gui-vbox> <gui-vbox-container data-grow="1" data-fill="true"> <gui-list-view data-id="View" data-multiple="false"> </gui-list-view> </gui-vbox-container> <gui-vbox-container data-shrink="1" data-align="end"> <gui-button-bar> <gui-button data-id="ButtonKill">LBL_KILL</gui-button> </gui-button-bar> </gui-vbox-container> </gui-vbox></application-window>'},function(t,e){}]);
//# sourceMappingURL=main.js.map