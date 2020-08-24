"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Greeting_1 = require("./Greeting");
function App() {
    var onShowName = function (name) {
        console.log(name + " says hello");
    };
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(Greeting_1["default"], { name: 'dasol', onClick: onShowName })));
}
exports["default"] = App;
