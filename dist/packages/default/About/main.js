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
!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){n(1),t.exports=n(4)},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),u=function t(e,n,o){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,o)}if("value"in r)return r.value;var a=r.get;if(void 0!==a)return a.call(o)},c=OSjs.require("core/window"),p=OSjs.require("core/application"),l=function(t){function e(t,n){return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,"ApplicationAboutWindow",{icon:n.icon,title:n.name,gravity:"center",allow_resize:!1,allow_maximize:!1,width:320,height:320,min_width:320,min_height:320},t))}return i(e,t),a(e,[{key:"init",value:function(t,o){var r=u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"init",this).apply(this,arguments);return this._render("AboutWindow",n(2)),r}}]),e}(c),f=function(t){function e(t,n){return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,"ApplicationAbout",t,n))}return i(e,t),a(e,[{key:"init",value:function(t,n){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"init",this).apply(this,arguments),this._addWindow(new l(this,n))}}]),e}(p);OSjs.Applications.ApplicationAbout=f},function(t,e,n){t.exports='<application-window data-id="AboutWindow"> <div> <h1>OS.js</h1> <div> Created by<br /> <a href="http://andersevenrud.github.io" target="_blank">Anders Evenrud</a> </div> <div> <img alt="" src="'+n(3)+'" /> </div> <div> <a href="https://os-js.org/" target="_blank">Official Homepage</a> </div> </div></application-window>'},function(t,e,n){t.exports=n.p+"ca34195452f82ec9064d578d43a68e0c.png"},function(t,e){}]);
//# sourceMappingURL=main.js.map