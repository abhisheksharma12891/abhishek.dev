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

    const { data } = await supabase.auth.getSession();

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

    const { count, error } = await supabase

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

    await supabase.auth.signOut();

    window.location.href = "login.html";

}