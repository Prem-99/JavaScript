
$(document).ready(function(){
    $("button").click(function(){
        $("home").attr("title", "New Anchor Title");
       
        alert("changed Title = " + $("home").attr("title"))
    });
});