const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send("hello express 嘻嘻嘻s ")
})

const server = app.listen(3000, function() {
    var host = "localhost";
    var port = server.address().port;
    console.log("Server is ： http://%s:%s",host,port)
})

