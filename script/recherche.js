document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("search-modal");
  const openBtn = document.querySelector(".open-search");
  const closeBtn = document.querySelector(".close-modal");
  const validateBtn = document.querySelector(".validate-button");
  const input = document.querySelector(".search-modal-content input");

  if (openBtn) {
    openBtn.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Action du bouton VALIDER : redirige vers la page de résultats lorsque le chemin contient des id
  if (validateBtn) {
    validateBtn.addEventListener("click", () => {
      const keyword = input.value.trim();
      if (keyword) {
        window.location.href = `../recherche/resultats.html?motcle=${encodeURIComponent(keyword)}`;
      }
    });
  }
});
