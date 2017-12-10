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