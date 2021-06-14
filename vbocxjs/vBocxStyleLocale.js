document.getElementById("cr").innerHTML = "Copyright @ " + new Date().getFullYear() + ", vBocx.js" + " | " + "Syntax highlighter - Prism.js";

var box = document.createElement('div');
box.innerHTML =  'Copied!';
box.style.height = '42px';
box.style.wordWrap = 'break-word';
box.id = 'vBocx';
box.className = 'f-16 f-w rad-3 fg-success bg-success pd-t-12 pd-b-5 pd-l-15 pd-r-15' ;
box.style.display = 'none';
var copyid = document.getElementById('copy');
if(copyid){
document.getElementById('copy').appendChild(box);
}

function copied(){
document.getElementById('vBocx').style.display = 'block';

var copy = document.getElementById('cdn');
var selection = window.getSelection();
var get = document.createRange();
get.selectNodeContents(copy);
selection.removeAllRanges();
selection.addRange(get);
document.execCommand('copy');


setTimeout(function () 
{ 
document.getElementById('vBocx').style.display= 'none';}, 1500);
}

var count = 0;
document.getElementById('toogle').onclick = function(){
count ++;
if(count % 2 == 1){
document.getElementById('top-menu').style.top = '100px';
document.getElementById('fa').style.transform = 'rotate(90deg)';
}
else{
document.getElementById('top-menu').style.top = '-100px';
document.getElementById('fa').style.transform = 'rotate(0deg)';
}
}



var myAlert = new Vbocx();
function topSuccess(){
myAlert.alert({position:'top', type:'success', id:"topAlert", message:'I am top success alert', timer:3000});
document.getElementById("topAlert").style.width = document.getElementById("main-body").offsetWidth - 30 + "px";
}
function middleSuccess(){
myAlert.alert({position:'middle', type:'success', id:"middleAlert", message:'I am middle success alert', timer:3000});
document.getElementById("middleAlert").style.width = document.getElementById("main-body").offsetWidth - 30 + "px";
}
function bottomSuccess(){
myAlert.alert({position:'bottom',  type:'success', id:"bottomAlert", message:'I am bottom success alert', timer:3000});
document.getElementById("bottomAlert").style.width = document.getElementById("main-body").offsetWidth - 30 + "px";
}



function topWarning(){
myAlert.alert({position:'top', type:'warning', id:"topAlert", message:'I am top warning alert', timer:3000});
document.getElementById("topAlert").style.width = document.getElementById("main-body").offsetWidth - 30 + "px";
}
function middleWarning(){
myAlert.alert({position:'middle', type:'warning', id:"middleAlert", message:'I am middle warning alert', timer:3000});
document.getElementById("middleAlert").style.width = document.getElementById("main-body").offsetWidth - 30 + "px";
}
function bottomWarning(){
myAlert.alert({position:'bottom',  type:'warning', id:"bottomAlert", message:'I am bottom warning alert', timer:3000});
document.getElementById("bottomAlert").style.width = document.getElementById("main-body").offsetWidth - 30 + "px";
}



function topError(){
myAlert.alert({position:'top', type:'error', id:"topAlert", message:'I am top error alert', timer:3000});
document.getElementById("topAlert").style.width = document.getElementById("main-body").offsetWidth - 30 + "px";

}
function middleError(){
myAlert.alert({position:'middle', type:'error', id:"middleAlert", message:'I am middle error alert', timer:3000});
document.getElementById("middleAlert").style.width = document.getElementById("main-body").offsetWidth - 30 + "px";
}
function bottomError(){
myAlert.alert({position:'bottom',  type:'error', id:"bottomAlert", message:'I am bottom error alert', timer:3000});
document.getElementById("bottomAlert").style.width = document.getElementById("main-body").offsetWidth - 30 + "px";
}

function customizedAlert(){
myAlert.alert({position:'18%', id:'customizedAlert', color:'white', background:'#1277db', message:'I am customized alert', timer:3000});
document.getElementById("customizedAlert").style.width = document.getElementById("main-body").offsetWidth - 30 + "px";
}
function cancellableAlert(){
myAlert.alert({position:'38%', id:'cancellableAlert', color:'white', background:'#1277db', message:'I am cancellable alert'});
document.getElementById("cancellableAlert").style.width = document.getElementById("main-body").offsetWidth - 30 + "px";
}

