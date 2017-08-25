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
!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){n(1),t.exports=n(3)},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=function t(e,n,i){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:t(r,n,i)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(i)},p=OSjs.require("helpers/default-application"),l=OSjs.require("helpers/default-application-window"),c=function(t){function e(t,n,r){return i(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,"ApplicationTextpadWindow",{allow_drop:!0,icon:n.icon,title:n.name,width:450,height:300},t,r))}return r(e,t),a(e,[{key:"init",value:function(t,i){var o=this,r=u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"init",this).apply(this,arguments);return this._render("TextpadWindow",n(2)),this._find("Text").on("input",function(){o.hasChanged=!0}),r}},{key:"updateFile",value:function(t){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateFile",this).apply(this,arguments);var n=this._find("Text");n&&n.$element.focus()}},{key:"showFile",value:function(t,n){var i=this._find("Text");i&&i.set("value",n||""),u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"showFile",this).apply(this,arguments)}},{key:"getFileData",value:function(){var t=this._find("Text");return t?t.get("value"):""}},{key:"_focus",value:function(){if(u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"_focus",this).apply(this,arguments)){var t=this._find("Text");return t&&t.$element&&t.$element.focus(),!0}return!1}}]),e}(l),s=function(t){function e(t,n){return i(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,"ApplicationTextpad",t,n,{extension:"txt",mime:"text/plain",filename:"New text file.txt"}))}return r(e,t),a(e,[{key:"init",value:function(t,n){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"init",this).apply(this,arguments);var i=this._getArgument("file");this._addWindow(new c(this,n,i))}}]),e}(p);OSjs.Applications.ApplicationTextpad=s},function(t,e){t.exports='<application-window data-id="TextpadWindow"> <gui-vbox> \x3c!-- MENU BAR --\x3e <gui-vbox-container data-grow="0" data-shrink="1" data-basis="auto"> <gui-menu-bar> <gui-menu-bar-entry data-label="LBL_FILE"> <gui-menu data-id="SubmenuFile"> <gui-menu-entry data-id="MenuNew" data-label="LBL_NEW"></gui-menu-entry> <gui-menu-entry data-id="MenuOpen" data-label="LBL_OPEN"></gui-menu-entry> <gui-menu-entry data-id="MenuSave" data-label="LBL_SAVE"></gui-menu-entry> <gui-menu-entry data-id="MenuSaveAs" data-label="LBL_SAVEAS"></gui-menu-entry> <gui-menu-entry data-id="MenuClose" data-label="LBL_CLOSE"></gui-menu-entry> </gui-menu> </gui-menu-bar-entry> </gui-menu-bar> </gui-vbox-container> \x3c!-- CONTENT --\x3e <gui-vbox-container data-grow="1" data-shrink="0" data-basis="auto" data-fill="true"> <gui-textarea data-id="Text"></gui-textarea> </gui-vbox-container> \x3c!-- STATUSBAR --\x3e \x3c!-- <gui-vbox-container data-grow="0" data-shrink="1" data-basis="auto"> <gui-statusbar data-id="Statusbar"></gui-statusbar> </gui-vbox-container> --\x3e </gui-vbox></application-window>'},function(t,e){}]);
//# sourceMappingURL=main.js.map