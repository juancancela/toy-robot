"use strict";

var assert = require("assert");
var Robot = require('../../../domain/Robot').Robot;
var Position = require('../../../domain/Position').Position;
var Table = require('../../../domain/Table').Table;


describe('Robot.move operation tests', function () {

    it('should move from (1, 1) to (1, 2) if we move robot when facing NORTH and its within table limits', function () {
        var robot = new Robot(new Table(4, 4));
        robot.execute('place', [1, 1, 'NORTH']);
        robot.execute('move');

        assert.equal(robot.position.x, 1);
        assert.equal(robot.position.y, 2);
    });

    it('should move from (1, 1) to (1, 3) if we move robot twice when facing NORTH and its within table limits', function () {
        var robot = new Robot(new Table(4, 4));
        robot.execute('place', [1, 1, 'NORTH']);
        robot.execute('move');
        robot.execute('move');

        assert.equal(robot.position.x, 1);
        assert.equal(robot.position.y, 3);
    });

    it('should move from (1, 1) to (0, 1) if we move robot when facing WEST and its within table limits', function () {
        var robot = new Robot(new Table(4, 4));
        robot.execute('place', [1, 1, 'WEST']);
        robot.execute('move');

        assert.equal(robot.position.x, 0);
        assert.equal(robot.position.y, 1);
    });

    it('should move from (1, 1) to (2, 1) if we move robot when facing EAST and its within table limits', function () {
        var robot = new Robot(new Table(4, 4));
        robot.execute('place', [1, 1, 'EAST']);
        robot.execute('move');

        assert.equal(robot.position.x, 2);
        assert.equal(robot.position.y, 1);
    });

    it('should move from (1, 1) to (2, 1) if we move robot when facing EAST and its within table limits', function () {
        var robot = new Robot(new Table(4, 4));
        robot.execute('place', [1, 1, 'EAST']);
        robot.execute('move');

        assert.equal(robot.position.x, 2);
        assert.equal(robot.position.y, 1);
    });

    it('should move from (1, 1) to (1, 0) if we move robot when facing SOUTH and its within table limits', function () {
        var robot = new Robot(new Table(4, 4));
        robot.execute('place', [1, 1, 'SOUTH']);
        robot.execute('move');

        assert.equal(robot.position.x, 1);
        assert.equal(robot.position.y, 0);
    });

    it('should to move from (0, 0) facing SOUTH since it its not within table limits (would be (0, -1))', function () {
        var robot = new Robot(new Table(4, 4));
        robot.execute('place', [0, 0, 'SOUTH']);
        try {
            robot.execute('move');
        } catch (e) {
            return;
        }

        assert.fail();
    });

    it('should to move from (4, 4) facing NORTH since it its not within table limits (would be (5, 4))', function () {
        var robot = new Robot(new Table(4, 4));
        robot.execute('place', [4, 4, 'NORTH']);
        try {
            robot.execute('move');
        } catch (e) {
            return;
        }

        assert.fail();
    });

    it('should to move from (4, 4) facing EAST since it its not within table limits (would be (4, 5))', function () {
        var robot = new Robot(new Table(4, 4));
        robot.execute('place', [4, 4, 'EAST']);
        try {
            robot.execute('move');
        } catch (e) {
            return;
        }

        assert.fail();
    });

    it('should to move from (0, 0) facing WEST since it its not within table limits (would be (-1, 0))', function () {
        var robot = new Robot(new Table(4, 4));
        robot.execute('place', [0, 0, 'WEST']);
        try {
            robot.execute('move');
        } catch (e) {
            return;
        }

        assert.fail();
    });

    it('should move from NORTH to EAST if robot is turned right', function () {
        var robot = new Robot(new Table(0, 0));
        robot.execute('place', [0, 0, 'NORTH']);
        robot.execute('right');

        assert.equal(robot.direction, "EAST");
    });

    it('should move from EAST to SOUTH if robot is turned right', function () {
        var robot = new Robot(new Table(4, 4));
        robot.execute('place', [0, 0, 'EAST']);
        robot.execute('right');

        assert.equal(robot.direction, "SOUTH");
    });

    it('should move from SOUTH to WEST if robot is turned right', function () {
        var robot = new Robot(new Table(4, 4));
        robot.execute('place', [0, 0, 'SOUTH']);
        robot.execute('right');

        assert.equal(robot.direction, "WEST");
    });

    it('should move from WEST to NORTH if robot is turned right', function () {
        var robot = new Robot(new Table(4, 4));
        robot.execute('place', [0, 0, 'WEST']);
        robot.execute('right');

        assert.equal(robot.direction, "NORTH");
    });

    it('should move from NORTH to WEST if robot is turned left', function () {
        var robot = new Robot(new Table(4, 4));
        robot.execute('place', [0, 0, 'NORTH']);
        robot.execute('left');

        assert.equal(robot.direction, "WEST");
    });

    it('should move from WEST to SOUTH if robot is turned left', function () {
        var robot = new Robot(new Table(4, 4));
        robot.execute('place', [0, 0, 'WEST']);
        robot.execute('left');

        assert.equal(robot.direction, "SOUTH");
    });

    it('should move from SOUTH to EAST if robot is turned left', function () {
        var robot = new Robot(new Table(4, 4));
        robot.execute('place', [0, 0, 'SOUTH']);
        robot.execute('left');

        assert.equal(robot.direction, "EAST");
    });

    it('should move from EAST to NORTH if robot is turned left', function () {
        var robot = new Robot(new Table(4, 4));
        robot.execute('place', [0, 0, 'EAST']);
        robot.execute('left');

        assert.equal(robot.direction, "NORTH");
    });
});
