export default class SuperClass {
  public isSuper: boolean;

  constructor () {
    this.isSuper = true;
  }

  public sayHello() {
    console.log('Olá mundo');
  }
}