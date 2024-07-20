function intersection(array1, array2) {
    array1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);

    let i = 0, j = 0;
    let result = [];

    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            i++;
        } else if (array1[i] > array2[j]) {
            j++;
        } else {
            // array1[i] === array2[j]
            if (result.length === 0 || result[result.length - 1] !== array1[i]) {
                result.push(array1[i]);
            }
            i++;
            j++;
        }
    }

    return result;
}

// Ví dụ sử dụng
let array1 = [4, 9, 5];
let array2 = [9, 4, 9, 8, 4];

let commonElements = intersection(array1, array2);

console.log(commonElements); 
