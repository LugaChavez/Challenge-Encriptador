function encriptar() {

    let frase= document.getElementById("Encriptado").value.toLowerCase();
    
    //toLowerCase() me devuelto todo lo escrito en mayuscula en minuscula
    // i=para que tome letras mayusculas y minusculas
    // m=tome en cuenta multiples lineas
    // g=tome en cuenta toda la linea o la oración

    let Encriptado = frase
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    document.getElementById("Desencriptado").value = Encriptado;
   /* document.getElementById("botonCopiar").style.display="block";
    document.getElementById("botonCopiar").style.display="inherit";*/
}

function desencriptar() {

    let frase= document.getElementById("Encriptado").value.toLowerCase();
        
    let Encriptado = frase
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    document.getElementById("Desencriptado").value= Encriptado;
   
}   

function copiar() {

    let contenido=document.getElementById("Desencriptado");
    contenido.select();
    document.execCommand("copy");

   /* document.getElementById("botonBorrar").style.display="show";
    document.getElementById("botonBorrar").style.display="inherit";*/
}

function limpiar() {

    let contenido=document.getElementById("Encriptado");
    let contenido1=document.getElementById("Desencriptado");
    contenido.select();
    Encriptado.value = "";
    Desencriptado.value = "";
}

function soloMinusculas(event) {
    
    let tecla= event.keyCode || event.which;

    if(tecla == 8) {
        return true;
    
    } 

    let tecla_final = String.fromCharCode(tecla);

    let patron = /^[a-zñ\s]$/;

    if (patron.test(tecla_final)){
        return true;

    } else {
        alert ("Ingrese un texto sin mayusculas y sin acentos o caracteres especiales")
        return false;
    }
}

document.querySelector ("#btn-Encriptar").onclick= encriptar;
document.querySelector ("#btn-Desencriptar").onclick= desencriptar;
document.querySelector ("#btn-Copiar").onclick= copiar;
document.querySelector ("#btn-Limpiar").onclick= limpiar;

