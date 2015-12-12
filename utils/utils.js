"use strict";

var fs = require('fs');

/**
 * Parse and return commands from input file
 * @param inputPath input path from where command sequence file will be read
 * @returns {Array} commands
 */
function commands(inputPath) {
    var inputFile = fs.readFileSync(inputPath, 'utf8').split("\n");
    var input = [];

    inputFile.forEach(function (line) {
        var values = line.split(" ");
        var name = values[0].toLowerCase();
        var params = values[1];
        if (params) params = values[1].split(",");

        input.push({
            name: name,
            params: params
        })
    });

    return input;
}

module.exports = {
    commands: commands
};