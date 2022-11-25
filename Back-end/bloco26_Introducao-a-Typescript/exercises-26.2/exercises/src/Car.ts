import { Colors, Doors, Turn } from './Types';

interface Car {
  _brand: string;
  _doors: number;
  _color: Colors;
}

class Car {
  constructor(brand: string, doors: number, color: Colors) {
    this._brand = brand;
    this._doors = doors;
    this._color = color;
  };

  turnOn(): void {
    console.log('Carro ligado');
  };

  turnOf(): void {
    console.log('Carro desligado');
  };

  speedUp(): void {
    console.log('Acelerando o carro');
  };

  speedDown(): void {
    console.log('Reduzindo a velocidade');
  };

  turn(turn: Turn): void {
    console.log(`Virando o carro para a ${turn}`);
  };

  stop(): void {
    console.log('Parando o carro');
  };

  honk(): void {
    console.log('Buzinando: bi bi');
  };

  openTheDoor(door: Doors): void {
    console.log(`Abrindo a porta do ${door}`);
  };

  closeTheDoor(door: Doors): void {
    console.log(`Fechando a porta do ${door}`);
  }
};

export default Car;


// [Playground Link](https://www.typescriptlang.org/pt/play?#code/PTAEFEA8FMCcGMC38CWB7UBGAUN+AbAQwGdjQBhQ+ACzVlgwG9tRXQB9AOzQFtoAuUMQAusFJwDmAbhZt2sKoUEixkmWw7w6y0eOmzW7FABNCxgaE4BXHgCM4Mg6C2cVV+MLoAKbnx2qJABpQBXglIV1JYK1Yfz1gkzMLazs4AEpQZg0NYWoUYgA6Ll5oUABeSxL1bNZc-KKY8uc6apq6wvlFJtDCVuz2osTzJqHoPoBfbEm8NFdhUGM0CUwmzmgAdwoqWno0LwByAFlofHziQn3g-YBBAGsUYQurgCEFTi1L0AB2NMcXYjQ+GgBXwSy8AAMAPKVPgLDBhGh0BigACXoAAJIxFssir5oONgsQrIQQoQAOcktGY7GYIo9AlCYnNWCojFYpa09gxcagUpEkmjVnUjmDUzmcbg364bAgCAwBDIdCgABM2HEwjgADMqKUABJoKzEUpZORmWDQUhxNROLg2eyxSx2hw2rSgh0qPR9djGfK6DxW-QadgiQgagNerRWTiiACe4amuAIJDI+sNxqc-1E7k8sC8ZotxADwRS9sEJbg0UB2giAWCPo9-pr8QioYsHqizSjsYDGRNbTyHXzpCaQ+IfRyA9xTpZFXLsHHbAGXKrM+aboXtUn3t9Yg8TXrfuEG9AS5DGqaZ7GTgn9WXXdgMaakejD4mCZmc1AtDTK1nG1AqZGgcABKTIAMqENGGDXFBnDoJ8mBXOQ4gAF5PKA+wQdGkHoUcADinz7K8JAoPg+xSh+AJAiCYLfkamBSkAA)