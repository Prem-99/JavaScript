

$(document).ready(function(){

    $("#b1").click(function(){
       $('p').text("the quick <b> brown fox</b> jumps over  ")

    });
    $("#b2").click(function(){
   $("p").html("the quick <b> brown fox</b> jumps over");
    });

    $("#b3").click(function(){
        $("p").replaceWith("<h2>this is new heading</h2>")
       
    })
    
});