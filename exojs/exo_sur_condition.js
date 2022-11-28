
//1)Chanceux que vous êtes vous allez pouvoir créer un simulateur de "fortune cookies" ces biscuits chinois où se cachent à l'intérieur des petits mots parfois plein de sagesse et parfois...assez étranges.Créer une fonction qui ne prend pas d'arguments et donc le comportement est le suivant:
function fortunesCookies() {
    let randomNumber = Math.floor(Math.random() * 10);
    switch (randomNumber) {
        case 0:
            return "Le voyage d'un millier de kilomètres commence avec un pas";
        case 1:
            return "Racontez toujours la vérité – c'est la chose la plus facile à se rappeler";
        case 2:
            return "Si vous avez besoin d'un coup de main vous en trouverez une au bout de votre bras";
        case 3:
            return "On tend à recevoir ce à quoi on s'attend";
        case 4:
            return "Un diplomate est un homme qui se rappelle toujours de l'anniversaire d'une femme mais jamais de son âge";
        case 5:
            return "Oubliez le but, appréciez le voyage";
        case 6:
            return "Si la vie vous donne des citrons faites-en de la limonade";
        case 7:
            return "Si on suivait nos propres conseils on aurait du succès";
        case 8:
            return "C'est mieux d'avoir un mauvais plan que pas de plan du tout";
        case 9:
            return "Le meilleur moyen de rendre les enfants bons est de les rendre heureux";
        case 10:
            return "Ne poursuivez pas le bonheur – créez le";
    }
}
/*Version minimaliste et adaptative sans condition: arrayOfSentences = ["Le voyage d'un millier de kilomètres commence avec un pas", "Racontez toujours la vérité – c'est la chose la plus facile à se rappeler", "Si vous avez besoin d'un coup de main vous en trouverez une au bout de votrebras", "On tend à recevoir ce à quoi on s'attend", "Un diplomate est un homme qui se rappelle toujours de l'anniversaire d'une femme mais jamais de son âge", "Un diplomate est un homme qui se rappelle toujours de l'anniversaire d'une femme mais jamais de son âge", "Oubliez le but, appréciez le voyage", "Si la vie vous donne des citrons faites-en de la limonade", "Si on suivait nos propres conseils on aurait du succès",
    "C'est mieux d'avoir un mauvais plan que pas de plan du tout", "Le meilleur moyen de rendre les enfants bons est de les rendre heureux", "Ne poursuivez pas le bonheur – créez le"]
function fortunesCookies(arraySentences) {
    return arraySentences[Math.floor(Math.random() * arraySentences.length)];
}*/




                                //2)Ecrivez une fonction nommée maxOfThree qui prend 3 chiffres en arguments et retourne le plus grand des 3 chiffres. Utilisez seulement des ternaires.

function maxOfThree(num1, num2, num3) {
    return (num1 > num2 && num1 > num3 ? num1 : (num2 > num3 ? num2 : num3));
}


                                                                           //3)Donner le résultat des expressions suivantes:
//(1) false
//(2) true
//(3)false
//(4) 1
//(5) true
//(6) bye
//(7)true

//4)Créez une fonction drawRectangle qui prendra au maximum 3 arguments et quidessinera dans votre console, à base de caractères de votre clavier, un rectangledont l'intérieur est vide. Lors de l'appel deux des paramètres sont obligatoires: la longueur et la hauteur.Le dernier paramètre est le caractère qui sera utilisé pour dessiner le rectangle et sa valeur de base est '*'.
function drawRectangle(longueur, hauteur, bord = "*", coin = "#") {
    for (let j = 1; j <= hauteur; j++) {
         
        let ligne = ""        
        for (let i = 1; i <= longueur; i++) {
            if (i === 1 && j === 1 || i === longueur && j === 1 || i === 1 && j === hauteur || i === longueur && j === hauteur) {
                ligne += coin;
            } 
            else if (i === 1 || i === longueur || j === 1 || j === hauteur) {
                ligne += bord;
            } else {
                ligne += " ";
            }
        }
        console.log(ligne);
    }
}
/*Créez une page HTML qui contient un H1 comme titre et deux listes (une ordonnée et une non-ordonnée) qui contiendront 3 li chacune
	
Sélectionnez la liste non-ordonnée et rajouter 2 li à la fin
	
Sélectionnez la liste ordonnée et rajoutez 2 li au début
	
Rajoutez un sous-titre de votre choix après le titre
	
Modifiez le contenu du premier élément de la liste ordonnée
	
Modifiez le contenu du second élément de la liste non-ordonnée
	
Changez le couleur du titre

Exercice à faire en Javascript ! J'ai déjà confiance en vos capacités HTML*/

// document.querySelector("ul").insertAdjacentHTML("afterend","<li>mangue</li>")
let fruit= document.querySelector("ul")
fruit.insertAdjacentHTML("afterend","<li>mangue</li>")
fruit.insertAdjacentHTML("afterend","<li>grenade</li>")
    