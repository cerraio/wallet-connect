"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _elements = require("../../../elements");
var _hooks = require("../../../hooks");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var DisconnectWalletModal = function DisconnectWalletModal(_ref) {
  var isOpen = _ref.isOpen,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    _ref$headerStyle = _ref.headerStyle,
    headerStyle = _ref$headerStyle === void 0 ? {} : _ref$headerStyle,
    _ref$disconnectButton = _ref.disconnectButtonStyle,
    disconnectButtonStyle = _ref$disconnectButton === void 0 ? {} : _ref$disconnectButton,
    _ref$isInverted = _ref.isInverted,
    isInverted = _ref$isInverted === void 0 ? false : _ref$isInverted,
    _ref$backgroundOpacit = _ref.backgroundOpacity,
    backgroundOpacity = _ref$backgroundOpacit === void 0 ? 0.5 : _ref$backgroundOpacit,
    onClose = _ref.onClose;
  var _useConnectWallet = (0, _hooks.useConnectWallet)(),
    wallet = _useConnectWallet.wallet,
    disconnect = _useConnectWallet.disconnect;
  var handleDisconnect = function handleDisconnect(event) {
    disconnect();
    onClose(event);
  };
  if (!wallet) {
    return null;
  }
  return /*#__PURE__*/_react["default"].createElement(_elements.Modal, {
    isOpen: isOpen,
    style: style,
    headerStyle: headerStyle,
    title: wallet.name,
    titleIcon: wallet.icon,
    isInverted: isInverted,
    backgroundOpacity: backgroundOpacity,
    onClose: onClose
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: "flex",
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: "0.75rem"
    }
  }, /*#__PURE__*/_react["default"].createElement(_elements.Typography, {
    isInverted: isInverted
  }, "Connected with ", wallet.name, "."), /*#__PURE__*/_react["default"].createElement(_elements.Button, {
    onClick: handleDisconnect,
    style: _objectSpread({
      marginLeft: "0.5rem",
      justifyContent: "center"
    }, disconnectButtonStyle)
  }, /*#__PURE__*/_react["default"].createElement(_elements.Typography, {
    isInverted: isInverted
  }, "Disconnect"))));
};
var _default = DisconnectWalletModal;
exports["default"] = _default;