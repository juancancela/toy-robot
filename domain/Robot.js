"use strict";

var Position = require('./Position').Position;

const DIRECTIONS = ["NORTH", "EAST", "SOUTH", "WEST"];

class Robot {
    constructor(position, direction, table) {
        this._position = position;
        this._direction = direction;
        this._table = table;
    }

    place(position){
        _updatePosition(position);
    }

    move() {
        switch (this._direction) {
            case 'NORTH' : this._updatePosition(new Position(this._position.x, this._position.y + 1)); break;
            case 'EAST'  : this._updatePosition(new Position(this._position.x + 1, this._position.y)); break;
            case 'SOUTH' : this._updatePosition(new Position(this._position.x, this._position.y - 1)); break;
            case 'WEST'  : this._updatePosition(new Position(this._position.x - 1, this._position.y)); break;
        }
    }

    left() {
        var index = DIRECTIONS.indexOf(this._direction) - 1;
        if (index < 0) index = DIRECTIONS.length - 1;

        this._direction = DIRECTIONS[index];
    }

    right() {
        var index = DIRECTIONS.indexOf(this._direction) + 1;
        if (index >= DIRECTIONS.length) index = 0;

        this._direction = DIRECTIONS[index];
    }

    report() {
        return "[" + this._x + "," + this._y + "," + this._direction + "]";
    }

    get position() {
        return this._position;
    }

    get direction() {
        return this._direction;
    }

    _updatePosition(position) {
        if (this._table.isValidPosition(position)) {
            this._position = position;
        } else {
            throw new Error("INVALID POSITION");
        }
    }
}

module.exports = {
    Robot      : Robot
};
