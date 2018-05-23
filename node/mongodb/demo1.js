const mongo = require("mongodb");  //引入mongo模块

const assert = require("assert");  //引入断言模块

const MongoClient = mongo.MongoClient;  // 开启服务

const Urls = "mongodb://localhost:27017/demo1";  //url储存  放在连接池中

MongoClient.connect(Urls, function (err, db) {   //获取连接
    assert.strictEqual(null, err)  //使用断言模块代替以前的 if判断 测试 actual 参数与 expected 参数是否全等。

    // 插入数据
    // db.collection("test2").insert(
    //     {
    //         name: "xiaoming",
    //         age: 666
    //     },
    //     function (err, result) {
    //         assert.strictEqual(null, err);
    //         console.log(result);
    //         db.close();
    //     }
    // )

    // 查找数据
    db.collection("test2").find({name: "xiaoming"}).toArray(function (err, result) {
        assert.strictEqual(null,err);
        console.log(result);
        db.close();
    })

    // 删除数据
    // db.collection("test2").deleteOne({name:"xiaoming"}, function(err, result) {
    //     assert.strictEqual(null, err);
    //     console.log(result);
    //     db.close();
    // })

    // 修改数据
    db.collection("test2").update({"name":"zsh"},{$set:{"name":"zengshunhao"}},function(err, result) {
        assert.strictEqual(null, err);
        console.log(result);
        db.close();
    })

})
