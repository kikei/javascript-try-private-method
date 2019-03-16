(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } var descriptor = privateMap.get(receiver); if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } var descriptor = privateMap.get(receiver); if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var Hello =
/*#__PURE__*/
function () {
  function Hello(container) {
    _classCallCheck(this, Hello);

    _showMessage.add(this);

    _HELLO.set(this, {
      writable: true,
      value: 'Hello'
    });

    _target.set(this, {
      writable: true,
      value: 'world'
    });

    _listElement.set(this, {
      writable: true,
      value: null
    });

    if (container) {
      removeChildren(container);
      var list = makeList();

      _classPrivateFieldSet(this, _listElement, list);

      container.appendChild(list);
    }
  }

  _createClass(Hello, [{
    key: "print",
    value: function print(message) {
      _classPrivateMethodGet(this, _showMessage, _showMessage2).call(this, "".concat(_classPrivateFieldGet(this, _HELLO), ", ").concat(_classPrivateFieldGet(this, _target)).concat(message));
    }
  }, {
    key: "target",
    set: function set(target) {
      _classPrivateFieldSet(this, _target, target);
    }
  }]);

  return Hello;
}();

exports.default = Hello;

var _HELLO = new WeakMap();

var _target = new WeakMap();

var _listElement = new WeakMap();

var _showMessage = new WeakSet();

var _showMessage2 = function _showMessage2(message) {
  var itemElement = makeListItem(message);

  _classPrivateFieldGet(this, _listElement).appendChild(itemElement);
};

function makeList() {
  var list = document.createElement('ul');
  return list;
}

function makeListItem(text) {
  var textNode = document.createTextNode(text);
  var item = document.createElement('li');
  item.appendChild(textNode);
  return item;
}

function removeChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

},{}],2:[function(require,module,exports){
"use strict";

var _hello = _interopRequireDefault(require("./hello"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  var world = document.getElementById('world');
  var hello = new _hello.default(world);
  hello.print('!');
  hello.target = 'planet';
  hello.print('.');
});

},{"./hello":1}]},{},[2]);
