"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _common = require("../../common");
var _assets = require("../../assets");
var _reactDeviceDetect = require("react-device-detect");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var supportedWallets = [{
  id: _common.SupportedWallet.vespr,
  name: "vespr",
  icon: _assets.logos.vespr,
  extensionUrl: _reactDeviceDetect.isIOS ? "https://apps.apple.com/pk/app/vespr-cardano-wallet/id1565749376" : "https://play.google.com/store/apps/details?id=art.nft_craze.gallery.main&hl=en_US&gl=US&pli=1",
  websiteUrl: "https://vespr.gitbook.io/vespr/introduction/about",
  isMobile: true
}, {
  id: _common.SupportedWallet.nami,
  name: "Nami",
  icon: _assets.logos.nami,
  extensionUrl: "https://chrome.google.com/webstore/detail/nami/lpfcbjknijpeeillifnkikgncikgfhdo",
  websiteUrl: "https://namiwallet.io/",
  isMobile: false
}, {
  id: _common.SupportedWallet.eternl,
  name: "Eternl",
  icon: _assets.logos.eternl,
  extensionUrl: "https://chrome.google.com/webstore/detail/eternl/kmhcihpebfmpgmihbkipmjlmmioameka",
  websiteUrl: "https://eternl.io/",
  isMobile: false
}, {
  id: _common.SupportedWallet.flint,
  name: "Flint",
  icon: _assets.logos.flint,
  extensionUrl: "https://chrome.google.com/webstore/detail/flint-wallet/hnhobjmcibchnmglfbldbfabcgaknlkj",
  websiteUrl: "https://flint-wallet.com/",
  isMobile: false
}, {
  id: _common.SupportedWallet.cardwallet,
  name: "Cardwallet",
  icon: _assets.logos.cardwallet,
  extensionUrl: "https://chrome.google.com/webstore/detail/cwallet/apnehcjmnengpnmccpaibjmhhoadaico",
  websiteUrl: "https://cwallet.finance/",
  isMobile: false
}, {
  id: _common.SupportedWallet.gerowallet,
  name: "GeroWallet",
  icon: _assets.logos.geroWallet,
  extensionUrl: "https://chrome.google.com/webstore/detail/gerowallet/bgpipimickeadkjlklgciifhnalhdjhe",
  websiteUrl: "https://gerowallet.io/",
  isMobile: false
}, {
  id: _common.SupportedWallet.typhon,
  name: "Typhon",
  icon: _assets.logos.typhon,
  extensionUrl: "https://chrome.google.com/webstore/detail/typhon-wallet/kfdniefadaanbjodldohaedphafoffoh",
  websiteUrl: "https://typhonwallet.io/",
  isMobile: false
}, {
  id: _common.SupportedWallet.yoroi,
  name: "Yoroi",
  icon: _assets.logos.yoroi,
  extensionUrl: "https://chrome.google.com/webstore/detail/typhon-wallet/kfdniefadaanbjodldohaedphafoffoh",
  websiteUrl: "https://typhonwallet.io/",
  isMobile: false
}, {
  id: _common.SupportedWallet.lodeWallet,
  name: "LodeWallet",
  icon: _assets.logos.lodeWallet,
  extensionUrl: "https://chrome.google.com/webstore/detail/lodewallet/ikffplhknjhbfkgbhnionfklokakmknd",
  websiteUrl: "https://lodewallet.io/",
  isMobile: false
}, {
  id: _common.SupportedWallet.nufi,
  name: "nufi",
  icon: _assets.logos.nufi,
  extensionUrl: "https://chrome.google.com/webstore/detail/nufi/gpnihlnnodeiiaakbikldcihojploeca",
  websiteUrl: "https://nu.fi/",
  isMobile: false
}, {
  id: _common.SupportedWallet.begin,
  name: "begin",
  icon: _assets.logos.begin,
  extensionUrl: "https://chrome.google.com/webstore/detail/begin-wallet/nhbicdelgedinnbcidconlnfeionhbml",
  websiteUrl: "https://begin.is/",
  isMobile: false
}, {
  id: _common.SupportedWallet.lace,
  name: "lace",
  icon: _assets.logos.lace,
  extensionUrl: "https://chrome.google.com/webstore/detail/lace/gafhhkghbfjjkeiendhlofajokpaflmk",
  websiteUrl: "https://www.lace.io/",
  isMobile: false
}];

/**
 * @returns a list of Cardano wallets for the current device and
 * browser. Installed wallets appear before uninstalled wallets.
 */
var getSupportedWallets = function getSupportedWallets() {
  var installedWallets = [];
  var uninstalledWallets = [];
  var supportedBrowsers = ["Chrome", "Brave"];
  var isBrowserSupported = supportedBrowsers.includes(_reactDeviceDetect.browserName);
  supportedWallets.forEach(function (wallet) {
    var _window;
    var isMobileWalletInstallable = wallet.isMobile && _reactDeviceDetect.isMobile;
    var isBrowserExtensionWalletInstallable = !wallet.isMobile && isBrowserSupported;
    if ((_window = window) !== null && _window !== void 0 && _window.cardano && window.cardano[wallet.id]) {
      installedWallets.push(_objectSpread(_objectSpread(_objectSpread({}, wallet), window.cardano[wallet.id]), {}, {
        isInstalled: true
      }));
    } else if (isMobileWalletInstallable || isBrowserExtensionWalletInstallable) {
      uninstalledWallets.push(_objectSpread(_objectSpread({}, wallet), {}, {
        isInstalled: false
      }));
    }
  });
  return [].concat(installedWallets, uninstalledWallets);
};
var _default = getSupportedWallets;
exports["default"] = _default;