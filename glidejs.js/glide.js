var uni = document.getElementsByTagName("*");
for(var unilen = 0; unilen < uni.length; unilen++){
uni[unilen].setAttribute("style","margin: 0;padding: 0;box-sizing: border-box;overflow:hidden;");
}
var slideTag = document.getElementsByClassName("glideSlide");

for(var tag = 0; tag < slideTag.length; tag++){
slideTag[tag].style.cssText = "position:absolute; top:0;width:100%;height:100vh;display:flex;justify-content: center;align-items: center;text-align: left;";
}

var slideContent = document.getElementsByClassName("glideContent");

for(var tag = 0; tag < slideContent.length; tag++){
slideContent[tag].style.cssText = "width:90%";
}


var firstblur = document.querySelectorAll('#glide > section:not(#' + glides[0] + ')');
for(var i = 0; i < firstblur.length; i++){
firstblur[i].style.top = "-1000%";
}

var next = document.createElement("button");
next.setAttribute("style", "margin:0;position:absolute;font-size:45px;font-weight:600;font-family:courier new;color:rgba(255,255,255,0.4);background:#ffffff00;cursor:pointer;bottom:10px;right:20px;border:none;outline:none;-webkit-tap-highlight-color: rgba(0,0,0,0);");
next.innerHTML = ">";
next.id = "next";
next.className = "notselected";
next.onmouseover = function(){
next.style.color = "white";
next.style.transition = "0.5s";
}
next.onmouseout = function(){
next.style.color = "rgba(255,255,255,0.4)";
}
document.body.appendChild(next);


var previous = document.createElement("button");
previous.setAttribute("style", "margin:0;position:absolute;font-size:45px;font-weight:600;font-family:courier new;color:rgba(255,255,255,0.4);background:#ffffff00;outline:none;border:none;cursor:pointer;bottom:10px;left:20px;-webkit-tap-highlight-color: rgba(0,0,0,0); ");
previous.innerHTML = "<";
previous.id="previous";
previous.className = "notselected";
previous.onmouseover = function(){
previous.style.color = "white";
previous.style.transition = "0.5s";
}
previous.onmouseout = function(){
previous.style.color = "rgba(255,255,255,0.4)";
}
document.body.appendChild(previous);
var dotsholder = document.createElement('div');
dotsholder.id = "dotsholder";
dotsholder.className = "notselected";
dotsholder.setAttribute("style", "margin:0;position:absolute;bottom:30px;display:flex;left:50%;transform:translateX(-50%);");

for(var dots = 0; dots < glides.length; dots++){
var botdots = document.createElement("div");
botdots.setAttribute("style", "width:8px;height:8px;border-radius:70px;background:rgba(255,255,255,0.4);margin-left:16px;cursor:pointer;-webkit-tap-highlight-color: rgba(0,0,0,0);");
botdots.id = "dots" + glides[dots];
botdots.onclick = function(){
var getdot = (this.id);
var glideclick = (this.id).toString().slice(4);
count = glides.indexOf(glideclick);
oneglideclick = document.getElementById(glideclick);
oneglideclick.style.top = "0%";
var blurclick = document.querySelectorAll('#glide > section:not(#' + glideclick + ')');
for(var k = 0; k < blurclick.length; k++){
blurclick[k].style.top = "-1000%";
}

onedotclick = document.getElementById(getdot);
onedotclick.setAttribute("style", "width:16px;height:16px;border-radius:70px;background:rgba(255,255,255,0.4);margin-left:16px;cursor:pointer;margin-top:-4px;-webkit-tap-highlight-color: rgba(0,0,0,0);");
var blurdotclick = document.querySelectorAll('#dotsholder > div:not(#' + getdot + ')');
for(var l = 0; l < blurdotclick.length; l++){
blurdotclick[l].setAttribute("style", "width:8px;height:8px;border-radius:70px;background:rgba(255,255,255,0.4);margin-left:16px;cursor:pointer;");
}
}

botdots.onmouseover = function(){
var hoverdotsid = this.id;
var hoverdots = document.getElementById(hoverdotsid);
hoverdots.style.background = "white";
hoverdots.style.transition = "0.5s";
var hoversec = (this.id).toString().slice(4);
var tooltipindex = glides.indexOf(hoversec);
var hovervalue = tooltip[tooltipindex];
var tooltipspan = document.createElement("span");
tooltipspan.innerHTML = hovervalue;
tooltipspan.setAttribute("style", "margin:0;position:absolute; color:white; height:auto; font-size:18px; font-family:courier new; font-weight:600;text-align:center;left:50%;transform:translateX(-50%);");
tooltipspan.id = "tooltipspan";
tooltipspan.style.width = "auto";
tooltipspan.style.top = dotsholder.offsetTop - 50 + "px";
document.body.appendChild(tooltipspan);
}
botdots.onmouseout = function(){
var hoverdotsid = this.id;
var hoverdots = document.getElementById(hoverdotsid);
hoverdots.style.background = "rgba(255,255,255,0.4)";
document.body.removeChild(tooltipspan);
}

dotsholder.appendChild(botdots);
}
document.body.appendChild(dotsholder);


var firstdot = document.getElementById("dots" + glides[0]);
firstdot.setAttribute("style", "width:16px;height:16px;border-radius:70px;background:rgba(255,255,255,0.4);margin-left:16px;cursor:pointer;margin-top:-4px;");

