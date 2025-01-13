document.addEventListener("DOMContentLoaded", () => {
    const planets = document.querySelectorAll(".planet");
    const spaceBackground = document.querySelector(".space-background");
    const rowGap = 220;

    const planetColors = [
        ["#4a90e2", "#1f3f7a"],
        ["#f39c12", "#d35400"],
        ["#27ae60", "#145a32"],
        ["#8e44ad", "#5b2c6f"],
        ["#e74c3c", "#c0392b"],
        ["#3498db", "#2980b9"],
        ["#2ecc71", "#27ae60"],
        ["#f1c40f", "#f39c12"],
        ["#9b59b6", "#8e44ad"]
    ];

    planets.forEach((planet, index) => {
        const [color1, color2] = planetColors[Math.floor(Math.random() * planetColors.length)];
        const randomSize = Math.floor(Math.random() * 80) + 120;

        planet.style.background = `radial-gradient(circle at 20% 20%, ${color1}, ${color2})`;
        planet.style.width = `${randomSize}px`;
        planet.style.height = `${randomSize}px`;
        planet.style.lineHeight = `${randomSize}px`;

        const yPosition = index * rowGap + Math.floor(Math.random() * rowGap / 2);
        const maxXOffset = window.innerWidth - randomSize;
        const xOffset = Math.random() * maxXOffset;

        // Apply top and left for positioning instead of transform
        planet.style.position = "absolute"; // Ensure absolute positioning
        planet.style.top = `${yPosition}px`;
        planet.style.left = `${xOffset}px`;

        if (Math.random() < 0.5) {
            planet.classList.add("has-ring");
        }

        planet.classList.add("animate-float");

        planet.addEventListener("click", () => {
            const planetLink = planet.getAttribute("data-link");
            if (planetLink) {
                window.location.href = planetLink;
            }
        });
    });

    function generateStars() {
        const scrollableHeight = document.body.scrollHeight;
        const starCount = Math.ceil(scrollableHeight / window.innerHeight) * 150;
        const maxStarSize = 3;

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement("div");
            star.classList.add("star");

            const starSize = Math.random() * maxStarSize + 1;
            const xPos = Math.random() * window.innerWidth;
            const yPos = Math.random() * scrollableHeight;

            star.style.width = `${starSize}px`;
            star.style.height = `${starSize}px`;
            star.style.left = `${xPos}px`;
            star.style.top = `${yPos}px`;

            spaceBackground.appendChild(star);
        }
    }

    generateStars();

    window.addEventListener("resize", () => {
        planets.forEach((planet, index) => {
            const randomSize = parseInt(planet.style.width);
            const maxXOffset = window.innerWidth - randomSize;
            const xOffset = Math.random() * maxXOffset;
            planet.style.left = `${xOffset}px`;
            planet.style.top = `${index * rowGap}px`;
        });

        spaceBackground.innerHTML = "";
        generateStars();
    });
});
