// Create a timeline for animations
const tl = gsap.timeline();

// Set initial properties
tl.set(".intro-text, .delivery-box", { opacity: 0, y: 20 });

// Animate the intro text and delivery box
tl.to(".intro-text, .delivery-box", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.5,
});

// You can add more animations as needed

// Play the timeline
tl.play();
