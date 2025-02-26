document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".brand-track");
    const slider = document.querySelector(".brand-slider");
    let speed = 0.5; // Adjusted for smooth & slow scrolling
    let scrollAmount = 0;
    
    // Duplicate logos for infinite scrolling
    track.innerHTML += track.innerHTML; 

    function autoScroll() {
        scrollAmount -= speed;
        if (Math.abs(scrollAmount) >= track.scrollWidth / 2) {
            scrollAmount = 0; // Reset scroll position when halfway
        }
        track.style.transform = `translateX(${scrollAmount}px)`;
        requestAnimationFrame(autoScroll);
    }

    let animationFrame = requestAnimationFrame(autoScroll);

    // Pause scrolling on hover
    slider.addEventListener("mouseenter", () => cancelAnimationFrame(animationFrame));
    slider.addEventListener("mouseleave", () => animationFrame = requestAnimationFrame(autoScroll));
});


$(document).ready(function() {
    $('.brand-logo').slick({
        "slidesToShow": 4,
        prevArrow: false,
        nextArrow: false
    });
});

