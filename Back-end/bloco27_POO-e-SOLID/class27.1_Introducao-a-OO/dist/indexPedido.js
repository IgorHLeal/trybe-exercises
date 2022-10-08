"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//index.ts
const client_1 = __importDefault(require("./client"));
const item_1 = __importDefault(require("./item"));
const pedido_1 = __importDefault(require("./pedido"));
const client = new client_1.default('João');
const sandwich = new item_1.default('Sanduíche Natural', 5.00);
const juice = new item_1.default('Suco de Abacaxi', 5.00);
const dessert = new item_1.default('Gelatina de Uva', 2.50);
const order = new pedido_1.default(client, [sandwich, juice, dessert], 'dinheiro', 0.10);
const orderTwo = new pedido_1.default(client, [sandwich, juice, dessert], 'dinheiro', 0.30);
console.log(order);
console.log(order.totalPrice());
console.log(order.totalDiscount());
console.log(' ');
console.log(orderTwo);
console.log(orderTwo.totalPrice());
console.log(orderTwo.totalDiscount());
