// assets/js/dark-boxes.js
document.addEventListener("DOMContentLoaded", function() {
  const boxes = document.querySelectorAll(
    ".definition, .theorem, .lemma, .proof, .example, .remark, .proposition, .corollary"
  );
  const body = document.body;

  // Funzione globale per aggiornare i box
  window.updateBoxes = function() {
    const isDark =
      body.classList.contains("dark-mode") ||
      body.classList.contains("color-mode-dark");

    boxes.forEach((box) => {
      if (isDark) {
        box.classList.add("dark-box");
      } else {
        box.classList.remove("dark-box");
      }
    });
  };

  // 1️⃣ Aggiorna subito i box all’inizio
  window.updateBoxes();

  // 2️⃣ Osserva cambiamenti della classe del body
  const observer = new MutationObserver(window.updateBoxes);
  observer.observe(body, { attributes: true, attributeFilter: ["class"] });

  // 3️⃣ Legge il tema salvato in localStorage e applica subito
  try {
    const savedTheme = localStorage.getItem("color-mode");
    if (savedTheme === "dark") {
      body.classList.add("dark-mode", "color-mode-dark");
    } else if (savedTheme === "light") {
      body.classList.remove("dark-mode", "color-mode-dark");
    }
    window.updateBoxes();
  } catch(e) {
    console.warn("⚠️ Impossibile leggere color-mode da localStorage:", e);
  }
});

