let express = require('express');
let Mock = require('mockjs');

let app = express();

app.all('/test.action', function(req, res) {
    res.json(Mock.mock({
        "status": 200,
        "data|1-9": [{
            "name|5-8": /[a-zA-Z]/,
            "id|+10": 1,
            "value|0-500": 20
        }]
    }))
});

app.listen('8080');