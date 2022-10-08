"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SuperClass_1 = __importDefault(require("./SuperClass"));
class SubClass extends SuperClass_1.default {
    constructor() {
        super();
        this.isSuper = false;
    }
}
exports.default = SubClass;
