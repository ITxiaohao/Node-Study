function fn01() {
    console.log("modelFirst.js 下的 fn01 方法")
}

function fn02() {
    console.log("modelFirst.js 下的 fn02 方法~~~")
}

fn03 = () => {console.log("hello module 模块化")}

module.exports = {
    "fn01": fn01,
    "fn02": fn02,
    "fn03": fn03
}