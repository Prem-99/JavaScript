function geturl(){
    var url= location.href;
    document.getElementById("output").innerHTML = url;
}
function gethost(){
    var host=location.host;
    var hostname=location.hostname;
    document.getElementById("output1").innerHTML="host - " + host   + " <br> hostName - " + hostname;
}
function loadNew(){
    location.assign("https://github.com/Prem-99")
}
function loadHome(){
    location.replace("https://www.google.com/")
}