var count = 0;
next.onclick = function(){
if(count == glides.length-1){
count=-1;
}
if((count >= -1 < glides.length-1)){
count ++;
var oneglide = document.getElementById(glides[count]);
oneglide.style.top = "0%";
var blur = document.querySelectorAll('#glide > section:not(#' + glides[count] + ')');
for(var i = 0; i < blur.length; i++){
blur[i].style.top = "-1000%";
}

onedot = document.getElementById("dots" + glides[count]);
onedot.setAttribute("style", "width:16px;height:16px;border-radius:70px;background:rgba(255,255,255,0.4);margin-left:16px;cursor:pointer;margin-top:-4px;");
var blurdot = document.querySelectorAll('#dotsholder > div:not(#' + "dots" + glides[count] + ')');
for(var j = 0; j < blurdot.length; j++){
blurdot[j].setAttribute("style", "width:8px;height:8px;border-radius:70px;background:rgba(255,255,255,0.4);margin-left:16px;cursor:pointer;");
}

}
}

previous.onclick = function(){
if(count == -1){
count=glides.length-1;
}
if(count == 0 ){
count=glides.length;
}
if(count != 0 ){
count --;	
var oneglide = document.getElementById(glides[count]);
oneglide.style.top = "0%";
oneglide.style.pointerEvents = "all";
var blur = document.querySelectorAll('#glide > section:not(#' + glides[count] + ')');
for(var i = 0; i < blur.length; i++){
blur[i].style.top = "-1000%";
}

onedot = document.getElementById("dots" + glides[count]);
onedot.setAttribute("style", "width:16px;height:16px;border-radius:70px;background:rgba(255,255,255,0.4);margin-left:16px;cursor:pointer;margin-top:-4px;");
var blurdot = document.querySelectorAll('#dotsholder > div:not(#' + "dots" + glides[count] + ')');
for(var j = 0; j < blurdot.length; j++){
blurdot[j].setAttribute("style", "width:8px;height:8px;border-radius:70px;background:rgba(255,255,255,0.4);margin-left:16px;cursor:pointer;");

}
}
}


document.body.appendChild(previous);

document.onkeydown = function(event){
if(count == glides.length-1 && (event.keyCode) == "39"){
count=-1;
}
if((count >= -1 < glides.length-1)&& (event.keyCode) == "39"){
count ++;
var oneglide = document.getElementById(glides[count]);
oneglide.style.top = "0%";
var blur = document.querySelectorAll('#glide > section:not(#' + glides[count] + ')');
for(var i = 0; i < blur.length; i++){
blur[i].style.top = "-1000%";

onedot = document.getElementById("dots" + glides[count]);
onedot.setAttribute("style", "width:16px;height:16px;border-radius:70px;background:rgba(255,255,255,0.4);margin-left:16px;cursor:pointer;margin-top:-4px;");
var blurdot = document.querySelectorAll('#dotsholder > div:not(#' + "dots" + glides[count] + ')');
for(var j = 0; j < blurdot.length; j++){
blurdot[j].setAttribute("style", "width:8px;height:8px;border-radius:70px;background:rgba(255,255,255,0.4);margin-left:16px;cursor:pointer;");
}

}
}
if(count == -1 && (event.keyCode) == "37"){
count=glides.length-1;
}
if(count == 0 && (event.keyCode) == "37"){
count=glides.length;
}
if(count != 0 && (event.keyCode) == "37"){
count --;	
var oneglide = document.getElementById(glides[count]);
oneglide.style.top = "0%";
var blur = document.querySelectorAll('#glide > section:not(#' + glides[count] + ')');
for(var i = 0; i < blur.length; i++){
blur[i].style.top = "-1000%";

onedot = document.getElementById("dots" + glides[count]);
onedot.setAttribute("style", "width:16px;height:16px;border-radius:70px;background:rgba(255,255,255,0.4);margin-left:16px;cursor:pointer;margin-top:-4px;");
var blurdot = document.querySelectorAll('#dotsholder > div:not(#' + "dots" + glides[count] + ')');
for(var j = 0; j < blurdot.length; j++){
blurdot[j].setAttribute("style", "width:8px;height:8px;border-radius:70px;background:rgba(255,255,255,0.4);margin-left:16px;cursor:pointer;");
}
}
}
}

if(matchMedia){
var media = window.matchMedia("screen and (min-width : 320px) and (max-width : 825px) and (orientation:landscape)");
media.addListener(noDisplay);
noDisplay(media);
}

function noDisplay(media){
if(media.matches){
var box = document.createElement('div');
box.innerHTML = 'Use Portrait Mode !';
box.style.cssText = 'font-size:18px;top:50%;left:50%;position:absolute;border:1.5pt solid black;border-radius:3px;color:black;background:white;height:30px;width:183px;transform:translate(-50%, -50%);padding-top:5px;padding-left:25px;';
box.id = 'success';
box.className = 'f-18 rad-3 pd-t-35 pd-b-35 pd-l-25 pd-r-35';
document.body.appendChild(box);
var all = document.querySelectorAll("body > div:not(#success)");
for(var ele = 0; ele < all.length; ele++){
all[ele].style.display = "none";
}
}
else{
var all = document.querySelectorAll("body > div:not(#success)");
for(var ele = 0; ele < all.length; ele++){
all[ele].style.display = "block";
}
var child = document.getElementById('success');
if(child){
document.body.removeChild(child);
}
}
document.getElementById("dotsholder").style.display = "flex";
}
