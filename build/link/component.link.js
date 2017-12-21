"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NOOP = function NOOP() {};

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    _classCallCheck(this, Link);

    return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
  }

  _createClass(Link, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var location = this.props.navigation.getIn(["data", "location"]) || "/";
      var current = this.props.to && location.match(this.props.to);
      var navigation = this.props.navigateWith;
      var href = "#" + (navigation ? "" : this.props.to);
      var _onClick = this.props.onClick || NOOP;

      return _react2.default.createElement(
        "a",
        {
          href: href,
          className: (this.props.className || "") + (current ? " is-selected" : ""),
          onClick: function onClick() {
            _onClick();
            navigation && _this2.goto.bind(_this2);
          } },
        this.props.children
      );
    }
  }, {
    key: "goto",
    value: function goto(e) {
      e.preventDefault();
      this.props.navigateWith(this.props.to);
    }
  }]);

  return Link;
}(_react2.default.Component);

exports.default = Link;