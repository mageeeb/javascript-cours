
//1) Instanciez un objet date ayant pour timestamp votre date de naissance.

let monAnnif = new Date('Aout 26, 1991 00:00:00');

//2) Stockez ensuite dans une variable, à partir de l'objet crée précédemment, le temps passé en milliseconds depuis le 1 janvier 1970 à minuit.

let dateNaissance = monAnnif.getTime();

//3) Créez une classe Chien qui servira à instancier 2 chiens. Les chiens devront posséder un nom, une race, un âge et une couleur. De plus les objets devront posséder une méthode qui permet de savoir l'âge du chien converti en âge humain en se basant sur la croyance que "Une année pour un chien compte comme 7 années pour un humain".

class Chien {
    constructor(nom, race, age, couleur) {
        this.nom = nom;
        this.race = race;
        this.age = age;
        this.couleur = couleur;
    }
    ageHumain() {
        return this.age * 7
    }
}
let medor = new Chien("Medor", "Labrador", 20, "Blanc-noir")
medor.ageHumain()

//4) Créez un objet représentant un chat qui possédera un nom, des vies restantes au nombre de 9 et deux méthodes. Une qui permettra au chat de miauler dans la console (console.log) et la deuxième qui permettra de diminuer le nombre de vies restantes duchat.Utilisez la syntaxe courte pour les méthodes.

let monChat = {
    nom: "Spikey",
    nbrViesRestantes: 9,
    miauler() {
        console.log("Miaouw");
    },
    perdreUneVie() {
        this.nbrViesRestantes--
    }
}
monChat.perdreUneVie()
/*------------------------------------------------------------------------------------------------------*/

//6) Instanciez à partir de la classe FormData en prenant comme base un formulaire decontact basique (nom, prénom, email, sujet, message).Ajoutez ensuite manuellement un clef qui aura pour valeur la date actuelle.Vérifiez que les clefs & valeurs sont correctes en les affichant par couple dans un console.log.

//Pour instancier la classe FormData en JavaScript, vous pouvez utiliser la méthode new FormData()1. Pour ajouter des champs à l’objet FormData, vous pouvez utiliser la méthode formData.append(name, value)1. Pour afficher les clés et les valeurs de l’objet FormData dans la console, vous pouvez utiliser une boucle for-of pour parcourir les entrées de l’objet FormData et afficher chaque entrée dans la console avec un console.log()1.

const form = document.querySelector('form');
const formData = new FormData(form);
formData.append('date', new Date().toISOString());
for (const [key, value] of formData.entries/*"entries"donne les valeurs une par une*/()) {
  console.log(key + ': ' + value);
}
/*--------------------------------------------------------------------------------------------------*/

//Exercice: Créez une classe voiture qui possédera un modèle, une marque, un prix actuel, un prix de base, une vitesse, une vitesse max et un état de déplacement (immobile ou mouvant, via un booléen, qui est basé sur la vitesse actuelle)
 
//Chaque voiture doit pouvoir accélèrer (sans jamais dépasser la vitesse max), freiner (la vitesse ne peut pas descendre sous 0), et donne son statut à travers une chaîne de caractère. Elle doit aussi avoir des réductions via une méthode qui modifiera le prix (via un pourcentage)

/*class Voiture:
    def __init__(self, modele, marque, prix_actuel, prix_base, vitesse, vitesse_max):
        self.modele = modele
        self.marque = marque
        self.prix_actuel = prix_actuel
        self.prix_base = prix_base
        self.vitesse = vitesse
        self.vitesse_max = vitesse_max
        self.etat_deplacement = False if vitesse == 0 else True

    def accelerer(self):
        if self.vitesse < self.vitesse_max:
            self.vitesse += 10

    def freiner(self):
        if self.vitesse > 0:
            self.vitesse -= 10

    def status(self):
        if self.etat_deplacement:
            return "La voiture est en mouvement."
        else:
            return "La voiture est immobile."

    def reduction(self, pourcentage):
        reduction = (pourcentage / 100) * self.prix_actuel
        self.prix_actuel -= reduction*/
        class Voiture {
            constructor(modele, marque, prixActuel, prixBase, vitesseActuelle, vitesseMax, etatDeplacement) {
                this.modele = modele;
                this.marque = marque;
                this.prixActuel = prixActuel;
                this.prixBase = prixBase;
                this.vitesseActuelle = vitesseActuelle;
                this.vitesseMax = vitesseMax;
                this.etatDeplacement = vitesse > 0 ? true : false;
            }
            accelerer(increment) {
                if (this.vitesseActuelle + increment <= this.vitesseMax && increment > 0) {
                    this.vitesseActuelle += increment
                }
                if (this.vitesseActuelle > 0) this.etatDeplacement = true;
            }
            freiner(decrement) {
                if (this.vitesseActuelle - decrement >= 0 && decrement > 0) {
                    this.vitesseActuelle -= decrement
                }
                if (this.vitesseActuelle === 0) this.etatDeplacement = false;
            }
            reduction(pourcentage) {
                this.prixActuel = this.prixBase - this.prixBase * (pourcentage / 100)
            }
            status() {
                return `${this.modele} ${this.marque} a une vitesse max de ${this.vitesseMax}km/h et est actuellement ${this.etatDeplacement ? "mouvante" : "immobile"} à ${this.vitesseActuelle}km/h. Son prix de base est de ${this.prixBase} et est actuellement en vente à ${this.prixActuel}`
            }
        }
        
   /*Dans cet exemple, la classe Voiture possède les attributs suivants:

modele: le modèle de la voiture.
marque: la marque de la voiture.
prix_actuel: le prix actuel de la voiture.
prix_base: le prix de base de la voiture.
vitesse: la vitesse actuelle de la voiture.
vitesse_max: la vitesse maximale de la voiture.
etat_deplacement: l’état de déplacement de la voiture (immobile ou mouvant), qui est basé sur la vitesse actuelle.
Les méthodes suivantes sont également définies pour la classe Voiture:

accelerer(): permet d’accélérer la voiture sans jamais dépasser sa vitesse maximale.
freiner(): permet de freiner la voiture sans que sa vitesse ne descende en dessous de 0.
status(): renvoie l’état actuel de la voiture sous forme d’une chaîne de caractères.
reduction(pourcentage): permet d’appliquer une réduction sur le prix actuel de la voiture en pourcentage.*/

