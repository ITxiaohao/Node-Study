// 异步 IO 读取操作
// 创建文件读取流
var fs = require("fs");

var data = "" // 声明一个空字符串来存 读取的数据

var rs = fs.createReadStream("./node/IO/a.txt"); // 文件读取流

var ws = fs.createWriteStream("./node/IO/b.txt"); // 文件写入流

rs.setEncoding("utf-8");

// 监听当有数据流入的时候
rs.on('data', function(chunk) {
    // data += chunk;  // 将读取的数据拼接到 data 上
    ws.write(chunk, "utf-8");
    console.log("...")  // 读的过程中，我们打印三个点
})
        
rs.on('end', function() {
    console.log("没有数据了");
    ws.end();  // 关闭写入流
})
