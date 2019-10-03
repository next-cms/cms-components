"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var __jsx = _react["default"].createElement;

var Brand = function Brand(_ref) {
  var imageUrl = _ref.imageUrl,
      brandName = _ref.brandName;

  var img = imageUrl && __jsx("img", {
    src: imageUrl,
    alt: "brand-logo"
  });

  return __jsx("span", null, img, " ", brandName, " ");
};

var _default = Brand;
exports["default"] = _default;