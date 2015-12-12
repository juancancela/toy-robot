"use strict";

var Position = require('./Position').Position;

const DIRECTIONS = ["NORTH", "EAST", "SOUTH", "WEST"];

class Robot {
    constructor(table) {
        this._table = table;
    }

    execute(command, params) {
        switch(command){
            case 'place':
                this._updatePosition(new Position(params[0], params[1]));
                this._direction = params[2];
                break;

            case 'move' :
                switch (this._direction) {
                    case 'NORTH' : this._updatePosition(new Position(this._position.x, this._position.y + 1)); break;
                    case 'EAST'  : this._updatePosition(new Position(this._position.x + 1, this._position.y)); break;
                    case 'SOUTH' : this._updatePosition(new Position(this._position.x, this._position.y - 1)); break;
                    case 'WEST'  : this._updatePosition(new Position(this._position.x - 1, this._position.y)); break;
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

            case 'report':
                return "[" + this._x + "," + this._y + "," + this._direction + "]";
        }
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
    Robot        : Robot
};
