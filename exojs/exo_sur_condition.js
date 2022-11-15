
//1)Chanceux que vous êtes vous allez pouvoir créer un simulateur de "fortune cookies" ces biscuits chinois où se cachent à l'intérieur des petits mots parfois plein de sagesse et parfois...assez étranges.Créer une fonction qui ne prend pas d'arguments et donc le comportement est le suivant:

function cookies() {
    return Math.floor(Math.random() * 10) + 1;
}

switch ("0") {
    case "0":
        console.log("Le voyage d'un millier de kilomètres commence avec un pas");
    case "1":
        console.log("Racontez toujours la vérité – c'est la chose la plus facile à se rappeler");
    case "2":
        console.log("Si vous avez besoin d'un coup de main vous en trouverez une au bout de votre bras");
    case "3":
        console.log("On tend à recevoir ce à quoi on s'attend");
    case "4":
        console.log("Un diplomate est un homme qui se rappelle toujours de l'anniversaire d'une femme mais jamais de son âge");
    case "5":
        console.log("Oubliez le but, appréciez le voyage");
    case "6":
        console.log("Si la vie vous donne des citrons faites-en de la limonade");
    case "7":
        console.log("Si on suivait nos propres conseils on aurait du succès");
    case "8":
        console.log("C'est mieux d'avoir un mauvais plan que pas de plan du tout");
    case "9":
        console.log( "Le meilleur moyen de rendre les enfants bons est de les rendre heureux");
    case "8":
        console.log("Ne poursuivez pas le bonheur – créez le");
    
}   
//Ecrivez une fonction nommée maxOfThree qui prend 3 chiffres en arguments et retourne le plus grand des 3 chiffres. Utilisez seulement des ternaires.
function maxOfThree()
