var Robot = require('./domain/Robot').Robot;
var Table = require('./domain/Table').Table;
var inputPath = process.argv[2] || 'input.txt';
var commands = require('./utils/utils').commands;

(function run(){
    var robot = new Robot(new Table(4,4));

    commands(inputPath).forEach(function (command){
       robot.execute(command.name, command.params);
    });
})();

