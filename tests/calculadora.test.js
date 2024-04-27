const calculadora = require("../models/calculadora");

test("a soma de 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("a soma de 100 + 23 deveria retornar 123", () => {
  const resultado = calculadora.somar(100, 23);
  expect(resultado).toBe(123);
});

test("a soma decimais 3.47 + 2.5123 deveria retornar 5.9823", () => {
  const resultado = calculadora.somar(3.47, 2.5123);
  expect(resultado).toBe(5.9823);
});

test("a soma valores que não números deve retornar erro", () => {
  const resultado = calculadora.somar("a", 2);
  expect(resultado).toBe("Erro. Informe apenas números.");
});
