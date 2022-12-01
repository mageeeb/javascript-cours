//Sélectionnez la liste ordonnée et rajoutez 2 li au début 
let fruit = document.querySelector("ol")
fruit.insertAdjacentHTML("afterbegin","<li>-1</li>")
fruit.insertAdjacentHTML("afterbegin", "<li>0</li>")

//Sélectionnez la liste non-ordonnée et rajouter 2 li à la fin

let numero = document.querySelector("ul")
numero.insertAdjacentHTML("beforeend","<li>mangue</li>")
numero.insertAdjacentHTML("beforeend","<li>grenade</li>")

//Rajoutez un sous-titre de votre choix après le titre
let titreh1 = document.querySelector("h1")

//Changez le couleur du titre
titreh1.style = "red"

/*let newh2 = document.createElement("h2");
newh2.textContent = "La list de toutes les choses préféré";
titreh1.insertAdjacentElement("afterend", newh2);*/

titreh1.insertAdjacentHTML("afterend", "<h2>La list de toutes les choses préféré</h2>");

// utilisation de onclick
button.onclick = function bonjour() {
    let prenom = prompt("Votre prenom: ")
    button.textContent = prenom;
}

// creer une rotation avec opacité
let googleLogo= document.querySelector(".lnXdpd");
let inputText = document.querySelector(".gLFyf");
googleLogo.animate([{ opacity: "1" }, { opacity: "0.0" }], 10000);
//     

function askText(){
    let inputUser =prompt("text à inserer:")
    inputText.value=inputUser
}
googleLogo.addEventListener("click", askText);

// creer une rotation avec rotation

let googleLogo= document.querySelector(".lnXdpd");
let inputText = document.querySelector(".gLFyf");
googleLogo.animate([{transform: "rotate(0deg)"}, {transform: "rotate(360deg)"}] , 2000); 
//     

function askText(){
    let inputUser =prompt("text à inserer:")
    inputText.value=inputUser
}
googleLogo.addEventListener("click", askText);

