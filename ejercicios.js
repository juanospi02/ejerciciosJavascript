//console.log('hola el archivo se vinculo correctamente');

// 1. Hacer un programa que reciba 2 numeros del usuario y los sume.

// es una secuencia
//...........................................siempre laas variables van arriba...............................
// primero variable luego asignacion.........
/*
let numero1 = 0;
let numero2 = 0;
let resultado = 0;
// asignaciones 
numero1 = prompt('ingrese el primer numero');
numero2 = prompt('ingrese el segundo numero');
// parseInt convierte a enteros                                               ..........trabajo 1.....................
// parseFloat convierte a decimales
resultado = parseFloat(numero1) + parseFloat(numero2);

alert('El resultado de la suma de: ' + numero1 +'+' + numero2 +'es' + resultado);*/

//2. Hacer un programa que reciba un nombre por parte del usuario, si se recibió nombre por parte del usuario, saludarlo con nombre, si no, sólo decir 'Hola'



/*let nombreUsuario = prompt('ingrese su nombre')
if(nombreUsuario){
alert('hola: '+ nombreUsuario);
console.log('se cumple la condicion')
}else{
    alert('hola');
    console.log('no se cumple la condicion')
}*/


//3. Hacer un programa que pida al usuario un número entero y muestre los valores desde cero hasta el número ingresado
/*
let numero = parseInt(prompt('ingrese un numero entero'));
for(let i = 0; i<= numero ; i++){
console.log(i);
}*/

//5. Hacer un programa que muestre los días de la semana.

//let diasSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
/*
console.log(diasSemana)
console.log(diasSemana[0])
console.log(diasSemana[1])
console.log(diasSemana[2])
console.log(diasSemana[3])
console.log(diasSemana[4])
console.log(diasSemana[5])
console.log(diasSemana[6])*/

// opcion optimizada con ciclos
//ForEach -> es un ciclo para recorrer arreglos de datos
// el ciclo termina cuando no hayan mas elementos dentro de mi arreglo de datos
/*
diasSemana.forEach(
    (dia) => {
        console.log(dia);
    }
)
*/

//4.Hacer un programa que solicite al usuario un texto, si el usuario no ingresa nada seguir solicitando hasta que lo haga.
/*function solicitarTexto() {
    let texto = "";
    while (!texto.trim()) {  // Verifica si el texto está vacío o contiene solo espacios
        texto = prompt("Por favor, ingresa un texto:");
        if (!texto.trim()) {
            alert("No has ingresado nada, intenta de nuevo.");
        }
    }
    console.log("Texto ingresado:", texto);
}

solicitarTexto()*/



function operacionesBasicas() {
    // Solicitar los dos números al usuario y convertirlos a números decimales
    let numero1 = Number(prompt("Ingresa el primer número:"));
    let numero2 = Number(prompt("Ingresa el segundo número:"));
    
    // Verificar si los valores ingresados son números
    if (isNaN(numero1) || isNaN(numero2)) {
        console.log("Por favor, ingresa valores numéricos válidos.");
        return; // Termina la ejecución si no son números válidos
    }
    
    // Calcular la suma y la resta
    let suma = numero1 + numero2;
    let resta = numero1 - numero2;
    
    // Mostrar los resultados
    console.log(`La suma de ${numero1} y ${numero2} es: ${suma}`);
    console.log(`La resta de ${numero1} menos ${numero2} es: ${resta}`);
}

// Ejecutar la función
operacionesBasicas();


