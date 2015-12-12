var fs = require('fs');

const DEFAULT_PATH = 'input.txt';

function transformFileInput(inputPath) {
    var inputFile = fs.readFileSync( inputPath || DEFAULT_PATH, 'utf8' ).split("\n");
    var input = [];

    inputFile.forEach(function(line){
        input.push({
            operation : line.split(" ")[0].toLowerCase(),
            params    : line.slice(1)
        })
    });

    return input;
}

function run(inputPath){
    var robot;
    transformFileInput(inputPath).forEach(function (input){

    });
}

module.exports = {
    run: run
};