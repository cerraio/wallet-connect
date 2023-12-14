"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePrevious = void 0;
var _react = require("react");
var usePrevious = function usePrevious(value) {
  var ref = (0, _react.useRef)(value);
  (0, _react.useEffect)(function () {
    ref.current = value;
  });
  return ref.current;
};
exports.usePrevious = usePrevious;