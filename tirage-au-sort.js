//Tableau donné dans le document 5
let mangas = ["Naruto", "One Piece", "DBZ", "Bleach", "HxH", "JJK", 
"Spy x Family", "Sakamoto Days", "JJBA", "HnK", "Boruto"];

//Fonction appelée quand on clique sur le bouton
function tirage() {

    //On génère un nombre aléatoire
    let nombreAleatoire = Math.floor(Math.random() * mangas.length);

    //On récupere le manga correspondant
    let resultat = mangas[nombreAleatoire];

    //On affiche le résultat
    document.getElementById("aleatoire").textContent =
    "Le manga tiré au sort est" + resultat;
}