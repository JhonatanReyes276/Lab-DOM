document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const btnVoltearTodas = document.getElementById("btn-voltear-todas");
  const btnRestablecer = document.getElementById("btn-restablecer");
  const btnsFiltro = document.querySelectorAll(".btn-filtro");
  const contador = document.getElementById("contador");

  let letrasVistas = 0;

  function voltear(card) {
    const estaVolteada = card.classList.toggle("volteada");

    if (estaVolteada) {
      if (!card.classList.contains("vista")) {
        card.classList.add("vista");
        letrasVistas++;
      }
    } else {
      if (card.classList.contains("vista")) {
        card.classList.remove("vista");
        letrasVistas--;
      }
    }

    if (contador) contador.textContent = letrasVistas;
  }

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      voltear(card);
    });
  });

  if (btnVoltearTodas) {
    btnVoltearTodas.addEventListener("click", () => {
      cards.forEach((card) => {
        card.classList.add("volteada");
        if (!card.classList.contains("vista")) {
          card.classList.add("vista");
          letrasVistas++;
        }
      });
      if (contador) contador.textContent = letrasVistas;
    });
  }

  if (btnRestablecer) {
    btnRestablecer.addEventListener("click", () => {
      cards.forEach((card) => {
        card.classList.remove("volteada", "vista", "oculta");
      });
      letrasVistas = 0;
      if (contador) contador.textContent = letrasVistas;
      btnsFiltro.forEach((b) => b.classList.remove("btn-activo"));
      const btnTodas = document.querySelector('[data-filtro="todas"]');
      if (btnTodas) btnTodas.classList.add("btn-activo");
    });
  }

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
});
