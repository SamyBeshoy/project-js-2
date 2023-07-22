"use strict";
// strict mode helps developers write code that is more reliable and less error-prone.
document.title = "project-js-2";
document.body.style.cssText = `
height: 100vh; 
padding: 0px;
margin: 0px;
font-family: Arial, Helvetica, sans-serif;
font-size: 14px; 
background-image: linear-gradient(211deg, rgb(138, 209, 255), rgb(60, 201, 157), rgb(152, 255, 234));
`;
let parent = document.createElement("div");
parent.style.cssText = `
display: flex; 
font-size: 1.2em;
flex-direction: column; 
align-items: center; 
`;
let btn = document.createElement("button");
btn.innerHTML = "Click";
let element = document.createElement("div");
let text = document.createTextNode(Math.random());
let btn_r = document.createElement("button");
btn_r.innerHTML = "Reload";
btn_r.onclick = function () {
    location.reload();
};
let btns = [btn, btn_r];
btns.forEach(function (e) {
    e.style.cssText = "padding: 5px 15px; width: 100px; margin: 20px;";
});
let footer = document.createElement("div");
footer.innerHTML = "Copyright 2023 © by beshoy samy";
footer.style.cssText = "position: absolute; bottom: 2em; left: 2em;";
parent.appendChild(btn);
element.appendChild(text);
btn.onclick = function () {
    parent.appendChild(element);
    element.style.cssText = `border: 1px solid red; padding: 5px;`;
};
parent.appendChild(btn_r);
document.body.appendChild(parent);
document.body.appendChild(footer);
