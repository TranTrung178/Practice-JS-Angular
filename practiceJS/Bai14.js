// Tạo một số lượng phần tử ngẫu nhiên từ 1 đến 10
const numberOfElements = Math.floor(Math.random() * 10) + 1;

const array = Array.from({ length: numberOfElements }, () => ({
    stt: Math.floor(Math.random() * 51)
}));

console.log("Mảng trước khi sắp xếp:", array);

array.sort((a, b) => b.stt - a.stt);

console.log("Mảng sau khi sắp xếp:", array);
