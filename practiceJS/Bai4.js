let text = 'thuc tap tot nghiep'

console.log(text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '))