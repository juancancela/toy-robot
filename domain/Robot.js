"use strict";

var Position = require('./Position').Position;

const DIRECTIONS = ["NORTH", "EAST", "SOUTH", "WEST"];

class Robot {
    constructor(table) {
        this._table = table;
    }

    execute(command, params) {
        if (this._isNotPlaced() && command !== 'place') return;

        switch (command) {
            case 'move' :
                switch (this._direction) {
                    case 'NORTH' :
                        this._updatePosition(this._position.x, this._position.y + 1);
                        break;
                    case 'EAST'  :
                        this._updatePosition(this._position.x + 1, this._position.y);
                        break;
                    case 'SOUTH' :
                        this._updatePosition(this._position.x, this._position.y - 1);
                        break;
                    case 'WEST'  :
                        this._updatePosition(this._position.x - 1, this._position.y);
                        break;
                }
                break;

            case 'left' :
                var index = DIRECTIONS.indexOf(this._direction) - 1;
                if (index < 0) index = DIRECTIONS.length - 1;
                this._direction = DIRECTIONS[index];
                break;

            case 'right':
                var index = DIRECTIONS.indexOf(this._direction) + 1;
                if (index >= DIRECTIONS.length) index = 0;
                this._direction = DIRECTIONS[index];
                break;

            case 'place':
                this._updatePosition(parseInt(params[0]), parseInt(params[1]));
                this._direction = params[2];
                break;

            case 'report':
                console.log (this._position.x + "," + this._position.y + "," + this._direction);
        }
    }

    get position() {
        return this._position;
    }

    get direction() {
        return this._direction;
    }

    _updatePosition(x, y) {
        if (this._table.isWithinTable(x, y)) this._position = new Position(x, y);
    }

    _isNotPlaced() {
        return !this._position;
    }
}

module.exports = {
    Robot: Robot
};
