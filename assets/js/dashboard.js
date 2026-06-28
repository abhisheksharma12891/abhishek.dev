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

    await loadRecentMessages();

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


// 👇👇 YAHAN PASTE KARNA HAI


// =============================
// Recent Messages
// =============================

async function loadRecentMessages() {
    const { data, error } = await db
        .from("contacts")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(5);
    if (error) {
        console.error(error);
        return;
    }
    renderMessages(data);
}
function renderMessages(messages) {
    const container = document.getElementById("messagesList");
    if (!container) return;
    if (!messages || messages.length === 0) {
        container.innerHTML = `
            <p class="empty-state">
                No messages found.
            </p>
        `;
        return;
    }
    container.innerHTML = messages.map(message => `
        <div class="message-card">
            <div class="message-header">
                <strong>${message.name}</strong>
                <span>${new Date(message.created_at).toLocaleDateString()}</span>
            </div>
            <p class="message-email">
                ${message.email}
            </p>
            <h4>
                ${message.subject}
            </h4>
            <p>
                ${(message.message || "").substring(0,100)}
                ${message.message && message.message.length > 100 ? "..." : ""}
            </p>
        </div>
    `).join("");
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