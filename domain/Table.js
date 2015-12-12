"use strict";
var _ = require('lodash');

class Table {
    constructor(x, y) {
        if (_.isNumber(x) && x >= 0 && _.isNumber(y) && y >= 0) {
            this._x = x;
            this._y = y;
        } else {
            throw new Error("INVALID TABLE SIDE VALUE");
        }
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    isWithinTable(x, y){
        return x <= this._x && x >= 0 && y <= this._y && y >= 0;
    }
}


class SquareTable extends Table {
    constructor(x) {
        super(x, x);
    }
}


module.exports = {
    SquareTable : SquareTable,
    Table       : Table
};
