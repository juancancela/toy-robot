"use strict";

var Robot = require('./domain/Robot').Robot;
var Table = require('./domain/Table').Table;
var inputPath = process.argv[2] || 'input.txt';
var commands = require('./utils/utils').commands(inputPath);

/**
 *  !!! README.md has detailed information of how to run tests, coverage, and provided data sets.
 */

(function run(){
    var robot = new Robot(new Table(4,4)); // problem specify that must be used a 5 x 5 table (0 to 4).

    commands.forEach(function (command){
       robot.execute(command.name, command.params);
    });
})();

