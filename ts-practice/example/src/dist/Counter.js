"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Counter() {
    var _a = react_1.useState(0), count = _a[0], setCount = _a[1];
    var onIncrease = function () { return setCount(count + 1); };
    var onDecrease = function () { return setCount(count - 1); };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h1", null, count),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("button", { onClick: onIncrease }, "+1"),
            react_1["default"].createElement("button", { onClick: onDecrease }, "-1"))));
}
exports["default"] = Counter;
