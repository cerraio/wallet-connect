"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Close = function Close(_ref) {
  var _ref$height = _ref.height,
    height = _ref$height === void 0 ? 24 : _ref$height,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 24 : _ref$width,
    _ref$fill = _ref.fill,
    fill = _ref$fill === void 0 ? "none" : _ref$fill,
    _ref$stroke = _ref.stroke,
    stroke = _ref$stroke === void 0 ? "currentColor" : _ref$stroke;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    style: {
      overflow: "visible"
    },
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    fill: fill,
    stroke: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    className: "feather feather-x",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M18 6L6 18"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6 6L18 18"
  }));
};
var _default = Close;
exports["default"] = _default;