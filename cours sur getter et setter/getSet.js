
//exercice
//9) Lors du développement d'un site d'e-commerce vous devez gérer les adresses des clients. Pour l'exercice vous recevez la string "Avenue du Parc 89, 1060 Saint-Gilles, Belgique". A vous de créer un objet qui recevra la string en entier qui la découpera afin de la placer dans différentes propriétés ("rue", "codeCommune", "commune", "pays"). Utilisez un setter.
/*let adresse = {
    rue: "Avenue du Parc 89",
    commune: "Saint-Gilles",
    codeCommune: 1060,
    pays: "Belgique",
    
    get adresseComplet() {return `${this.rue} ${this.commune} ${this.codeCommune} ${this.pays}`;}

}
console.log(adresse.adresseComplet)*/

let adresse = {
    rue: null,
    codeCommune: null,
    commune: null,
    pays: null,
    set adresseComplete(adresse) {
        const adresseSplit = adresse.split(","); // ["Avenue du Parc 89", "1060 Saint-Gilles", "Belgique"]
        const communeSplit = adresseSplit[1].split(" "); // ["1060", "Saint-Gilles"]
        this.rue = adresseSplit[0];
        this.codeCommune = communeSplit[0];
        this.commune = communeSplit[1];
        this.pays = adresseSplit[2];
    }
}
adresse.adresseComplete = "Avenue du Parc 89,1060 Saint-Gilles,Belgique";

/*let dresse = {
    valeur: "Avenue du Parc 89",
    valeur:"1060",
    valeur: "Saint-Gilles",
    valeur:"Belgique",
    set nouvadresse(valeur) {
        if (typeof valeur === "string") this.valeur = valeur.toUpperCase();}};*/


//10) Reprenez votre objet créé à l'exercice 2 et modifiez le de sorte à montrer que les propriétés sont censées être privées. Ajoutez aussi des getters pour récuperer les valeurs des propriétés privées puis des setters qui s'occuperont de valider que lorsqu'on modifie une propriété son type est correct. Si le type n'est pas correct alors la valeur ne doit pas se retrouver dans la propriété.

//2) Créez un objet représentant un post de blog dans la variable blogPost avec les noms de propriétés suivantes: titre (String), nomAuteur (String), date (String/Objet Date), texte (String), catégories (Array de Strings), nombreVues (Number)Remplissez avec les valeurs de votre choix.

const blogPost = {
    _titre: "AstroWorld",
    _nomAuteur: "Travis Scott",
    _date: new Date(),
    _texte: "Wouh Ah Wouh Ah",
    _categories: ["Rap", "Scientifique", "Action", "Horreur"],
    _nombresVues: 1_300_000,
    get titre() {
        return this._titre
    },
    get nomAuteur() {
        return this._nomAuteur
    },
    get date() {
        return this._date
    },
    get texte() {
        return this._texte
    },
    get categories() {
        return this._categories
    },
    get nombresVues() {
        return this._nombresVues
    },
    set titre(titre) {
        if (typeof titre === "string") this._titre = titre
    },
    set nomAuteur(nomAuteur) {
        if (typeof nomAuteur === "string") this._nomAuteur = nomAuteur
    },
    set date(date) {
        if (date instanceof Date) this._date = date
    },
    set texte(texte) {
        if (typeof texte === "string") this._texte = texte
    },
    set categories(categories) {
        if (categories instanceof Array) this._categories = categories
    },
    set nombresVues(nombresVues) {
        if (typeof nombresVues === "number") this._nombresVues = nombresVues
    },    
}