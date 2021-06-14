var glides =  ['glideone', 'glidetwo', 'glidethree', 'glidefour','glidefive', 'glidesix'];
var tooltip = ['Intro', 'CDN Doc', 'Div and Section Doc', 'Script Doc', 'Customization', 'Navigation'];


function copy(){

var copy = document.getElementById('copy');
var selection = window.getSelection();
var get = document.createRange();
get.selectNodeContents(copy);
selection.removeAllRanges();
selection.addRange(get);
document.execCommand('copy');

var box = document.createElement('div');
box.innerHTML = 'Copied to clipboard';
box.style.cssText = 'font-size:18px;top:10%;left:50%;position:absolute;border-radius:3px;color:#e84570;background:white;height:30px;width:180px;transform:translate(-50%, -15%);padding-top:5px;padding-left:25px;';
box.id = 'success';
box.className = 'f-18 rad-3 pd-t-35 pd-b-35 pd-l-25 pd-r-35';
document.body.appendChild(box);
setTimeout(function () {
var child = document.getElementById('success');
document.body.removeChild(child);
}, 3000);

}