// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx-YGqe2zmeVEbBYHuyVdw0PLg7IBz08w",
  authDomain: "project-auten43578054.firebaseapp.com",
  projectId: "project-auten43578054",
  storageBucket: "project-auten43578054.appspot.com",
  messagingSenderId: "938126330413",
  appId: "1:938126330413:web:763a4109337acc88bd06a4"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
//====================================================

const txtemail=document.getElementById("txtcorreo");
const txtpass=document.getElementById("txtpass");
const btnregistro=document.getElementById("btnregistro");
const btningreso=document.getElementById("btningreso");
const btnlogout=document.getElementById("btnlogout");


//REGISTRO DE USUARIO MEDIANTE CORREO Y CONTRASEÑA

btnregistro.addEventListener("click",e=>{
    const email=txtemail.value;
    const pass=txtpass.value;
    const auth=firebase.auth();

    const registro=auth.createUserWithEmailAndPassword(email,pass);
    alert("registro Exitoso!!");
    registro.catch(e=>console.log(e.message));

});


//INGRESO O LOGIN DEL USUARIO

btningreso.addEventListener("click",e=>{
    const email=txtemail.value;
    const pass=txtpass.value;
    const auth=firebase.auth();

    const ingreso=auth.signInUserWithEmailAndPassword(email,pass);
    window.open("paginaIngreso.html","VentanaMensaje","width=550,height=600,scrollbars=NO");
    ingreso.catch(e=>console.log(e.message));

});






//====================DIVISIBLE====================
function calculardivisible(){
let n1=parseInt(document.getElementById("numDivisible").value);
//var n1 = prompt("Escribe un número");
if (n1 % 2 === 0 || n1 % 3 === 0 || n1 % 5 === 0 || n1 % 7 === 0) {
  alert("Es divisible por 2, 3, 5 o 7");
} else {
  alert("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}

//let salida = resultadodivisible
//document.getElementById("resultadodivisible").innerHTML=resultadodivisible

}

function reiniciardivisible(){
  location.reload();
}

//============NUMEROS PRIMOS==========
function calcularprimo(){
  let n1=parseInt(document.getElementById("numPrimo").value);
//var n1 = prompt("Escribe un número");
var i;
var primer = true;
for (i=2; i < n1 / 2; i++) {
if (n1 % i === 0) {
primer = false;
}
}
if (primer) {
  alert("El número es primo");
} else {
  alert("El número no es primo");
  //resultadoprimo = ("El número no es primo");
}

let salida = resultadoprimo
document.getElementById("resultadoprimo").innerHTML=resultadoprimo

}

function reiniciarprimo(){
  location.reload();
}


//============RADIO============
function calcularadio(){
  var r = parseInt(document.getElementById("numRadio").value);
  const pi = 3.1416;
	var a,r;

	//r = parseFloat(prompt("Ingresar el radio"));

	a = pi*r*r;

	alert("El área es "+a);
  //let salida = a;
  //document.getElementById("resultadoradio").innerHTML=a+" "+"Metro (m)";
  
}

function reiniciaradio(){
  location.reload();
}
