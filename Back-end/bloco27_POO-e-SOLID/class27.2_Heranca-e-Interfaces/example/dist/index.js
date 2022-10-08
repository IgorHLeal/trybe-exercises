"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SubClass_1 = __importDefault(require("./SubClass"));
const SuperClass_1 = __importDefault(require("./SuperClass"));
const myFunc = (objeto) => {
    objeto.sayHello();
    console.log(objeto.isSuper ? 'Super!' : 'Sub!');
};
const sup = new SuperClass_1.default();
const sub = new SubClass_1.default();
console.log(myFunc(sup));
console.log(myFunc(sub));
