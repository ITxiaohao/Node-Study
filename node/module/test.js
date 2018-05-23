var module01 =  require("./moduleFirst.js") // 使用 require 引入模块，申明一个变量来接收module01接口暴露的对象

var module02 =  require("./moduleSecond.js") // 使用 require 引入模块，申明一个变量来接收module01接口暴露的对象

const signale = require('signale');

signale.success("成功啦")

module01.fn01();// 访问接口暴露的方法

module01.fn03();

module02.fn01();// 访问接口暴露的方法