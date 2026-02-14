class Calculator {

  constructor() {
    // initialise result to 0
    this.result = 0;
  }

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    if (num === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {

    // Step 1: remove spaces
    const sanitizedExpression = expression.replace(/\s+/g, '');

  // Step 2: check for invalid characters
  if (!/^[0-9+\-*/().]+$/.test(sanitizedExpression)) {
    throw new Error("Invalid characters in expression");
  }

  // Step 3: check division by zero BEFORE evaluation
  if (/\/0+(?!\d)/.test(sanitizedExpression)) {
    throw new Error("Cannot divide by zero");
  }

  // Step 4: evaluate
  try {
    this.result = Function(
      `"use strict"; return (${sanitizedExpression})`
    )();
  } catch (error) {
    throw new Error("Invalid expression");
  }
}

}

module.exports = Calculator;
