//NUMEROS DIVISIBLES Y NUMEROS PRIMOS
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
    //==================================FIN ANTHONY==============================================

   //===================================HIPOTENUSA CARLOS==========================
   var
 cat1,cat2,hipo;
 //cat1=prompt("Escribe el valor de un cateto");
 //cat2=prompt("Escribe el valor de otro cateto");
 
 
 function calcularCateto1(){
    var cat1=parseInt(document.getElementById("cat1").value);
    var cat2=parseInt(document.getElementById("cat2").value);

 //cat1=parseFloat(cat1);
 //cat2=parseFloat(cat2);
 hipo=Math.sqrt(cat1*cat1+cat2*cat2);
 alert("La hipotenusa del triangulo de catetos "+cat1+" y "+cat2+" es "+hipo);
 //document.write("cateto1: ",cat1+"<br>");
 //document.write("cateto2: ",cat2+"<br>");
 //document.write("hipotenusa=",hipo+"<br>");
 }

 function reiniciarCateto(){
    location.reload();    
}                  

//================================================FRACCIONES DESIRETH=======================
function algoritmo()
{
    let dividendo_1, dividendo_2, divisor_1, divisor_2, resultado;
    dividendo_1 = parseFloat (document.formulario1.dividendo_1.value);
    dividendo_2 = parseFloat (document.formulario1.dividendo_2.value);
    divisor_1 = parseFloat (document.formulario1.divisor_1.value);
    divisor_2 = parseFloat (document.formulario1.divisor_2.value);
    resultado=(divisor_1*dividendo_2+divisor_2*dividendo_1)/dividendo_2/dividendo_1;
    document.formulario1.resultado.value = resultado;
} 
 
 //=========================================ECUACION SERGIO==============================
 function resolve(){
    var x= document.getElementById("num").value;
    x= parseInt(x);
    var result= (x*x) + (6*x) + 5;
    alert("resultado " + result);
}

//===============================CODIGO EDWIN==================================
function res(){
    a=document.datos.a.value;
    b=document.datos.b.value;
    c=document.datos.c.value;
    d=document.datos.d.value;
    e=document.datos.e.value;
    f=document.datos.f.value;
    
    g=a*e-b*d; 
    
    if(g==0)
        {if (c*e-b*f==0) {
            x="Indeterminado";
            y="Indeterminado"}
            else{
                x="Inconpatible";
                y="Incompatible"
            }
        }
    else{
        x=(c*e-b*f)/g;
        y=(a*f-c*d)/g;
    } 
    document.datos.x.value=x;
    document.datos.y.value=y;
    }
    
    function LIMP(){
        document.getElementById ("a").value="";
        document.getElementById ("b").value="";
        document.getElementById ("c").value="";
        document.getElementById ("d").value="";
        document.getElementById ("e").value="";
        document.getElementById ("f").value="";
        document.getElementById ("x").value="";
        document.getElementById ("y").value="";
        document.getElementById ("base").value="";
        document.getElementById ("altura").value="";
        document.getElementById ("Result").value="";
        
    }
    
    function obtenerArea() {
        var areaResultado = document.getElementById("Result");
        var textResultado = document.getElementById("textarea1");
        var b = parseInt(document.getElementById("base").value);
        var h = parseInt(document.getElementById("altura").value);
      
        var area = b * h / 2;
      
        areaResultado.innerHTML = "" + area;
        textResultado.value = area;
      }

      //=====================================PERIMETRO RECTANGULO
      var rectangulo = (function () {

        // Variable privada interna
        var numero=0;
        return {
        perimetro: function(altura, base) {
        var calculoperimetro = 2*(altura+base);
        return ' ' + calculoperimetro;
        },
       
        area: function(altura,base) {
        var calculoarea = altura*base;
        numero++;
        return ' ' + calculoarea;
        },
       
        numeroveces: function() {
        return numero;
        }
       
        } // fin return
       
       })(); //fin function
    
     function programa() {
     //var num1 = parsefloat(document.getElementById("entradaA").fdatos.value);
     //var num2 = parsefloat(document.getElementById("entradaB").fdatos.value);
     var num1 = parseFloat(document.fdatos.entradaA.value);
     var num2 = parseFloat(document.fdatos.entradaB.value);
    
     alert("El area es "+ rectangulo.area(num1,num2));
     alert("El perimetro es "+ rectangulo.perimetro(num1,num2));
    }
     
    
    function calc2grad(a,b,c){
      discriminante=Math.pow(b,2)-4*a*c;
        if(discriminante<0){
          document.getElementById("info").innerHTML="No tiene soluciones [dis<0]"
        }else if(discriminante==0){
          document.getElementById("info").innerHTML="Tiene una sola solución [dis==0]"
          document.getElementById("x1").value=parseFloat((-b)/(2*a));
        }else{
          document.getElementById("info").innerHTML="Tiene dos solución"
          document.getElementById("x1").value=parseFloat(((-b)+Math.sqrt(discriminante))/(2*a));
          document.getElementById("x2").value=parseFloat(((-b)-Math.sqrt(discriminante))/(2*a));
        }
      }
      window.onload = function(){
      var but = document.getElementById("calc");
      but.addEventListener('click',function(){
          var a=parseFloat(document.getElementById("a").value);
          var b=parseFloat(document.getElementById("b").value);
          var c=parseFloat(document.getElementById("c").value);
          calc2grad(a,b,c);
      },false);
      }
    
    
    
    
    
    
    
      function res()
      {
      a=document.datos.a.value;b=document.datos.b.value;c=document.datos.c.value;
      disc=parseFloat(b*b-4*a*c);
      document.datos.d.value=disc;
      if (disc<0) {alert('No hay solución real')}
      else
      { entradaA=(-b-Math.sqrt(disc))/(2*a);
      entradaB=(-b+Math.sqrt(disc))/(2*a);
      document.datos.entradaA.value=entradaA;
      document.datos.entradaB.value=entradaB; }
      } 
      
      // FECHA Y HORA

