let array = [1, 3, 4, 4, ,3,1,3,2,4,5];
let uniqueArray = array.filter((item, index) => array.indexOf(item) === index);

console.log(uniqueArray);
