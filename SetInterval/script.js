 
 function ClearIt(){
    clearInterval(interval);
 }
 var interval = setInterval(counting, 1000);
 var count =1;
 var element= document.getElementById("output");
  function counting(){
    element.innerHTML += count + "<br>"
    count++
  }
 