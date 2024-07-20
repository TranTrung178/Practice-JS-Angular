if (password.length < 8) {
    console.log("Chưa đủ 8 kí tự");
}

const hasUpperCase = /[A-Z]/.test(password);
const hasNumber = /\d/.test(password);
const hasSpecialChar = /[!@#$%^&*()_+\-=\\[\]{}]/.test(password);

if (hasNumber && hasNumber && hasSpecialChar)
    console.log("Mật khẩu mạnh")
else
    console.log("Mật khẩu chưa đủ mạnh")