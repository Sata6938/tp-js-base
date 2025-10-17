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

const Phrase = "je me baladais dans la rue vers vibgt et une heure quand soudain je vis un chat"
let CompteurDeVoyelles =0
for (let i = 0; i < tabl7;i++) {
    console.log("7x" + (i) + ": " +  i*7);
}
 




console.log("je me baladais dans la rue vers vibgt et une heure quand soudain je vis un chat")



// Définir la phrase
let phrase = "Bonjour, comment ça va aujourd'hui ?";

// Afficher la phrase dans la console
console.log("La phrase est : " + phrase);

// Compter le nombre de voyelles
let voyelles = "aeiouyAEIOUY";
let compteur = 0;

for (let i = 0; i < phrase.length; i++) {
    if (voyelles.includes(phrase[i])) {
        compteur++;
    }
}

// Afficher le résultat
console.log("Cette phrase comporte " + compteur + " voyelle(s).");