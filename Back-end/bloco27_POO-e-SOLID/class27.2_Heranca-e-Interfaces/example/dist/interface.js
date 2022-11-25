"use strict";
class MyClass {
    constructor(myNumber) {
        this.myNumber = myNumber;
    }
    myFunc(myParam) {
        return `myNumber + myParam: ${this.myNumber + myParam}`;
    }
}
const object = new MyClass(2);
console.log(object.myNumber);
console.log(object.myFunc(10));
