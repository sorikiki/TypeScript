"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Greetings(_a) {
    var name = _a.name, mark = _a.mark;
    return (react_1["default"].createElement("div", null,
        "Hello, ",
        name,
        " ",
        mark));
}
Greetings.defaultProps = {
    mark: '!'
};
exports["default"] = Greetings;
