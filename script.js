const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

/* tipos de variables que existen: 
const(constante);  variable pensada para establecer un valor que no pueda
cambiar en todo el programa, ejemplo correo electronico.
let(); let solo se puede usar en un unico bloque de codigo
en particular. (ejemplo si de clara dentro de un funcion solo sirve ahi.)
var(variable); var es un tipo de vasriable que sin importar donde
se declare podremos ingresar a ella.
*/

/*Arrays*/
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value="";
    mensaje.style.backgroundImage = "none"

}


function encriptar(stringEncriptada){

let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"],["o", "ober"], ["u","ufat"]];
stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
    /*condicion if, indice i y posicion 0*/ 
    if(stringEncriptada.includes(matrizCodigo [i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo [i][0], matrizCodigo[i][1]);
            }
            
    } 
    return stringEncriptada

}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value="";
   

}


function desencriptar(stringDesencriptada){

let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"],["o", "ober"], ["u","ufat"]];
stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
    /*condicion if, indice i y posicion 0*/ 
    if(stringDesencriptada.includes(matrizCodigo [i][1])){
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo [i][1], matrizCodigo[i][0]);
            }
            
    } 
    return stringDesencriptada

}


/*console.table: table() Muestra datos tabulares como una tabla. Esta función toma un 
argumento obligatorio: data , que debe ser un array o un objeto*/


