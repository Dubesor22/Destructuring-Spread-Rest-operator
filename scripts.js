//ercicios destructuring
//Dado el siguiente objeto:
const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];
//Extrae la empleada Ana con todos sus datos personales:

const [ ,empleado2] = empleados;
console.log(empleado2)

//Extrae el email del empleado Luis --> Luis@gmail.com

const [{email:emailLuis}]=empleados;
console.log(emailLuis)

//Usa la desestructuración para intercambiar los valores de a y b
// Inicialmente
let a = 5;
let b = 3;
// Al final
//let a = 3;
//let b = 5;

[a , b] = [b , a]

console.log(a)
console.log(b)

//2. Ejercicios spread/rest
//Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma ///de todos los demás argumentos.
//sumEveryOther(6, 8, 2, 3, 1); //20
//sumEveryOther(11, 3, 12); //26 

const sumEveryOther = (...parametro) => {
  let suma = 0;
  for (let i = 0; i < parametro.length; i++){
    suma += parametro[i]
  }
  return suma
}
console.log(sumEveryOther(6, 8, 2, 3, 1))

//Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.
//addOnlyNums(1, 'perro', 2, 4); //7

const addOnlyNums = (...parametro) => {
  let sum=0;
  for (let i = 0; i <parametro.length; i++){
  if (!isNaN(parametro[i])){

   sum += parametro[i];
  }
  
}
return console.log(sum);
}
addOnlyNums(1, 'perro', 2, 4);

//Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
//countTheArgs('gato', 'perro'); //2
//countTheArgs('gato', 'perro', 'pollo', 'oso'); //4

const countTheArgs = (...parametro) => {
  console.log(parametro.length);
}
countTheArgs('gato', 'perro'); //2
countTheArgs('gato', 'perro', 'pollo', 'oso'); //4

//Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

arrUno = ["Paco", 55, "casa", "Perro"];
arrDos = ["Juana", 33, "piso", "gato"];

arrayJunto = [...arrUno,...arrDos];
console.log(arrayJunto);

//EXTRAS ====================================
//3. Extras
//Dado el siguiente objeto:
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};
//Cambiar las siguientes líneas para guardar desestructurando los valores de temperaturas en las variables maximaHoy y maximaManana
//const maximaHoy = HIGH_TEMPERATURES.today;
//const maximaManana = HIGH_TEMPERATURES.tomorrow;
//console.log(maximaHoy)
//console.log(maximaManana)

const {today} = HIGH_TEMPERATURES;
const {tomorrow} = HIGH_TEMPERATURES;
console.log(`la maxima de hoy es ${today}`);
console.log(`la maxima de Mañana es ${tomorrow}`);

//Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.



const onlyUniques = (...parametro) => {
  let unico = [...new Set(parametro)]
  return console.log(unico);
}

onlyUniques('gato', 'pollo', 'cerdo', 'cerdo'); 
//['gato', 'pollo', 'cerdo']
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]

//Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.



const combineAllArrays = (...parametro) => {
  let arrayCompleto = [];
  for (let i=0; i < parametro.length; i++){
  arrayCompleto +=  `${parametro[i]},`  
}
return console.log(new Array(arrayCompleto))
}
combineAllArrays([2,4,5])
combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1])
// [3, 6, 7, 8, 2, 7, 3, 1]
combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1]);
// [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

//Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.

const SumAndSquare = ([...parametro]) => {
  let sumaCuadrado=0;
  
  for (let i = 0; i < parametro.length; i++){
    sumaCuadrado += (parametro[i] **2);
  }
  return console.log(sumaCuadrado)
}
numeros = [5,5,5]

SumAndSquare(numeros)