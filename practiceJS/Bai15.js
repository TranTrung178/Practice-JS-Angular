const array = Array.from({ length: Math.floor(Math.random() * 10) + 1 }, () => Math.floor(Math.random() * (50 - 5 + 1)) + 5);

const max = Math.max(...array);

console.log("Mảng:", array);
console.log("Số lớn nhất:", max);

console.log("Mảng:", array, ...array);