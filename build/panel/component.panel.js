'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _component = require('../route/component.route');

var _component2 = _interopRequireDefault(_component);

var _reducer = require('../reducer.router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Panel = function (_React$Component) {
  _inherits(Panel, _React$Component);

  function Panel() {
    _classCallCheck(this, Panel);

    return _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).apply(this, arguments));
  }

  _createClass(Panel, [{
    key: 'render',
    value: function render() {
      return this.props.ignoreWhen ? '' : this.changePanel(this.props, false);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.changePanel(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.navigation.getIn(["data", "location"]) != nextProps.navigation.getIn(["data", "location"])) {
        this.changePanel(nextProps);
      }
    }
  }, {
    key: 'changePanel',
    value: function changePanel(props) {
      var announce = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var panel = props.panel,
          panelName = props.panelName,
          navigation = props.navigation,
          children = props.children,
          ignoreWhen = props.ignoreWhen;

      if (ignoreWhen) {
        return true;
      }
      var params = void 0,
          foundElement = void 0;
      var location = navigation.getIn(["data", "location"]) || "/";
      _react2.default.Children.forEach(children, function (child) {
        if (!foundElement) {
          var findParams = new RegExp(/:([^\/]*)/, "g");
          var query = child.props.when.replace(findParams, "([^\\/]*)");
          var regx = child.props.exact ? new RegExp('^' + query + '$') : new RegExp('^' + query + '.*');
          var _found = location.match(regx);
          if (_found) {
            var paramValues = child.props.when.match(findParams);
            if (paramValues) {
              params = paramValues.reduce(function (result, next, key) {
                result[next.replace(":", "")] = _found[key + 1];
                return result;
              }, {});
            }
            foundElement = _react2.default.cloneElement(child);
          }
        }
      });
      if (!foundElement) return true;
      var route = foundElement.props.when;

      var current = panel.getIn(["data", panelName]);
      var found = {
        panelName: panelName,
        route: route,
        params: params
      };
      if (announce && (0, _reducer.panelChanged)({ current: current, found: found })) {
        if (foundElement.props.onRender) foundElement.props.onRender(params, foundElement.props);
        this.props.rendering(found);
      }
      return foundElement;
    }
  }]);

  return Panel;
}(_react2.default.Component);

exports.default = Panel;