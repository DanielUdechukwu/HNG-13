const avatar = document.getElementById("user-avatar");
const fileInput = document.getElementById("avatar-upload");
const timeMs = document.getElementById("user-time");

console.log("Linked");

avatar.addEventListener("click", () => {
    fileInput.click();
    console.log("Clicked");
});

fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];

    console.log(file);

    if (file) {
        const imageURL = URL.createObjectURL(file);
        console.log(imageURL);

        avatar.src = imageURL;
    }
});

// Get Date

const currentTime = Date.now();
timeMs.textContent = currentTime;
console.log(currentTime);

function handleSubmit(event) {
    event.preventDefault();

    const form = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");
    const fields = [
        { id: "contact-name", messageId: "error-name" },
        { id: "contact-email", messageId: "error-email" },
        { id: "contact-subject", messageId: "error-subject" },
        { id: "contact-message", messageId: "error-message" },
    ];

    let valid = true;

    fields.forEach(({ messageId }) => {
        document.getElementById(messageId).textContent = "";
    });

    fields.forEach(({ id, messageId }) => {
        const input = document.getElementById(id);
        const errorSpan = document.getElementById(messageId);

        if (!input.checkValidity()) {
            valid = false;

            errorSpan.textContent = input.validationMessage;
        }
    });

    if (valid) {
        successMessage.classList.add("visible");
        successMessage.setAttribute("aria-hidden", "false");

        form.reset();

        setTimeout(() => {
            successMessage.classList.remove("visible");
            successMessage.setAttribute("aria-hidden", "true");
        }, 6000);
    }
}
