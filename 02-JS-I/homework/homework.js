// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'hola';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 2;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 4.2;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  if (typeof str !=="string") console.error('solo puedes ingresar numeors')
  
  return (str)
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  if (typeof x !=="number") console.error('solo puedes ingresar numeors')
  if (typeof y !=="number") console.error('solo puedes ingresar numeors')

  return (x+y)
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  if (typeof x !=="number") console.error('solo puedes ingresar numeors')
  if (typeof y !=="number") console.error('solo puedes ingresar numeors')
  return (x-y)
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  if (typeof x !=="number") console.error('solo puedes ingresar numeors')
  if (typeof y !=="number") console.error('solo puedes ingresar numeors')
  return (x*y)
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  if (typeof x !=="number") console.error('solo puedes ingresar numeors')
  if (typeof y !=="number") console.error('solo puedes ingresar numeors')
  return (x / y)
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (typeof x !=="number") console.error('solo puedes ingresar numeors')
  if (typeof y !=="number") console.error('solo puedes ingresar numeors')
  if(x===y){
    return true
  }else{
    return false
  }
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if(typeof str1 !== "string") console.error('Solo se permiten datos tipo "string')
  if(typeof str2 !== "string") console.error('Solo se permiten datos tipo "string')

  if(str1.length === str2.length){
    return true
  }else{
    return false
  }
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if( num >90){
    return true
  }else{false}
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (typeof num !=="number") console.error('solo puedes ingresar numeors')

  if(num < 50){
    return true
  }else{
    false
  }
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  if(typeof str1 !== "string") console.error('Solo se permiten datos tipo "number"')
  if(typeof str2 !== "string") console.error('Solo se permiten datos tipo "number"')
  return(x%y)
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if(typeof num !== 'number') console.log(`El dato ingresado ${num} no esta permitido , solo numeros `)
  
  if((num%2)==0){
    return true
  }else{
    return false
  }



}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if(typeof num !== 'number') console.log(`El dato ingresado ${num} no esta permitido , solo numeros `)
  
  if((num%2)==1){
    return true
  }else{
    return false
  }
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  if(!num) console.error('Falta colocar el numero a evaluar')
  if(typeof num !== 'number') console.error(`El valor ${num} no esta permitido, solo Numberos`)

  return (num*num)
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  if(!num) console.error('Falta colocar el numero a evaluar')
  if(typeof num !== 'number') console.error(`El valor ${num} no esta permitido, solo Numberos`)

  return (num*num*num)
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  let value = Math.pow(num,exponent)
  return (value)
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  const value = Math.round(num)
  return(value)
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  const value = Math.round(Math.ceil(num))
  return(value)
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  
    return  Math.floor(Math.random()*2)
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false

    if(Math.sign(numero)===1)return(`El numero ${numero} es postivo`)
    if(Math.sign(numero)===-1)return(`El numero ${numero} es negativo`)
    if((Math.sign(numero)===-0)||(Math.sign(numero)===-0))return(false)

}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return (`${str}+!`)
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  return(String.prototype.concat(nombre+' '+apellido))
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return(`Hola ${nombre}!`)
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  retun(alto*ancho)
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  return(lado*4)
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  return((base*altura)/2)
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  let dolar = 1.200
  return(euro*Math.abs(dolar))


}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí

  if(letra.length ===2)return('dato incorrecto')
  let newLetra = /[aeiou]/i.test(letra)
  if(newLetra === true){
    return('Es vocal')
  }else('Dato incorrecto')

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
