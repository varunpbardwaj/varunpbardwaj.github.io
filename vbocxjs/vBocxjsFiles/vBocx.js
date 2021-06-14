class Vbocx {
constructor() {
this.alert = function (object) {
if (object.position.includes("px") || object.position.includes("pt") || object.position.includes("%")) {
if (object.timer) {
var box = document.createElement('div');
box.innerHTML = object.message;
box.style.color = object.color;
box.style.top = object.position;
box.style.transform = "translate(-50%, " + object.position + ")";
box.style.borderRadius = "3px";
box.style.background = object.background;
box.style.height = "auto";
box.style.width = "95%";
box.style.wordWrap = "break-word";
box.id = object.id;
box.className = "f-18 trans-l-50 rad-3 pd-t-35 pd-b-35 pd-l-25 pd-r-35";
document.body.appendChild(box);
setTimeout(function () {
var child = document.getElementById(object.id);
document.body.removeChild(child);
}, object.timer);
}
else {
var box = document.createElement('div');
var cancel = document.createElement('button');
box.innerHTML = object.message;
box.style.color = object.color;
box.style.margin = "0";
box.style.pos = "absolute";
box.style.top = object.position;
box.style.left = "50%";
box.style.transform = "translate(-50%," + object.position + ")";
box.style.background = object.background;
box.style.height = "auto";
box.style.width = "95%";
box.style.wordWrap = "break-word";
box.className = "f-18 trans-l-50 rad-3 pd-t-35 pd-b-35 pd-l-25 pd-r-35";
box.id = object.id;
cancel.innerHTML = "X";
cancel.style.width = "20px";
cancel.style.height = "20px";
cancel.style.color = object.background;
cancel.style.background = object.color;
cancel.style.marginTop = "5px";
cancel.style.marginLeft = "-5px";
cancel.className = "f-10 f-w rad-70 trans-t-1 trans-l-100 br-none clk-no-out";
cancel.id = object.id + "Cancel";
box.appendChild(cancel);
document.body.appendChild(box);
cancel.addEventListener('click', remove);
function remove() {
var child = document.getElementById(object.id);
document.body.removeChild(child);
}
}
}
else {
if (object.timer) {
if (object.position === 'top' && object.type === "success") {
var box = document.createElement('div');
box.innerHTML = object.message;
box.style.height = "auto";
box.style.width = "95%";
box.style.wordWrap = "break-word";
box.id = object.id;
box.className = "f-18 trans-t-10 trans-l-50 rad-3 fg-success bg-success pd-t-35 pd-b-35 pd-l-25 pd-r-35";
document.body.appendChild(box);
setTimeout(function () {
var child = document.getElementById(object.id);
document.body.removeChild(child);
}, object.timer);
}
if (object.position === 'middle' && object.type === "success") {
var box = document.createElement('div');
box.innerHTML = object.message;
box.style.height = "auto";
box.style.width = "95%";
box.style.wordWrap = "break-word";
box.id = object.id;
box.className = "f-18 trans-t-50 trans-l-50 rad-3 fg-success bg-success pd-t-35 pd-b-35 pd-l-25 pd-r-35";
document.body.appendChild(box);
setTimeout(function () {
var child = document.getElementById(object.id);
document.body.removeChild(child);
}, object.timer);
}
if (object.position === 'bottom' && object.type === "success") {
var box = document.createElement('div');
box.innerHTML = object.message;
box.style.height = "auto";
box.style.width = "95%";
box.style.wordWrap = "break-word";
box.id = object.id;
box.className = "f-18 trans-t-90 trans-l-50 rad-3 fg-success bg-success pd-t-35 pd-b-35 pd-l-25 pd-r-35";
document.body.appendChild(box);
setTimeout(function () {
var child = document.getElementById(object.id);
document.body.removeChild(child);
}, object.timer);
}
if (object.position === 'top' && object.type === "warning") {
var box = document.createElement('div');
box.innerHTML = object.message;
box.style.height = "auto";
box.style.width = "95%";
box.style.wordWrap = "break-word";
box.id = object.id;
box.className = "f-18 trans-t-10 trans-l-50 rad-3 fg-warning bg-warning pd-t-35 pd-b-35 pd-l-25 pd-r-35";
document.body.appendChild(box);
setTimeout(function () {
var child = document.getElementById(object.id);
document.body.removeChild(child);
}, object.timer);
}
if (object.position === 'middle' && object.type === "warning") {
var box = document.createElement('div');
box.innerHTML = object.message;
box.style.height = "auto";
box.style.width = "95%";
box.style.wordWrap = "break-word";
box.id = object.id;
box.className = "f-18 trans-t-50 trans-l-50 rad-3 fg-warning bg-warning pd-t-35 pd-b-35 pd-l-25 pd-r-35";
document.body.appendChild(box);
setTimeout(function () {
var child = document.getElementById(object.id);
document.body.removeChild(child);
}, object.timer);
}
if (object.position === 'bottom' && object.type === "warning") {
var box = document.createElement('div');
box.innerHTML = object.message;
box.style.height = "auto";
box.style.width = "95%";
box.style.wordWrap = "break-word";
box.id = object.id;
box.className = "f-18 trans-t-90 trans-l-50 rad-3 fg-warning bg-warning pd-t-35 pd-b-35 pd-l-25 pd-r-35";
document.body.appendChild(box);
setTimeout(function () {
var child = document.getElementById(object.id);
document.body.removeChild(child);
}, object.timer);
}
if (object.position === 'top' && object.type === "error") {
var box = document.createElement('div');
box.innerHTML = object.message;
box.style.height = "auto";
box.style.width = "95%";
box.style.wordWrap = "break-word";
box.id = object.id;
box.className = "f-18 trans-t-10 trans-l-50 rad-3 fg-error bg-error pd-t-35 pd-b-35 pd-l-25 pd-r-35";
document.body.appendChild(box);
setTimeout(function () {
var child = document.getElementById(object.id);
document.body.removeChild(child);
}, object.timer);
}
if (object.position === 'middle' && object.type === "error") {
var box = document.createElement('div');
box.innerHTML = object.message;
box.style.height = "auto";
box.style.width = "95%";
box.style.wordWrap = "break-word";
box.id = object.id;
box.className = "f-18 trans-t-50 trans-l-50 rad-3 fg-error bg-error pd-t-35 pd-b-35 pd-l-25 pd-r-35";
document.body.appendChild(box);
setTimeout(function () {
var child = document.getElementById(object.id);
document.body.removeChild(child);
}, object.timer);
}
if (object.position === 'bottom' && object.type === "error") {
var box = document.createElement('div');
box.innerHTML = object.message;
box.style.height = "auto";
box.style.width = "95%";
box.style.wordWrap = "break-word";
box.id = object.id;
box.className = "f-18 trans-t-90 trans-l-50 rad-3 fg-error bg-error pd-t-35 pd-b-35 pd-l-25 pd-r-35";
document.body.appendChild(box);
setTimeout(function () {
var child = document.getElementById(object.id);
document.body.removeChild(child);
}, object.timer);
}
}
else {
if (object.position === 'top' && object.type === "success") {
var box = document.createElement('div');
var cancel = document.createElement('button');
box.innerHTML = object.message;
box.style.height = "auto";
box.style.width = "95%";
box.style.wordWrap = "break-word";
box.id = object.id;
box.className = "f-18 trans-t-10 trans-l-50 rad-3 fg-success bg-success pd-t-35 pd-b-35 pd-l-25 pd-r-35";
cancel.innerHTML = "X";
cancel.style.width = "20px";
cancel.style.height = "20px";
cancel.style.color = "#def0d8";
cancel.style.background = "#1A9022";
cancel.style.marginLeft = "-5px";
cancel.style.border = "1px solid #ffffff00";
cancel.className = "f-10 f-w rad-70 trans-t-5 trans-l-100 clk-no-out";
cancel.id = object.id + "Cancel";
box.appendChild(cancel);
document.body.appendChild(box);
cancel.addEventListener('click', remove);
function remove() {
var child = document.getElementById(object.id);
document.body.removeChild(child);
}
}
if (object.position === 'middle' && object.type === "success") {
var box = document.createElement('div');
var cancel = document.createElement('button');
box.innerHTML = object.message;
box.style.height = "auto";
box.style.width = "95%";
box.style.wordWrap = "break-word";
box.id = object.id;
box.className = "f-18 trans-t-50 trans-l-50 rad-3 fg-success bg-success pd-t-35 pd-b-35 pd-l-25 pd-r-35";
cancel.innerHTML = "X";
cancel.style.width = "20px";
cancel.style.height = "20px";
cancel.style.color = "#def0d8";
cancel.style.background = "#1A9022";
cancel.style.marginLeft = "-5px";
cancel.style.border = "1px solid #ffffff00";
cancel.className = "f-10 f-w rad-70 trans-t-5 trans-l-100 clk-no-out";
cancel.id = object.id + "Cancel";
box.appendChild(cancel);
document.body.appendChild(box);
cancel.addEventListener('click', remove);
function remove() {
var child = document.getElementById(object.id);
document.body.removeChild(child);
}
}
if (object.position === 'bottom' && object.type === "success") {
var box = document.createElement('div');
var cancel = document.createElement('button');
box.innerHTML = object.message;
box.style.height = "auto";
box.style.width = "95%";
box.style.wordWrap = "break-word";
box.id = object.id;
box.className = "f-18 trans-t-90 trans-l-50 rad-3 fg-success bg-success pd-t-35 pd-b-35 pd-l-25 pd-r-35";
cancel.innerHTML = "X";
cancel.style.width = "20px";
cancel.style.height = "20px";
cancel.style.color = "#def0d8";
cancel.style.background = "#1A9022";
cancel.style.marginLeft = "-5px";
cancel.style.border = "1px solid #ffffff00";
cancel.className = "f-10 f-w rad-70 trans-t-5 trans-l-100 clk-no-out";
cancel.id = object.id + "Cancel";
box.appendChild(cancel);
document.body.appendChild(box);
cancel.addEventListener('click', remove);
function remove() {
var child = document.getElementById(object.id);
document.body.removeChild(child);
}
}
if (object.position === 'top' && object.type === "warning") {
var box = document.createElement('div');
var cancel = document.createElement('button');
box.innerHTML = object.message;
box.style.height = "auto";
box.style.width = "95%";
box.style.wordWrap = "break-word";
box.id = object.id;
box.className = "f-18 trans-t-10 trans-l-50 rad-3 fg-warning bg-warning pd-t-35 pd-b-35 pd-l-25 pd-r-35";
cancel.innerHTML = "X";
cancel.style.width = "20px";
cancel.style.height = "20px";
cancel.style.marginLeft = "-5px";
cancel.style.border = "1px solid #ffffff00";
cancel.className = "f-10 f-w rad-70 trans-t-5 trans-l-100 clk-no-out";
cancel.id = object.id + "Cancel";
cancel.style.color = "#fff6de";
cancel.style.background = "#876607";
box.appendChild(cancel);
document.body.appendChild(box);
cancel.addEventListener('click', remove);
function remove() {
var child = document.getElementById(object.id);
document.body.removeChild(child);
}
}
if (object.position === 'middle' && object.type === "warning") {
var box = document.createElement('div');
var cancel = document.createElement('button');
box.innerHTML = object.message;
box.style.height = "auto";
box.style.width = "95%";
box.style.wordWrap = "break-word";
box.id = object.id;
box.className = "f-18 trans-t-50 trans-l-50 rad-3 fg-warning bg-warning pd-t-35 pd-b-35 pd-l-25 pd-r-35";
cancel.innerHTML = "X";
cancel.style.width = "20px";
cancel.style.height = "20px";
cancel.style.marginLeft = "-5px";
cancel.style.border = "1px solid #ffffff00";
cancel.className = "f-10 f-w rad-70 trans-t-5 trans-l-100 clk-no-out";
cancel.id = object.id + "Cancel";
cancel.style.color = "#fff6de";
cancel.style.background = "#876607";
box.appendChild(cancel);
document.body.appendChild(box);
cancel.addEventListener('click', remove);
function remove() {
var child = document.getElementById(object.id);
document.body.removeChild(child);
}
}
if (object.position === 'bottom' && object.type === "warning") {
var box = document.createElement('div');
var cancel = document.createElement('button');
box.innerHTML = object.message;
box.style.height = "auto";
box.style.width = "95%";
box.style.wordWrap = "break-word";
box.id = object.id;
box.className = "f-18 trans-t-90 trans-l-50 rad-3 fg-warning bg-warning pd-t-35 pd-b-35 pd-l-25 pd-r-35";
cancel.innerHTML = "X";
cancel.style.width = "20px";
cancel.style.height = "20px";
cancel.style.marginLeft = "-5px";
cancel.style.border = "1px solid #ffffff00";
cancel.className = "f-10 f-w rad-70 trans-t-5 trans-l-100 clk-no-out";
cancel.id = object.id + "Cancel";
cancel.style.color = "#fff6de";
cancel.style.background = "#876607";
box.appendChild(cancel);
document.body.appendChild(box);
cancel.addEventListener('click', remove);
function remove() {
var child = document.getElementById(object.id);
document.body.removeChild(child);
}
}
if (object.position === 'top' && object.type === "error") {
var box = document.createElement('div');
var cancel = document.createElement('button');
box.innerHTML = object.message;
box.style.height = "auto";
box.style.width = "95%";
box.style.wordWrap = "break-word";
box.id = object.id;
box.className = "f-18 trans-t-10 trans-l-50 rad-3 fg-error bg-error pd-t-35 pd-b-35 pd-l-25 pd-r-35";
cancel.innerHTML = "X";
cancel.style.width = "20px";
cancel.style.height = "20px";
cancel.style.marginLeft = "-5px";
cancel.style.border = "1px solid #ffffff00";
cancel.className = "f-10 f-w rad-70 trans-t-5 trans-l-100 clk-no-out";
cancel.id = object.id + "Cancel";
cancel.style.color = "#fff6de";
cancel.style.background = "#876607";
cancel.style.color = "#fecdd6";
cancel.style.background = "#D61F33";
box.appendChild(cancel);
document.body.appendChild(box);
cancel.addEventListener('click', remove);
function remove() {
var child = document.getElementById(object.id);
document.body.removeChild(child);
}
}
if (object.position === 'middle' && object.type === "error") {
var box = document.createElement('div');
var cancel = document.createElement('button');
box.innerHTML = object.message;
box.style.height = "auto";
box.style.width = "95%";
box.style.wordWrap = "break-word";
box.id = object.id;
box.className = "f-18 trans-t-50 trans-l-50 rad-3 fg-error bg-error pd-t-35 pd-b-35 pd-l-25 pd-r-35";
cancel.innerHTML = "X";
cancel.style.width = "20px";
cancel.style.height = "20px";
cancel.style.marginLeft = "-5px";
cancel.style.border = "1px solid #ffffff00";
cancel.className = "f-10 f-w rad-70 trans-t-5 trans-l-100 clk-no-out";
cancel.id = object.id + "Cancel";
cancel.style.color = "#fff6de";
cancel.style.background = "#876607";
cancel.style.color = "#fecdd6";
cancel.style.background = "#D61F33";
box.appendChild(cancel);
box.appendChild(cancel);
document.body.appendChild(box);
cancel.addEventListener('click', remove);
function remove() {
var child = document.getElementById(object.id);
document.body.removeChild(child);
}
}
if (object.position === 'bottom' && object.type === "error") {
var box = document.createElement('div');
var cancel = document.createElement('button');
box.innerHTML = object.message;
box.style.height = "auto";
box.style.width = "95%";
box.style.wordWrap = "break-word";
box.id = object.id;
box.className = "f-18 trans-t-90 trans-l-50 rad-3 fg-error bg-error pd-t-35 pd-b-35 pd-l-25 pd-r-35";
cancel.innerHTML = "X";
cancel.style.width = "20px";
cancel.style.height = "20px";
cancel.style.marginLeft = "-5px";
cancel.style.border = "1px solid #ffffff00";
cancel.className = "f-10 f-w rad-70 trans-t-5 trans-l-100 clk-no-out";
cancel.id = object.id + "Cancel";
cancel.style.color = "#fff6de";
cancel.style.background = "#876607";
cancel.style.color = "#fecdd6";
cancel.style.background = "#D61F33";
box.appendChild(cancel);
box.appendChild(cancel);
document.body.appendChild(box);
cancel.addEventListener('click', remove);
function remove() {
var child = document.getElementById(object.id);
document.body.removeChild(child);
}
}
}
}
};

this.prompt = function(object){
if(object.element === "input"){
if(screen.width > 420){
var holder = document.createElement('div');
holder.style.width = "100%";
holder.style.margin = "0";
holder.style.position = "absolute";
holder.style.top = "0";
holder.style.height = "100vh";
holder.style.background = "rgba(1,1,1,0.3)";
holder.id = object.id;
var box = document.createElement('div');
box.id = object.id + "vBocx";
box.style.textAlign = "center";
box.style.width = "60%";
box.style.boxShadow = "0px 5px 30px rgba(0,0,0,0.3)";
if(object.animation){
box.className = "trans-t-15  trans-l-50 bg-white pd-t-20 pd-b-35 rad-4" + " " + object.animation ;
}
else{
box.className = "trans-t-15  trans-l-50 bg-white pd-t-20 pd-b-35 rad-4 top-in-crash";
}
var heading = document.createElement('p');
heading.innerHTML = object.header;
heading.className = "f-20 f-w fg-black";
heading.id = object.id + "Header";
box.appendChild(heading);
var br1 = document.createElement('br');
box.appendChild(br1);
var hr = document.createElement('div');
hr.style.borderTop = "1pt solid #d6d6d6";
box.appendChild(hr);
var br3 = document.createElement('br');
box.appendChild(br3);
var br4 = document.createElement('br');
box.appendChild(br4);
var br5 = document.createElement('br');
box.appendChild(br5);
var vBocxInput = document.createElement('input');
if(object.type){
vBocxInput.type = object.type;
}
else{
vBocxInput.type = 'text';
}
if(object.value){
vBocxInput.value = object.value;
}
vBocxInput.className = 'vBocxInputBasic';
if(object.type == "color"){
 vBocxInput.style.width = "70%";
 vBocxInput.style.padding = "0px";
 }
else{
 vBocxInput.style.width = "70%";
}
vBocxInput.id = object.id + "vBocxInput";
if(object.placeholder){
vBocxInput.placeholder = object.placeholder;
}
if(object.required === true){
vBocxInput.required = true;
}
else{
vBocxInput.required = false;
}
if(object.checked === true){
vBocxInput.checked = true;
}
else{
vBocxInput.checked = false;
}
box.appendChild(vBocxInput);
if((object.type == "checkbox" || object.type == "radio" ) && object.label){
var label = document.createElement('span');
vBocxInput.style.width = "20px";
label.innerHTML = object.label;
label.style.marginLeft = '15px';
box.appendChild(label);
}
var br5 = document.createElement('br');
box.appendChild(br5);
var br7 = document.createElement('br');
box.appendChild(br7);
var ok = document.createElement('button');
ok.innerHTML = "&#10004";
ok.style.width = "50px";
ok.style.marginLeft = "15%";
ok.style.height = "50px";
ok.style.float = "right";
ok.className = "f-17 fg-white btn-blue br-none clk-no-out box-sdw-3 rad-70 mr-b-10, mr-t-10 pd-b-4";
ok.id = object.id + "Ok";
var cancel = document.createElement('button');
cancel.innerHTML = "&#10008";
cancel.style.width = "50px";
cancel.className = "f-17 fg-white btn-dark-grey br-none clk-no-out box-sdw-3 mr-l-20 mr-t-10 mr-b-10 pd-4 rad-70";
cancel.style.marginRight = "15%";
cancel.style.height = "50px";
cancel.style.float = "right";
cancel.id = object.id + "Cancel";
box.appendChild(cancel);
box.appendChild(ok);
holder.appendChild(box);
document.body.appendChild(holder);
ok.onclick = function (){
returnValue()}
;
cancel.onclick = function (){
cancelIt()}
;
function cancelIt(){
var child = document.getElementById(object.id);
document.body.removeChild(child);
}
function returnValue(){
var output = document.getElementById(object.id + "vBocxInput").value;
object.action(output);
var child = document.getElementById(object.id);
document.body.removeChild(child);
}
}
else{
var holder = document.createElement('div');
holder.style.width = "100%";
holder.style.margin = "0";
holder.style.position = "absolute";
holder.style.top = "0";
holder.style.height = "100vh";
holder.style.background = "rgba(1,1,1,0.3)";
holder.id = object.id;
var box = document.createElement('div');
box.id = object.id + "vBocx";
box.style.textAlign = "center";
box.style.width = "90%";
box.style.boxShadow = "0px 5px 30px rgba(0,0,0,0.3)";
if(object.animation){
box.className = "trans-t-15  trans-l-50 bg-white pd-t-20 pd-b-35 rad-4" + " " + object.animation ;
}
else{
box.className = "trans-t-15  trans-l-50 bg-white pd-t-20 pd-b-35 rad-4 top-in-crash";
}
var heading = document.createElement('p');
heading.innerHTML = object.header;
heading.className = "f-20 f-w fg-black";
heading.id = object.id + "Header"
box.appendChild(heading);
var br1 = document.createElement('br');
box.appendChild(br1);
var hr = document.createElement('div');
hr.style.borderTop = "1pt solid #d6d6d6";
box.appendChild(hr);
var br3 = document.createElement('br');
box.appendChild(br3);
var br4 = document.createElement('br');
box.appendChild(br4);
var br5 = document.createElement('br');
box.appendChild(br5);
vBocxInput = document.createElement('input');
if(object.type){
vBocxInput.type = object.type;
}
else{
vBocxInput.type = 'text';
}
if(object.name){
vBocxInput.name = object.name;
}
else{
vBocxInput.name = 'vBocxInput';
}
if(object.value){
vBocxInput.value = object.value;
}
if(object.class){
vBocxInput.className = object.class;
}
else{
vBocxInput.className = 'vBocxInputBasic';
}
vBocxInput.id= object.id + "vBocxInput";
if(object.placeholder){
vBocxInput.placeholder = object.placeholder;
}
if(object.required === true){
vBocxInput.required = true;
}
else{
vBocxInput.required = false;
}
if(object.checked === true){
vBocxInput.checked = true;
}
else{
vBocxInput.checked = false;
}
if(object.src){
vBocxInput.src = object.src;
}
box.appendChild(vBocxInput);
if((object.type == "checkbox" || object.type == "radio" ) && object.label){
var label = document.createElement('span');
vBocxInput.style.width = "20px";
label.innerHTML = object.label;
label.style.marginLeft = '15px';
box.appendChild(label);
}
else if(object.type == "color"){
vBocxInput.style.width = "70%";
vBocxInput.style.padding = "0px";
}
else{
vBocxInput.style.width = "70%";
}
var br5 = document.createElement('br');
box.appendChild(br5);
var br7 = document.createElement('br');
box.appendChild(br7);
var ok = document.createElement('button');
ok.innerHTML = "&#10004";
ok.style.width = "50px";
ok.style.marginLeft = "15%";
ok.style.height = "50px";
ok.style.float = "right";
ok.id = object.id + "Ok";
ok.className = "f-17 fg-white btn-blue br-none clk-no-out box-sdw-3 rad-70 mr-b-10, mr-t-10 pd-b-4";
var cancel = document.createElement('button');
cancel.innerHTML = "&#10008";
cancel.style.width = "50px";
cancel.className = "f-17 fg-white btn-dark-grey br-none clk-no-out box-sdw-3 mr-l-20 mr-t-10 mr-b-10 pd-4 rad-70";
cancel.id = object.id + "Cancel";
cancel.style.marginRight = "15%";
cancel.style.height = "50px";
cancel.style.float = "right";
box.appendChild(cancel);
box.appendChild(ok);
holder.appendChild(box);
document.body.appendChild(holder);
ok.onclick = function (){
returnValue()}
;
cancel.onclick = function (){
cancelIt()}
;
function cancelIt(){
var child = document.getElementById(object.id);
document.body.removeChild(child);
}
function returnValue(){
var output = document.getElementById(object.id + "vBocxInput").value;
object.action(output);
var child = document.getElementById(object.id);
document.body.removeChild(child);
}
}
}
if(object.element === "select"){
if(screen.width > 420){
var holder = document.createElement('div');
holder.style.width = "100%";
holder.style.margin = "0";
holder.style.position = "absolute";
holder.style.top = "0";
holder.style.height = "100vh";
holder.style.background = "rgba(1,1,1,0.3)";
holder.id = object.id;
var box = document.createElement('div');
box.id = object.id + "vBocx";
box.style.textAlign = "center";
box.style.width = "60%";
box.style.boxShadow = "0px 5px 30px rgba(0,0,0,0.3)";
if(object.animation){
box.className = "trans-t-15  trans-l-50 bg-white pd-t-20 pd-b-35 rad-4" + " " + object.animation ;
}
else{
box.className = "trans-t-15  trans-l-50 bg-white pd-t-20 pd-b-35 rad-4 top-in-crash";	
}
var heading = document.createElement('p');
heading.innerHTML = object.header;
heading.className = "f-20 f-w fg-black";
heading.id = object.id + "Header";
box.appendChild(heading);
var br1 = document.createElement('br');
box.appendChild(br1);
var hr = document.createElement('div');
hr.style.borderTop = "1pt solid #d6d6d6";
box.appendChild(hr);
var br3 = document.createElement('br');
box.appendChild(br3);
var br4 = document.createElement('br');
box.appendChild(br4);
var br5 = document.createElement('br');
box.appendChild(br5);
var vBocxSelect = document.createElement('select');
vBocxSelect.className = "f-17 rad-4 fg-black br-light-grey clk-no-out box-sdw-1 pd-10";
vBocxSelect.style.width = "70%";
vBocxSelect.id = object.id + "vBocxSelect";
box.appendChild(vBocxSelect);
var br6 = document.createElement('br');
box.appendChild(br6);
var br7 = document.createElement('br');
box.appendChild(br7);
for(var i = 0;
i < object.options.length;
i++){
var vBocxOption = document.createElement('option');
vBocxOption.value = object.options[i];
vBocxOption.text = object.options[i];
vBocxOption.style.borderRadius = "5px";
vBocxOption.id = object.id + i + "vBocxOption";
vBocxSelect.appendChild(vBocxOption);
}
var ok = document.createElement('button');
ok.innerHTML = "&#10004";
ok.style.width = "50px";
ok.style.marginLeft = "15%";
ok.style.height = "50px";
ok.style.float = "right";
ok.className = "f-17 fg-white btn-blue br-none clk-no-out box-sdw-3 rad-70 mr-b-10, mr-t-10 pd-b-4";
ok.id = object.id + "Ok";
var cancel = document.createElement('button');
cancel.innerHTML = "&#10008";
cancel.style.width = "50px";
cancel.className = "f-17 fg-white btn-dark-grey br-none clk-no-out box-sdw-3 mr-l-20 mr-t-10 mr-b-10 pd-4 rad-70";
cancel.id = object.id + "Cancel";
cancel.style.marginRight = "15%";
cancel.style.height = "50px";
cancel.style.float = "right";
box.appendChild(cancel);
box.appendChild(ok);
holder.appendChild(box);
document.body.appendChild(holder);
ok.onclick = function (){
var index = document.getElementById(object.id + "vBocxSelect").selectedIndex;
var output = document.getElementsByTagName("option")[index].value;
object.action(output);
var child = document.getElementById(object.id);
document.body.removeChild(child);
}
;
cancel.onclick = function (){
cancelIt()}
;
function cancelIt(){
var child = document.getElementById(object.id);
document.body.removeChild(child);
}
}
else{
var holder = document.createElement('div');
holder.style.width = "100%";
holder.style.margin = "0";
holder.style.position = "absolute";
holder.style.top = "0";
holder.style.height = "100vh";
holder.style.background = "rgba(1,1,1,0.3)";
holder.id = object.id;
var box = document.createElement('div');
box.id = object.id + "vBocx";
box.style.textAlign = "center";
box.style.width = "90%";
box.style.boxShadow = "0px 5px 30px rgba(0,0,0,0.3)";
if(object.animation){
box.className = "trans-t-15 trans-l-50 bg-white pd-t-20 pd-b-35 rad-4" + " " + object.animation ;
}
else{
box.className = "trans-t-15  trans-l-50 bg-white pd-t-20 pd-b-35 rad-4 top-in-crash";	
}
var heading = document.createElement('p');
heading.innerHTML = object.header;
heading.className = "f-20 f-w fg-black";
heading.id = object.id + "Header";
box.appendChild(heading);
var br1 = document.createElement('br');
box.appendChild(br1);
var hr = document.createElement('div');
hr.style.borderTop = "1pt solid #d6d6d6";
box.appendChild(hr);
var br3 = document.createElement('br');
box.appendChild(br3);
var br4 = document.createElement('br');
box.appendChild(br4);
var br5 = document.createElement('br');
box.appendChild(br5);
var vBocxSelect = document.createElement('select');
vBocxSelect.className = "f-17 rad-4 fg-black br-light-grey clk-no-out box-sdw-1 pd-10";
vBocxSelect.style.width = "70%";
vBocxSelect.id = object.id + "vBocxSelect";
box.appendChild(vBocxSelect);
var br6 = document.createElement('br');
box.appendChild(br6);
var br7 = document.createElement('br');
box.appendChild(br7);
for(var i = 0;
i < object.options.length;
i++){
var vBocxOption = document.createElement('option');
vBocxOption.value = object.options[i];
vBocxOption.text = object.options[i];
vBocxOption.style.borderRadius = "5px";
vBocxOption.id = object.id + i + "vBocxOption";
vBocxSelect.appendChild(vBocxOption);
}
var ok = document.createElement('button');
ok.innerHTML = "&#10004";
ok.style.width = "50px";
ok.style.marginLeft = "15%";
ok.style.height = "50px";
ok.style.float = "right";
ok.className = "f-17 fg-white btn-blue br-none clk-no-out box-sdw-3 rad-70 mr-b-10, mr-t-10 pd-b-4";
ok.id = object.id + "Ok";
var cancel = document.createElement('button');
cancel.innerHTML = "&#10008";
cancel.style.width = "50px";
cancel.className = "f-17 fg-white btn-dark-grey br-none clk-no-out box-sdw-3 mr-l-20 mr-t-10 mr-b-10 pd-4 rad-70";
cancel.id = object.id + "Cancel";
cancel.style.marginRight = "15%";
cancel.style.height = "50px";
cancel.style.float = "right";
box.appendChild(cancel);
box.appendChild(ok);
holder.appendChild(box);
document.body.appendChild(holder);
ok.onclick = function (){
var index = document.getElementById(object.id + "vBocxSelect").selectedIndex;
var output = document.getElementsByTagName("option")[index].value;
object.action(output);
var child = document.getElementById(object.id);
document.body.removeChild(child);
}
;
cancel.onclick = function (){
cancelIt()}
;
function cancelIt(){
var child = document.getElementById(object.id);
document.body.removeChild(child);
}
}
};
}

this.confirm = function(object){
if(screen.width > 420){
 var holder = document.createElement('div');
 holder.style.width = "100%";
 holder.style.margin = "0";
 holder.style.position = "absolute";
 holder.style.top = "0";
 holder.style.height = "100vh";
 holder.style.background = "rgba(1,1,1,0.3)";
 holder.id = object.id;
 var box = document.createElement('div');
 box.id = object.id + "vBocx";
 box.style.textAlign = "center";
 box.style.width = "60%";
 box.style.boxShadow = "0px 5px 30px rgba(0,0,0,0.3)";
 if(object.animation){
 box.className = "trans-t-15  trans-l-50 bg-white pd-t-20 pd-b-35 rad-4" + " " + object.animation  ;
 }
 else{
 box.className = "trans-t-15  trans-l-50 bg-white pd-t-20 pd-b-35 rad-4 top-in-crash";
 }
 var heading = document.createElement('p');
 heading.innerHTML = object.header;
 heading.className = "f-20 f-w fg-black";
 heading.id = object.id + "Header";
 box.appendChild(heading);
 var br1 = document.createElement('br');
 box.appendChild(br1);
 var hr = document.createElement('div');
 hr.style.borderTop = "1pt solid #d6d6d6";
 box.appendChild(hr);
 var br2 = document.createElement('br');
 box.appendChild(br2);
 var ok = document.createElement('button');
 ok.innerHTML = "&#10004";
 ok.style.width = "50px";
 ok.style.marginLeft = "15%";
 ok.style.height = "50px";
 ok.style.float = "right";
 ok.className = "f-17 fg-white btn-blue br-none clk-no-out box-sdw-3 rad-70 mr-t-10";
 ok.id = object.id + "Ok";
 var cancel = document.createElement('button');
 cancel.innerHTML = "&#10008";
 cancel.style.width = "50px";
 cancel.className = "f-17 fg-white btn-dark-grey br-none clk-no-out box-sdw-3 mr-l-20 mr-t-10 rad-70";
 cancel.id = object.id + "Cancel";
 cancel.style.marginRight = "15%";
 cancel.style.height = "50px";
 cancel.style.float = "right";
 box.appendChild(cancel);
 box.appendChild(ok);
 holder.appendChild(box);
 document.body.appendChild(holder);
 ok.onclick = function (){
 object.action();
 var child = document.getElementById(object.id);
 document.body.removeChild(child);
 }
 ;
 cancel.onclick = function (){
 cancelIt()
 }
 ;
 function cancelIt(){
 var child = document.getElementById(object.id);
 document.body.removeChild(child);
}}
else{
var holder = document.createElement('div');
holder.style.width = "100%";
holder.style.margin = "0";
holder.style.position = "absolute";
holder.style.top = "0";
holder.style.height = "100vh";
holder.style.background = "rgba(1,1,1,0.3)";
holder.id = object.id;
var box = document.createElement('div');
box.id = object.id + "vBocx";
box.style.textAlign = "center";
box.style.width = "90%";
box.style.boxShadow = "0px 5px 30px rgba(0,0,0,0.3)";
if(object.animation){
box.className = "trans-t-15  trans-l-50 bg-white pd-t-20 pd-b-35 rad-4" + " " + object.animation  ;
}
else{
box.className = "trans-t-15  trans-l-50 bg-white pd-t-20 pd-b-35 rad-4 top-in-crash";
}
var heading = document.createElement('p');
heading.innerHTML = object.header;
heading.className = "f-20 f-w fg-black";
heading.id = object.id + "Header";
box.appendChild(heading);
var br1 = document.createElement('br');
box.appendChild(br1);
var hr = document.createElement('div');
hr.style.borderTop = "1pt solid #d6d6d6";
box.appendChild(hr);
var br2 = document.createElement('br');
box.appendChild(br2);
var ok = document.createElement('button');
ok.innerHTML = "&#10004";
ok.style.width = "50px";
ok.style.marginLeft = "15%";
ok.style.height = "50px";
ok.style.float = "right";
ok.className = "f-17 fg-white btn-blue br-none clk-no-out box-sdw-3 rad-70 mr-t-10";
ok.id = object.id + "Ok";
var cancel = document.createElement('button');
cancel.innerHTML = "&#10008";
cancel.style.width = "50px";
cancel.className = "f-17 fg-white btn-dark-grey br-none clk-no-out box-sdw-3 mr-l-20 mr-t-10 rad-70";
cancel.id = object.id + "Cancel";
cancel.style.marginRight = "15%";
cancel.style.height = "50px";
cancel.style.float = "right";
box.appendChild(cancel);
box.appendChild(ok);
holder.appendChild(box);
document.body.appendChild(holder);
ok.onclick = function (){
object.action();
var child = document.getElementById(object.id);
document.body.removeChild(child);
}
;
cancel.onclick = function (){
cancelIt()
}
;
function cancelIt(){
var child = document.getElementById(object.id);
document.body.removeChild(child);
}
}
}
}
}
