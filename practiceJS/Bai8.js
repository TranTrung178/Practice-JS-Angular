function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    return arr1.every((value, index) => value === arr2[index]);
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [1, 2, 3, 4, 5];

console.log(arraysEqual(array1, array2));