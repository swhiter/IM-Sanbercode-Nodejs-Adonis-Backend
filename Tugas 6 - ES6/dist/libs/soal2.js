"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convert = void 0;

var convert = function convert(arr) {
  var tempObj = {};
  tempObj.nama = arr[0];
  tempObj.domisili = arr[1];
  tempObj.umur = arr[2];
  return tempObj;
};

exports.convert = convert;