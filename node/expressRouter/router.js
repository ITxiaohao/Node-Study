const express = require("express");

const routes = express.Router();

routes.get("/", function(req, res) {
    res.send("首页");
});

routes.get("/edit", function(req, res) {
    return res.redirect("/indexss.html");  // 页面上输入 http://localhost:3001/edit , 将路径重定向为: http://localhost:3001/indexss.html
});

routes.get("/img", function(req, res) {
    res.send("a.txt");
});

module.exports = routes;