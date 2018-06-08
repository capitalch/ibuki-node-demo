'use strict';
var ibuki = {};
const rx = require('rxjs');
const operators = require('rxjs/operators');

const subject = new rx.Subject();

ibuki.emit = (id, options) => {
    subject
        .next({
            id: id,
            data: options
        });
}

ibuki.filterOn = (id) => {
    return (subject.pipe(operators.filter(d => (d.id === id))));
}

module.exports = ibuki;