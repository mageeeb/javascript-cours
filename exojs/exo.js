

//1) Créer une fonction presentation qui prend 3 arguments (prenom, nom, age) qui affiche dans la console une phrase de présentation.

function presentation(prenom, nom, age) {
    console.log("bonjour je m'appel " + prenom +" " + nom + "et j'ai" + " "+ age +"ans")
} 
presentation ("magib", "sall", "31")

 //Créer une fonction calculatriceSomme qui prend 2 arguments (nombre1, nombre2) et qui renvoie le résultat. Faites la même chose pour les 3 autres opérations de base mais donnez à la multiplication et à la division des paramètres par défaut valant 1.

function calculatriceSomme(nombre1, nombre2) {
    return nombre1 + nombre2
}

function calculatriceMulti(nombre1, nombre2 =1) {
    return nombre1 * nombre2 
}
function calculatriceSoustraction(nombre1, nombre2 ) {
     return nombre1 - nombre2
}
 function calculatriceDiv(nombre1, nombre2 =1) {
     return nombre1 / nombre2
}
 

//3) Créer une fonction possibilitesCalculatrice qui prend 2 arguments (nombre1, nombre2) et affiche dans la console le résultat de l'addition, de la soustraction, de la multiplication et de la division de ces nombres entre eux grâce aux fonctions précédentes calculatrice.

function possibilitesCalculatrice(nombre1, nombre2) {
    console.log(calculatriceSomme(nombre1, nombre2))
    console.log(calculatriceMulti(nombre1, nombre2))
    console.log(calculatriceSoustraction(nombre1, nombre2))
    console.log(calculatriceDiv(nombre1, nombre2) )
}

possibilitesCalculatrice(25,5)

//4) Réecrivez toutes vos fonctions avec la syntaxe que vous n'avez pas encore utilisée:fonction simple => fonction flèchée et fonction flèchée => fonction simple.