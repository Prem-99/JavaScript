
const element = document.getElementById("onclick");
element.addEventListener("click", clickFxn);
element.addEventListener("mouseover", mouseoverFxn);
element.addEventListener("mouseout",mouseoutFxn);

function clickFxn(){
    alert("click event fired this function");
    alert("one more alert here");
}
function mouseoverFxn(){
    element.style.background="green";
    element.style.padding="10px";

}
function mouseoutFxn(){
    element.style.background="white";
    element.style.padding="4px";
}