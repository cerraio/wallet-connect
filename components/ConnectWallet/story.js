"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Unstyled = exports.Styled = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("./index"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = {
  title: "ConnectWallet",
  component: _index["default"],
  parameters: {
    backgrounds: {
      "default": "dark"
    }
  }
};
exports["default"] = _default;
var Unstyled = function Unstyled() {
  return /*#__PURE__*/_react["default"].createElement(_index["default"], null);
};
exports.Unstyled = Unstyled;
var Styled = function Styled() {
  return /*#__PURE__*/_react["default"].createElement(_index["default"], {
    mainButtonStyle: {
      background: "linear-gradient(53.48deg, #41BE91 0%, #5091EB 100%)"
    },
    modalStyle: {
      backgroundColor: "#1C1C1E"
    },
    modalHeaderStyle: {
      backgroundColor: "#121214"
    },
    disconnectButtonStyle: {
      border: "2px solid white"
    },
    isInverted: true
  });
};
exports.Styled = Styled;