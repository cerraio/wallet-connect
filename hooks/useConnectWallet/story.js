"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Primary = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Typography = _interopRequireDefault(require("../../elements/Typography"));
var _index = _interopRequireDefault(require("./index"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Demo = function Demo() {
  var _useConnectWallet = (0, _index["default"])(),
    wallet = _useConnectWallet.wallet,
    connect = _useConnectWallet.connect,
    disconnect = _useConnectWallet.disconnect,
    error = _useConnectWallet.error,
    getAddress = _useConnectWallet.getAddress,
    getChangeAddress = _useConnectWallet.getChangeAddress,
    getBalance = _useConnectWallet.getBalance,
    getSupportedWallets = _useConnectWallet.getSupportedWallets;
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    address = _useState2[0],
    setAddress = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    changeAddress = _useState4[0],
    setChangeAddress = _useState4[1];
  var _useState5 = (0, _react.useState)(),
    _useState6 = _slicedToArray(_useState5, 2),
    balance = _useState6[0],
    setBalance = _useState6[1];
  var supportedWallets = getSupportedWallets();
  var installedWallets = supportedWallets.filter(function (wallet) {
    return wallet.isInstalled;
  });
  var handleRecieveAddress = function handleRecieveAddress(addr) {
    setAddress(addr);
  };
  var handleRecieveChangeAddress = function handleRecieveChangeAddress(addr) {
    setChangeAddress(addr);
  };
  var handleRecieveBalance = function handleRecieveBalance(balance) {
    setBalance(balance);
  };
  var handleChange = function handleChange(event) {
    connect(event.target.value);
  };
  var handleDisconnectWallet = function handleDisconnectWallet() {
    setAddress("");
    setBalance(undefined);
    disconnect();
  };
  if (Object.keys(supportedWallets).length === 0) {
    return /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, "Cardano wallet extensions are currently only supported in Chrome and Brave browsers.");
  }
  return installedWallets.length === 0 ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, "Please install one of the following supported Cardano wallets:"), /*#__PURE__*/_react["default"].createElement("ul", {
    style: {
      listStyleType: "none"
    }
  }, supportedWallets.map(function (_ref) {
    var name = _ref.name,
      icon = _ref.icon;
    return /*#__PURE__*/_react["default"].createElement("li", {
      style: {
        display: "flex",
        alignItems: "center"
      },
      key: name
    }, /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        marginRight: "1rem"
      }
    }, /*#__PURE__*/_react["default"].createElement("img", {
      style: {
        width: "16px",
        height: "16px"
      },
      src: icon
    })), name);
  }))) : /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, !!wallet && /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    style: {
      marginBottom: "1rem"
    }
  }, "Currently connected wallet: ", wallet.name), !!address && /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    style: {
      marginBottom: "1rem"
    }
  }, "Address: ", address), !!changeAddress && /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    style: {
      marginBottom: "1rem"
    }
  }, "Change address: ", changeAddress), !!balance && /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    style: {
      marginBottom: "1rem"
    }
  }, "Balance: \u20B3 ", balance), !wallet && installedWallets.length > 0 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    style: {
      marginBottom: "1rem"
    }
  }, "Select an installed wallet:"), /*#__PURE__*/_react["default"].createElement("select", {
    onChange: handleChange
  }, /*#__PURE__*/_react["default"].createElement("option", null), installedWallets.map(function (_ref2) {
    var id = _ref2.id,
      name = _ref2.name;
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: id,
      value: id
    }, name);
  }))), !!wallet && /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: "1rem"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: "1rem"
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return getAddress(handleRecieveAddress);
    }
  }, "Get address")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: "1rem"
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return getChangeAddress(handleRecieveChangeAddress);
    }
  }, "Get change address")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: "1rem"
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return getBalance(handleRecieveBalance);
    }
  }, "Get balance")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: "1rem"
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleDisconnectWallet
  }, "Disconnect wallet"))), !!error && /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: "1rem"
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    style: {
      color: "red"
    }
  }, error)));
};
var _default = {
  title: "useConnectWallet",
  component: Demo
};
exports["default"] = _default;
var Primary = function Primary() {
  return /*#__PURE__*/_react["default"].createElement(Demo, null);
};
exports.Primary = Primary;