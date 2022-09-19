"use strict";

var _soal = require("./libs/soal1");

var _soal2 = require("./libs/soal2");

var _soal3 = require("./libs/soal3");

var _soal4 = require("./libs/soal4");

var myArgs = process.argv.slice(2);
var command = myArgs[0];

switch (command) {
  case "sapa":
    console.log((0, _soal.sapa)(myArgs[1]));
    break;

  case "convert":
    console.log((0, _soal2.convert)(myArgs.slice(1)));
    break;

  case "checkScore":
    console.log((0, _soal3.score)(myArgs.slice(1)));
    break;

  case "filterData":
    console.log((0, _soal4.filter)(myArgs.slice(1)));
    break;

  default:
    console.log("Unknown command");
}