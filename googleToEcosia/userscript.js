// ==UserScript==
// @name        Search Ecosia but on google
// @namespace   Violentmonkey Scripts
// @match       https://www.google.com/
// @grant       none
// @version     2.0
// @author      TheTechRobo
// @description 19/06/2021, 14:07:49
// @updateURL   https://raw.githubusercontent.com/TheTechRobo/stupid-userscripts/main/googleToEcosia/userscript.js
// @downloadURL https://raw.githubusercontent.com/TheTechRobo/stupid-userscripts/main/googleToEcosia/userscript.js
// ==/UserScript==
var arr = document.querySelectorAll('.gNO89b');
for (var i=0;i<arr.length;i++) {
  arr[i].value = "Search Ecosia";
}
var arr = document.querySelectorAll('form');
for (var i=0;i<arr.length;i++) {
  arr[i].action = "https://www.ecosia.org/search";
}
var arr = document.querySelectorAll('.lnXdpd');
for (var i=0;i<arr.length;i++) {
  arr[i].src = "https://www.doz.com/cms/wp-content/uploads/2014/08/ecosia-logo.jpg"
  arr[i].srcset = "https://www.doz.com/cms/wp-content/uploads/2014/08/ecosia-logo.jpg"
}
//https://stackoverflow.com/a/16778833/9654083
