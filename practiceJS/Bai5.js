let text = 'aaaBBBB'

let upperCount = (text.match(/[A-Z]/g) || []).length;
let lowerCount = (text.match(/[a-z]/g) || []).length;

if (upperCount > lowerCount) {
    console.log(text.toUpperCase());
} else {
    console.log(text.toLowerCase());
}