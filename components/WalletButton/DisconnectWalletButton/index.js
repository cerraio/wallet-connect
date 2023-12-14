"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _elements = require("../../../elements");
var _hooks = require("../../../hooks");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var DisconnectWalletButton = function DisconnectWalletButton(_ref) {
  var style = _ref.style,
    onClick = _ref.onClick;
  var _useConnectWallet = (0, _hooks.useConnectWallet)(),
    wallet = _useConnectWallet.wallet;
  if (!wallet) return null;
  return /*#__PURE__*/_react["default"].createElement(_elements.Button, {
    style: style,
    iconLeft: wallet.icon,
    onClick: onClick
  }, "Connected");
};
var _default = DisconnectWalletButton;
exports["default"] = _default;