// ELEMENTOS
// Guardamos en variables las cosas del HTML que vamos a usar
const cards = document.querySelectorAll(".card");
const botones = document.querySelectorAll(".botones button");
const contador = document.querySelector("#contador");

let letrasVistas = 0; // cuántas letras se han descubierto

// VOLTEAR
// Recibe la card donde se hizo clic
function voltear(card) {
  // Si está volteada la devuelve; si no, la voltea
  card.classList.toggle("volteada");

  // "vista" nunca se quita: así sabemos si ya la descubrimos antes
  if (!card.classList.contains("vista")) {
    card.classList.add("vista");
    letrasVistas = letrasVistas + 1;
    contador.textContent = letrasVistas; // actualiza el número en la navbar
  }
}

// FILTRAR
// Recibe "vocal" o "todas"
function filtrar(tipo) {
  for (const card of cards) {
    if (tipo === "todas" || tipo === card.dataset.tipo) {
      card.classList.remove("oculta"); // la muestra
    } else {
      card.classList.add("oculta"); // la esconde
    }
  }
}

// EVENTOS
// Cada card escucha el clic y llama a voltear
for (const card of cards) {
  card.addEventListener("click", function () {
    voltear(card);
  });
}

// Cada botón escucha el clic y llama a filtrar con su data-filtro
for (const boton of botones) {
  boton.addEventListener("click", function () {
    filtrar(boton.dataset.filtro);
  });
}

