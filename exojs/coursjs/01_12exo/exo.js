
/*Permettre à l'utilisateur de choisir une couleur qui sera utilisé comme couleur d'arrière-plan et une autre couleur comme couleur de texte*/
let textColor = document.querySelector("#textColor")
let couleurDeFont = document.querySelector("#backgroundColor")

textColor.addEventListener("change", changeTextColor);
backgroundColor.addEventListener("change", changeBackgroundColor);

function changeTextColor() {
  let body = document.querySelector("body")
  body.style.color = textColor.value
  sessionStorage.setItem("#textColor", textColor.value);
}

function changeBackgroundColor() {
  let body = document.querySelector("body")
  body.style.backgroundColor = couleurDeFont.value
   sessionStorage.setItem("#backgroundColor", backgroundColor.value);
  }
if (localStorage.getItem("textColor")) {
  let body = document.querySelector("body")
  body.style.color = localStorage.getItem("textColor")
}
  if (localStorage.getItem("backgroundColor")) {
  let body = document.querySelector("body")
  body.style.color = localStorage.getItem("backgroundColor")
}
/*Récupérer cette nouvelle valeur de couleur via l'attribut "value" de l'objet HTML à chaque changement par l'utilisateur*/

/*var champ = document.getElementById("body");

if (sessionStorage.getItem("autosave")) {
  champ.value = sessionStorage.getItem("autosave");
}*/