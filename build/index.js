'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StateManager = exports.Actions = undefined;
exports.prepareBrowserHistory = prepareBrowserHistory;

var _component = require('./component.router');

Object.keys(_component).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _component[key];
    }
  });
});

var _reducer = require('./reducer.router');

var StateManager = _interopRequireWildcard(_reducer);

var _actions = require('./actions.router');

var Actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function prepareBrowserHistory(store) {
  var initialLocation = window.location.hash ? window.location.hash.replace("#", "") : "/";
  store.dispatch(Actions.Goto(initialLocation));
  window.onhashchange = function () {
    if (window.location.hash.match("#")) store.dispatch(Actions.NavigateTo(window.location.hash.replace("#", "")));
  };
}

exports.Actions = Actions;
exports.StateManager = StateManager;