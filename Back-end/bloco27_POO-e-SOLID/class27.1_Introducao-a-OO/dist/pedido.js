"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pedido {
    constructor(client, item, payment, percentage) {
        this._item = [];
        this._client = client;
        this._item = item;
        this._payment = payment;
        this._percentage = percentage;
    }
    totalPrice() {
        const prices = this._item;
        return prices.reduce((previousPrice, price) => {
            const total = previousPrice + price.price;
            return total;
        }, 0);
    }
    totalDiscount() {
        return this.totalPrice() * (1 - this.percentage);
    }
    get client() {
        return this._client;
    }
    set client(value) {
        this._client = value;
    }
    get item() {
        return this._item;
    }
    set item(value) {
        this._item = value;
    }
    get payment() {
        return this._payment;
    }
    set payment(value) {
        this._payment = value;
    }
    get percentage() {
        return this._percentage;
    }
    set percentage(value) {
        this._percentage = value;
    }
}
exports.default = Pedido;
