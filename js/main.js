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

$(document).ready(function () {
    $(".leftSlider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        stagePadding: 30,
        smartSpeed: 450,
        autoplayHoverPause: true,
        animateIn: "animate__zoomInDown",
        nav: false,
        dots: false,
        responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 }
        }
    });
});

$(document).ready(function () {
    $(".floralSection .owl-carousel").owlCarousel({
        loop: true, // Enable infinite looping
        margin: 30, // Add margin between items
        nav: false, // Enable navigation arrows
        dots: false, //
        animateIn: "animate__flipInX",
        stagePadding: 30,
        smartSpeed: 450,
        autoplay: true, // Enable autoplay
        autoplayTimeout: 3000, // Time between slides (in milliseconds)
        responsive: {
            0: { items: 1 }, // One card at a time on small screens
            600: { items: 2 }, // Two cards at a time on medium screens
            1000: { items: 3 } // Three cards at a time on larger screens
        }
    });
});
