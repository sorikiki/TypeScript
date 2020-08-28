"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var PostList_1 = __importDefault(require("./components/PostList"));
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(PostList_1.default, null)));
}
exports.default = App;
