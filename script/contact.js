document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (!form) return;
  
    form.addEventListener('submit', e => {
      e.preventDefault();
      const emailEl   = form.querySelector('#email');
      const messageEl = form.querySelector('#message');
      const email     = emailEl.value.trim();
      const message   = messageEl.value.trim();
  
      // Validation
      if (!email || !message) {
        alert('Merci de remplir tous les champs.');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Adresse email invalide.');
        emailEl.focus();
        return;
      }
  
      // Envoi au serveur
      fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ email, message })
      })
      .then(resp => {
        if (resp.ok) {
          alert('Merci ! Votre message a été envoyé.');
          form.reset();
        } else {
          throw new Error('Erreur serveur');
        }
      })
      .catch(err => {
        console.error(err);
        alert('Erreur : impossible d’envoyer le message.');
      });
    });
  });
  