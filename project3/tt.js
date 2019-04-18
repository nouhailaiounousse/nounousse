var space = document.getElementById("space");
var blur = document.getElementById("blur");
var color = document.getElementById("colOr");
var img = document.getElementById("img");
var js = document.getElementById("js");
var tswr = document.getElementById("tswira")


function spacing(s) {
    img.style.padding = s +"px";


}
function bluring (b) {
    tswr.style ="filter:blur("+ b +"px)";


}

function coloring (c) {
    img.style.background = c;
    js.style.color = c;
}