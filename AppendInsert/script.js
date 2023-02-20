
let parent = document.getElementById("parent");
let sibling = document.getElementById("para1");

let element = document.createElement("p");
element.innerHTML = "This is javascript";
parent.insertBefore(element, sibling);