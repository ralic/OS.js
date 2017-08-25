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
!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=function t(e,n,i){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,n,i)}if("value"in r)return r.value;var a=r.get;if(void 0!==a)return a.call(i)},p=OSjs.require("helpers/default-application"),l=OSjs.require("helpers/default-application-window"),c=function(t){function e(t,n,o){return i(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,"ApplicationHTMLViewerWindow",{icon:n.icon,title:n.name,width:400,height:200},t,o))}return o(e,t),a(e,[{key:"init",value:function(t,i){var r=u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"init",this).apply(this,arguments);return this._render("HTMLViewerWindow",n(2)),r}},{key:"showFile",value:function(t,n){this._scheme&&this._find("iframe").set("src",n),u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"showFile",this).apply(this,arguments)}}]),e}(l),f=function(t){function e(t,n){return i(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,"ApplicationHTMLViewer",t,n,{extension:"html",mime:"text/htm",filename:"index.html",fileypes:["htm","html"],readData:!1}))}return o(e,t),a(e,[{key:"init",value:function(t,n){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"init",this).apply(this,arguments);var i=this._getArgument("file");this._addWindow(new c(this,n,i))}}]),e}(p);OSjs.Applications.ApplicationHTMLViewer=f},function(t,e){t.exports='<application-window data-id="HTMLViewerWindow"> <gui-vbox> <gui-vbox-container data-grow="0" data-shrink="1" data-basis="auto"> <gui-menu-bar> <gui-menu-bar-entry data-label="LBL_FILE"> <gui-menu data-id="SubmenuFile"> <gui-menu-entry data-id="MenuOpen" data-label="LBL_OPEN"></gui-menu-entry> <gui-menu-entry data-id="MenuClose" data-label="LBL_CLOSE"></gui-menu-entry> </gui-menu> </gui-menu-bar-entry> </gui-menu-bar> </gui-vbox-container> <gui-vbox-container data-grow="1" data-shrink="0" data-basis="auto" data-fill="true"> <gui-iframe data-id="iframe" /> </gui-vbox-container> </gui-vbox></application-window>'}]);
//# sourceMappingURL=main.js.map