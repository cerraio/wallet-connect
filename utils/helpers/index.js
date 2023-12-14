"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromHex = exports.addressFromHex = void 0;
var _bech = require("bech32");
var _common = require("../../common");
var _buffer = require("buffer");
var addressFromHex = function addressFromHex(hex) {
  var networkId = hex[1] === "0" ? _common.NetworkMode.testNet : _common.NetworkMode.mainNet;
  var prefix = networkId === _common.NetworkMode.testNet ? "addr_test" : "addr";
  var bytes = fromHex(hex);
  var words = _bech.bech32.toWords(bytes);
  return _bech.bech32.encode(prefix, words, 1000);
};
exports.addressFromHex = addressFromHex;
var fromHex = function fromHex(hex) {
  return _buffer.Buffer.from(hex, "hex");
};
exports.fromHex = fromHex;