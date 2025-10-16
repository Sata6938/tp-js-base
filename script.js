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
const saluer = (note1, note2) => {
    const moyenne = (note1 + note2) / 2;
    return moyenne;
};