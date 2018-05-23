/*
 * @Author: mikey.zhaopeng 
 * @Date: 2018-05-21 00:40:55 
 * @Last Modified by:   mikey.zhaopeng 
 * @Last Modified time: 2018-05-21 00:40:55 
 */

const express = require('express');
const app = express();

const path = require("path");

const hello = [
    {
        name: 'hello',
        age: 17
    },
    {
        name: 'express',
        age: 18
    }
]

app.get('/', function (req, res) {
    res.send('hello express');
})

app.get('/hello', function (req, res) {
    res.send(hello);
})

app.post('/', function (req, res) {
    res.send('Got a Post request , 这是一个 Post 请求')
})

// /user 节点接受 DELETE 请求
app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user 在 user 路径下得到删除请求')
})

// // 可以访问 public 下的文件
// app.use(express.static('public'));

// 只能访问/public/static 下的静态文件 http://localhost:3000/static/index.html 
app.use('/static', express.static(__dirname + '/public'));

console.log(path.join(__dirname))
// // 如果你的静态资源存放在多个目录下面，你可以多次调用 express.static 中间件：
// app.use(express.static('img'));

// // 可以访问 public 下虚拟的文件目录，即 /static
// app.use('/static', express.static('public'));

var server = app.listen(3002, function () {
    var host = 'localhost';
    var port = server.address().port;
    console.log(host)
    console.log(port)
    console.log('Example app listening at http://%s:%s', host, port);
});


