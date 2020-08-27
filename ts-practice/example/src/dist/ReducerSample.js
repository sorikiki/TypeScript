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
exports.__esModule = true;
var react_1 = require("react");
function reducer(state, action) {
    switch (action.type) {
        case 'SET_COUNT':
            return __assign(__assign({}, state), { count: action.count });
        case 'SET_TEXT':
            return __assign(__assign({}, state), { text: action.text });
        case 'SET_COLOR':
            return __assign(__assign({}, state), { color: action.color });
        case 'TOGGLE_GOOD':
            return __assign(__assign({}, state), { isGood: !state.isGood });
        default:
            throw new Error('Unhandled action');
    }
}
function ReducerSample() {
    var _a = react_1.useReducer(reducer, {
        count: 0,
        text: 'hello',
        color: 'red',
        isGood: true
    }), state = _a[0], dispatch = _a[1];
    var setCount = function () { return dispatch({ type: 'SET_COUNT', count: 5 }); }; // count 를 넣지 않으면 에러발생
    var setText = function () { return dispatch({ type: 'SET_TEXT', text: 'bye' }); }; // text 를 넣지 않으면 에러 발생
    var setColor = function () { return dispatch({ type: 'SET_COLOR', color: 'orange' }); }; // orange 를 넣지 않으면 에러 발생
    var toggleGood = function () { return dispatch({ type: 'TOGGLE_GOOD' }); };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("p", null,
            react_1["default"].createElement("code", null, "count: "),
            " ",
            state.count),
        react_1["default"].createElement("p", null,
            react_1["default"].createElement("code", null, "text: "),
            " ",
            state.text),
        react_1["default"].createElement("p", null,
            react_1["default"].createElement("code", null, "color: "),
            " ",
            state.color),
        react_1["default"].createElement("p", null,
            react_1["default"].createElement("code", null, "isGood: "),
            " ",
            state.isGood ? 'true' : 'false'),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("button", { onClick: setCount }, "SET_COUNT"),
            react_1["default"].createElement("button", { onClick: setText }, "SET_TEXT"),
            react_1["default"].createElement("button", { onClick: setColor }, "SET_COLOR"),
            react_1["default"].createElement("button", { onClick: toggleGood }, "TOGGLE_GOOD"))));
}
exports["default"] = ReducerSample;