function colorPrompt(){
var myPrompt = new Vbocx();
myPrompt.prompt({element:"input", id:"colorId", type:"color", header:"Select your color",  animation:"bottom-in-crash", action:function(output){
var alertBox = new Vbocx();
alertBox.alert({position:"top", type:"success", id:"alertId", message:"You selected " + output, timer:2000});
document.getElementById("alertId").style.width = document.getElementById("main-body").offsetWidth - 30 + "px";
}});
document.getElementById("colorId").style.width = document.getElementById("main-body").offsetWidth + "px";
}

function textPrompt(){
var myPrompt = new Vbocx();
myPrompt.prompt({element:"input", id:"textId", type:"text", header:"Enter your name", placeholder:"Input Here",  animation:"bottom-in-crash", action:function(output){
var alertBox = new Vbocx();
alertBox.alert({position:"top", type:"success", id:"alertId", message:"Your name : " + output, timer:2000});
document.getElementById("alertId").style.width = document.getElementById("main-body").offsetWidth - 30 + "px";
}});
document.getElementById("textId").style.width = document.getElementById("main-body").offsetWidth + "px";
}

function passPrompt(){
var myPrompt = new Vbocx();
myPrompt.prompt({element:"input", id:"passId", type:"password", header:"Enter your password", placeholder:"Input Here", animation:"top-in-crash", action:function(output){
var alertBox = new Vbocx();
alertBox.alert({position:"top", type:"success", id:"alertId", message:"Your password has been saved !", timer:2000});
document.getElementById("alertId").style.width = document.getElementById("main-body").offsetWidth - 30 + "px";
}});
document.getElementById("passId").style.width = document.getElementById("main-body").offsetWidth + "px";
}

function numPrompt(){
var myPrompt = new Vbocx();
myPrompt.prompt({element:"input", id:"numId", type:"number", header:"Enter your Phone number", placeholder:"Input Here", animation:"top-in-crash", action:function(output){
var alertBox = new Vbocx();
alertBox.alert({position:"top", type:"success", id:"alertId", message:"Your number is not matching!", timer:2000});
document.getElementById("alertId").style.width = document.getElementById("main-body").offsetWidth - 30 + "px";
}});
document.getElementById("numId").style.width = document.getElementById("main-body").offsetWidth + "px";
}

function emailPrompt(){
var myPrompt = new Vbocx();
myPrompt.prompt({element:"input", id:"emailId", type:"email", header:"Enter your email-id", placeholder:"Input Here", animation:"top-in-crash", action:function(output){
var alertBox = new Vbocx();
if((/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/).test(output) === true){
alertBox.alert({position:"top", type:"success", id:"alertId", message:"Valid email-id", timer:2000});
document.getElementById("alertId").style.width = document.getElementById("main-body").offsetWidth - 30 + "px";
}
else{
alertBox.alert({position:"top", type:"success", id:"alertId", message:"Invalid email-id", timer:2000});
document.getElementById("alertId").style.width = document.getElementById("main-body").offsetWidth - 30 + "px";
}
}});
document.getElementById("emailId").style.width = document.getElementById("main-body").offsetWidth + "px";
}

function filePrompt(){
var myPrompt = new Vbocx();
myPrompt.prompt({element:"input", id:"fileId", type:"file", header:"Upload file",  animation:"left-in-crash", action:function(output){
var alertBox = new Vbocx();
alertBox.alert({position:"top", type:"success", id:"alertId", message:"You choosed " + output, timer:2000});
document.getElementById("alertId").style.width = document.getElementById("main-body").offsetWidth - 30 + "px";
}});
document.getElementById("fileId").style.width = document.getElementById("main-body").offsetWidth + "px";
}

function checkPrompt(){
var myPrompt = new Vbocx();
myPrompt.prompt({element:"input", id:"checkId", type:"checkbox", header:"Terms and conditions*", label:"Agree", animation:"bottom-in-crash", action:function(output){
checked = document.getElementById("checkIdvBocxInput").checked ;
if(checked == true){
var alertBox = new Vbocx();
alertBox.alert({position:"top", type:"success", id:"alertId", message:"Thanks for choosing vBocx.js!", timer:2000});
document.getElementById("alertId").style.width = document.getElementById("main-body").offsetWidth - 30 + "px";
}
else{
var alertBox = new Vbocx();
alertBox.alert({position:"top", type:"success", id:"alertId", message:"Try again!", timer:2000});
document.getElementById("alertId").style.width = document.getElementById("main-body").offsetWidth - 30 + "px";}}});   
document.getElementById("checkId").style.width = document.getElementById("main-body").offsetWidth + "px";
}

