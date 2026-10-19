const cards = document.querySelectorAll(".card");
const contador = document.getElementById("contador");
const btnsFiltro = document.querySelectorAll(".botones button");

let letrasVistas = 0;

function voltear(card) {
    card.classList.toggle("volteada");

    if (!card.classList.contains("vista")) {
        card.classList.add("vista");
        letrasVistas++;
        contador.textContent = letrasVistas;
    }
}

function filtrar(tipo) {
    cards.forEach((card) => {
        if (tipo === "todas" || card.dataset.tipo === tipo) {
            card.classList.remove("oculta");
        } else {
            card.classList.add("oculta");
        }
    });
}

cards.forEach((card) => {
    card.addEventListener("click", () => {
        voltear(card);
    });
});

btnsFiltro.forEach((btn) => {
    btn.addEventListener("click", () => {
        filtrar(btn.dataset.filtro);
    });
});
