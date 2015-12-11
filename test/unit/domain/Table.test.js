"use strict";

var assert = require("assert");
var objs = require('./MotherObject');

describe('Table class tests', function () {

    it('should thrown a descriptive error if x is not an integer', function () {
        try {
            objs.invalidTableXNonInteger()
        } catch (e) {
            return;
        }

        assert.fail();
    });

    it('should thrown a descriptive error if y is not an integer', function () {
        try {
            objs.invalidTableXNonInteger();
        } catch (e) {
            return;
        }

        assert.fail();
    });

    it('should thrown a descriptive error if x is a negative integer', function () {
        try {
            objs.invalidTableXNegativeInteger();
        } catch (e) {
            return;
        }

        assert.fail();
    });

    it('should thrown a descriptive error if y is a negative integer', function () {
        try {
            objs.invalidTableYNegativeInteger();
        } catch (e) {
            return;
        }

        assert.fail();
    });

    it('should create a table instance if both table sides are positive integers', function () {
        var table = objs.validTable();

        assert.equal(table.x, 4);
        assert.equal(table.y, 4);
    });

    it('should be a valid position if its within table limits', function () {
        var table = objs.validTable();
        var validPosition = objs.validPosition();

        assert.equal(table.isValidPosition(validPosition), true);
    });

    it('should be an invalid position if its not within table limits', function () {
        var table = objs.validTable();
        var invalidPosition = objs.validPositionNotWithinLimits();

        assert.equal(table.isValidPosition(invalidPosition), false);
    });
});


describe('SquareTable class tests', function () {

    it('should create a table instance where both table sides are equal', function () {
        var squareTable = objs.validSquareTable();

        assert.equal(squareTable.x, 4);
        assert.equal(squareTable.y, 4);
    });
});