document.addEventListener("DOMContentLoaded", function () {
    // Countdown Timer
    function startCountdown() {
        const offerEndTime = new Date("2023-12-31T23:59:59").getTime(); // Set your desired end date and time
        const now = new Date().getTime();
        const timeLeft = offerEndTime - now;

        if (timeLeft <= 0) {
            document.getElementById("countdown").innerHTML = "Offer Expired!";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }

    setInterval(startCountdown, 1000); // Update every second

    // Banner Animation (Alternative - CSS is preferred)
    //  This is handled in the CSS with @keyframes

    // Testimonial Slider (Basic) -  More advanced sliders use libraries
    const testimonials = document.querySelectorAll(".testimonial");
    const testimonialSlider = document.querySelector(".testimonial-slider");
    let currentTestimonial = 0;

    if (testimonialSlider) {
      function showNextTestimonial() {
        testimonials[currentTestimonial].style.display = "none";
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].style.display = "block";
      }

      testimonials.forEach((testimonial, index) => {
        if (index !== 0) {
          testimonial.style.display = "none";
        }
      });
    }

    setInterval(showNextTestimonial, 5000);
});