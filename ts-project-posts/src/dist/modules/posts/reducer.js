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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var typesafe_actions_1 = require("typesafe-actions");
var actions = __importStar(require("./actions"));
var initialState = {
    posts: {
        loading: false,
        data: null,
        error: false,
    },
    post: {
        loading: false,
        data: null,
        error: false,
    }
};
var postReducer = typesafe_actions_1.createReducer(initialState, (_a = {},
    _a[actions.GET_POSTS_REQUEST] = function (state) { return (__assign(__assign({}, state), { posts: {
            loading: true,
            data: null,
            error: false,
        } })); },
    _a[actions.GET_POSTS_SUCCESS] = function (state, action) { return (__assign(__assign({}, state), { posts: {
            loading: false,
            data: action.payload,
            error: false,
        } })); },
    _a[actions.GET_POST_ERROR] = function (state) { return (__assign(__assign({}, state), { posts: {
            loading: false,
            data: null,
            error: true,
        } })); },
    _a[actions.GET_POST_REQUEST] = function (state) { return (__assign(__assign({}, state), { post: {
            loading: true,
            data: null,
            error: false,
        } })); },
    _a[actions.GET_POST_SUCCESS] = function (state, action) { return (__assign(__assign({}, state), { post: {
            loading: false,
            data: action.payload,
            error: false,
        } })); },
    _a[actions.GET_POST_ERROR] = function (state) { return (__assign(__assign({}, state), { post: {
            loading: false,
            data: null,
            error: true,
        } })); },
    _a));
exports.default = postReducer;
