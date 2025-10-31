// assets/js/dark-boxes.js
document.addEventListener("DOMContentLoaded", function() {
  const boxes = document.querySelectorAll(
    ".definition, .theorem, .lemma, .proof, .example, .remark, .proposition, .corollary"
  );
  const body = document.body;

  // Funzione per aggiornare lo stile dei box in base al tema corrente
  function updateBoxes() {
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
  }

  // 1️⃣ — Applichiamo subito il tema corretto se salvato in localStorage
  try {
    const savedTheme = localStorage.getItem("color-mode");
    if (savedTheme === "dark") {
      body.classList.add("dark-mode");
    } else if (savedTheme === "light") {
      body.classList.remove("dark-mode");
    }
  } catch (e) {
    console.warn("⚠️ Impossibile accedere al localStorage per il tema:", e);
  }

  // 2️⃣ — Aggiorniamo subito i box al caricamento
  updateBoxes();

  // 3️⃣ — Osserviamo cambiamenti della classe del body (per toggle in tempo reale)
  const observer = new MutationObserver(updateBoxes);
  observer.observe(body, { attributes: true, attributeFilter: ["class"] });

  // 4️⃣ — (Ridondanza di sicurezza) Aggiorniamo di nuovo dopo un piccolo ritardo
  // Serve per catturare eventuali modifiche del tema applicate dopo il rendering iniziale
  setTimeout(updateBoxes, 200);
});
