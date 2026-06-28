console.log("Dashboard Loaded ✅");

document.getElementById("logoutBtn")
.addEventListener("click",logout);

async function logout(){

    await window.db.auth.signOut();

    window.location.href="login.html";

}