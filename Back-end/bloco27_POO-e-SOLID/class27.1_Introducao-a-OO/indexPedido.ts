//index.ts
import Client from './client';
import Item from './item';
import Pedido from './pedido';

const client = new Client('João');

const sandwich = new Item('Sanduíche Natural', 5.00);
const juice = new Item('Suco de Abacaxi', 5.00);
const dessert = new Item('Gelatina de Uva', 2.50);

const order = new Pedido(client, [sandwich, juice, dessert], 'dinheiro', 0.10);
const orderTwo = new Pedido(client, [sandwich, juice, dessert], 'dinheiro', 0.30);

console.log(order);
console.log(order.totalPrice());
console.log(order.totalDiscount());

console.log(' ');

console.log(orderTwo);
console.log(orderTwo.totalPrice());
console.log(orderTwo.totalDiscount());


