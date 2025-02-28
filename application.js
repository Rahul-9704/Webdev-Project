// scripts.js
document.getElementById('membership-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const gender = document.getElementById('gender').value;
    const membershipPackage = document.getElementById('membership-package').value;
    const medicalConditions = document.getElementById('medical-conditions').value || "NONE";

    // Validation
    if (!name || !email || !contact || !gender || !membershipPackage) {
        alert('Please fill in all required fields.');
        return;
    }

    // Populate popup content
    document.getElementById('result-name').innerText = name;
    document.getElementById('result-email').innerText = email;
    document.getElementById('result-contact').innerText = contact;
    document.getElementById('result-gender').innerText = gender.charAt(0).toUpperCase() + gender.slice(1);
    document.getElementById('result-package').innerText = membershipPackage.charAt(0).toUpperCase() + membershipPackage.slice(1);
    document.getElementById('result-conditions').innerText = medicalConditions;

    // Show the popup
    document.getElementById('popup-container').style.display = 'flex';
});

function cancelForm() {
    document.getElementById('membership-form').reset();
}

function closePopup() {
    document.getElementById('popup-container').style.display = 'none';
}