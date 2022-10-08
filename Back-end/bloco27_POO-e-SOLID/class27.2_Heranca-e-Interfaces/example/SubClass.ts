import SuperClass from './SuperClass';

export default class SubClass extends SuperClass {
  constructor() {
    super();
    this.isSuper = false;
  }
}
