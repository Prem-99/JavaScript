$(document).ready(function(){
    $("text").click(function(){
        alert($("p").text());
    });
    $("html").click(function(){
        alert($("p").html())
    })
})