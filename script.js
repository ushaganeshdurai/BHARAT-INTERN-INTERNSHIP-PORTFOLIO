document.getElementById('git').addEventListener('click',function(){
    redirectToWebsite('https://github.com/ushaganeshdurai');
});
function redirectToWebsite (url) {
    window.location.href = url;
}
var dat = new Date();
let yr = dat.getFullYear();
console.log(yr);
var copyrightyear = document.getElementById('copyright');
copyrightyear.innerText += " " + yr;