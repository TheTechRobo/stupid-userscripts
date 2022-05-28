// ==UserScript==
// @name        Remove Quora login-wall
// @namespace   Violentmonkey Scripts
// @match       https://*.quora.com/*
// @grant       none
// @version     1.0
// @author      TheTechRobo
// @description 2022-05-28, 10:16:14 a.m.
// ==/UserScript==

// NOTE: This may lower Quora's performance a bit, but it shouldn't too much

// Partially stolen from https://stackoverflow.com/a/8957778/9654083
function hideRefer(e) { // Quora's login-wall is based on the Referer header
  var a = e.target;
  // most links you click on will be nested a billion times, I counted 11 calls to parentNode needed, but Quora could change that
  var b = 0;
  // I tried !a but it didn't work right; it should now, but I don't want to test
  if (a) {}
  else return;
  while (b < 15) {
    if (a && a.tagName !== 'A') {
        a = a.parentNode;
        b++;
        continue;
    }
    if (a && a.tagName === 'A') {
        a.rel = 'noreferrer';
        console.log("Removed Quora login-wall");
        break;
    }
    return;
  }
}
window.addEventListener('mousedown', hideRefer, true);
window.addEventListener('keydown', hideRefer, true);
