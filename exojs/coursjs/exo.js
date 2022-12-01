//Sélectionnez la liste ordonnée et rajoutez 2 li au début 
let fruit = document.querySelector("ol")
fruit.insertAdjacentHTML("afterbegin","<li>tomate</li>")
fruit.insertAdjacentHTML("afterbegin", "<li>manioc</li>")

//Sélectionnez la liste non-ordonnée et rajouter 2 li à la fin

let numero = document.querySelector("ul")
numero.insertAdjacentHTML("beforeend","<li>mangue</li>")
numero.insertAdjacentHTML("beforeend", "<li>grenade</li>")

//je rajoute des li avec des noms de ville au senegal et j'en rajoute 3 de plus
let pays = document.querySelector(".pays")
pays.insertAdjacentHTML("beforeend", "<li>tambacounda</li>")
pays.insertAdjacentHTML("beforeend" , "<li>saloum</li>")

//Rajoutez un sous-titre de votre choix après le titre
let titreh1 = document.querySelector("h1")

//Changez le couleur du titre
titreh1.style = "red"

/*let newh2 = document.createElement("h2");
newh2.textContent = "La list de toutes les choses préféré";
titreh1.insertAdjacentElement("afterend", newh2);*/

titreh1.insertAdjacentHTML("afterend", "<h2>La list de toutes les choses préféré</h2>");