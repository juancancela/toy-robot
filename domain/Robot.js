"use strict";

var Position = require('./Position').Position;

const DIRECTIONS = ["NORTH", "EAST", "SOUTH", "WEST"];

class Robot {
    constructor(table) {
        this._table = table;
    }

    execute(command, params) {
        if (this._isNotPlaced(command)) return;

        switch (command) {
            case 'place':
                this._updatePos(parseInt(params[0]), parseInt(params[1]));
                this._dir = params[2];
                break;

            case 'move' :
                switch (this._dir) {
                    case 'NORTH' :
                        this._updatePos(this._pos.x, this._pos.y + 1);
                        break;
                    case 'EAST'  :
                        this._updatePos(this._pos.x + 1, this._pos.y);
                        break;
                    case 'SOUTH' :
                        this._updatePos(this._pos.x, this._pos.y - 1);
                        break;
                    case 'WEST'  :
                        this._updatePos(this._pos.x - 1, this._pos.y);
                        break;
                }
                break;

            case 'left' :
                var index = DIRECTIONS.indexOf(this._dir) - 1;
                if (index < 0) index = DIRECTIONS.length - 1;
                this._dir = DIRECTIONS[index];
                break;

            case 'right':
                var index = DIRECTIONS.indexOf(this._dir) + 1;
                if (index >= DIRECTIONS.length) index = 0;
                this._dir = DIRECTIONS[index];
                break;

            case 'report':
                console.log (this._pos.x + "," + this._pos.y + "," + this._dir);
        }
    }

    get position() {
        return this._pos;
    }

    get direction() {
        return this._dir;
    }

    _updatePos(x, y) {
        if (this._table.isWithinTable(x, y)) this._pos = new Position(x, y);
    }

    _isNotPlaced(command) {
        return !this._pos && command !== 'place';
    }
}

module.exports = {
    Robot: Robot
};
