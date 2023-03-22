/*if(onclick=0){
    onclick="this.textContent++">0;
}*/

function changerCouleur(element) {
    color = element.style.color ;

    if(color==='black' || color==='' ){
        color='red'
    }else if(color==='red'){
        color='blue'
    }else if(color==='blue'){
        color='black'
    }
    element.style.color = color;
     /*if (element.classList.contains("red")) {
        element.classList.remove("red");element.classList.add("green"); } 
        else if (element.classList.contains("green")) {element.classList.remove("green"); element.classList.add("blue"); } 
        else if (element.classList.contains("blue")) { element.classList.remove("blue"); element.classList.add("red"); }*/
} 

