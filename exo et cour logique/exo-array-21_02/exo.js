//Vous recevez un array contenant des mots formant deux phrases. Transformez cet array en phrases correctes en une instruction.
arrayMots = ["Rien", "ne", "sert", "de", "courir", ";", "il", "faut", "partir", "à", "point.", "Le", "Lièvre", "et", "la", "Tortue", "en", "sont", "un", "témoignage."]
console.log(arrayMots.toString());

//2)Etant donné la liste de mois suivants, corrigez et complétez cet array pour qu'il contienne tout les mois de l'année.
const moisAnnee = ["Janvier", "Mars", "Mai", "Avril", "Juin", "Juillet", "Août", "Septienbre", "Décembre"]

//3)Vous recevez une liste de noms d'employés et une liste de salaires des employés. Les deux arrays possèdent le même ordre qui fait correspondre employés et salaires. Ecrivez une fonction qui prend une string contenant le nom de l'employé et retourne le salaire de l'employé si l'employé existe ou alors une string indiquant que cet employé n'existe pas.

employes = ['Jean Lefèvre', 'Marie Platain', 'John Leroy', 'Dmitri Zirkov', 'MohammedKassab', 'Bénévolence Adebowale', 'Motoko Sawaguri'];salaires = [2200, 2100, 3000, 2400, 2000, 3700, 4000];

function emplSalaire(employe) {
    if(employes.includes(employe)) {
        let i = employes.indexOf(employe);
            console.log(employe + " gagne " + salaires[i] + " euros par jour");        
    }
}
  

//4)Un employeur archive le montant du salaire de ses employés dans un dossier par mois et ces dossiers contiennent une fiche par semaine. Cet employeur aimerait disposer d'un programme qui lui permette en entrant une semaine de début et une semaine de fin, de récupérer les fiches correspondantes. Pour vous représentez ces fiches elle ont été mises sous forme d'array. Ecrivez la fonction nécessaire.

janvier = ["fiche1.1", "fiche1.2", "fiche1.3", "fiche1.4"];fevrier = ["fiche2.1", "fiche2.2", "fiche2.3", "fiche2.4"];mars = ["fiche3.1", "fiche3.2", "fiche3.3", "fiche3.4"];avril = ["fiche4.1", "fiche4.2", "fiche4.3", "fiche4.4"];
mai = ["fiche5.1", "fiche5.2", "fiche5.3", "fiche5.4"];juin = ["fiche6.1", "fiche6.2", "fiche6.3", "fiche6.4"];juillet = ["fiche7.1", "fiche7.2", "fiche7.3", "fiche7.4"];août = ["fiche8.1", "fiche8.2", "fiche8.3", "fiche8.4"];septembre = ["fiche9.1", "fiche9.2", "fiche9.3", "fiche9.4"];octobre = ["fiche10.1", "fiche10.2", "fiche10.3", "fiche10.4"];novembre = ["fiche11.1", "fiche11.2", "fiche11.3", "fiche11.4"];décembre = ["fiche12.1", "fiche12.2", "fiche12.3", "fiche12.4"];



//5)Vous recevez des arrays imbriqués, écrivez une fonction qui prend un array imbriqué et "l'aplatit" (flatten en Anglais) pour ne plus avoir qu'un seul array qui contient les valeurs dans le même ordre qu'elles vous ont été données. 
//Par exemple:

//6) En utilisant la méthode d'array appropriée, donner la moyenne des notes d'une classe qui se trouvent ci-dessous:
88, 77, 54, 0, 91, 89, 69, 67, 82, 51, 72, 52, 91, 49, 66, 81

function numAverage(a) {
    var b = a.length,
        c = 0, i;
    for (i = 0; i < b; i++){
      c += Number(a[i]);
    }
    return c/b;
  }
  numAverage([88, 77, 54, 0, 91, 89, 69, 67, 82, 51, 72, 52, 91, 49, 66, 81]);

  //7) En utilisant la méthode d'array appropriée, classez les chiffres ci-dessous par ordre "alphabétique" (c'est à dire comme dans un dictionnaire tous les 1 en premiers, puis tous les 2, etc.)

  //17, 1,  33, 111, 27, 3, 27, 22, 1323

  const chiffres = [  '17', '1',  '33', '111', '27', '3', '27', '22', '1323'];
chiffres.sort();
console.log(chiffres);

//8) En utilisant la méthode appropriée, ne gardez seulement que les noms commençant par la lettre A dans la liste suivante:

//Brenda, Amelia, Kate, Kayla, Jackie, Daria, Anna

let noms = ["Brenda", "Amelia", "Kate", "Kayla", "Jackie", "Daria", "Anna"]

const starWithA = noms.filter( elem => elem[0] === "A")

starWithA
//exercice fonction fléché

//1) Créer une fonction presentation qui prend 3 arguments (prenom, nom, age) qui affiche dans la console une phrase de présentation.
const presentation = (prenom, nom, age) => 
  `Salutations je suis ${prenom} de la maison ${nom} et mon âge est d'actuellement ${age} années`; 

 presentation("magib","sall","31");

//2) Créer une fonction calculatriceSomme qui prend 2 arguments (nombre1, nombre2) et qui renvoie le résultat. Faites la même chose pour les 3 autres opérations de base mais donnez à la multiplication et à la division des paramètres par défaut valant 1.

 const calculatriceSomme = (nombre1, nombre2) => nombre1 + nombre2;

 const calculatriceSoustraction = (nombre1, nombre2) =>  nombre1 - nombre2;

 const calculatriceMultiplication = (nombre1 = 1, nombre2 = 1) =>  nombre1 * nombre2;

 const calculatriceDivision = (nombre1 = 1, nombre2 = 1) =>  nombre1 / nombre2;

//5) Créer une fonction estImpair qui prend un argument (nombre) qui retourne true si le nombre est impaire ou false sinon.
const impair = num => num % 2 !== 0 ? true : false;
impair(5);

//6) A partir de l'objet suivant faites en sorte de créer une fonction qui soit liée (this) définitivement à celui-ci (peu importe si la fonction est sortie de l'objet ou transférée à un autre objet) et qui affiche la valeur de la propriété nom.
function afficherThis(){
  console.log(this);
}
let president = {nom: "John Kennedy"};

