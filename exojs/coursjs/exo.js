//Sélectionnez la liste ordonnée et rajoutez 2 li au début 
let fruit = document.querySelector("ol")
fruit.insertAdjacentHTML("beforebegin","<li>-1</li>")
fruit.insertAdjacentHTML("beforebegin", "<li>0</li>")

//Sélectionnez la liste non-ordonnée et rajouter 2 li à la fin

let numero = document.querySelector("ul")
numero.insertAdjacentHTML("afterbegin","<li>mangue</li>")
numero.insertAdjacentHTML("afterbegin","<li>grenade</li>")

//Rajoutez un sous-titre de votre choix après le titre
let titreh1 = document.querySelector("h1")
titreh1.style = "red"

/*let newh2 = document.createElement("h2");
newh2.textContent = "La list de toutes les choses préféré";
titreh1.insertAdjacentElement("afterend", newh2);*/

titreh1.insertAdjacentHTML("afterend", "<h2>La list de toutes les choses préféré</h2>");