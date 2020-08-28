"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var reducer_1 = __importDefault(require("./posts/reducer"));
var rootReducer = redux_1.combineReducers({
    postReducer: reducer_1.default
});
exports.default = rootReducer;
