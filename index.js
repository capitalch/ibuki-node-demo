'use strict';
const path = require('path');
const express = require('express');
const ibuki = require('./ibuki');
const httpCalls = require('./http-calls');
const app = express();

// CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', ' GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.get('/states', function (req, res) {
    const obj = {
        url: ' http://services.groupkt.com/state/get/IND/all',
        res: res
    };
    ibuki.emit('get:states', obj);
});

app.listen(8080, _ => console.log('Running on port ' + 8080));