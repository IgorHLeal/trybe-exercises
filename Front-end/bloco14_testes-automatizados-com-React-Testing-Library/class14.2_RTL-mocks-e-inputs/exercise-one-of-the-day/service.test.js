const service = require('./service');

test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
  service.randomNumber = jest.fn().mockReturnValue(10);

  expect(service.randomNumber()).toBe(10);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});

it("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
  // Pesquisar porque o mockReturnValueOnce não funcionou
  service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  // Testar retorno da função
  expect(service.randomNumber(10, 2)).toBe(5);
  // Testar se a função é chamada
  expect(service.randomNumber).toHaveBeenCalled();
  // Testar quantas vezes ela é chamada
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  // Testar se são passados os argumentos corretos
  expect(service.randomNumber).toHaveBeenCalledWith(10, 2);
});

describe('Implementação do requisito 3', () => {
  it('Mockando para a função receber 3 parâmetros e retornar sua multiplicalção', () => {
    // Usar mesma lógica so exercício anterior
    // Pesquisar porque o mockReturnValue não funcionou
    service.randomNumber = jest.fn().mockImplementation((a,b ,c) => a * b * c);
  
    expect(service.randomNumber(2, 5, 10)).toBe(100);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(2, 5, 10);
  });

  it('Mockando para resetar a implementação e criar uma nova que receba apenas um parâmetro e retorne o seu dobro', () => {
    // Resetar função
    service.randomNumber.mockReset();
    expect(service.randomNumber).toHaveBeenCalledTimes(0);

    // Receber um parâmetro e retornar o seu dobro
    service.randomNumber = jest.fn().mockImplementation((a) => a * 2);

    // Realizar testes que eu acahr necessário: mesmos testes do requisito anterior
    expect(service.randomNumber(10)).toBe(20);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(10);

  });
})

