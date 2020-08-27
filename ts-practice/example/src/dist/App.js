"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Greeting_1 = require("./Greeting");
var Counter_1 = require("./Counter");
var ReducerSample_1 = require("./ReducerSample");
function App() {
    var onShowName = function (name) {
        console.log(name + " says hello");
    };
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(Greeting_1["default"], { name: 'dasol', onClick: onShowName }),
        react_1["default"].createElement(Counter_1["default"], null),
        react_1["default"].createElement(ReducerSample_1["default"], null)));
}
exports["default"] = App;
