// search.js
const predefinedResults = {
    "Shrek City": "coordonées/overworld/shrek_city.html",
    "Base": "coordonées/overworld/shrek_city.html",
    "Centre des Maisons": "coordonées/overworld/centre_wagons.html",
    "Portail du Nether": "coordonées/overworld/portail_nether.html",
    "Portail du Nether": "coordonées/nether/portail_nether.html",
    "Maison de Barnaby": "coordonées/overworld/maison_barnaby.html",
    "Maison d'Étienne": "coordonées/overworld/maison_etienne.html",
    "Maison de Florent": "coordonées/overworld/maison_florent.html",
    "Maison de Matéo": "coordonées/overworld/maison_nmateo.html",
    "Maison de Nathan": "coordonées/overworld/maison_nathan.html",
    "Maison de Thomas": "coordonées/overworld/maison_thomas.html",
    "Bastion": "coordonées/nether/bastion.html",
    "Forteresse": "coordonées/nether/forteresse.html",
  };
  
    const searchInput = document.getElementById("search-input");
    const resultList = document.getElementById("result-list");
    
    // Fonction de recherche
    function search() {
      const searchTerm = searchInput.value;
      resultList.innerHTML = ""; // Efface les résultats actuels
    
      if (searchTerm.trim() === "") {
        return; // Ne rien afficher si la recherche est vide
      }
    
      for (const key in predefinedResults) {
        if (key.includes(searchTerm)) {
          const li = document.createElement("li");
          const link = document.createElement("a");
          link.textContent = key;
          link.href = predefinedResults[key];
          li.appendChild(link);
          resultList.appendChild(li);
        }
      }
    }
    
    // Écouteur d'événement pour la recherche à chaque modification de l'entrée
    searchInput.addEventListener("input", search);