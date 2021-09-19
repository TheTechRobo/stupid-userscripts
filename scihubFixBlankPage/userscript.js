// ==UserScript==
// @name        Sci-Hub RESTART IF ON BLANK PAGE 
// @namespace   Violentmonkey Scripts
// @match       https://sci-hub.*/*
// @grant       none
// @version     1.0.2
// @author      TheTechRobo
// @downloadURL https://raw.githubusercontent.com/TheTechRobo/stupid-userscripts/main/scihubFixBlankPage/userscript.js
// @description 06/09/2021, 11:53:55 - Sci-Hub Go to original website when on blank page
// ==/UserScript==
if (document.body.innerHTML === "" || document.body.innerHTML === "статья не найдена в базе") {
 //im stupid so i  needed this https://www.w3docs.com/snippets/javascript/how-to-get-current-url-in-javascript.html and https://www.w3schools.com/jsref/jsref_replace.asp (i guessed the latter but i had to check)
  var new_site = window.location.href.replace("https://sci-hub.ru/", "").replace("https://sci-hub.se/", "").replace("https://sci-hub.st", "");
  document.body.innerHTML = "Redirecting to __SITE__URL__...".replace("__SITE__URL__", new_site);
  console.log("Redirecting to __SITE__URL__...".replace("__SITE__URL__", new_site));
  window.location.href = new_site;
}
console.log("OK")
