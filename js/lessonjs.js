i = 0

 //1)creer un boucle pour afficché de 1 à 20

for (i =1; i<=20 ; i++){
    console.log(i)
}

//2) Créer une boucle qui affiche les nombres de 20 à 0 par étape de 2
for (i = 20; i>=0 ; i -= 2){
    console.log(i)
}

//3)Etant donné deux arrays personnes et nationalites utiliser une bonne boucle pour afficher le nom de chaque personne suivi de sa nationalité.
var personnes = ["Georges", "Arielle", "Elio", "Bart"];
var nationalites = ["Français", "Allemand", "Belge", "Flamand"];
for (i = 0; i < personnes.length; i++) {
    console.log(personnes[i] + " " + nationalites[i])
}

//4)Grâce aux boucles affichez tous les positions d'un plateau d'échecs dans l'ordre, en partant de A1. Pensez à vous inspirer de l'exercice précédent.

var position = ["a", "b", "c", "d", "e", "f", "g", "h"];
var num = ["1", "2", "3", "4", "5", "6", "7", "8"];
for (i = 0; i < position.length; i++){
    console.log(position[i] + num[i])
}

//5) Créer une fonction additionneTout qui prend une suite de nombres et les additionne entre eux.

function additionneTout(...x) {
   let num = 0

for (var i =0; i< x.length ; i++){
    num += x[i];
    } 
    return num;
}
additionneTout(2,5,8,10,25,30)

/////




//6) Créer votre propre fonction join qui portera le nom joindreValeurs. Elle doit se comporter comme la fonction du même nom liée aux arrays sauf qu'elle prendra une suite de valeurs ou de strings à la place d'un array.

//7) Créer votre propre fonction reverse qui portera le nom renverserValeurs. Elle doitse comporter comme la fonction du même nom liée aux arrays sauf qu'elle prendra une suite de valeurs ou de strings à la place d'un array et concatenera d'abord toutes ces valeurs ensemble.

//8) En vous inspirant de la fonction suivante, créer une fonction récursive qui affiche les nombres en partant d'une valeur de départ jusqu'à une valeur maximum toutes deux données lors de l'appel.