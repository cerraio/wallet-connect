"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _elements = require("../../../elements");
var _hooks = require("../../../hooks");
var _utils = require("../../../utils");
var _assets = require("../../../assets");
var _reactDeviceDetect = require("react-device-detect");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ConnectWalletModal = function ConnectWalletModal(_ref) {
  var _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    _ref$headerStyle = _ref.headerStyle,
    headerStyle = _ref$headerStyle === void 0 ? {} : _ref$headerStyle,
    _ref$isInverted = _ref.isInverted,
    isInverted = _ref$isInverted === void 0 ? false : _ref$isInverted,
    _ref$backgroundOpacit = _ref.backgroundOpacity,
    backgroundOpacity = _ref$backgroundOpacit === void 0 ? 0.5 : _ref$backgroundOpacit,
    isOpen = _ref.isOpen,
    onClose = _ref.onClose;
  var _useConnectWallet = (0, _hooks.useConnectWallet)(),
    connect = _useConnectWallet.connect;
  var supportedWallets = (0, _utils.getSupportedWallets)();
  var isAWalletInstalled = supportedWallets.find(function (_ref2) {
    var isInstalled = _ref2.isInstalled;
    return isInstalled;
  });
  var handleSelectWallet = function handleSelectWallet(event) {
    return function (wallet) {
      if (wallet.isInstalled) {
        connect(wallet.id);
      } else {
        window.open(wallet.websiteUrl, "_blank", "noreferrer");
      }
      onClose(event);
    };
  };
  return /*#__PURE__*/_react["default"].createElement(_elements.Modal, {
    isOpen: isOpen,
    style: style,
    headerStyle: headerStyle,
    title: isAWalletInstalled ? "Connect your wallet" : "Install a wallet",
    onClose: onClose,
    isInverted: isInverted,
    backgroundOpacity: backgroundOpacity
  }, supportedWallets.length === 0 ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactDeviceDetect.MobileView, null, /*#__PURE__*/_react["default"].createElement(_elements.Typography, {
    isInverted: isInverted,
    style: {
      textAlign: "center"
    }
  }, "No available Cardano wallets detected.")), /*#__PURE__*/_react["default"].createElement(_reactDeviceDetect.BrowserView, null, /*#__PURE__*/_react["default"].createElement(_elements.Typography, {
    isInverted: isInverted,
    style: {
      textAlign: "center"
    }
  }, "Cardano wallet extensions are currently only supported in Chrome and Brave browsers."))) : supportedWallets.map(function (wallet, idx) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: wallet.id,
      style: {
        marginBottom: idx < supportedWallets.length - 1 ? "0.25rem" : 0
      }
    }, /*#__PURE__*/_react["default"].createElement(_elements.Button, {
      iconRight: wallet.icon,
      onClick: function onClick(event) {
        return handleSelectWallet(event)(wallet);
      },
      isInverted: isInverted,
      isFullWidth: true
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: "flex",
        flex: 1
      }
    }, /*#__PURE__*/_react["default"].createElement(_elements.Typography, {
      isInverted: isInverted,
      style: {
        fontSize: "16px",
        textTransform: "capitalize"
      }
    }, wallet.name), !wallet.isInstalled && isAWalletInstalled && /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        opacity: 0.5,
        marginLeft: "auto",
        marginRight: "1rem"
      }
    }, /*#__PURE__*/_react["default"].createElement(_elements.Typography, {
      isInverted: isInverted
    }, "Not installed"), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        marginLeft: "0.5rem"
      }
    }, /*#__PURE__*/_react["default"].createElement(_assets.icons.ExternalLink, {
      width: 18,
      height: 18,
      stroke: isInverted ? "#FFF" : "#333"
    }))))));
  }));
};
var _default = ConnectWalletModal;
exports["default"] = _default;