let semana = [`lunes, martes, miercoles, jueves, viernes, sabado, domingo`];
let meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];

setInterval(function(){
  const date = new Date()
  hora.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
  fecha.innerHTML = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`		
},1000);

//===============================ECUACION SEGUNDO GRADO

function res()
{
a=document.datos.a.value;b=document.datos.b.value;c=document.datos.c.value;
disc=parseFloat(b*b-4*a*c);
document.datos.d.value=disc;
if (disc<0) {alert('No hay solución real')}
else
{ entradaA=(-b-Math.sqrt(disc))/(2*a);
entradaB=(-b+Math.sqrt(disc))/(2*a);
document.datos.entradaA.value=entradaA;
document.datos.entradaB.value=entradaB; }
} 
//================PROBLEMAS MATEMATICOS
function saber1(){
  let dato1=parseFloat(document.getElementById("dato1").value);
  let dato2=parseFloat(document.getElementById("dato2").value);
  let dato3=parseFloat(document.getElementById("dato3").value);
  
  let ITS=(dato1*dato2*dato3)/100*12
  
  if(ITS=="7200"){
      alert("Respuesta correcta")}
      else{
          alert("Respuesta equivocada")
      }
  
  document.getElementById("resultado").innerHTML="Capital: "+ITS
  }
  
  function saber2(){
      let dato4=parseFloat(document.getElementById("dato4").value);
      let dato5=parseFloat(document.getElementById("dato5").value);
      let dato6=parseFloat(document.getElementById("dato6").value);
      
      let ITS=(dato4*dato5*dato6)/100
      Total=dato4+ITS
      
      if(Total=="3120"){
          alert("Respuesta correcta")}
          else{
              alert("Respuesta equivocada")
          }
      
      document.getElementById("resultado2").innerHTML=Total+" dolares"
      }
      


      //==========================FRACCIONES
      function algoritmo(){
    let dividendo_1, dividendo_2, divisor_1, divisor_2, resultado;
    dividendo_1 = parseFloat (document.formulario1.dividendo_1.value);
    dividendo_2 = parseFloat (document.formulario1.dividendo_2.value);
    divisor_1 = parseFloat (document.formulario1.divisor_1.value);
    divisor_2 = parseFloat (document.formulario1.divisor_2.value);
    resultado=(divisor_1*dividendo_2+divisor_2*dividendo_1)/dividendo_2/dividendo_1;
    document.formulario1.resultado.value = resultado;
}