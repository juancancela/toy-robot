"use strict";

var assert = require("assert");
var Robot = require('../../../domain/Robot').Robot;
var Position = require('../../../domain/Position').Position;
var Table = require('../../../domain/Table').Table;


describe('Robot.move operation tests', function () {

    it('should move from (1, 1) to (1, 2) if we move robot when facing NORTH and its within table limits', function () {
        var robot = new Robot(new Position(1, 1), "NORTH", new Table(4, 4));
        robot.move();

        assert.equal(robot.position.x, 1);
        assert.equal(robot.position.y, 2);
    });

    it('should move from (1, 1) to (1, 3) if we move robot twice when facing NORTH and its within table limits', function () {
        var robot = new Robot(new Position(1, 1), "NORTH", new Table(4, 4));
        robot.move();
        robot.move();

        assert.equal(robot.position.x, 1);
        assert.equal(robot.position.y, 3);
    });

    it('should move from (1, 1) to (0, 1) if we move robot when facing WEST and its within table limits', function () {
        var robot = new Robot(new Position(1, 1), "WEST", new Table(4, 4));
        robot.move();

        assert.equal(robot.position.x, 0);
        assert.equal(robot.position.y, 1);
    });

    it('should move from (1, 1) to (2, 1) if we move robot when facing EAST and its within table limits', function () {
        var robot = new Robot(new Position(1, 1), "EAST", new Table(4, 4));
        robot.move();

        assert.equal(robot.position.x, 2);
        assert.equal(robot.position.y, 1);
    });

    it('should move from (1, 1) to (2, 1) if we move robot when facing EAST and its within table limits', function () {
        var robot = new Robot(new Position(1, 1), "EAST", new Table(4, 4));
        robot.move();

        assert.equal(robot.position.x, 2);
        assert.equal(robot.position.y, 1);
    });

    it('should move from (1, 1) to (1, 0) if we move robot when facing SOUTH and its within table limits', function () {
        var robot = new Robot(new Position(1, 1), "SOUTH", new Table(4, 4));
        robot.move();

        assert.equal(robot.position.x, 1);
        assert.equal(robot.position.y, 0);
    });

    it('should to move from (0, 0) facing SOUTH since it its not within table limits (would be (0, -1))', function () {
        var robot = new Robot(new Position(0, 0), "SOUTH", new Table(4, 4));
        try {
            robot.move();
        } catch (e) {
            return;
        }

        assert.fail();
    });

    it('should to move from (4, 4) facing NORTH since it its not within table limits (would be (5, 4))', function () {
        var robot = new Robot(new Position(4, 4), "NORTH", new Table(4, 4));
        try {
            robot.move();
        } catch (e) {
            return;
        }

        assert.fail();
    });

    it('should to move from (4, 4) facing EAST since it its not within table limits (would be (4, 5))', function () {
        var robot = new Robot(new Position(4, 4), "EAST", new Table(4, 4));
        try {
            robot.move();
        } catch (e) {
            return;
        }

        assert.fail();
    });

    it('should to move from (0, 0) facing WEST since it its not within table limits (would be (-1, 0))', function () {
        var robot = new Robot(new Position(0, 0), "WEST", new Table(4, 4));
        try {
            robot.move();
        } catch (e) {
            return;
        }

        assert.fail();
    });

    it('should move from NORTH to EAST if robot is turned right', function () {
        var robot = new Robot(new Position(0, 0), "NORTH", new Table(4, 4));
        robot.right();

        assert.equal(robot.direction, "EAST");
    });

    it('should move from EAST to SOUTH if robot is turned right', function () {
        var robot = new Robot(new Position(0, 0), "EAST", new Table(4, 4));
        robot.right();

        assert.equal(robot.direction, "SOUTH");
    });

    it('should move from SOUTH to WEST if robot is turned right', function () {
        var robot = new Robot(new Position(0, 0), "SOUTH", new Table(4, 4));
        robot.right();

        assert.equal(robot.direction, "WEST");
    });

    it('should move from WEST to NORTH if robot is turned right', function () {
        var robot = new Robot(new Position(0, 0), "WEST", new Table(4, 4));
        robot.right();

        assert.equal(robot.direction, "NORTH");
    });

    it('should move from NORTH to WEST if robot is turned left', function () {
        var robot = new Robot(new Position(0, 0), "NORTH", new Table(4, 4));
        robot.left();

        assert.equal(robot.direction, "WEST");
    });

    it('should move from WEST to SOUTH if robot is turned left', function () {
        var robot = new Robot(new Position(0, 0), "WEST", new Table(4, 4));
        robot.left();

        assert.equal(robot.direction, "SOUTH");
    });

    it('should move from SOUTH to EAST if robot is turned left', function () {
        var robot = new Robot(new Position(0, 0), "SOUTH", new Table(4, 4));
        robot.left();

        assert.equal(robot.direction, "EAST");
    });

    it('should move from EAST to NORTH if robot is turned left', function () {
        var robot = new Robot(new Position(0, 0), "EAST", new Table(4, 4));
        robot.left();

        assert.equal(robot.direction, "NORTH");
    });
});
