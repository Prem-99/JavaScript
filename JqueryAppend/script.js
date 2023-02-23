
$(document).ready(function(){

    $("button").click(function(){

    

    $(".inner").append("<h4>Zara</h4>");

    });
// appendTo() Method //
$("button").click(function(){

$("<h3>zara</h3>").appendTo(".inner");

});
// jQuery after() Method //
$("button").click(function(){
    $(".inner").after("<h1>prem</h1>")
})
// insertAfter() Method //
 $("button").click(function(){

    $("<h5>zara</h5>").insertAfter(".inner");

});

// prepend() Method //
$("button").click(function(){
    $(".inner").prepend("<p>prem</p>");
});
});