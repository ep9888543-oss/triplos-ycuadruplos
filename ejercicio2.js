// Expresión: x = ((m * n) / (p + q)) * (r * k);
let m = 2, n = 3, p = 1, q = 2, r = 4, k = 1;
let t1 = m * n;
let t2 = p + q;
let t3 = t1 / t2;
let t4 = r * k;
let t5 = t3 * t4;
let x = t5;
console.log("x =", x);