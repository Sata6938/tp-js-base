const nom = "maxime"
let age = 16
console.log(nom)
console.log(age)


if (age < 13) {
    console.log("Accès interdit aux moins de 13 ans.");
} else if (age < 18) {
    console.log("Vous pouvez accéder à la section ado.");
} else {
    console.log("Bienvenue dans l'espace adulte.");
}


let tabl7 =11
for (let i = 0; i < tabl7;i++) {
    console.log("7x" + (i) + ": " +  i*7);
}


const prenom = "Maxime" 
    function saluer (prenom) {
    console.log("Bonjour, " + prenom + "! Comment vas-tu ?")
}
saluer(prenom)



let phrase = "je me baladais dans la rue vers vingt et une heure quand soudain je vis un chat.Il etait tres mignon";
console.log("La prase est : " + phrase);
let voyelles = "aeiouyAEIOUY";
let compteur = 0;
for (let i = 0; i < phrase.length; i++) {
    if (voyelles.includes(phrase[i])) {
        compteur++;
    }
}
console.log("Cette phrase comprte " + compteur + " voyelles.");



let mot = "anticonstitutionnellement";
console.log("le mot est : " + mot)
let motInverse = mot.split("").reverse().join("");
console.log("le mot ecris a l'envers est : " + motInverse);

let factorielle =4
for (let i = factorielle+1; i > factorielle;i--) {
    console.log("factorielle de " + (factorielle+1) + ": " + ((i+1)*(i-1))*5);
}


