
var count = 1;
function Click(){
    let parentElement = document.body;

    let element =document.createElement("p");
element.id = "id" + count;
element.innerHTML="New paragraph with id = " + element.id;
parentElement.appendChild(element);
count++;
}