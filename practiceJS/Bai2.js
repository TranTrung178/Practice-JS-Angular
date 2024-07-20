let nowTime = new Date();
let daysRemaining = new Date(nowTime.getFullYear(), nowTime.getMonth() + 1, 0).getDate() - nowTime.getDate();
console.log(daysRemaining);
