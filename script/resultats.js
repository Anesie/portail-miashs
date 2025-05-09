// Liste simplifiée de pages et mots-clés associés
const pages = [
    {
      titre: "Examens",
      url: "../examens/examens.html",
      resume: "Informations sur les modalités, la charte, les résultats et le redoublement."
    },
    {
      titre: "Seconde Chance",
      url: "../examens/examens.html#seconde-chance",
      resume: "Pour mieux vous renseigner sur les conditions de la Session 2."
    },
    {
      titre: "Informations Générales",
      url: "../examens/examens.html#infos-generales",
      resume: "Les informations générales sur les examens."
    },
    {
      titre: "Charte des Examens",
      url: "../examens/examens.html#charte-examens",
      resume: "La charte des examens est disponible au format PDF."
    },
    {
      titre: "Organisation des Examens",
      url: "../examens/examens.html#organisation-examens",
      resume: "Pour vous renseigner sur l'organisation des examens."
    },
    {
      titre: "Absences aux examens",
      url: "../examens/examens.html#absence",
      resume: "En cas d'absence aux examens, comment faire ?"
    },
    {
      titre: "Résultats",
      url: "../examens/examens.html#resultats",
      resume: "Découvrez-en plus sur la publication de vos résultats."
    },
    {
      titre: "Redoublement",
      url: "../examens/examens.html#redoublement", // corrigé ici
      resume: "Vous n'avez pas validé votre année ? Découvrez-en plus sur la démarche à suivre."
    },
    {
      titre: "Inscriptions pédagogiques",
      url: "../inscriptions/inscriptions.html",
      resume: "Effectuez votre inscription pédagogique et découvrez les enseignements transversaux à choix."
    },
    {
      titre: "ETC",
      url: "../inscriptions/inscriptions.html#etc",
      resume: "Effectuez votre inscription pédagogique et découvrez les enseignements transversaux à choix."
    },
    {
      titre: "Tutoriel",
      url: "../inscriptions/inscriptions.html#tutoriel",
      resume: "Vous ne savez pas comment effectuer votre inscription pédagogique ? Pas de panique, suivez ce tutoriel."
    },
    {
      titre: "Vie étudiante à Grenoble",
      url: "../vie_etudiante/vie_etudiante.html",
      resume: "Aides, logement, restauration, santé et bons plans étudiants."
    },
    {
      titre: "Contacts",
      url: "../contacts/contacts.html",
      resume: "Coordonnées et contacts utiles pour les étudiants MIASHS."
    },
    {
      titre: "Liens utiles",
      url: "../liens/lien.html",
      resume: "Accès rapide à Léo, Moodle, bibliothèques, UFR et autres plateformes."
    },
    {
      titre: "Léo",
      url: "../liens/lien.html#leo",
      resume: "Accès rapide à Léo."
    },
    {
      titre: "Moodle",
      url: "../liens/lien.html#moodle",
      resume: "Accès rapide à Moodle"
    },
    {
      titre: "Application Campus UGA",
      url: "../liens/lien.html#campus",
      resume: "Installez l'application Campus UGA pour consulter votre emploi du temps !"
    },
    {
      titre: "BU",
      url: "../liens/lien.html#bu",
      resume: "Accès rapide au site des bibliothèques universitaires de l'UGA."
    },
    {
      titre: "Les UFR",
      url: "../liens/lien.html#ufr",
      resume: "Accès aux sites de votre UFR."
    },
    {
      titre: "Le catalogue des services numériques",
      url: "../liens/lien.html#catalogue",
      resume: "Accès au catalogue des services numériques !"
    },
    {
      titre: "Le catalogue des services numériques",
      url: "../liens/lien.html#sos-etudiants",
      resume: "Un problème informatique ? Pas de panique, l'assistance des étudiants est là pour vous aider !"
    },
    {
      titre: "Le BDE MIASHS",
      url: "../liens/lien.html#bde",
      resume: "Accédez au site du bureau des étudiants MIASHS !"
    },
  ];
  
  // Récupération du mot-clé depuis l'URL
  const params = new URLSearchParams(window.location.search);
  const motCle = params.get("motcle");
  
  const main = document.querySelector("main");
  const container = document.createElement("div");
  container.classList.add("resultats-container");
  container.innerHTML = `<h2>Résultats pour "${motCle}"</h2>`;
  main.appendChild(container);
  
  let nbResultats = 0;
  
  pages.forEach(page => {
    const lowerMotCle = motCle.toLowerCase();
    const contenu = `${page.titre} ${page.resume || ''}`.toLowerCase();
    if (contenu.includes(lowerMotCle)) {
      nbResultats++;
      const div = document.createElement("div");
      div.classList.add("resultat-item");
      div.innerHTML = `
        <h3><a href="${page.url}">${page.titre}</a></h3>
        <p>${page.resume}</p>
      `;
      container.appendChild(div);
    }
  });
  
  if (nbResultats === 0) {
    const p = document.createElement("p");
    p.textContent = `Aucun résultat trouvé pour "${motCle}".`;
    container.appendChild(p);
  }
  