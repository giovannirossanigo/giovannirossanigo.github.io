document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  const body = document.body;
  const icon = document.getElementById('theme-icon');

  // Imposta il tema iniziale
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }

  toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
      localStorage.setItem('theme', 'dark');
    } else {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
      localStorage.setItem('theme', 'light');
    }
  });
});

function updateBoxes() {
  document.querySelectorAll('.definition, .theorem, .lemma, .proof, .example, .remark, .proposition, .corollary').forEach(box => {
    // forziamo il ricalcolo del colore
    box.style.backgroundColor = '';
    box.style.color = '';
    box.style.borderLeftColor = '';
  });
}

// Quando il toggle cambia
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('[data-color-mode-toggle]');
  if(toggleButton){
    toggleButton.addEventListener('click', () => {
      setTimeout(updateBoxes, 50); // piccolo delay per far applicare la classe
    });
  }
});
