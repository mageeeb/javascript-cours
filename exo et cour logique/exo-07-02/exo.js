function calculerMoyenne(acc, elem) {
    return acc + elem;
 }
 function creerSigle(elem) {
     if (elem.length > 12) {
         let wordsArr = elem.split(" ");
         let initiales = [];
         for (let i = 0; i < wordsArr.length; i++) {
             initiales.push(wordsArr[i][0]);
         }
         return initiales.join("");
     } else {
         return null    }
 }
 let entreprises = ["Alpexa","Septriz","Boogle Partner","Book of Faces","Instakilogrammes","What's up"];
 let revenus = [
   [45137, 3304, 74003, 68503, 73808, 94246, 62017, 23273, 60285, 61127, 78510, 74088],
   [81188, 75759, 22364, 88369, 74788, 80759, 71315, 87816, 63936,84986, 98514, 40404],
   [46611, 56217, 27703, 5773, 73651, 97040, 36482, 58609, 25164,63690, 60610, 2650],
   [26937, 79811, 50785, 35564, 52286, 73493, 92746, 38919, 54428,32606, 80998, 86212],
   [25854, 19422, 21344, 88533, 20683, 82385, 17783, 7448, 72153,76673, 93315, 45947],
   [53882, 80453, 30238, 98621, 45999, 78338, 96038, 5427, 19335,71624, 33262, 4486],
 ];
 let moyenneRevenus = [];
 let sigleEntreprises = entreprises.map(creerSigle);
 for (let i = 0; i < entreprises.length; i++) {
     let moyenne = revenus[i].reduce(calculerMoyenne);
     moyenneRevenus.push(moyenne/revenus[i].length);
 }
 for (let i = 0; i < entreprises.length; i++) {
     console.log(`L'entreprise ${entreprises[i]}${sigleEntreprises[i] ? `de sigle ${sigleEntreprises[i]}`: ""} a eu des revenus moyens sur l'année passée de ${moyenneRevenus[i]}`);

 }


 function voyelles(string) {    
    let voyelles = ["a", "e", "i", "o", "u"];   
  let totalVoyelles = 0;    
 for (let i = 0; i < string.length; i++) { //tant que i=0 i est inferieur de la longueur du "string" / on rajoute +1
    if ( voyelles.includes(string[i]) ) {         totalVoyelles++;}} //si dans voyelles il existe string[i]rajoute +1 sur totalvoyelles (include renvoi true si il contiens la valeur)
    return totalVoyelles;}


    function foobar(maxNum) {
        for (let i = 0; i < maxNum; i++) {
            if (i % 5 === 0 && i % 3 === 0) {    
                //si le reste de i divisé par 5 est strictement = à 0 et que i divisé par 3 est strictement = à 0 
                console.log(i + " FooBar"); }
                //affiche i + foobar
            else if (i % 5 === 0) {
                //sinon si le reste de i divisé par 5 est strictement = à 0 
                console.log(i + " Foo");}
                //affiche i + foo
                else if (i % 3 === 0) {
                    //sinon si le reste de i divisé par 3 est strictement = à 0
                    console.log(i + " Bar");}}}
                    //affiche i + Bar


                    function majusculeMot(string) {
                        let precedent = " ";
                        let stringMajusculeMot = "";
                        for (let i = 0; i < string.length; i++) {

                            if (string[i] !== string[i].toUpperCase() && precedent === " ") {
                            stringMajusculeMot += string[i].toUpperCase();}
                            else {
                                stringMajusculeMot += string[i];}
                             precedent = string[i]; }
                             return stringMajusculeMot;}

