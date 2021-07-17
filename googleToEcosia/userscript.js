// ==UserScript==
// @name        New script - google.com
// @namespace   Violentmonkey Scripts
// @match       https://www.google.com/
// @grant       none
// @version     1.0
// @author      -
// @description 19/06/2021, 14:07:49
// ==/UserScript==
var arr = document.querySelectorAll('.gNO89b');
for (var i=0;i<arr.length;i++) {
    //arr[i].onclick = "void();return false"
  arr[i].value = "fdgh.";
}
var arr = document.querySelectorAll('form');
for (var i=0;i<arr.length;i++) {
    //arr[i].onclick = "void();return false"
  arr[i].action = "https://thetechrobo.github.io";
}
