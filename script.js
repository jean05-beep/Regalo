// Lista de motivos por los que la amas
const compliments = [
    "Porque con solo verte, mi día cambia por completo. 💖",
    "Porque tu risa es mi sonido favorito en el mundo. 😂",
    "Porque siempre que paso al lado tuyo eres mi inspiración para cada canción que interpreto. 🫶",
    "Porque haces que hasta los momentos simples sean especiales. ✨",
    "Porque tu corazón es más bonito que cualquier cosa que pueda ver. 💞"
];

const btnSurprise = document.getElementById("btnSurprise");
const hiddenMessage = document.getElementById("hiddenMessage");
const complimentText = document.getElementById("complimentText");
const btnAnother = document.getElementById("btnAnother");

btnSurprise.addEventListener("click", () => {
    hiddenMessage.classList.remove("hidden");
    btnSurprise.style.display = "none";

    showRandomCompliment();
    startHearts();
});

btnAnother.addEventListener("click", () => {
    showRandomCompliment();
});

function showRandomCompliment() {
    const index = Math.floor(Math.random() * compliments.length);
    complimentText.textContent = compliments[index];
}

// Corazones animados
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    const duration = 4 + Math.random() * 3;
    heart.style.animationDuration = duration + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), duration * 1000);
}

let heartsInterval = null;

function startHearts() {
    if (!heartsInterval) {
        heartsInterval = setInterval(createHeart, 500);
    }
}

