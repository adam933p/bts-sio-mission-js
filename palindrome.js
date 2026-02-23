//Fonction appelée quand on clique sur le bouton
function palindrome() {

    //On récupere la valeur saisie
    let mot = document.getElementById("id-mot-saisi").value;

    //On met le mot en minuscule
    let motMinuscule = mot.toLowerCase();

    //On inverse le mot
    let motInverse = motMinuscule.split("").reverse().join("");

    //On compare le mot normal et le mot inverse
    if (motMinuscule === motInverse) {
        document.getElementById("resultat").textContent =
        "C'est un palindrome";
    } else {
        document.getElementById("resultat").textContent =
        "Ce n'est pas un palindrome";
    }
}