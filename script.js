const form = document.getElementById("signupForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (username === "" || email === "" || password === "") {
        showMessage("All fields are required", "red");
        return;
    }

    if (username.length < 3) {
        showMessage("Username must be at least 3 characters", "red");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        showMessage("Enter a valid email address", "red");
        return;
    }

    if (password.length < 8) {
        showMessage("Password must be at least 8 characters", "red");
        return;
    }

    let hasUpper = false;
    let hasNumber = false;

    for (let char of password) {
        if (char >= "A" && char <= "Z") {
            hasUpper = true;
        }
        if (char >= "0" && char <= "9") {
            hasNumber = true;
        }
    }

    if (!hasUpper || !hasNumber) {
        showMessage("Password must include an uppercase letter and a number", "red");
        return;
    }

    showMessage("Account created successfully", "green");
    form.reset();
});

function showMessage(text, colour) {
    message.textContent = text;
    message.style.color = colour;
}
