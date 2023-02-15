function check(){
    var onlinestatus=navigator.online;
    if (onlinestatus){
        document.getElementById("output").innerHTML="Browser is online " 
    }
    else{
        document.getElementById("output").innerHTML="Browser is offline"
    }
}
function check1(){
    var os_by_version=navigator.appVersion;
    var os_by_platform=navigator.platform
    document.getElementById("output1").innerHTML="Os by application property :" + os_by_version + "<br> Os by platform " + os_by_platform;
}

function check2(){
    var appname = navigator.appName;
    var appcode = navigator.appCodeName;
    var useragent = navigator.userAgent;
    document.getElementById("output2").innerHTML="The app name is " + appname + "<br> The Code Name is" + appcode + "<br> The user agent is" + useragent;
}

function check3(){
    var cookie = navigator.cookieEnabled;
    if(cookie){
        document.getElementById("output3").innerHTML = "Cookie is Enabled";
    }
    else{
        document.getElementById("output3").innerHTML = "Cookie is Disabled";
    }
}