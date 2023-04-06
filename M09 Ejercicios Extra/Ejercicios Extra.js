/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   //lo primero que hacemos es crear el array vacio
   var mainArray = [];
   for (let i = 0; i < Object.keys(objeto).length; i++) {
      mainArray.push([Object.keys(objeto)[i], objeto[Object.keys(objeto)[i]]])
   }
   //con el primer Object.keys(objeto)[i] estamos accediendo al valor de la keys (clave) Si es "D"se guardara la D
   //con el segundo Object.keys(objeto)[i] accedemos al valor de la keys dentro del objeto y nos devolvera el valor
   //y con el push directamente lo pusheamos al valor mainArray que creamos
   return mainArray;

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var obj = {}
   const sortedString = string.split('').sort();
   for (let letter of sortedString){
      if(obj.hasOwnProperty(letter)) obj[letter] +=1;
      else obj[letter] = 1;
   }
   return obj;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let minus = "";
   let mayus = "";
   for(let letter of string){
      //en este caso si la letra es minuscula la concatenamos a la letra actual en la variable minus 
      //de lo contrario en la variable mayus
      if (letter === letter.toLowerCase()) minus += letter;
      else mayus += letter; 
   }
   return mayus + minus;


}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let nuevafrase = frase.split(' ');
   let array = []
   nuevafrase.forEach((element) => {
      array.push(element.split("").reverse().join(""))
   });
   let string = array.join(" ");
   return string;


}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let nuevoNumero = numero.toString().split("").reverse().join("");
   if (nuevoNumero == numero) return "Es capicua";
   else return "No es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let array = [];
   for (let i = 0; i < string.length; i++) {
      if(string[i] !== "a" && string[i] !== "b" && string[i] !== "c"){
         array.push(string[i])
      }
   }
   let stringjunto = array.join("")
   return stringjunto
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   Array.prototype.del=function(ind){return this.slice(0,ind).concat(this.slice(ind+1))};
   let t=[],f=arrayOfStrings
   for(let e=0;e<f.length;e+=1){t.push(arrayOfStrings.reduce((acc,val)=>{if(acc.length>val.length)return val;return acc}))
   let h=0;
   for(let m=0;m<arrayOfStrings.length;m+=1){if(arrayOfStrings[m]!==t[e])h+=1;if(arrayOfStrings[m]===t[e]){arrayOfStrings=arrayOfStrings.del(h);break}}}
   return t
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var resultado = []
   var set = new Set(array1);
   for(var i = 0; i < array2.length; i++){
      if (set.has(array2[i])){
         resultado.push(array2[i]);
      }
   }
   return resultado;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
