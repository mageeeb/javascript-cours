//on crée un objet avec des arguments
let voiture1 = {marque: "Honda", modele: "Civic", couleur: "Verte Olive", prix: 1000, reservoirMax: 30, reservoirActuel: 17}
let voiture2 = {marque: "Ford", modele: "Mustang", couleur: "Noire", prix: 20_000, reservoirMax: 36, reservoirActuel: 13}
//on crée un function pour recevoir la difference entre reservoirMax et reservoirActuel (on fait une soustraction)
function calculerPlein() {
    return this.reservoirMax - this.reservoirActuel;
}
voiture1.calculerPlein = calculerPlein
voiture2.calculerPlein = calculerPlein
voiture1.calculerPlein()
voiture2.calculerPlein()


//autre exemple

let voiture1 = {
    marque: "Honda",
    modele: "Civic",
    reservoirMax: 30,
    reservoirActuel: 17,
    calculerPlein: function calculerPlein() {
        return this.reservoirMax - this.reservoirActuel;
    }
}
let mongolfiere1 = {
    sponsorise: "Justin Bridou",
    reservoirMax: 200,
    reservoirActuel: 130,
}
mongolfiere1.calculerPlein = voiture1.calculerPlein
mongolfiere1.calculerPlein()

//Exercice
//1) Corrigez les objets suivants pour ne plus avoir d'erreurs:
let Id = {
    prenom : "Norma Jean",
 nom : "Mortensen",
  dateNaissance : 1926,
 pays:"USA"}

 let Id2= {
    prenom: "Marilyn",
     nom: "Monroe",
      n_Recompenses: 7
}

//2) Créez un objet représentant un post de blog dans la variable blogPost avec les noms de propriétés suivantes: titre (String), nomAuteur (String), date (String/Objet Date), texte (String), catégories (Array de Strings), nombreVues (Number)Remplissez avec les valeurs de votre choix.
let blogPost ={
    titre :"Alien",
    nomAuteur :"Soleil Nuit",
    //new date pour recevoir un objet de date
    date : new Date(),
    texte: "Bonjour tout le monde",
    categories:["vendredi", "Samedi"],
    nombreVue : 23,
}
//3) Bouclez sur l'objet crée à l'exercice précédent pour afficher une ligne pour chaque propriété sous la forme suivante: "Nom de l'Objet | Nom de propriété : Valeur de propriété"
for(let key in blogPost){
    console.log(key + "|" + blogPost[key]);
    //on peut l'ecrire aussi 
    //console.log(`blogPost | ${key} : ${blogPost[key]}`)
    
}

//4) Représentez sous forme graphique une explication du this pour les fonctions simples et les fonctions flèchées (par paint, photoshop, ou photo d'un dessin ou tout autre moyen)



//5) Créer deux méthodes, une pour calculer l'aire et l'autre pour calculer le périmètre. Ces méthodes devront être capables d'être attribuées à un objet possédant les noms depropriétés largeur et longueur. Testez vos fonctions avec 2 objets représentants un carré et un rectangle.

let rectangle={
    long :6,
    larg :4,
    calculerAir: function calculerAir() {
        return  this.long * this.larg;
    }
}
rectangle.calculerAir()

let carre={
  long:4,
  larg:4,
  calculerAir: function calculerAir() {
    return 2* (this.long + this.larg);
}
    }

carre.calculerPerim()
