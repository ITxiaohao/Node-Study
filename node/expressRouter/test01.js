const express = require("express")
const app = express();

const path = require("path");

const fs = require("fs");

// 使用自己写的 router 路由，基于 express.Router
const router = require("./router.js")

// 将读取的文件返回到页面中
// const rs = fs.createReadStream("./node/expressRouter/a.txt");

// rs.setEncoding("utf-8");

// app.get('/', function (req, res) {
//     rs.on('data', function(chunk){
//         res.end(chunk);
//     })
// })

// __dirname 当前目录下
var files = express.static(path.join(__dirname));  //设置静态资源路径
console.log(path.join(__dirname))  // e:\zsh\vue\easy_vue\easy_vue_vue-router_axios\node\expressRouter

app.use("/",files); //使用静态资源
app.use("/",router); //使用路由设置

var server = app.listen(3001,function(){
    var host = "localhost";
    var port = server.address().port;
    console.log("Listening Server at http://%s:%s",host,port);
});