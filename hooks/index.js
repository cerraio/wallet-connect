"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  useConnectWallet: true
};
Object.defineProperty(exports, "useConnectWallet", {
  enumerable: true,
  get: function get() {
    return _useConnectWallet["default"];
  }
});
var _useConnectWallet = _interopRequireDefault(require("./useConnectWallet"));
var _types = require("./useConnectWallet/types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }