

var nombreApellido=document.getElementById("nombre-apellido")
var telefono=document.getElementById("telefono")
var errorNombre=document.getElementById("errorNombre")
var errorTel=document.getElementById("errorTel") 
var cartelExito=document.getElementById("cartelExito")
var mascota=document.getElementById("mascota")
var eligeMascota=document.getElementById("eligeMascota")
var area = document.getElementById("area")
var textArea = document.getElementById("exampleFormControlTextarea1")
function enviarFormulario() {
    console.log("enviando formulario");
    var cartelN="";
    var cartelT="";
    var exito="";
    var mas="";
    var consulta = "";
    if(nombreApellido.value === ""){
        cartelN ="Ingrese su nombre y apellido❌"
    }
   else if(telefono.value === ""){
        cartelT="Ingrese su telefono ❌"
    }
   else if( mascota.value === "elige"){
          mas="Por favor elige tu mascota ❌"
    } else if(textArea.value === ""){
        consulta = "Ingrese su consulta ❌"
    }
    else{
        exito ="Enviado con Éxito!!Muchas gracias por escribirnos😸"
        miForm.reset()
    }
  

    errorNombre.innerHTML = cartelN
    errorTel.innerHTML= cartelT
    eligeMascota.innerHTML=mas
    area.innerHTML = consulta
    cartelExito.innerHTML=exito
    
    return false;
   
}

  function limpiarFormulario() {
    document.getElementById("cartelExito").reset();
  }

