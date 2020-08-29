//obteniendo los datos desde el ID
var formulario = document.getElementById("formulario");
var rut = document.getElementById("rut").value;
var nombres = document.getElementById("nombres").value;
var apellidos=document.getElementById("apellidos").value;
var edad=document.getElementById("edad").value;
var correo=document.getElementById("correo").value;
var especialidad=document.getElementById("especialidad").value;
var fecha=document.getElementById("fecha").value;
var hora=document.getElementById("hora").value;


formulario.addEventListener("submit", e=>{
   
    e.preventDefault();

    if(rutValidacion()==false){
        return false;
    }else if( nombreValidacion()==false){
        return false;
    } else{
        alert("su nombre: " +nombres + "rut: "+rut); 
    }
  
    
    
  
    
    
});

//--------------------------------Validacion Rut: campo de texto. (validar su formato)------------------------------------------

rutValidacion = () => {
    var rut = document.getElementById("rut").value;
    var expresion = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/gm;

        if(rut===""){
            Swal.fire("El campo es obligatorio, por favor ingresa tu RUT");
            return false;

        }else if(!rut.match(expresion)){
            Swal.fire('El formato del RUT no es válido, por favor intenta nuevamente');
            console.log(rut);
            
            return false;
        }
        return true;
}

//----------------------------Validacion Nombre: campo de texto. (validar que contenga sólo letras)------------------------------------------
   nombreValidacion = () => {
    var nombres =document.getElementById("nombres").value;
    var expresion = /^[a-zA-Z]{3,15}\s[a-zA-Z]{3,15}$/gmi;

    if(nombres===""){
        Swal.fire("El campo es obligatorio, por favor ingresa tus NOMBRES");
        return false;

    }else if(!nombres.match(expresion)){
        Swal.fire('El formato del NOMBRE no es válido, por favor intenta nuevamente');
        console.log(nombres);
        return false;
    }
    return true;
}

