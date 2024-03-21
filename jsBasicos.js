//consola
console.log("hello world");
//declaracion de variables
var nombre="Juan";
let edad =25;
const PI=3.14159;

//funciones
function saludo(nombre){
return "hola,"+nombre;


}
console.log(saludo("Mariana"));



//condicionales
let numero=10;
if(numero>5)
{
console.log("el numero es mayo que 5");
} else{
    console.log("el numero es menor o igual a 5";)
}

//bucles 
for(let i=0;i<5;i++){
console.log(i);
}

//arrays
let frutas=["manzana","banana","cereza","guayaba","aguacate","uva","mango","durazno","pera","sandia"];
console.log(frutas[0]); //imprime "manzana"
//objetos

let persona={nombre:"juan",edad:30,saludo:function(){return "hola, mi nombre es " + this.nombre}};
console.log(persona.saludo());

//objetos
document.querySelector("button").addEventListener("click",function(){alert("¡Boton presionado!");});

/*
eventos del mouse
click: se dispara cuando el usuario hace clic en un elemento.
dblclick: se dispara cuando el usuario hace doble clic en un elemento.
mousedown:se dispara cuando el usuario presiona un boton del mouse sobre un elemento.
mouseup: se dispara cuando el usuario suelta un boton del mouse sobre un elemento.
mouseover: se dispara cuando el cursor del mouse se mueve sobre un elemento.
mouseout: se dispara cuando el cursor del mouse se mueve fuera de un elemento.
mousemove: se dispara cuando el cursor del mouse se mueve sobre un elemento.
mousewheel:se dispara cuando el usuario gira la rueda del mouse 4.

eventos de teclado
keydown:se dispara cuando el usuario presiona una tecla.
keyup: se dispara cuando el usuario suelta una tecla.
keypress:se dispara cuando el usuario presiona y suelta una tecla 4.
*/

//HTML
//<input placeholder="Haz clic aqui y luego presiona una tecla." size="40"/>
//<p id="long"></p>
//JS
const input=document.querySelector("input");
const log=document.getElementById("log");
