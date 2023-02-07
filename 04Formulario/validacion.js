
function validar(formulario){
    if(formulario.nombre.value.length < 3){
        alert("Escriba por lo menos 3 caracteres en el campo nombre");
        formulario.nombre.focus();
    }

    
    
    var checkOK = "0987654321";

    var checkString = formulario.edad.value;

    var todoesvalido = true;

    for(var i = 0; i < checkString.length; i++){
        var ch = checkString.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j)){
                break;
            }
        }
        if(j == checkOK.length){
            todoesvalido = false;
            break;
        }
    }
    if(!todoesvalido){
        alert("Escriba unicamente numeros en el campo edad");
        formulario.edad.focus();
        return false;
    }

    var txt = formulario.correo.value;

    var b = /^[^@\s]+[^@\.\s]+(\.[^@\.\s]+)+$/;

    alert("Email " + (b.test(txt)? " ": " no ")+ "valido");

    return b.test;


}

   function verificarPasswords() {

}
 
pass1 = document.getElementById('pass1');
pass2 = document.getElementById('pass2');
 
if (pass1.value != pass2.value) {

    document.getElementById("error").classList.add("mostrar");

    return false;
}

else {

    document.getElementById("error").classList.remove("mostrar");

    document.getElementById("ok").classList.remove("ocultar");

    document.getElementById("login").disabled = true;

    setTimeout(function() {
    location.reload();
    }, 3000);

    return true;
}

    if (pass1.value != pass2.value) {

    document.getElementById("error").classList.add("mostrar");

    return false;
}

else {

    document.getElementById("error").classList.remove("mostrar");

    document.getElementById("ok").classList.remove("ocultar");

    document.getElementById("login").disabled = true;

    setTimeout(function() {
    location.reload();
    }, 3000);

    return true;
}

function verificarPasswords() {
  
    pass1 = document.getElementById('pass1');
    pass2 = document.getElementById('pass2');
  
    if (pass1.value != pass2.value) {
 
        document.getElementById("error").classList.add("mostrar");
 
        return false;
    } else {
 
        document.getElementById("error").classList.remove("mostrar");
 
        document.getElementById("ok").classList.remove("ocultar");
 
        document.getElementById("login").disabled = true;
  
        setTimeout(function() {
            location.reload();
        }, 3000);
 
        return true;
    }
 
}
