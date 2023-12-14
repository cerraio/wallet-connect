"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logos = exports.icons = exports["default"] = void 0;
var _eternlLogo = _interopRequireDefault(require("./img/eternl-logo.png"));
var _geroWalletLogo = _interopRequireDefault(require("./img/gero-wallet-logo.png"));
var _cardwalletLogo = _interopRequireDefault(require("./svg/cardwallet-logo.svg"));
var _flintLogo = _interopRequireDefault(require("./svg/flint-logo.svg"));
var _namiLogo = _interopRequireDefault(require("./svg/nami-logo.svg"));
var _typhonLogo = _interopRequireDefault(require("./svg/typhon-logo.svg"));
var _yoroiLogo = _interopRequireDefault(require("./svg/yoroi-logo.svg"));
var _lodeWalletLogo = _interopRequireDefault(require("./img/lode-wallet-logo.png"));
var _nufiLogo = _interopRequireDefault(require("./svg/nufi-logo.svg"));
var _beginLogo = _interopRequireDefault(require("./img/begin-logo.webp"));
var _laceLogo = _interopRequireDefault(require("./svg/lace-logo.svg"));
var _vesprLogo = _interopRequireDefault(require("./img/vespr-logo.webp"));
var _closeIcon = _interopRequireDefault(require("./svg/close-icon.svg"));
var _externalLinkIcon = _interopRequireDefault(require("./svg/external-link-icon.svg"));
var _ExternalLink = _interopRequireDefault(require("./tsx/ExternalLink"));
var _Close = _interopRequireDefault(require("./tsx/Close"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var logos = {
  eternl: _eternlLogo["default"],
  geroWallet: _geroWalletLogo["default"],
  cardwallet: _cardwalletLogo["default"],
  flint: _flintLogo["default"],
  nami: _namiLogo["default"],
  typhon: _typhonLogo["default"],
  yoroi: _yoroiLogo["default"],
  lodeWallet: _lodeWalletLogo["default"],
  nufi: _nufiLogo["default"],
  begin: _beginLogo["default"],
  lace: _laceLogo["default"],
  vespr: _vesprLogo["default"]
};
exports.logos = logos;
var icons = {
  close: _closeIcon["default"],
  Close: _Close["default"],
  externalLink: _externalLinkIcon["default"],
  ExternalLink: _ExternalLink["default"]
};
exports.icons = icons;
var _default = {
  logos: logos,
  close: _closeIcon["default"]
};
exports["default"] = _default;