export default class Client {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public get name_1(): string {
    return this._name;
  };
  public set name_1(value: string) {
    this._name = value;
  };
}