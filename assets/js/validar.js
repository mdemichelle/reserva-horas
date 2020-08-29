//obteniendo el formulario desde el ID:
var formulario = document.getElementById("formulario");

//Validaciones se realizan al momento de hacer clic en el boton tipo submit:
formulario.addEventListener("submit", e=>{
   //Obtengo los datos desde el ID del elemento 
    var rut = document.getElementById("rut").value;
    var nombres = document.getElementById("nombres").value;
    var apellidos=document.getElementById("apellidos").value;
    var correo=document.getElementById("correo").value;
    var especialidad=document.getElementById("especialidad").value;
    var fecha=document.getElementById("fecha").value;
    var hora=document.getElementById("hora").value;

  //Evitar que envie el formulario
    e.preventDefault();

    //Comprobando: si la validacion es falsa, retorna falso. Si es verdadera pasa a la siguiente.
    if(rutValidacion()==false){
        return false;
    }else if( nombreValidacion()==false){
        return false;
    }else if(apellidoValidacion()==false){
        return false;
    }else if(edadValidacion()==false)   {
        return false;
    }else if(correoValidacion()==false){
        return false;
    }else if(especialidad=="0")   {
        Swal.fire("El campo es obligatorio, por favor selecciona una ESPECIALIDAD.");
    }else if(fechaValidacion()==false){
        return false;
    }else if(hora=="0"){
        Swal.fire("El campo es obligatorio, por favor selecciona una HORA.");
    } else{
        Swal.fire(`Estimado(a) ${nombres} ${apellidos}, su hora para ${especialidad} ha sido reservada para el
                    día ${fecha} a las ${hora}. Además, se le envió un mensaje a su correo ${correo} con el detalle de su cita.
                        ¡Gracias por preferirnos!`); 
        limpiar();
    }
});

//--------------------------------Validacion Rut: campo de texto. (validar su formato)------------------------------------------

rutValidacion = () => {
    var rut = document.getElementById("rut").value;
    var expresion = /^\d{1,2}\.\d{3}\.\d{3}[-][\dkK]{1}$/gm;
        if(rut===""){
            Swal.fire("El campo es obligatorio, por favor ingresa un RUT.");
            return false;
        }else if(!rut.match(expresion)){
            Swal.fire('El formato del RUT no es válido, por favor intenta nuevamente.');  
            return false;
        }
        console.log("RUT: "+ rut);
        return true;
}

//----------------------------Validacion Nombre: campo de texto. (validar que contenga sólo letras)------------------------------------------
   nombreValidacion = () => {
    var nombres =document.getElementById("nombres").value;
    var expresion = /^[a-zA-Z ]{3,35}$/;
    // var exp = /^[a-zA-Z]{3,15}\s[a-zA-Z]{3,15}$/gmi;
    if(nombres===""){
        Swal.fire("El campo es obligatorio, por favor ingresa NOMBRES.");
        return false;
    }else if(!nombres.match(expresion)){
        Swal.fire('Debe ingresar sólo letras, por favor intenta nuevamente.');  
        return false;
    }
        console.log("NOMBRES: "+ nombres);
        return true;
}

//---------------------------Validación Apellidos: campo de texto. (validar que contenga sólo letras)---------
    apellidoValidacion = () => {
        var apellidos=document.getElementById("apellidos").value;
        var expresion = /^[a-zA-Z ]{3,35}$/;
        if(apellidos===""){
            Swal.fire("El campo es obligatorio, por favor ingresa APELLIDOS.");
            return false;
        }else if(!apellidos.match(expresion)){
            Swal.fire('Debe ingresar solo letras, por favor intenta nuevamente.');          
            return false;
        }
        console.log("APELLIDOS: "+ apellidos);
        return true;
    }

//----------------------- Validación Edad: campo de texto. (validar que se ingrese sólo números)------------------------
    edadValidacion = () => {
        var edad=document.getElementById("edad").value;
        var expresion = /^\d{1,3}$/;
        if(edad===""){
            Swal.fire("El campo es obligatorio, por favor ingresa una EDAD.");
            return false;
        }else if(!edad.match(expresion)){
            Swal.fire('Debe ingresar sólo números, por favor intenta nuevamente.');         
            return false;
        }
        console.log("EDAD: "+ edad);
        return true;
    }
//---------------------------- Email: campo de texto. (validar su formato)--------------------------------------------
    correoValidacion = () => {
        var correo=document.getElementById("correo").value;
        var expresion = /^\w+[@]\w+\.\D{2,3}$/;
        if(correo===""){
            Swal.fire("El campo es obligatorio, por favor ingresa un CORREO.");
            return false;
        }else if(!correo.match(expresion)){
            Swal.fire('El formato del correo no es válido, por favor intenta nuevamente.');
            return false;
        }
        console.log("CORREO: "+ correo);
        return true;
    }
//---------------Fecha: campo de texto. (validar que sea una fecha en formato dd-mm-yyyy)-----------------
    fechaValidacion = () => {
        var fecha=document.getElementById("fecha").value;
        var expresion = /^([0][1-9]|[12][0-9]|3[01])(\/|-)([0][1-9]|[1][0-2])\2(\d{4})$/;
        if(fecha===""){
            Swal.fire("El campo es obligatorio, por favor ingresa una FECHA.");
            return false;
        }else if(!fecha.match(expresion)){
            Swal.fire('El formato de la fecha no es válida, por favor intenta nuevamente.');
            return false;
        }
        console.log("FECHA: "+ fecha);
        return true;
    }
//----------------------------------------Limpiar inputs---------------------------------------------------
limpiar = () =>{
    var rut = document.getElementById("rut");
    var nombres = document.getElementById("nombres");
    var apellidos=document.getElementById("apellidos");
    var edad=document.getElementById("edad");
    var correo=document.getElementById("correo");
    var especialidad=document.getElementById("especialidad");
    var fecha=document.getElementById("fecha");
    var hora=document.getElementById("hora");

    rut.value="";
    nombres.value="";
    apellidos.value="";
    edad.value="";
    correo.value="";
    especialidad.value="0";
    fecha.value="";
    hora.value="0";
}