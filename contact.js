const form = document.getElementById("contact-form");

form.addEventListener("submit", async function(e) {
    e.preventDefault();
    const formData = new FormData(form);

    const response = await fetch(form.action, {
        method: "POST",
        body: formData
    });

    const result = await response.json();
    const statusDiv = document.getElementById("form-status");

    if (result.success) {
        statusDiv.innerHTML = "<p style='color: green;'>Your message has been sent successfully!</p>";
        form.reset();
    } else {
        statusDiv.innerHTML = "<p style='color: red;'>There was an error sending your message. Please try again.</p>";
    }
});