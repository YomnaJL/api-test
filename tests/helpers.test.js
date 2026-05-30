import { add, subtract, multiply, divide } from "../src/helpers.js";

describe("add", () => {
  test("addition de deux positifs", () => {
    expect(add(2, 3)).toBe(5);
  });
  test("addition avec zéro", () => {
    expect(add(0, 7)).toBe(7);
  });
  test("addition de négatifs", () => {
    expect(add(-3, -4)).toBe(-7);
  });
});

describe("subtract", () => {
  test("soustraction basique", () => {
    expect(subtract(10, 4)).toBe(6);
  });
  test("résultat négatif", () => {
    expect(subtract(2, 9)).toBe(-7);
  });
});

describe("multiply", () => {
  test("multiplication basique", () => {
    expect(multiply(3, 7)).toBe(21);
  });
  test("multiplication par zéro", () => {
    expect(multiply(5, 0)).toBe(0);
  });
});

describe("divide", () => {
  test("division basique", () => {
    expect(divide(10, 2)).toBe(5);
  });
  test("division par zéro lance une erreur", () => {
    expect(() => divide(5, 0)).toThrow("Division par zéro impossible.");
  });
});
