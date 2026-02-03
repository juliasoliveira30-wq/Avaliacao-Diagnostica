let x = 5;
let y = 10;
let z = (x++ * --y) / 2 + (y % 3);

// // 1. Pré-decremento de y: --y reduz y de 10 para 9.
// 2. Pós-incremento de x: x++ usa o valor atual de x (5) na expressão e depois incrementa x para 6.
// 3. Multiplicação: 5 * 9 = 45.
// 4. Divisão: 45 / 2 = 22.5.
// 5. Resto da divisão: 9 % 3 = 0.
// 6. Soma final: 22.5 + 0 = 22.5.
// Portanto, o valor final de z é 22.5.