function radioPrompt(){
var myPrompt = new Vbocx();
myPrompt.prompt({element:"input", id:"radioId", type:"radio", header:"Terms and conditions*", label:"Agree", animation:"top-in-crash", action:function(output){
checked = document.getElementById("radioIdvBocxInput").checked ;
if(checked == true){
var alertBox = new Vbocx();
alertBox.alert({position:"top", type:"success", id:"alertId", message:"Thanks for choosing vBocx.js!", timer:2000});
document.getElementById("alertId").style.width = document.getElementById("main-body").offsetWidth - 30 + "px";
}
else{
var alertBox = new Vbocx();
alertBox.alert({position:"top", type:"success", id:"alertId", message:"Try again!", timer:2000});
document.getElementById("alertId").style.width = document.getElementById("main-body").offsetWidth - 30 + "px";}}});  
document.getElementById("radioId").style.width = document.getElementById("main-body").offsetWidth + "px"; 
}

function rangePrompt(){
var myPrompt = new Vbocx();
myPrompt.prompt({element:"input", id:"rangeId", type:"range", header:"Select the range",  animation:"bottom-in-crash", action:function(output){
var alertBox = new Vbocx();
alertBox.alert({position:"top", type:"success", id:"alertId", message:"The range was : " + output, timer:2000});
document.getElementById("alertId").style.width = document.getElementById("main-body").offsetWidth - 30 + "px";
}});
document.getElementById("rangeId").style.width = document.getElementById("main-body").offsetWidth + "px";
}

function timePrompt(){
var myPrompt = new Vbocx();
myPrompt.prompt({element:"input", id:"timeId", type:"time", header:"Select the time",  animation:"left-in-crash", action:function(output){
var alertBox = new Vbocx();
alertBox.alert({position:"top", type:"success", id:"alertId", message:"Time : " + output, timer:2000});
document.getElementById("alertId").style.width = document.getElementById("main-body").offsetWidth - 30 + "px";
}});
document.getElementById("timeId").style.width = document.getElementById("main-body").offsetWidth + "px";
}

function datePrompt(){
var myPrompt = new Vbocx();
myPrompt.prompt({element:"input", id:"dateId", type:"date", header:"Select a date",  animation:"left-in-crash", action:function(output){
var alertBox = new Vbocx();
alertBox.alert({position:"top", type:"success", id:"alertId", message:"Date : " + output, timer:2000});
document.getElementById("alertId").style.width = document.getElementById("main-body").offsetWidth - 30 + "px";
}});
document.getElementById("dateId").style.width = document.getElementById("main-body").offsetWidth + "px";
}

function weekPrompt(){
var myPrompt = new Vbocx();
myPrompt.prompt({element:"input", id:"weekId", type:"week", header:"Select the week",  animation:"right-in-crash", action:function(output){
var alertBox = new Vbocx();
alertBox.alert({position:"top", type:"success", id:"alertId", message:"Week : " + output, timer:2000});
document.getElementById("alertId").style.width = document.getElementById("main-body").offsetWidth - 30 + "px";
}});
document.getElementById("weekId").style.width = document.getElementById("main-body").offsetWidth + "px";
}

function monthPrompt(){
var myPrompt = new Vbocx();
myPrompt.prompt({element:"input", id:"monthId", type:"month", header:"Select a date",  animation:"left-in-crash", action:function(output){
var alertBox = new Vbocx();
alertBox.alert({position:"top", type:"success", id:"alertId", message:"Month : " + output, timer:2000});
document.getElementById("alertId").style.width = document.getElementById("main-body").offsetWidth - 30 + "px";
}});
document.getElementById("monthId").style.width = document.getElementById("main-body").offsetWidth + "px";
}

function selectPrompt(){
var myPrompt = new Vbocx();
myPrompt.prompt({element:"select", id:"selectId", header:"Select your color", options:["Select", "Black", "White", "Red", "Blue"], animation:"left-in-crash", action:function(output){
var alertBox = new Vbocx();
alertBox.alert({position:"top", type:"success", id:"alertId", message:"You selected " + output, timer:2000});
document.getElementById("alertId").style.width = document.getElementById("main-body").offsetWidth - 30 + "px";
}});
document.getElementById("selectId").style.width = document.getElementById("main-body").offsetWidth + "px";
}
function lastConfirm(){
var myConfirm = new Vbocx();
myConfirm.confirm({id:"confirmId", header:"Do you want to quit?", animation:"right-in-crash", action:function(){
var alertBox = new Vbocx();
alertBox.alert({position:"top", type:"success", id:"alertId", message:"Thanks for using vBocx.js", timer:2000});
document.getElementById("alertId").style.width = document.getElementById("main-body").offsetWidth - 30 + "px";
}});
document.getElementById("confirmId").style.width = document.getElementById("main-body").offsetWidth + "px";
}