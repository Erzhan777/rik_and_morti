// math.js
export const sum = (a, b) => a + b;
export const multiply = (a, b) => a * b;
export const subtract = (a, b) => a - b;

// app.js
import { sum, multiply, subtract } from "./math.js";

console.log("Сумма: ", sum(5, 3)); // 8
console.log("Произведение: ", multiply(5, 3)); // 15
console.log("Разность: ", subtract(5, 3)); // 2


