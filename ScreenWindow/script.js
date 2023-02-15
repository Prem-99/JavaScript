
function width(){
var widthOfScreen=screen.width;
document.getElementById("width").innerHTML = "Width of screen is"   + widthOfScreen + "px";

}
function height(){
    var heightOfScreen=screen.height;
    document.getElementById("height").innerHTML="Height of screen is"  + heightOfScreen + "px";
}
function Aheight(){
    var aHeight = screen.availHeight;
    document.getElementById("Aheight").innerHTML = "Availabale Height Of Screen is " + aHeight + "px";

}
 function Awidth(){
    var awidth = screen.availWidth
    document.getElementById("Awidth").innerHTML = "Availabale of width screen is " + awidth + "px";
 }