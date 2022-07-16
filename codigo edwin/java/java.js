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