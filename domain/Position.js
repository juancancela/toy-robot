"use strict";
var _ = require('lodash');

class Position {
    constructor(x, y) {
        if (_.isNumber(x) && _.isNumber(y) && x >= 0 && y >= 0) {
            this._x = x;
            this._y = y;
        } else {
            throw new Error("INVALID (X, Y) VALUES");
        }
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }
}

module.exports = {
    Position : Position
};