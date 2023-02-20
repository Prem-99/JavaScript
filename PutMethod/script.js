fetch("https://jsonplaceholder.typicode.com/todos",{
    method: "Put",
    headers:{'content-type': 'application/json'},
    body:JSON.stringify({
        userId: 1,
        id: 5,
        title:'hello fetch api',
        completed: true
    })

})
.then(response => response.json())
.then(data => console.log(data))

