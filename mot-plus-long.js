//On récupere le texte de la citation grâce à son id
let citation = document.getElementById("citation").textContent;

//On enleve la ponctuation avec replace
let citationSansPonctuation = citation.replace(/[.,’']/g, "");

//On transforme la phrase en tableau de mots avec split
let tableauMots = citationSansPonctuation.split(" ");

//Variable pour stocker le mot le plus long
let motPlusLong = "";

//On parcourt le tableau pour comparer la longueur des mots
for (let i = 0; i < tableauMots.length; i++) {
  
  // Si le mot actuel est plus long que l'ancien
  if (tableauMots[i].length > motPlusLong.length) {
    motPlusLong = tableauMots[i];
  }
}

// On affiche le résultat dans le paragraphe prévu
document.getElementById("motPlusLong").textContent = 
"Le mot le plus long est : " + motPlusLong;