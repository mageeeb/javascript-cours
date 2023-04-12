
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


//6) Instanciez à partir de la classe FormData en prenant comme base un formulaire decontact basique (nom, prénom, email, sujet, message).Ajoutez ensuite manuellement un clef qui aura pour valeur la date actuelle.Vérifiez que les clefs & valeurs sont correctes en les affichant par couple dans un console.log.

//Pour instancier la classe FormData en JavaScript, vous pouvez utiliser la méthode new FormData()1. Pour ajouter des champs à l’objet FormData, vous pouvez utiliser la méthode formData.append(name, value)1. Pour afficher les clés et les valeurs de l’objet FormData dans la console, vous pouvez utiliser une boucle for-of pour parcourir les entrées de l’objet FormData et afficher chaque entrée dans la console avec un console.log()1.

const form = document.querySelector('form');
const formData = new FormData(form);
formData.append('date', new Date().toISOString());
for (const [key, value] of formData.entries/*"entries"donne les valeurs une par une*/()) {
  console.log(key + ': ' + value);
}


//Exercice: Créez une classe voiture qui possédera un modèle, une marque, un prix actuel, un prix de base, une vitesse, une vitesse max et un état de déplacement (immobile ou mouvant, via un booléen, qui est basé sur la vitesse actuelle)
 
//Chaque voiture doit pouvoir accélèrer (sans jamais dépasser la vitesse max), freiner (la vitesse ne peut pas descendre sous 0), et donne son statut à travers une chaîne de caractère. Elle doit aussi avoir des réductions via une méthode qui modifiera le prix (via un pourcentage)

class Voiture:
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
        self.prix_actuel -= reduction
        
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