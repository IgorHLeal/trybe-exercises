import React from "react";
import { render, screen } from '@testing-library/react';
import ValidEmail from "./ValidEmail";

test('Testando um componente, caso o email seja validado', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

test('Testando se o componente não aparece caso o campo email esteja vazio.', () => {
  render(<ValidEmail email='' />);
  const isValidEmail = screen.queryByTestId('id-is-email-valid');
  expect(isValidEmail).not.toBeInTheDocument();
});

test('Testando se existe a cor verde ao ser digitado um email válido.', () => {
  // Acessar os elementos da tela
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValidEmail = screen.getByText('Email Válido');

  // Interagir com os elementos, se necessário

  // Fazer os testes
  expect(isValidEmail).toHaveClass("green-color");
});


test('Testando se existe a cor vermelha ao ser digitado um email inválido.', () => {
  // Acessar os elementos da tela
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValidEmail = screen.getByText('Email Inválido');

  // Interagir com os elementos, se necessário

  // Fazer os testes
  expect(isValidEmail).toHaveClass("red-color");
});
