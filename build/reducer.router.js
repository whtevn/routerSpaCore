'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.panelChanged = exports.Reducer = exports.initialState = undefined;

var _immutable = require('immutable');

var _actions = require('./actions.router');

var Actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = exports.initialState = (0, _immutable.fromJS)({
  data: {}
});

var Reducer = exports.Reducer = function Reducer(state, action) {
  var payload = void 0;
  switch (action.type) {
    case Actions.GOTO:
      window.location = '#' + action.payload;
      return state;
    case Actions.RENDER:
      return state.setIn(["data", action.payload.panelName], (0, _immutable.fromJS)(action.payload));
    default:
      return state;
  }
};

var panelChanged = exports.panelChanged = function panelChanged(_ref) {
  var current = _ref.current,
      found = _ref.found;
  return !current || !current.equals((0, _immutable.fromJS)(found));
};