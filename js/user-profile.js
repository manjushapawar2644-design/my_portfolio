const form = document.getElementById("profileForm");
const fields = form.querySelectorAll("input, textarea");
const formActions = document.getElementById("formActions");
const message = document.getElementById("message");

let originalData = {};

function toggleEdit() {
    originalData = {};

    fields.forEach(function(field) {
        originalData[field.id] = field.value;
        field.disabled = false;
    });

    formActions.style.display = "flex";
    document.getElementById("editBtn").style.display = "none";
    message.textContent = "";
}

function cancelEdit() {
    fields.forEach(function(field) {
        if (Object.prototype.hasOwnProperty.call(
            originalData, field.id
        )) {
            field.value = originalData[field.id];
        }

        field.disabled = true;
    });

    formActions.style.display = "none";
    document.getElementById("editBtn").style.display = "inline-block";
    message.textContent = "";
    updateProfileName();
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    updateProfileName();

    fields.forEach(function(field) {
        field.disabled = true;
    });

    formActions.style.display = "none";
    document.getElementById("editBtn").style.display = "inline-block";

    message.textContent = "Profile updated successfully!";
});

function updateProfileName() {
    const name = document.getElementById("name").value.trim();

    document.getElementById("displayName").textContent = name;
    document.getElementById("avatar").textContent =
        name ? name.charAt(0).toUpperCase() : "?";
}