'use strict';
const axios = require('axios');
const ibuki = require('./ibuki');
let httpCalls = {};

ibuki.filterOn('get:states').subscribe(
    d => {
        const obj = d.data;
        axios.get(obj.url)
            .then(result => {
                const states = result.data.RestResponse.result;
                obj.res.json(states);
            })
            .catch(err => {
                obj.res.send(err.message);
            })
    }
);

module.exports = httpCalls;