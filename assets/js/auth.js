const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", handleLogin);

async function handleLogin(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    loginMessage.textContent = "Signing in...";


    const { data, error } = await window.db.auth.signInWithPassword({    
        email,
        password
    });

    if (error) {
        loginMessage.textContent = error.message;
        console.error(error);
        return;
    }

    loginMessage.textContent = "Login successful.";

    window.location.href = "dashboard.html";
}