let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let obj3 = { e: 5, f: 6 };

let combinedObj = { ...obj1, ...obj2, ...obj3 };

console.log(combinedObj);