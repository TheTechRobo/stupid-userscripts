// ==UserScript==
// @name        Hehe
// @namespace   Violentmonkey Scripts
// @match       https://mail.google.com/*
// @grant       none
// @version     3.0
// @author      TheTechRobo
// @description 19/06/2021, 13:06:26
// ==/UserScript==
document.getElementById("gbf").innerHTML = "<br>Sending EMAIL data to tracking server... "
// document.getElementsByClassName("gbh").innerHTML = "<style>.gbh { background-color:black;}"
//https://stackoverflow.com/questions/16777885/get-all-elements-by-classname-and-change-classname
var arr = document.querySelectorAll('.ts');
for (var i=0;i<arr.length;i++) {
    //arr[i].onclick = "void();return false"
  arr[i].innerHTML = "Message was sent to the tracking server.";
}
//document.querySelector(".ts").innerHTML = "(sent to server)"
document.body.innerHTML = "<h1 style='font-size:25px;'>If you refresh the page 1 more times, your account will be deleted.</h1><style>body { background-color:red;} .gbh { background-color:black;}</style>" + document.body.innerHTML
//document.body.innerHTML = "account deleted"
