import SubClass from './SubClass';
import SuperClass from './SuperClass';

const myFunc = (objeto: SuperClass) => {
  objeto.sayHello();
  console.log(objeto.isSuper ? 'Super!' : 'Sub!') 
}
const sup = new SuperClass();
const sub = new SubClass();

console.log(myFunc(sup));
console.log(myFunc(sub));