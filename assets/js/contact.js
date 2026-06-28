// ======================================
// Portfolio Contact Form
// Supabase Integration
// ======================================

const contactForm = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const formMsg = document.getElementById("formMsg");

contactForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    formMsg.textContent = "";
    formMsg.style.color = "";

    const firstName = document.getElementById("fname").value.trim();
    const lastName = document.getElementById("lname").value.trim();

    const email = document.getElementById("email").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();

    // Validation
    if (!firstName || !email || !message) {

        formMsg.style.color = "#ff4d4d";
        formMsg.textContent = "Please fill all required fields.";

        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message →";

        return;
    }

    const fullName = `${firstName} ${lastName}`.trim();

    try {

        const { error } = await db
            .from("contacts")
            .insert([
                {
                    name: fullName,
                    email: email,
                    phone: "",
                    subject: subject,
                    message: message,
                    status: "Unread"
                }
            ]);

        if (error) throw error;

        formMsg.style.color = "#00c853";
        formMsg.textContent = "✅ Message sent successfully!";

        contactForm.reset();

    } catch (err) {

        console.error(err);

        formMsg.style.color = "#ff4d4d";
        formMsg.textContent = "❌ Failed to send message.";

    } finally {

        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message →";

    }

});