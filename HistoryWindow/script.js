 function number(){
    var num = history.length;
    document.getElementById("output").innerHTML= "History visited"   + num +  "pages"

 }
 function goback(){
    history.back();
 }
 function goforward(){
    history.forward();
 }
 

history.go(0);// loads current page
history.go(-1);// loads previous page 
history.go(-2);// loads 2previous page
history.go(1)// loads next page
history.go(2)// loads 2next page 