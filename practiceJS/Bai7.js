function deepEqual(obj1, obj2) {
    // Kiểm tra xem cả hai đều là object và không phải null
    if (obj1 === obj2) {
        return true;
    }

    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }
XMLDocument
    // Lấy tất cả các key của cả hai object
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    // Kiểm tra số lượng key có bằng nhau không
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Kiểm tra từng key và value
    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

let obj1 = {
    a: 1,
    b: {
        c: 2,
        d: 3
    }
};

let obj2 = {
    a: 1,
    b: {
        c: 2,
        d: 3
    }
};


console.log(deepEqual(obj1, obj2)); 
