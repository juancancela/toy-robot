var fs = require('fs');
var readline = require('readline');
var Robot = require('./domain/Robot').Robot;

const DEFAULT_PATH = 'input.txt';

function Command(operation){

}

function getFile(inputPath) {
    return fs.readFileSync( inputPath || DEFAULT_PATH, 'utf8' ).split("\n");
}

function run(inputPath){
    var commands = [];
    getCommand(inputPath).forEach(function (command){

    });
}

module.exports = {
    run: run
};