"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withReactToItemsChange = void 0;
var react_1 = __importDefault(require("react"));
var object_hash_1 = __importDefault(require("object-hash"));
var withReactToItemsChange = function (Component) { return function (props) { return react_1.default.createElement(Component, __assign({ key: (0, object_hash_1.default)(props.items) }, props)); }; };
exports.withReactToItemsChange = withReactToItemsChange;
