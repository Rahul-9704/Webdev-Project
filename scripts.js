document.addEventListener("DOMContentLoaded", function () {
    // Form validation function
    function validateForm() {
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const terms = document.getElementById("termsAndConditions").checked;
        let isValid = true;

        // Password validation
        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            isValid = false;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            isValid = false;
        }

        // Terms validation
        if (!terms) {
            alert("You must agree to the Terms and Conditions.");
            isValid = false;
        }

        return isValid;
    }

    // Add submit event listener to the registration form
    const registrationForm = document.querySelector(".registration-form form");  //target the form for validation, not only button
    if (registrationForm) { // check if registrationForm exist or not
    registrationForm.addEventListener("submit", function (event) {
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
}

    // Add hover effect to navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.color = "#ffcc00"; // Change color on hover
        });
        link.addEventListener("mouseout", function () {
            this.style.color = "#fff"; // Restore original color
        });
    });

    // Simple image carousel (if you want to add a carousel)
    let currentImageIndex = 0;
    const imageGallery = document.querySelector(".event-gallery");

    if (imageGallery) {  //Check if image gallery exist or not
        const images = imageGallery.querySelectorAll("img");

        if(images.length > 0){   //Check if there are images or not
            function showNextImage() {
                images[currentImageIndex].style.display = "none";  //make them disappear
                currentImageIndex = (currentImageIndex + 1) % images.length;
                images[currentImageIndex].style.display = "block";  // bring them back
            }

            // Initially hide all images except the first
            for (let i = 1; i < images.length; i++) {
                images[i].style.display = "none";
            }

            // Set interval to change images every 3 seconds
            setInterval(showNextImage, 3000);
        }
    }

    // Add scroll to top button

    const scrollToTopBtn = document.createElement("button");
    scrollToTopBtn.innerHTML = "⇧"; // Up arrow
    scrollToTopBtn.classList.add("scroll-to-top");
    document.body.appendChild(scrollToTopBtn);
    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});