/*index OF*/ 
let array = [2, 3, 2, 4, 1, 2, 8]
function allIndexes(valeur, array) {
    let indexesArray = [];
    let i = array.indexOf(valeur);
    while(i !== - 1) {
        indexesArray.push(i);
        i = array.indexOf(valeur, i+1);
    }
    return indexesArray}
allIndexes(2, array);


/*------------------------------------------------------------------*/

let newArray = [1, 7, 3, 5, 8]
for (i = 0; i < newArray.length; i++){
 console.log(newArray[i]);
}
