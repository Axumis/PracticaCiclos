//Actividad 1
/* let cantidad = parseInt(prompt('INGRESE CANTIDAD DE REPETICIONES'));
let texto = prompt('INGRESE TEXTO A REPETIR');
for (let index = 0; index < cantidad; index++) {
console.log(texto);
} */
//Este codigo no funcionaba porque le faltaba el incremento
//La solucion es agregar un incremento y declarar a la variable cantidad como entera

//Actividad 2
/* let lados = prompt('INGRESE CANTIDAD DE LADOS');
for (let index = 0; index < lados; index++) {
if (index > 3) {
}
alert("lado " + index);
} */
//Tiene que mostrar el incremento de los lados
//Porque le falta mostrar la variable index
//Concatenar el resultado lado con el incremento index

//Actividad 1
/* let numero = parseInt(prompt('Ingrese un numero'))
if(numero%2==0)
alert('el numero ' + numero + ' es par')
else
alert ('el numero '+ numero + ' es impar') */

//Actividad 2
/* let entrar = true
let acumularPar = 0
let acumularImpar = 0

while(entrar)
{
    let numero = parseInt(prompt('ingrese un numero:'))
    if(numero%2 == 0){
        acumularPar= acumularPar + 1
    }

    else if(numero%2 != 0)
    { acumularImpar = acumularImpar +1}

    entrar = confirm('Desea continuar?')

    console.log(numero)
}

alert('En total hubo ' + acumularPar + ' numeros pares y ' + acumularImpar + ' numeros impares') */

//Actividad 2
let entrar = true
let intentos = 1
do{

let password = prompt('Ingrese contraseña (tiene ' + (4 - intentos) + ' intentos):')

    if(password == 'Axumis')
{
    alert('bienvenido capo')
    entrar = false 
}
    else if(intentos <3)
{
    alert ('contraseña incorrecta papu vuelva a ingresar')
    intentos++
}
    else if (intentos == 3)
{
    alert('Se te ha bloqueado la cuenta')
    entrar=false
}

}while(entrar)