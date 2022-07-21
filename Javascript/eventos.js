let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validate);


function validate(e){
    e.preventDefault();
    console.log(e.target.children[1].value);
    Email = formulario.children[1].value;
    Usuario = formulario.children[3].value;
    Password = formulario.children[5].value;

    if(Email == "" || Usuario == "" || Password == ""){
        alert("Todos los campos deben ser completados");
    }else if(e.target.children[1].value.includes("@") && e.target.children[1].value.includes(".")){
        let mensaje = document.createElement("div");
        mensaje.innerHTML = "Registro exitoso";
        formulario.innerHTML = "";
        document.body.append(mensaje);
    }else{
        let mensaje = document.createElement("div");
        mensaje.innerHTML = "correo inválido";
        formulario.innerHTML = "";
        document.body.append(mensaje);
    }

}

