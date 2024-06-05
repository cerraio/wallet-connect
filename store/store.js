"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = exports["default"] = void 0;
var _utils = require("./utils");
var _helpers = require("../utils/helpers");
var initialState = {
  isLoading: false,
  error: null,
  enabledWallet: null,
  isConnected: !!(0, _helpers.getInitialWalletName)()
};
exports.initialState = initialState;
var store = (0, _utils.makeObservable)(initialState);
var _default = store;
exports["default"] = _default;