
//exercice
//9) Lors du développement d'un site d'e-commerce vous devez gérer les adresses des clients. Pour l'exercice vous recevez la string "Avenue du Parc 89, 1060 Saint-Gilles, Belgique". A vous de créer un objet qui recevra la string en entier qui la découpera afin de la placer dans différentes propriétés ("rue", "codeCommune", "commune", "pays"). Utilisez un setter.
let adresse = {
    rue: "Avenue du Parc 89",
    commune: "Saint-Gilles",
    codeCommune: 1060,
    pays: "Belgique",
    
    get adresseComplet() {return `${this.rue} ${this.commune} ${this.codeCommune} ${this.pays}`;}

}
console.log(adresse.adresseComplet)


/*let dresse = {
    valeur: "Avenue du Parc 89",
    valeur:"1060",
    valeur: "Saint-Gilles",
    valeur:"Belgique",
    set nouvadresse(valeur) {
        if (typeof valeur === "string") this.valeur = valeur.toUpperCase();}};*/


//10) Reprenez votre objet créé à l'exercice 2 et modifiez le de sorte à montrer que les propriétés sont censées être privées. Ajoutez aussi des getters pour récuperer les valeurs des propriétés privées puis des setters qui s'occuperont de valider que lorsqu'on modifie une propriété son type est correct. Si le type n'est pas correct alors la valeur ne doit pas se retrouver dans la propriété.

let Adresse = {
    _rue: "Avenue du Parc 89",
    _commune: "Saint-Gilles",
    _codeCommune: 1060,
    _pays: "Belgique",
    
    get adresseComplet() {return `${this._rue} ${this._commune} ${this._codeCommune} ${this._pays}`;}

}
console.log(Adresse.adresseComplet)