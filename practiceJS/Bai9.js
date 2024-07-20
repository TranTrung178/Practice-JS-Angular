function hasInvalidValue(obj) {
    return Object.values(obj).some(value =>
        value === null ||
        value === undefined ||
        (typeof value === 'number' && Number.isNaN(value))
    );
}

// Ví dụ sử dụng
let obj1 = {
    a: 1,
    b: 'hello',
    c: null
};

let obj2 = {
    a: 1,
    b: 'hello',
    c: 42
};

console.log(hasInvalidValue(obj1)); 
console.log(hasInvalidValue(obj2)); 
