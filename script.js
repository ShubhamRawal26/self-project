// ==============================
// SHUBHAM RAWAL PORTFOLIO
// script.js
// ==============================

const letters = document.querySelectorAll(".title span");
const card = document.querySelector(".glass-card");
const button = document.getElementById("btn");

// ------------------------------
// Random Liquid Effect
// ------------------------------

function random(min, max) {
    return Math.random() * (max - min) + min;
}

letters.forEach(letter => {

    letter.addEventListener("mouseenter", () => {

        const x = random(-8, 8);
        const y = random(-8, 8);
        const r = random(-15, 15);
        const s = random(0.9, 1.15);

        letter.style.transform =
            `translate(${x}px, ${y}px)
             rotate(${r}deg)
             scale(${s})`;

        letter.style.color = "#ff2d2d";

    });

    letter.addEventListener("mouseleave", () => {

        letter.style.transform =
            "translate(0px,0px) rotate(0deg) scale(1)";

        letter.style.color = "#ffffff";

    });

});

// ------------------------------
// Card 3D Tilt
// ------------------------------

card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 12;
    const rotateX = ((y / rect.height) - 0.5) * -12;

    card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)`;

});

card.addEventListener("mouseleave", () => {

    card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

});

// ------------------------------
// Button Ripple
// ------------------------------

button.addEventListener("click", () => {

    button.animate([
        {
            transform: "scale(1)"
        },
        {
            transform: "scale(.92)"
        },
        {
            transform: "scale(1)"
        }

    ], {

        duration: 300

    });

});

// ------------------------------
// Floating Motion
// ------------------------------

setInterval(() => {

    letters.forEach(letter => {

        const x = random(-2, 2);
        const y = random(-2, 2);

        letter.style.transform =
            `translate(${x}px,${y}px)`;

    });

}, 1200);

// ------------------------------
// Welcome Animation
// ------------------------------

window.addEventListener("load", () => {

    letters.forEach((letter, i) => {

        setTimeout(() => {

            letter.animate([
                {
                    opacity: 0,
                    transform: "translateY(40px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0px)"
                }

            ], {

                duration: 500,
                fill: "forwards"

            });

        }, i * 60);

    });

});