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
