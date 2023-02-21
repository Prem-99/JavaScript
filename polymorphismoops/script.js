class parent{
    getMobile(){
        console.log("iphone 11 ")
    }
}
class child extends parent(){
    getMobile(){
        console.log("iphone 11 pro")
    }
}
let obj = new child();
obj.getMobile();