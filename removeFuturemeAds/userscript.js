// ==UserScript==
// @name        Remove futureme ads
// @namespace   Violentmonkey Scripts
// @match       https://www.futureme.org/*
// @grant       none
// @version     1.0.3
// @author      TheTechRobo
// @description 16/06/2021, 11:37:46
// @run-at      document-body
// @downloadURL https://raw.githubusercontent.com/TheTechRobo/stupid-userscripts/main/removeFuturemeAds/userscript.js
// @updateURL   https://raw.githubusercontent.com/TheTechRobo/stupid-userscripts/main/removeFuturemeAds/userscript.js
// ==/UserScript==
$('.ad').fadeOut();
console.log("FutureMe ads should be removed!");
