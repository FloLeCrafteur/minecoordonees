// search.js
const predefinedResults = {
  "Shrek City": "https://flolecrafteur.github.io/minecoordonees/coordonées/overworld/shrek_city.html",
  "Base": "https://flolecrafteur.github.io/minecoordonees/coordonées/overworld/shrek_city.html",
  "Centre des Maisons": "https://flolecrafteur.github.io/minecoordonees/coordonées/overworld/centre_wagons.html",
  "Portail du Nether": "https://flolecrafteur.github.io/minecoordonees/coordonées/overworld/portail_nether.html",
  "Portail du Nether": "https://flolecrafteur.github.io/minecoordonees/coordonées/nether/portail_nether.html",
  "Maison de Barnaby": "https://flolecrafteur.github.io/minecoordonees/coordonées/overworld/maison_barnaby.html",
  "Maison d'Étienne": "https://flolecrafteur.github.io/minecoordonees/coordonées/overworld/maison_etienne.html",
  "Maison de Florent": "https://flolecrafteur.github.io/minecoordonees/coordonées/overworld/maison_florent.html",
  "Maison de Matéo": "https://flolecrafteur.github.io/minecoordonees/coordonées/overworld/maison_nmateo.html",
  "Maison de Nathan": "https://flolecrafteur.github.io/minecoordonees/coordonées/overworld/maison_nathan.html",
  "Maison de Thomas": "https://flolecrafteur.github.io/minecoordonees/coordonées/overworld/maison_thomas.html",
  "Bastion": "https://flolecrafteur.github.io/minecoordonees/coordonées/nether/bastion.html",
  "Forteresse": "https://flolecrafteur.github.io/minecoordonees/coordonées/nether/forteresse.html",
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