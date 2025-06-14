// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Greeting transition effect
const greetings = ["👋 Hello!", "👋 Hola!", "👋 Bonjour!", "🙏 नमस्कार!", "👋 Ciao!", "👋 你好!"];
let currentGreetingIndex = 0;

function updateGreeting() {
    const greetingElement = document.getElementById("greeting");
    currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
    greetingElement.textContent = greetings[currentGreetingIndex];
}

// Update the greeting every 5 seconds
setInterval(updateGreeting, 5000);

// Handle click on the name to toggle with a typewriter effect
document.getElementById("name").addEventListener("click", function () {
    const nameElement = document.getElementById("name");
    const originalText = "I AM WILBY!";
    const newText = "I AM WILBUR ACHARYA!";
    const typingSpeed = 50; // Speed of typing in milliseconds
    let currentText = nameElement.textContent === originalText ? newText : originalText;

    let i = 0;
    nameElement.textContent = ""; // Clear the existing text

    // Typewriter effect
    const typeText = () => {
        if (i < currentText.length) {
            nameElement.textContent += currentText.charAt(i);
            i++;
            setTimeout(typeText, typingSpeed);
        }
    };

    typeText();
});

// Stretching animation for "WILBY!" text on hover
const nameElement = document.getElementById("name");

// Reset animation after hover
nameElement.addEventListener("mouseenter", function () {
    this.style.animation = "stretch 1s forwards"; // Apply stretch animation
});
nameElement.addEventListener("mouseleave", function () {
    this.style.animation = ""; // Reset animation
});




// Animation for stretching text
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    @keyframes stretch {
        0% { letter-spacing: 2px; }
        50% { letter-spacing: 10px; }
        100% { letter-spacing: 2px; }
}
`, styleSheet.cssRules.length);

// Optional fade-in effect for the full name
styleSheet.insertRule(`
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
}
`, styleSheet.cssRules.length);

// Apply fade-in effect to the name on page load
document.addEventListener("DOMContentLoaded", function () {
    nameElement.style.animation = "fadeIn 2s ease-in-out";
});

