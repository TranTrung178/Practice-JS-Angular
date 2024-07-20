function getKeysWithValue(obj, targetValue) {
    return Object.keys(obj).filter(key => obj[key] === targetValue);
}

let obj = {
    a: 1,
    b: 2,
    c: 1,
    d: 3,
    e: 1
};

let targetValue = 1;
let keysWithValue = getKeysWithValue(obj, targetValue);

console.log(keysWithValue);
