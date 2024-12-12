const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = [];
for (let i = 0; i < 200; i++) {
    snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 0.5,
    });
}

function drawSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snowflakes.forEach((flake) => {
        const gradient = ctx.createRadialGradient(
            flake.x,
            flake.y,
            0,
            flake.x,
            flake.y,
            flake.radius
        );
        gradient.addColorStop(0, "rgb(255, 31, 31)");
        gradient.addColorStop(0.5, "rgba(204, 22, 22, 0.8)");
        gradient.addColorStop(1, "rgba(195, 76, 76, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fill();
    });
}

function updateSnowflakes() {
    snowflakes.forEach((flake) => {
        flake.y += flake.speed;
        if (flake.y > canvas.height) {
            flake.y = 0;
            flake.x = Math.random() * canvas.width;
        }
    });
}

function animate() {
    drawSnowflakes();
    updateSnowflakes();
    requestAnimationFrame(animate);
}

animate();

let deg = 0;

function updateCountdown() {
    const christmas = new Date('December 25, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = christmas - now;

    let wdays = document.getElementById("days-number");
    let whours = document.getElementById("hours-number");
    let wminutes = document.getElementById("minutes-number");
    let wseconds = document.getElementById("seconds-number");

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    if(wseconds.innerText != seconds){
       document.getElementById("seconds").style.scale = 2;
       setTimeout(() => document.getElementById("seconds").style.scale = 1, 500);
    }
    if(wminutes.innerText != minutes){
       document.getElementById("minutes").style.scale = 2;
        setTimeout(() => document.getElementById("minutes").style.scale = 1, 500); 
    }
    if(whours.innerText != hours){
        document.getElementById("hours").style.scale = 2;
        setTimeout(() => document.getElementById("hours").style.scale = 1, 500);
    }
    if(wdays.innerText != days){
        document.getElementById("days").style.scale = 2;
        setTimeout(() => document.getElementById("days").style.scale = 1, 500);
    }
    
    wdays.innerText = days;
    whours.innerText = hours;
    wminutes.innerText = minutes;
    wseconds.innerText = seconds;

    document.getElementById("wish").style.rotate = deg + "deg";
    deg+=5;
}

setInterval(updateCountdown, 1000);
updateCountdown();