


fetch("https://jsonplaceholder.typicode.com/posts",{
method:"Post",
headers:{"content-type": 'application/json'},
body: JSON.stringify({
    Name: " kumar",
    Age: 18,
    userId: 2,
    id: 800,
    title: " fetch api",
    completed: true
})
})
.then(response => response.json())
.then(data => console.log(data) )






