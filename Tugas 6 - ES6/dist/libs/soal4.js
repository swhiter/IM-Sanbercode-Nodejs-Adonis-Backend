"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filter = void 0;

var filter = function filter(params) {
  var data = [{
    name: "Ahmad",
    kelas: "adonis"
  }, {
    name: "Regi",
    kelas: "laravel"
  }, {
    name: "Bondra",
    kelas: "adonis"
  }, {
    name: "Iqbal",
    kelas: "vuejs"
  }, {
    name: "Putri",
    kelas: "Laravel"
  }];
  var result = data.filter(function (element) {
    if (element.kelas == params) {
      return element;
    }
  });
  return result;
};

exports.filter = filter;