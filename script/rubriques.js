document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.side-links a');
    const sections = document.querySelectorAll('.content-section');

    // Navigation locale (menu latéral)
    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('data-target');

        // Masque toutes les sections
        sections.forEach(sec => sec.style.display = 'none');

        // Affiche uniquement la section cliquée
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.style.display = 'block';
        }
      });
    });

    // Affichage automatique si un hash est présent dans l'URL
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target && target.classList.contains('content-section')) {
        // Masquer toutes les autres sections
        sections.forEach(sec => sec.style.display = 'none');
        // Afficher la bonne section
        target.style.display = 'block';
        
      }
    }
  });