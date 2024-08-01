// script.js
document.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.getElementById("name");
    const flowerContainer = document.getElementById("flower-container");
    const quoteContainer = document.getElementById("quote-container");

    const quotes = [
        "You're the moon of my life.",
        "Every moment with you is a beautiful dream.",
        "You're my favorite distraction.",
        "In a sea of people, my eyes will always search for you."
    ];

    nameElement.addEventListener("click", () => {
        displayFlowers();
        displayQuote();
    });

    function displayFlowers() {
        for (let i = 0; i < 10; i++) {
            const flowerSVG = `
                <svg class="flower" width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path class="stem" d="M50,100 L50,60" stroke="#8B4513" stroke-width="2" fill="none" />
                    <path class="leaf" d="M50,80 C40,60 60,60 50,80" fill="#228B22" />
                    <circle class="petal" cx="50" cy="50" r="10" fill="#ff9a9e" />
                    <circle class="petal" cx="60" cy="40" r="10" fill="#ff9a9e" />
                    <circle class="petal" cx="70" cy="50" r="10" fill="#ff9a9e" />
                    <circle class="petal" cx="60" cy="60" r="10" fill="#ff9a9e" />
                    <circle class="center" cx="60" cy="50" r="5" fill="#fad0c4" />
                </svg>`;
            const flowerElement = document.createElement("div");
            flowerElement.innerHTML = flowerSVG;
            flowerElement.style.position = "absolute";
            flowerElement.style.left = Math.random() * window.innerWidth + "px";
            flowerElement.style.top = Math.random() * window.innerHeight + "px";
            flowerContainer.appendChild(flowerElement);

            const flower = flowerElement.querySelector(".flower");
            flower.style.animation = `bloom 2s ease forwards, draw 2s ease forwards ${i * 0.5}s, float 5s ease-in-out infinite alternate`;
            flower.style.opacity = 1;
        }
    }

    function displayQuote() {
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteContainer.textContent = quote;
        quoteContainer.style.visibility = "visible";
    }
});
