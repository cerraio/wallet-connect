"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ExternalLink = function ExternalLink(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? 24 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 24 : _ref$height,
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
    className: "feather feather-external-link",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15 3L21 3 21 9"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M10 14L21 3"
  }));
};
var _default = ExternalLink;
exports["default"] = _default;