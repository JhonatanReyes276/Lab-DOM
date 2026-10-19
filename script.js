// ELEMENTOS
const cards = document.querySelectorAll(".card");
const btnVoltearTodas = document.getElementById("btn-voltear-todas");
const btnRestablecer = document.getElementById("btn-restablecer");
const btnsFiltro = document.querySelectorAll(".btn-filtro");
const contador = document.getElementById("contador");

let letrasVistas = 0;

// VOLTEAR al hacer clic en una carta
function voltear(card) {
  card.classList.toggle("volteada");

  if (!card.classList.contains("vista")) {
    card.classList.add("vista");
    letrasVistas++;
    contador.textContent = letrasVistas;
  }
}

cards.forEach((card) => {
  card.addEventListener("click", () => {
    voltear(card);
  });
});

// VOLTEAR TODAS las cartas
btnVoltearTodas.addEventListener("click", () => {
  cards.forEach((card) => {
    card.classList.add("volteada");
    if (!card.classList.contains("vista")) {
      card.classList.add("vista");
      letrasVistas++;
    }
  });
  contador.textContent = letrasVistas;
});

// RESTABLECER todo
btnRestablecer.addEventListener("click", () => {
  cards.forEach((card) => {
    card.classList.remove("volteada", "vista", "oculta");
  });
  letrasVistas = 0;
  contador.textContent = letrasVistas;
  btnsFiltro.forEach((b) => b.classList.remove("btn-activo"));
  document.querySelector('[data-filtro="todas"]').classList.add("btn-activo");
});

// FILTRAR: todas / vocal / consonante
function filtrar(tipo) {
  for (const card of cards) {
    if (tipo === "todas" || tipo === card.dataset.tipo) {
      card.classList.remove("oculta");
    } else {
      card.classList.add("oculta");
    }
  }
}

btnsFiltro.forEach((btn) => {
  btn.addEventListener("click", () => {
    btnsFiltro.forEach((b) => b.classList.remove("btn-activo"));
    btn.classList.add("btn-activo");
    filtrar(btn.dataset.filtro);
  });
});
