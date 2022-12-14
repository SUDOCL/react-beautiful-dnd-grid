"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withMaxItems = void 0;
var react_1 = __importDefault(require("react"));
var compute_1 = require("./compute");
var withMaxItems = function (Component, createId) {
    return /** @class */ (function (_super) {
        __extends(ComponentWithMaxItems, _super);
        function ComponentWithMaxItems(props) {
            var _this = _super.call(this, props) || this;
            _this.findChunkIndex = function (id) {
                return _this.state.chunks.findIndex(function (chunk) { return chunk.id === id; });
            };
            _this.onDragEnd = function (_a) {
                var source = _a.source, destination = _a.destination;
                if (destination) {
                    var indexInSourceChunk = source.index, sourceChunkId = source.id;
                    var indexInDestinationChunk = destination.index, destinationChunkId = destination.id;
                    var sourceChunkIndex = _this.findChunkIndex(sourceChunkId);
                    var destinationChunkIndex = _this.findChunkIndex(destinationChunkId);
                    var sourceIndex = (0, compute_1.computeOriginalIndex)(_this.state.maxItems, sourceChunkIndex, indexInSourceChunk);
                    var destinationIndex = (0, compute_1.computeOriginalIndexAfterDrop)(_this.state.maxItems, sourceChunkIndex, destinationChunkIndex, indexInDestinationChunk);
                    _this.props.onDragEnd(sourceIndex, destinationIndex);
                }
            };
            _this.render = function () {
                var _a = _this.props, items = _a.items, maxItems = _a.maxItems, onDragEnd = _a.onDragEnd, rest = __rest(_a, ["items", "maxItems", "onDragEnd"]);
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                return react_1.default.createElement(Component, __assign({ chunks: _this.state.chunks, onDragEnd: _this.onDragEnd }, rest));
            };
            var maxItems = props.maxItems && props.maxItems > 0 ? props.maxItems : props.items.length;
            _this.state = {
                maxItems: maxItems,
                items: props.items,
                chunks: (0, compute_1.splitItems)(maxItems, props.items, createId)
            };
            return _this;
        }
        return ComponentWithMaxItems;
    }(react_1.default.Component));
};
exports.withMaxItems = withMaxItems;
