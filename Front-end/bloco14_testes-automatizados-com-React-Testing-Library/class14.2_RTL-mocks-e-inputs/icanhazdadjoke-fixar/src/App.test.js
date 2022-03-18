import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// O afterEach az com que, após cada teste, o mock seja limpo
afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  // A const joke cria um objeto similar ao que é retornado da API 
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  // jest.spyOn espiona as chamadas a função fetch do objeto global
  // Através do global acessamos qualquer função do sistema
  // O mock é chamado quando a função fetch é chamada
  jest.spyOn(global, 'fetch');
  // Para cada .then na função original, temos um .mockResolvedValue para simular o retorno do fetch
  // Primeiro retornamos um objeto que contem a função .json e dentro dela criamos um mock que retorna a nossa piada, satisfazendo o que é esperado no nosso componente;
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
  // O async é usado para esperar até que seja encontrado o que é passado para o await.screen...
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');

  expect(renderedJoke).toBeInTheDocument();
  // toBeCalledTimes: garante o número de chamadas ao fetch
  expect(global.fetch).toBeCalledTimes(1);
  // toBeCalledWith: garante que o fecth foi chamado com os argumentos corretos
  expect(global.fetch).toBeCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});

// ---------- Outra forma para realizar o teste ----------
// Nesse caso estamos dizendo que o fetch é uma função mockada com jest.fn que retorna uma Promise, e na primeira vez que for resolvida, deve retornar um objeto com a função json que também é uma Promise, que quando resolvida retorna a piada

/* afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(joke),
  }));

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
});
 */