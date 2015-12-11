var Position = require('../../../domain/Position').Position;
var Table = require('../../../domain/Table').Table;
var SquareTable = require('../../../domain/Table').SquareTable;


/* table objects */

function validTable(){
    return new Table(4,4);
}

function invalidTableXNegativeInteger(){
    return new Table(-4,4);
}

function invalidTableYNegativeInteger(){
    return new Table(4,-4);
}

function invalidTableXNonInteger(){
    return new Table("A",4);
}

function invalidTableYNonInteger(){
    return new Table("B",4);
}


/* squaretable objects */

function validSquareTable(){
    return new SquareTable(4);
}


/* position objects */

function validPosition() {
    return new Position(3, 3);
}

function validPositionNotWithinLimits() {
    return new Position(30, 30);
}

function invalidPositionXNegativeInteger() {
    return new Position(-3, 3);
}

function invalidPositionYNegativeInteger() {
    return new Position(3, -3);
}

function invalidPositionXNonInteger() {
    return new Position("A", 3);
}

function invalidPositionYNonInteger() {
    return new Position(3, "A");
}


module.exports = {
    validPosition                   : validPosition,
    invalidPositionXNegativeInteger : invalidPositionXNegativeInteger,
    invalidPositionYNegativeInteger : invalidPositionYNegativeInteger,
    invalidPositionXNonInteger      : invalidPositionXNonInteger,
    invalidPositionYNonInteger      : invalidPositionYNonInteger,
    validPositionNotWithinLimits    : validPositionNotWithinLimits,
    validTable                      : validTable,
    invalidTableXNegativeInteger    : invalidTableXNegativeInteger,
    invalidTableYNegativeInteger    : invalidTableYNegativeInteger,
    invalidTableXNonInteger         : invalidTableXNonInteger,
    invalidTableYNonInteger         : invalidTableYNonInteger,
    validSquareTable                : validSquareTable
};