"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _utils = require("../../utils");
var _store = require("../../store");
var _common = require("../../common");
var _helpers = require("../../utils/helpers");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/**
 * Returns values and helper functions for connecting, utlizing,
 * and enabling a Cardano wallet. Wallet state is shared throughout
 * all hook references.
 */
var useConnectWallet = function useConnectWallet() {
  var _useStore = (0, _store.useStore)(),
    state = _useStore.state,
    setState = _useStore.setState;
  var connect = (0, _react.useCallback)(function (name) {
    selectWallet(name);
  }, []);
  var disconnect = (0, _react.useCallback)(function () {
    setState({
      isConnected: false,
      isLoading: false,
      enabledWallet: null,
      error: null
    });
    (0, _utils.disconnectWallet)();
  }, []);
  var getAddress = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(callback) {
      var _address;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              error: null,
              isLoading: true
            }));
            _context.next = 4;
            return (0, _utils.getWalletAddress)(state.enabledWallet);
          case 4:
            _address = _context.sent;
            callback(_address);
            _context.next = 11;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            if (_context.t0 instanceof Error) {
              setState(_objectSpread(_objectSpread({}, state), {}, {
                isLoading: false,
                error: _context.t0.message
              }));
            }
          case 11:
            _context.prev = 11;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              error: null,
              isLoading: false
            }));
            return _context.finish(11);
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 8, 11, 14]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [state.isConnected, state.enabledWallet]);
  var getChangeAddress = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(callback) {
      var _address2;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              error: null,
              isLoading: true
            }));
            _context2.next = 4;
            return (0, _utils.getWalletChangeAddress)(state.enabledWallet);
          case 4:
            _address2 = _context2.sent;
            callback(_address2);
            _context2.next = 11;
            break;
          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            if (_context2.t0 instanceof Error) {
              setState(_objectSpread(_objectSpread({}, state), {}, {
                isLoading: false,
                error: _context2.t0.message
              }));
            }
          case 11:
            _context2.prev = 11;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              error: null,
              isLoading: false
            }));
            return _context2.finish(11);
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 8, 11, 14]]);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }(), [state.isConnected, state.enabledWallet]);
  var getBalance = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(callback) {
      var _balance;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              error: null,
              isLoading: true
            }));
            _context3.next = 4;
            return (0, _utils.getWalletBalance)(state.enabledWallet);
          case 4:
            _balance = _context3.sent;
            callback(_balance);
            _context3.next = 11;
            break;
          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            if (_context3.t0 instanceof Error) {
              setState(_objectSpread(_objectSpread({}, state), {}, {
                isLoading: false,
                error: _context3.t0.message
              }));
            }
          case 11:
            _context3.prev = 11;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              error: null,
              isLoading: false
            }));
            return _context3.finish(11);
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 8, 11, 14]]);
    }));
    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }(), [state.isConnected, state.enabledWallet]);
  var signTransaction = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(tx, callback) {
      var signedTx;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              error: null,
              isLoading: true
            }));
            _context4.next = 4;
            return (0, _utils.signWalletTransaction)(state.enabledWallet, tx);
          case 4:
            signedTx = _context4.sent;
            callback(signedTx);
            _context4.next = 11;
            break;
          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            if (_context4.t0 instanceof Error) {
              setState(_objectSpread(_objectSpread({}, state), {}, {
                isLoading: false,
                error: _context4.t0.message
              }));
            }
          case 11:
            _context4.prev = 11;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              error: null,
              isLoading: false
            }));
            return _context4.finish(11);
          case 14:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 8, 11, 14]]);
    }));
    return function (_x4, _x5) {
      return _ref4.apply(this, arguments);
    };
  }(), [state.isConnected, state.enabledWallet]);
  var selectWallet = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(walletName) {
      var enabledWallet;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              isLoading: true,
              error: null
            }));

            // enable wallet
            _context5.next = 4;
            return (0, _utils.enableWallet)(walletName);
          case 4:
            enabledWallet = _context5.sent;
            setState({
              isConnected: true,
              isLoading: false,
              enabledWallet: enabledWallet,
              error: null
            });
            _context5.next = 12;
            break;
          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            disconnect();

            // ignore error message if user manually disconnected, otherwise update state
            if (_context5.t0 instanceof Error && _context5.t0.message !== _common.APIErrorMessage.manualDisconnect) {
              setState({
                enabledWallet: null,
                isConnected: false,
                isLoading: false,
                error: _context5.t0.message
              });
            }
          case 12:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 8]]);
    }));
    return function (_x6) {
      return _ref5.apply(this, arguments);
    };
  }(), [state.isConnected, state.enabledWallet]);

  /**
   * If wallet should be connected but is not available in the state,
   * ensure that it is available and connected.
   */
  var getEnabledWallet = (0, _react.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var initialWalletName, isWalletConnected, enabledWallet;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          initialWalletName = (0, _helpers.getInitialWalletName)();
          if (!(initialWalletName && state.isConnected && !state.enabledWallet)) {
            _context6.next = 18;
            break;
          }
          _context6.next = 4;
          return (0, _store.checkForEnabledWallet)();
        case 4:
          isWalletConnected = _context6.sent;
          if (isWalletConnected) {
            _context6.next = 8;
            break;
          }
          setState({
            enabledWallet: null,
            isConnected: false,
            isLoading: false,
            error: "Unable to find connected wallet."
          });
          return _context6.abrupt("return");
        case 8:
          _context6.prev = 8;
          _context6.next = 11;
          return (0, _utils.enableWallet)(initialWalletName);
        case 11:
          enabledWallet = _context6.sent;
          setState({
            isConnected: true,
            isLoading: false,
            enabledWallet: enabledWallet,
            error: null
          });
          _context6.next = 18;
          break;
        case 15:
          _context6.prev = 15;
          _context6.t0 = _context6["catch"](8);
          if (_context6.t0 instanceof Error) {
            setState({
              enabledWallet: null,
              isConnected: false,
              isLoading: false,
              error: _context6.t0.message
            });
          }
        case 18:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[8, 15]]);
  })), [state.isConnected, state.enabledWallet]);

  /**
   * Ensure hook state responds to localStorage being changed from utils.
   */
  (0, _react.useEffect)(function () {
    var syncHookState = function syncHookState() {
      var walletName = (0, _helpers.getInitialWalletName)();
      if (!state.isConnected && walletName) {
        selectWallet(walletName);
      }
      if (state.isConnected && !walletName) {
        setState({
          enabledWallet: null,
          isLoading: false,
          isConnected: false,
          error: null
        });
      }
    };
    window.addEventListener(_common.storageKey, syncHookState);
    return function () {
      window.removeEventListener(_common.storageKey, syncHookState);
    };
  }, [state.isConnected]);

  /**
   * Initialize with previously connected wallet (if necessary) when hook mounts.
   */
  (0, _react.useEffect)(function () {
    getEnabledWallet();
  }, []);
  return {
    isConnected: state.isConnected,
    isLoading: state.isLoading,
    error: state.error,
    wallet: state.enabledWallet,
    connect: connect,
    disconnect: disconnect,
    getAddress: getAddress,
    getChangeAddress: getChangeAddress,
    getBalance: getBalance,
    getSupportedWallets: _utils.getSupportedWallets,
    signTransaction: signTransaction
  };
};
var _default = useConnectWallet;
exports["default"] = _default;