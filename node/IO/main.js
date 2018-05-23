var fs = require("fs");

fs.readFile("./node/IO/a.txt", "utf-8", function (err, data){
    if (err) {
        throw err;
    }else {
        console.log(11);
    }
})

setTimeout(function(){
    console.log("定时器启动")
},10)

// for(var i=0; i<1000; i++){
//     console.log(i);
// }

// 回调函数练习
function fn01(data, callback) {
    if(data) {
        callback("",data);
    }else {
        var err = new Error("出错了")
        callback(err)
    }
}
fn01("aa", function(err,data){
    if(err){
        console.log("错误"+err);
    }else{
        console.log(data);
    }
})
