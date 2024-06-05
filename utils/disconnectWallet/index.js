"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _common = require("../../common");
var disconnectWallet = function disconnectWallet() {
  var selectedWalletName = localStorage.getItem(_common.storageKey);
  if (!selectedWalletName) return;
  localStorage.removeItem(_common.storageKey);
  // dispatch event so hook can register changes
  window.dispatchEvent(new Event(_common.storageKey));
};
var _default = disconnectWallet;
exports["default"] = _default;