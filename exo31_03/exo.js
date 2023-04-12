/*
Vous recevez des arrays imbriqués, écrivez une fonction qui prend un array imbriqué et "l'aplatit" (flatten en Anglais) pour ne plus avoir qu'un seul array qui contient les valeurs dans le même ordre qu'elles vous ont été données.
Par exemple:
[[1, 3, 6], 8, 4, 2, [1, 1, 1]] => [1, 3, 6, 8, 4, 2, 1, 1, 1];
Bonus: Soyez-sur que votre fonction puisse retourner un résultat corrects avec plusieurs niveaux d'imbrication.
*/

function flattenRecursive(elem, i = 0) {
    if (elem[i] === undefined) return []
    else if (Array.isArray(elem[i])) return flattenRecursive(elem[i], 0) (flattenRecursive(elem, i + 1))
    return [elem[i]].concat(flattenRecursive(elem, i + 1))
}

/*Il s'agit d'une fonction JavaScript qui prend un tableau en entrée et renvoie un tableau aplati. La fonction utilise la récursivité pour aplatir le tableau. Elle prend deux arguments, le premier étant le tableau à aplatir et le second un indice facultatif qui vaut 0 par défaut. La fonction vérifie si l'élément à l'indice actuel est indéfini. Si c'est le cas, elle renvoie un tableau vide. S'il s'agit d'un tableau, elle s'appelle récursivement avec le premier élément du tableau et concatène le résultat avec un appel récursif avec le reste du tableau. S'il n'est ni indéfini ni un tableau, il renvoie un tableau avec cet élément concaténé avec un appel récursif avec le reste du tableau.*/

//Cependant, je peux vous expliquer la fonction flattenRecursive en utilisant un exemple simple. Supposons que nous avons un tableau [[1, 2], [3], [4, 5]]. La fonction flattenRecursive prend ce tableau et renvoie un nouveau tableau qui contient tous les éléments du tableau d’origine dans un seul tableau. Donc, le résultat serait [1, 2, 3, 4, 5]. La fonction utilise la récursivité pour parcourir tous les éléments du tableau d’origine et les concaténer dans un seul tableau.