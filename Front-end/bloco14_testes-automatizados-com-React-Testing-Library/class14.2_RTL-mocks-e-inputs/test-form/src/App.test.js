import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Alterando o valor dos campos e testanso o valor guardado', () => {
  render(<App />);
  const inputName = screen.getByRole('textbox', { name: /nome/i });
  expect(inputName).toBeInTheDocument();
  expect(inputName).toHaveValue('');

  // O userEvent simula interações do usuário, ele dispara um evento no elemento da página selecionado.
  // Ele recebe o type e no primeiro argumento passamos o elemento que queremos interagir, e no segundo a ação de interação, que nesse caso é digitar;
  userEvent.type(inputName, 'Estudante da Trybe');
  expect(inputName).toHaveValue('Estudante da Trybe');

  const inputEmail = screen.getByRole('textbox', { name: /email/i });
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveValue('');
  userEvent.type(inputEmail, 'estudante@trybe.com');
  expect(inputEmail).toHaveValue('estudante@trybe.com');
})