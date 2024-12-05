import { expect, test } from "vitest";
import Calculator from "./index";

const calculator = new Calculator();

test("add function", () => {
  expect(calculator.add(5, 3)).toBe(8);
});

test("subtract function", () => {
  expect(calculator.subtract(10, 5)).toBe(5);
});

test("multiply function", () => {
  expect(calculator.multiply(5, 3)).toBe(15);
});

test("divide function - valid division", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("divide function - division by zero", () => {
  expect(() => calculator.divide(10, 0)).toThrowError("Cannot divide by zero");
});
