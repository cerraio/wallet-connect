"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SupportedWallet = exports.NetworkMode = exports.APIErrorMessage = void 0;
var SupportedWallet = /*#__PURE__*/function (SupportedWallet) {
  SupportedWallet["eternl"] = "eternl";
  SupportedWallet["flint"] = "flint";
  SupportedWallet["gerowallet"] = "gerowallet";
  SupportedWallet["nami"] = "nami";
  SupportedWallet["cardwallet"] = "cardwallet";
  SupportedWallet["typhon"] = "typhoncip30";
  SupportedWallet["yoroi"] = "yoroi";
  SupportedWallet["lodeWallet"] = "LodeWallet";
  SupportedWallet["nufi"] = "nufi";
  SupportedWallet["vespr"] = "vespr";
  SupportedWallet["begin"] = "begin";
  SupportedWallet["lace"] = "lace";
  return SupportedWallet;
}({});
exports.SupportedWallet = SupportedWallet;
var NetworkMode = /*#__PURE__*/function (NetworkMode) {
  NetworkMode[NetworkMode["mainNet"] = 1] = "mainNet";
  NetworkMode[NetworkMode["testNet"] = 0] = "testNet";
  return NetworkMode;
}({});
exports.NetworkMode = NetworkMode;
var APIErrorMessage = /*#__PURE__*/function (APIErrorMessage) {
  APIErrorMessage["manualDisconnect"] = "The request was refused due to lack of access - e.g. wallet disconnects.";
  return APIErrorMessage;
}({}); // TODO: replace usage of this type with actual definitions
exports.APIErrorMessage = APIErrorMessage;