"use strict";

var assert = require("assert");
var objs = require('./MotherObject');

describe('Position class tests', function () {

    it('should correctly create Position instances if coordinates are valid', function () {
        try {
            objs.validPosition();
        } catch (e) {
            assert.fail();
        }
    });

    it('should fail if x is not an integer', function () {
        try {
            objs.invalidPositionXNonInteger();
        } catch (e) {
            return;
        }
        assert.fail();
    });

    it('should fail if y is not an integer', function () {
        try {
            objs.invalidPositionYNonInteger();
        } catch (e) {
            return;
        }
        assert.fail();
    });

    it('should fail if x is a negative integer', function () {
        try {
            objs.invalidPositionXNegativeInteger();
        } catch (e) {
            return;
        }
        assert.fail();
    });

    it('should fail if y is a negative integer', function () {
        try {
            objs.invalidPositionYNegativeInteger();
        } catch (e) {
            return;
        }
        assert.fail();
    });

});