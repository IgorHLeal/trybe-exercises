"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
}
exports.default = Item;
