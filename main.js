// script.js
document.addEventListener("DOMContentLoaded", () => {
    const planets = document.querySelectorAll(".planet");
    const rowGap = 220;  // Adjust row gap for even spacing

    // Array of colors to randomly assign to planets
    const planetColors = ["#4a90e2", "#f39c12", "#27ae60", "#8e44ad", "#e74c3c", "#3498db", "#2ecc71", "#f1c40f", "#9b59b6"];

    planets.forEach((planet, index) => {
        // Set random color and size for each planet
        const randomColor = planetColors[Math.floor(Math.random() * planetColors.length)];
        const randomSize = Math.floor(Math.random() * 80) + 120; // Random size between 50px and 100px
        planet.style.backgroundColor = randomColor;
        planet.style.width = `${randomSize}px`;
        planet.style.height = `${randomSize}px`;
        planet.style.lineHeight = `${randomSize}px`; // Center text in the circle

        // Calculate random y-position per row and x-offset within viewport
        const yPosition = index * rowGap + Math.floor(Math.random() * rowGap / 2);
        const maxXOffset = window.innerWidth - randomSize;
        const xOffset = Math.random() * maxXOffset;

        // Apply randomized positioning to each planet
        planet.style.transform = `translate(${xOffset}px, ${yPosition}px)`;

        // Redirect on click
        planet.addEventListener("click", () => {
            window.location.href = planet.getAttribute("data-link");
        });
    });

    // Update positions on resize to keep planets within bounds
    window.addEventListener("resize", () => {
        planets.forEach((planet, index) => {
            const randomSize = parseInt(planet.style.width); // Maintain original random size on resize
            const maxXOffset = window.innerWidth - randomSize;
            const xOffset = Math.random() * maxXOffset;
            planet.style.transform = `translate(${xOffset}px, ${index * rowGap}px)`;
        });
    });
});
