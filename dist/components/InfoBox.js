"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var __jsx = _react["default"].createElement;

var InfoBox = function InfoBox(_ref) {
  var icon = _ref.icon,
      text = _ref.text;
  return __jsx("span", null, icon, " ", __jsx("span", null, text));
};

var _default = InfoBox;
exports["default"] = _default;