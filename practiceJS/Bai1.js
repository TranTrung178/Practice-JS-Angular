let str = 'practiceJS'

setTimeout(() => {
    str = str.slice(-1) + str.slice(0, -1);
    console.log(str);
}, 500);