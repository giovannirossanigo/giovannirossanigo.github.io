document.addEventListener("DOMContentLoaded", () => {
  // Funzione per aggiornare i box
  const updateBoxes = () => {
    const isDark = document.body.classList.contains('dark-mode');
    document.querySelectorAll('.definition, .theorem, .lemma, .proof').forEach(el => {
      if (isDark) {
        el.classList.add('dark');
      } else {
        el.classList.remove('dark');
      }
    });
  };

  // Aggiorna al caricamento della pagina
  updateBoxes();

  // Osserva le modifiche alla classe del body
  const observer = new MutationObserver(updateBoxes);
  observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
});
