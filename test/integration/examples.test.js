"use strict";

var assert = require("assert");
var run = require('../../app').run;

describe('Tests provided as examples in problem description', function () {

    it('should correctly execute EXAMPLE A as described in problem description', function () {
        run("test/integration/example_a.txt");
    });
});