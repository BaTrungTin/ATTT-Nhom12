const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});

// Xử lý đăng nhập
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".sign-in-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Ngăn form reload trang

        const usernameInput = document.querySelector(".sign-in-form input[type='text']").value;
        const passwordInput = document.querySelector(".sign-in-form input[type='password']").value;

        // Tài khoản cố định
        const validUsername = "admin";
        const validPassword = "123456";

        if (usernameInput === validUsername && passwordInput === validPassword) {
            alert("Đăng nhập thành công!");
            window.location.href = "page.html"; // Chuyển hướng sang trang chính
        } else {
            alert("Sai tên đăng nhập hoặc mật khẩu!");
        }
    });
});
