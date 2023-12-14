"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _elements = require("../../../elements");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ConnectWalletButton = function ConnectWalletButton(_ref) {
  var _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement(_elements.Button, {
    style: style,
    onClick: onClick
  }, "Connect wallet");
};
var _default = ConnectWalletButton;
exports["default"] = _default;