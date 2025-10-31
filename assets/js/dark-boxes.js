// Funzione globale per aggiornare i box
window.updateBoxes = () => {
  const isDark = document.body.classList.contains('dark-mode') || document.body.classList.contains('color-mode-dark');

  document.querySelectorAll('.definition, .theorem, .lemma, .proof, .example, .remark, .proposition, .corollary').forEach(el => {
    if (isDark) {
      el.classList.add('dark');
    } else {
      el.classList.remove('dark');
    }
  });
};

// Aggiorna subito al caricamento della pagina
document.addEventListener("DOMContentLoaded", () => {
  window.updateBoxes();

  // Osserva le modifiche alla classe del body
  const observer = new MutationObserver(window.updateBoxes);
  observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
});
