// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/normalize.css/normalize.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"common.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"normalize.css/normalize":"../node_modules/normalize.css/normalize.css","_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"todo-list.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/nanoid/url-alphabet/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.urlAlphabet = void 0;
var urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';
exports.urlAlphabet = urlAlphabet;
},{}],"../node_modules/nanoid/index.browser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.random = exports.nanoid = exports.customRandom = exports.customAlphabet = void 0;
Object.defineProperty(exports, "urlAlphabet", {
  enumerable: true,
  get: function () {
    return _index.urlAlphabet;
  }
});
var _index = require("./url-alphabet/index.js");
var random = function random(bytes) {
  return crypto.getRandomValues(new Uint8Array(bytes));
};
exports.random = random;
var customRandom = function customRandom(alphabet, defaultSize, getRandom) {
  var mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1;
  var step = -~(1.6 * mask * defaultSize / alphabet.length);
  return function () {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSize;
    var id = '';
    while (true) {
      var bytes = getRandom(step);
      var j = step;
      while (j--) {
        id += alphabet[bytes[j] & mask] || '';
        if (id.length === size) return id;
      }
    }
  };
};
exports.customRandom = customRandom;
var customAlphabet = function customAlphabet(alphabet) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 21;
  return customRandom(alphabet, size, random);
};
exports.customAlphabet = customAlphabet;
var nanoid = function nanoid() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 21;
  return crypto.getRandomValues(new Uint8Array(size)).reduce(function (id, byte) {
    byte &= 63;
    if (byte < 36) {
      id += byte.toString(36);
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase();
    } else if (byte > 62) {
      id += '-';
    } else {
      id += '_';
    }
    return id;
  }, '');
};
exports.nanoid = nanoid;
},{"./url-alphabet/index.js":"../node_modules/nanoid/url-alphabet/index.js"}],"../node_modules/storage/index.js":[function(require,module,exports) {
/*!
 * storage <https://github.com/jonschlinkert/storage>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

/**
 * Expose `storage`
 */
module.exports = Storage;
function Storage(cache) {
  this.cache = cache || {};
}
Storage.prototype.set = function (key, value) {
  this.cache[key] = value;
  return this;
};
Storage.prototype.get = function (key) {
  return this.cache[key];
};
},{}],"todo-list.js":[function(require,module,exports) {
"use strict";

var _nanoid = require("nanoid");
var _storage = _interopRequireDefault(require("storage"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
var _STORAGE_KEY = /*#__PURE__*/new WeakMap();
var _ENTER_KEY_CODE = /*#__PURE__*/new WeakMap();
var _appMarkup = /*#__PURE__*/new WeakMap();
var _refs = /*#__PURE__*/new WeakMap();
var _items = /*#__PURE__*/new WeakMap();
var _defineRefs = /*#__PURE__*/new WeakSet();
var _initListeners = /*#__PURE__*/new WeakSet();
var _updateItems = /*#__PURE__*/new WeakSet();
var _addTask = /*#__PURE__*/new WeakSet();
var _addTaskByEnterKey = /*#__PURE__*/new WeakSet();
var _taskContainerOnClick = /*#__PURE__*/new WeakSet();
var _removeTask = /*#__PURE__*/new WeakSet();
var _toggleTask = /*#__PURE__*/new WeakSet();
var _render = /*#__PURE__*/new WeakSet();
/*
  Написати Todo-list де можна створювати, видаляти елементи та реалізувати
  збереження списку в локал сторедж
 */
var TodoList = /*#__PURE__*/function () {
  function TodoList() {
    _classCallCheck(this, TodoList);
    _classPrivateMethodInitSpec(this, _render);
    _classPrivateMethodInitSpec(this, _toggleTask);
    _classPrivateMethodInitSpec(this, _removeTask);
    _classPrivateMethodInitSpec(this, _taskContainerOnClick);
    _classPrivateMethodInitSpec(this, _addTaskByEnterKey);
    _classPrivateMethodInitSpec(this, _addTask);
    _classPrivateMethodInitSpec(this, _updateItems);
    _classPrivateMethodInitSpec(this, _initListeners);
    _classPrivateMethodInitSpec(this, _defineRefs);
    _classPrivateFieldInitSpec(this, _STORAGE_KEY, {
      writable: true,
      value: 'TODO_LIST_ITEMS'
    });
    _classPrivateFieldInitSpec(this, _ENTER_KEY_CODE, {
      writable: true,
      value: 'Enter'
    });
    _classPrivateFieldInitSpec(this, _appMarkup, {
      writable: true,
      value: "\n      <div class=\"todo-list\">\n        <header class=\"header\">\n          <input class=\"header__input\" type=\"text\" placeholder=\"Enter an activity..\">\n          <button type=\"button\" class=\"header__button\"><i class=\"fa fa-plus\"></i></button>\n        </header>\n        <main class=\"list-container\">\n          <ul class=\"list current-list\"></ul>\n          <hr>\n          <ul class=\"list done-list\"></ul>\n        </main>\n        </script>\n      </div>\n    "
    });
    _classPrivateFieldInitSpec(this, _refs, {
      writable: true,
      value: {}
    });
    _classPrivateFieldInitSpec(this, _items, {
      writable: true,
      value: _storage.default.load(_classPrivateFieldGet(this, _STORAGE_KEY)) || []
    });
  }
  _createClass(TodoList, [{
    key: "init",
    value: function init(targetNode) {
      var targetElement = targetNode || document.body;
      targetElement.innerHTML = _classPrivateFieldGet(this, _appMarkup);
      _classPrivateMethodGet(this, _defineRefs, _defineRefs2).call(this);
      _classPrivateMethodGet(this, _initListeners, _initListeners2).call(this);
      _classPrivateMethodGet(this, _render, _render2).call(this);
    }
  }]);
  return TodoList;
}();
function _defineRefs2() {
  _classPrivateFieldGet(this, _refs).app = document.querySelector('.todo-list');
  if (_classPrivateFieldGet(this, _refs).app) {
    _classPrivateFieldGet(this, _refs).addItemBtn = _classPrivateFieldGet(this, _refs).app.querySelector('.header__button');
    _classPrivateFieldGet(this, _refs).itemInput = _classPrivateFieldGet(this, _refs).app.querySelector('.header__input');
    _classPrivateFieldGet(this, _refs).currentList = _classPrivateFieldGet(this, _refs).app.querySelector('.current-list');
    _classPrivateFieldGet(this, _refs).doneList = _classPrivateFieldGet(this, _refs).app.querySelector('.done-list');
    _classPrivateFieldGet(this, _refs).listContainer = document.querySelector('.list-container');
  }
}
function _initListeners2() {
  _classPrivateFieldGet(this, _refs).addItemBtn.addEventListener('click', _classPrivateMethodGet(this, _addTask, _addTask2).bind(this));
  _classPrivateFieldGet(this, _refs).listContainer.addEventListener('click', _classPrivateMethodGet(this, _taskContainerOnClick, _taskContainerOnClick2).bind(this));
  _classPrivateFieldGet(this, _refs).itemInput.addEventListener('keypress', _classPrivateMethodGet(this, _addTaskByEnterKey, _addTaskByEnterKey2).bind(this));
}
function _updateItems2(items) {
  _classPrivateFieldSet(this, _items, items);
  _classPrivateMethodGet(this, _render, _render2).call(this);
  _storage.default.save(_classPrivateFieldGet(this, _STORAGE_KEY), items);
}
function _addTask2() {
  var value = _classPrivateFieldGet(this, _refs).itemInput.value;
  if (value) {
    var items = _toConsumableArray(_classPrivateFieldGet(this, _items));
    items.push({
      id: (0, _nanoid.nanoid)(),
      value: value,
      done: false
    });
    _classPrivateMethodGet(this, _updateItems, _updateItems2).call(this, items);
  }
  _classPrivateFieldGet(this, _refs).itemInput.value = null;
}
function _addTaskByEnterKey2(e) {
  if (e.code === _classPrivateFieldGet(this, _ENTER_KEY_CODE)) {
    _classPrivateMethodGet(this, _addTask, _addTask2).call(this);
  }
}
function _taskContainerOnClick2(e) {
  var taskRef = e.target.closest('.list__item[data-id]');
  if (taskRef) {
    if (e.target.dataset.action === 'remove') {
      _classPrivateMethodGet(this, _removeTask, _removeTask2).call(this, taskRef.dataset.id);
    }
    if (e.target.dataset.action === 'toggle') {
      _classPrivateMethodGet(this, _toggleTask, _toggleTask2).call(this, taskRef.dataset.id);
    }
  }
}
function _removeTask2(id) {
  var items = _classPrivateFieldGet(this, _items).filter(function (item) {
    return item.id !== id;
  });
  _classPrivateMethodGet(this, _updateItems, _updateItems2).call(this, items);
}
function _toggleTask2(id) {
  var items = _classPrivateFieldGet(this, _items).map(function (item) {
    if (id === item.id) {
      return _objectSpread(_objectSpread({}, item), {}, {
        done: !item.done
      });
    }
    return item;
  });
  _classPrivateMethodGet(this, _updateItems, _updateItems2).call(this, items);
}
function _render2() {
  var getItem = function getItem(_ref) {
    var id = _ref.id,
      value = _ref.value,
      done = _ref.done;
    return "\n       <li class=\"list__item\" data-id=\"".concat(id, "\" data-done=\"").concat(done, "\">\n          <span class=\"list__item-name\">").concat(value, "</span>\n          <div class=\"list__buttons\">\n            <i class=\"list__button remove fa fa-trash-o\" data-action=\"remove\"></i>\n            <span class=\"list__bar\">|</span>\n            <i \n              class=\"", "list__button fa ".concat(done ? 'uncomplete fa-check-circle' : 'complete fa-check-circle-o'), "\"\n              data-action=\"toggle\"\n            ></i>\n          </div>\n       </li>\n      ");
  };
  var todoTasks = _classPrivateFieldGet(this, _items).filter(function (_ref2) {
    var done = _ref2.done;
    return !done;
  });
  var doneTasks = _classPrivateFieldGet(this, _items).filter(function (_ref3) {
    var done = _ref3.done;
    return done;
  });
  _classPrivateFieldGet(this, _refs).currentList.innerHTML = todoTasks.map(getItem).join('');
  _classPrivateFieldGet(this, _refs).doneList.innerHTML = doneTasks.map(getItem).join('');
}
var todoList = new TodoList();
todoList.init();
},{"nanoid":"../node_modules/nanoid/index.browser.js","storage":"../node_modules/storage/index.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./common.css");
require("./todo-list.css");
require("./todo-list.js");
},{"./common.css":"common.css","./todo-list.css":"todo-list.css","./todo-list.js":"todo-list.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49292" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map