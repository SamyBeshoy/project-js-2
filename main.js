"use strict";
// strict mode helps developers write code that is more reliable and less error-prone.
document.title = "Project 2";
document.body.style.cssText = "font-family: Arial, Helvetica, sans-serif;font-size: 14px; height: 100vh; background-image: linear-gradient(211deg, rgb(138, 209, 255), rgb(60, 201, 157), rgb(152, 255, 234));";
let title = document.createElement("h3"); 
title.innerHTML = "Description Is : Click Her To Get Random Number";
title.style.fontSize = "1.3em"
document.body.appendChild(title);
let parent = document.createElement("div");
parent.style.cssText = "display: flex; align-items: center; flex-direction: column; align-items: center; font-size: 1.2em;";
let btn = document.createElement("button");
btn.id = "btn"
btn.innerHTML = "Click"
parent.appendChild(btn)
let element = document.createElement("div");
let text = document.createTextNode(Math.random());
element.appendChild(text);
btn.onclick = function () {
    parent.appendChild(element);
};
document.body.appendChild(parent);
let footer = document.createElement("div");
footer.innerHTML = "Copyright 2023 © by beshoy samy";
footer.style.cssText = "position: absolute ;bottom: 0; margin-left: 1em;";
document.body.appendChild(footer);
