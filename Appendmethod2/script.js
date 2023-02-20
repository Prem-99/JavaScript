
function Click(){
    let parentElement = document.body;
    let element = document.createElement("IMG");

    element.setAttribute("src","https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80")
element.setAttribute("alt", "look");
element.setAttribute("title", "picture of photo")

parentElement.appendChild(element);
}
