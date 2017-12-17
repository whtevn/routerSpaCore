"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Type = "Panel";

var RENDER = exports.RENDER = Type + " RENDER";
var Render = exports.Render = function Render(payload) {
  return {
    type: RENDER,
    payload: payload
  };
};

var GOTO = exports.GOTO = Type + " GOTO";
var Goto = exports.Goto = function Goto(payload) {
  return {
    type: GOTO,
    payload: payload
  };
};