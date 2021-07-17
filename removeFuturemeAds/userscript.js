// ==UserScript==
// @name        Remove futureme ads
// @namespace   Violentmonkey Scripts
// @match       https://www.futureme.org/*
// @grant       none
// @version     1.0.1
// @author      TheTechRobo
// @description 16/06/2021, 11:37:46
// @run-at      document-body
// ==/UserScript==
$('.ad').hide();
console.log("FutureMe ads should be removed!");