/*--------------------------------------------------------------------------------------------------*/
//10) Vous devez représenter le personnel d'un avion à travers des objets en utilisant des classes.Créez une classe Travailleur qui possédera un nom, un prénom, des jours de congés restants aux nombres de 20 par défaut, une date d'embauche, une date de fin de contrat (undefined si CDI), un salaire et une méthode informations pour afficher toutes ces informations sous forme de phrase.10) Vous devez représenter le personnel d'un avion à travers des objets en utilisant des classes.Créez une classe Travailleur qui possédera un nom, un prénom, des jours de congés restants aux nombres de 20 par défaut, une date d'embauche, une date de fin de contrat (undefined si CDI), un salaire et une méthode informations pour afficher toutes ces informations sous forme de phrase.Créez ensuite une classe HotesseAir qui prendra comme classe ancêtre Travailleur. Les hôtesses de l'air posséderont toujours par défaut un contrat d'un an et un salaire de 2000€. Elles auront également une méthode renouvelerContrat qui ajoutera une année à leur fin de contrat.Viendra ensuite la classe PiloteAir qui prendra également comme classe ancêtre Travailleur. Leur contrat sera par défaut sans fin et avec un salaire de 8000€. Les pilotes auront une propriété supplémentaire appelée joursRecup qui contiendra le nombre de jours qu'ils peuvent récupérer. Ils auront de plus une méthode longCourrier qui ajoutera un jour de récupération à chaque long voyage accompli.Instanciez à partir des deux sous-classes pour tester la validité de votre code.



  class Travailleur {    constructor(nom, prenom, dateDebut, dateFin, salaire, joursConges = 20) { 
           this.nom = nom; 
                  this.prenom = prenom;
                  this.dateDebut = dateDebut;
                  this.dateFin = dateFin;       
                   this.salaire = salaire;     
                      this.joursConges = joursConges;}  

                        information() {  
                                  console.log(`Le travailleur ${this.nom} ${this.prenom} a débuté chez nous le${this.dateDebut}, perçoit un salaire de ${this.salaire} et dispose encore de ${this.joursConges} jours de congés. Son contrat court jusqu'au ${this.dateFin}`); }
                                  prendreConge(nbrConge) {
                                    if (Number.isInteger(nbrConge) && this.joursConges >= nbrConge && nbrConge >= 0) {this.joursConges -= nbrConge;console.log(this.joursConges);}}}
                                    class HotesseAir extends Travailleur {
                                    constructor(nom, prenom, dateDebut, dateFin = new Date(dateDebut), salaire = 2000, joursConges = 2){  
                                               super(nom, prenom, dateDebut, dateFin, salaire, joursConges); 
                                               this.dateFin.setFullYear(this.dateFin.getFullYear()+1);}  
                                                 renouvelerContrat() {
                                                     this.dateFin.setFullYear(this.dateFin.getFullYear()+1);}}
                                                     class PiloteAir extends Travailleur {
                                                        constructor(nom, prenom, dateDebut, dateFin = undefined, salaire = 8000, joursConges = 20, joursRecup = 0) {
                                                            super(nom, prenom, dateDebut, dateFin, salaire, joursConges);
                                                            this.joursRecup = joursRecup;} 
                                                            longCourrier() { 
                                                                this.joursRecup++}
                                                                prendreConge(nbrConge) {
                                                                    if (Number.isInteger(nbrConge) && this.joursConges >= nbrConge && nbrConge >= 7) {
                                                                        this.joursConges -= nbrConge;console.log(this.joursConges);}}}

/*--------------------------------------------*/
//Créer une classe Personne qui permet d'instancier des personnes ayant un prénom, un nom, un âge et une méthode pour se présenter (utilisez des getters & setters + propriétés privées)

class Personne {
    constructor(prenom, nom, age){
        this.prenom=prenom;
        this.nom=nom;
        this.age=age;
    }presentation(){
        returnk(`${this.prenom} ${this.nom}${this.age}`);
    }
    get nom() {
        return this._nom;
    }
    set nom(nom) {
        if (typeof nom === "string") {
            return `${this.nom}`
        }

    }
    get prenom() {
        return this._prenom;
    }
    set prenom(prenom) {
        if (typeof prenom === "string") {

        }

    }
    get age() {
        return this._age;
    }
    set age(age) {
        if (typeof age === "string") {


        }

    }

}