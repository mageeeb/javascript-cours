let b1 = document.querySelector('button');
let d1 = document.querySelector('div');

//On utilise les propriétés gestionnaires d'évènement avec nos éléments
b1.onclick = function(){alert('Bouton cliqué')};
d1.onmouseover = function(){this.style.backgroundColor ='orange'};
d1.onmouseout = function(){this.style.backgroundColor='white'};