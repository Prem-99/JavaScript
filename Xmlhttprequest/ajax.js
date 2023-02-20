(function () {
    getTodoList();
})();

function createList(){
    const ul = document.getElementById("ul");
    const main = document.querySelector("main");
    main.append(ul);
}

function createListItem(item){
    const li =document.getElementById("li");
    li.innerHTML = item.title;
    const ul = document.querySelector("main ul")
    ul.append(li);
}

function showLoader(){
    const loader = document.querySelector("main #loader");
    loader.classList.replace("d-inline-block", "d-none");

}
function hideLoader(){
    const loader = document.querySelector("main #loader");
    loader.classList.replace("d-inline-block", "d-none");
}

function getTodoList(){
    const request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    request.send();
    request.onreadystatechange = function(){
        if (this.readyState === 3){
            showLoader();
        }
        if (this.readyState === 4){
            hideLoader();
        
        if(this.status >= 200 && this.status < 300){
            const response = this.responseText;
            const parsedResponse = JSON.parse(response);
        
        createList();
        parsedResponse.forEach((each_item) => {
            createListItem(each_item);
        });
      
    }
        
        else if (this.status === 400) {
            console.log("Bad Request");

        }
        else if (this.status === 401) {
            console.log("you are not authorised user");
        }
        else if (this.status === 404) {
            console.log("Wrong API");
        }
        else {
            console.log("something went wrong, Try again later!");
        }
    }
}
};
function postListItem(requestObj){
    const request = new XMLHttpRequest();
    request.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    const requestData = JSON.stringify(requestObj);
    request.send(requestData);
    request.onreadystatechange = function(){
        if (this.readyState === 3){
            showLoader();
        }
        if (this.readyState === 4){
            hideLoader();
        }
if (this.status >= 200 && this.status < 300){
    const response =this.responseText;
    const parsedResponse =JSON.parse(response);

    console.log(parsedResponse);

} else if (this.status === 400){
    console.log("Bad Request");
} else if (this.status === 401){
    console.log("your not authorised user");

} else if (this.status === 404){
console.log("Wrong API");


    } else {
        console.log("something went wrong, Try again later");
    }

    }
}



