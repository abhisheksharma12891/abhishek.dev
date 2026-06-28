// =============================
// Dashboard Initialization
// =============================

document.addEventListener("DOMContentLoaded", async () => {
    console.log("Dashboard Loaded ✅");

    await checkSession();

    await loadDashboard();

    setupLogout();
});


// =============================
// Session Protection
// =============================

async function checkSession() {

    const { data } = await db.auth.getSession();

    if (!data.session) {

        window.location.href = "login.html";

    }

}


// =============================
// Dashboard Data
// =============================

async function loadDashboard() {

    await loadTotalMessages();

}


// =============================
// Total Messages
// =============================

async function loadTotalMessages() {

    const { count, error } = await db

        .from("contacts")

        .select("*", { count: "exact", head: true });

    if (error) {

        console.error(error);

        return;

    }

    document.getElementById("totalMessages").textContent = count;

}


// =============================
// Logout
// =============================

function setupLogout() {

    const btn = document.getElementById("logoutBtn");

    btn.addEventListener("click", logout);

}

async function logout() {

    console.log("Logout clicked");

    const { error } = await db.auth.signOut();

    console.log("Signout:", error);

    window.location.replace("login.html");

}