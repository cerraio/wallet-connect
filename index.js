"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  useConnectWallet: true,
  ConnectWallet: true,
  WalletButton: true,
  WalletModal: true
};
Object.defineProperty(exports, "ConnectWallet", {
  enumerable: true,
  get: function get() {
    return _ConnectWallet["default"];
  }
});
Object.defineProperty(exports, "WalletButton", {
  enumerable: true,
  get: function get() {
    return _WalletButton["default"];
  }
});
Object.defineProperty(exports, "WalletModal", {
  enumerable: true,
  get: function get() {
    return _WalletModal["default"];
  }
});
Object.defineProperty(exports, "useConnectWallet", {
  enumerable: true,
  get: function get() {
    return _useConnectWallet["default"];
  }
});
var _useConnectWallet = _interopRequireDefault(require("./hooks/useConnectWallet"));
var _ConnectWallet = _interopRequireDefault(require("./components/ConnectWallet"));
var _WalletButton = _interopRequireDefault(require("./components/WalletButton"));
var _WalletModal = _interopRequireDefault(require("./components/WalletModal"));
var _utils = require("./utils");
Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _utils[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _utils[key];
    }
  });
});
var _types = require("./hooks/useConnectWallet/types");
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
var _types2 = require("./components/ConnectWallet/types");
Object.keys(_types2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types2[key];
    }
  });
});
var _types3 = require("./components/WalletButton/types");
Object.keys(_types3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types3[key];
    }
  });
});
var _types4 = require("./components/WalletModal/types");
Object.keys(_types4).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types4[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types4[key];
    }
  });
});
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }