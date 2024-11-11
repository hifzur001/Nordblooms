// Initialize AOS
AOS.init();

// Initialize Owl Carousel for Announcement Bar
$(document).ready(function () {
    $(".announcementBar .owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dots: false,
        nav: false,
        autoplayTimeout: 6000,
        autoplayHoverPause: true
    });
});

// Switch to Sign Up form
document
    .getElementById("switchToSignup")
    .addEventListener("click", function () {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("signupForm").style.display = "block";
    });

// Switch to Login form
document.getElementById("switchToLogin").addEventListener("click", function () {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signupForm").style.display = "none";
});
