import Client  from "./client";
import Item from "./item";

export default class Pedido {
  private _client: Client;
  private _item: Item[] = [];
  private _payment: string;
  private _percentage: number;

  constructor(client: Client, item: Item[], payment: string, percentage: number) {
    this._client = client;
    this._item = item;
    this._payment = payment;
    this._percentage = percentage;
  }

  totalPrice(): number {
    const prices = this._item;
    return prices.reduce((previousPrice, { price }) => {
      const total = previousPrice + price;
      return total;
    }, 0);
  }

  totalDiscount(): number {
    return this.totalPrice() * (1 - this.percentage);
  }

  public get client(): Client {
    return this._client;
  }
  public set client(value: Client) {
    this._client = value;
  }

  public get item(): Item[] {
    return this._item;
  }
  public set item(value: Item[]) {
    this._item = value;
  }
  
  public get payment(): string {
    return this._payment;
  }
  public set payment(value: string) {
    this._payment = value;
  }

  public get percentage(): number {
    return this._percentage;
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
}
