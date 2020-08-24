"use strict";
exports.__esModule = true;
var react_1 = require("react");
;
var Greetings = function (_a) {
    var name = _a.name, mark = _a.mark, onClick = _a.onClick, option = _a.option;
    var handleClick = function () { return onClick(name); };
    return (react_1["default"].createElement("div", null,
        "Hello, ",
        name,
        " ",
        mark,
        react_1["default"].createElement("button", { onClick: handleClick }, "Click me")));
};
Greetings.defaultProps = {
    mark: '!'
};
exports["default"] = Greetings;
