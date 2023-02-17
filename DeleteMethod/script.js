fetch("https://jsonplaceholder.typicode.com/todos",{
    Method:"DELETE",

    

})
.then(response => response.json())
.then(data =>console.log(data))