var http = require("http");
var fs = require("fs");

http.createServer(function(req,res){

    fs.readFile("./node/module/a.txt", "utf-8", function(err,data){
        if (err) throw err
        res.end(data); //表示请求结束，将结果返回给浏览器  只能写一个 res.end 因为请求结束才返回结果，只有一次请求结束
    })
    console.log("request going 正在响应");  //当浏览器访问的时候，在控制台回打印此消息
    // res.end("haha"); //表示请求结束，将结果返回给浏览器
}).listen(3000);