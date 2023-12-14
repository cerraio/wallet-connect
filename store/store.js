"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = exports["default"] = void 0;
var _common = require("../common");
var _utils = require("./utils");
var initialState = {
  isLoading: false,
  error: null,
  enabledWallet: null,
  isConnected: !!localStorage.getItem(_common.storageKey)
};
exports.initialState = initialState;
var store = (0, _utils.makeObservable)(initialState);
var _default = store;
exports["default"] = _default;