function fn01(){  //编写一个方法 fn01
    console.log("moduleSecond——————fn01");
}
function fn02(){  //编写一个方法 fn02
    console.log("moduleSecond——————fn02");
}

//暴露接口
module.exports = {
    "fn01":fn01,
    "fn02":fn02
}