let express = require('express');
let Mock = require('mockjs');

let app = express();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.all('/test.action', function(req, res) {
    res.json(Mock.mock({
        "data|70-120": [{
            "name|5-8": /[a-zA-Z]/,
            "id|+10": 1,
            "value|0-500": 20
        }]
    }))
});

app.listen('8090');