// ==UserScript==
// @name        Search Ecosia but on google
// @namespace   Violentmonkey Scripts
// @match       https://www.google.com/
// @grant       none
// @version     3.5
// @author      TheTechRobo
// @description 19/06/2021, 14:07:49
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
