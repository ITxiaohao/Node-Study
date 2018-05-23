let fs = require("fs");  // node 内置模块可以直接引入  fs 文件系统操作模块


// 异步读取文件，接收回调函数，在回调函数中一个参数是 err ，接收错误信息，一个参数是返回结果，也就是 data ，用 if throw 抛出错误
// 1、读取的文件路径 ， 2、编码格式， 3、回调函数，回调函数中有两个参数  err 和 data ,  err表示错误信息，当文件读取错误的时候会赋值错误提示，data表示读取的文件内容
fs.readFile("./node/module/a.txt", "utf-8", function (err, data) {  // 读取 a 文件
    if (err) {
        console.log(err);
    }
    fs.writeFile("./node/module/b.txt", data, function (err) {  // 写入 b 文件 writeFile是将内容替换掉，如果想要追加写入，可以使用appendFile方法
        if (err) {
            console.log(err);
        }
    })
    fs.appendFile("./node/module/b.txt", data, function (err) {
        if (err) {
            console.log(err);
        }
    })
})

// 同步读取文件,没有回调函数, readFileSync 这个函数返回的就是一个 data 对象，要用新变量来接收，如果发生错误，要用 try catch 捕获

try {
    var dataSync = fs.readFileSync("./node/module/b.txt", "utf-8");
    console.log(dataSync)
} catch (error) {
    // 必须要用 try catch 来捕获异常，不然不知道哪里出了问题
    console.log(error)
}

// // 删除文件
// fs.unlink("./node/module/b.txt", function (err){
//     if (err) throw err
// })