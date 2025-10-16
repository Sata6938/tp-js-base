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
let grr =11
for (let i = 1; i < grr;i++) {
    console.log("grr n°" + (i + 1) + ": " + i*7);
}