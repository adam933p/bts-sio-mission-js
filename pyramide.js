function construirePyramide() {

    //On récupere le nombre saisi
    let nombre = document.getElementById("ligne-pyramide").value;

    //On convertit en nombre
    nombre = parseInt(nombre);

    let resultat = "";

    //On cree une chaîne d'étoiles tres longue
    let etoiles = "******************************";

    //Boucle pour créer chaque ligne
    for (let i = 1; i <= nombre; i++) {

        //On utilise slice pour prendre seulement une partie des étoiles
        resultat += etoiles.slice(0, i) + "<br>";
    }

    //On affiche la pyramide
    document.getElementById("pyramide").innerHTML = resultat;
}