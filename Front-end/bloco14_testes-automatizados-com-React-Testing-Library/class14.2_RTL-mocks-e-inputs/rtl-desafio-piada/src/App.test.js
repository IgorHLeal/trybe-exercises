import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Teste do App Jokes", () => {
  test('exibe o título "Piadas do Chuck Norris" na tela', () => {
    render(<App />);

    const title = screen.getByText('Piadas do Chuck Norris');
    expect(title).toBeInTheDocument();

  });

  test("exibe o corpo da piada na tela", async () => {
    render(<App />);

    const joke = await screen.findB
  });
});
