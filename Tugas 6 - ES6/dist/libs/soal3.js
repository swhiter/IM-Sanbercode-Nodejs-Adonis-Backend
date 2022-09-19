"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.score = void 0;

var score = function score(params) {
  var arrTemp = params.toString().split(":").join().split(",");
  var result = {
    name: arrTemp[1],
    "class": arrTemp[3],
    score: arrTemp[5]
  };
  return result;
};

exports.score = score;