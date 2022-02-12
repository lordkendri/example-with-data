const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const btnEnviar = document.getElementById("btnEnviar");
const resultado = document.querySelector(".resultado");

btnEnviar.addEventListener("click",(e)=>{
    
    let error = validarCampo();
        if (error[0]){
            resultado.innerHTML = error[1];
            resultado.classList.add("red");
        }else{
            resultado.innerHTML = "Solicitud enviada correctamente";
            resultado.classList.add("green");
            resultado.classList.remove("red");
        }
});

const validarCampo = ()=>{
    let error = [];
    if(nombre.value.length < 5){
        error[0] = true;
        error [1] = "El nombre no puede contener menos de 5 caracteres";
        return error;
    } else if(nombre.value.length > 40){
        error[0] = true;
        error [1] = "El nombre no puede contener mas de 40 caracteres";
        return error;
    }else if(email.value.length < 5 
        || email.value.length > 40 
        || email.value.indexOf("@") == -1 
        || email.value.indexOf(".") == -1){
            error[0]=true;
            error[1]="El Email es invalido";
            return error;
    }else if(materia.value.length < 4 || materia.value.length >40 ){
        error[0]=true;
            error[1]="La materia es invalida es invalido";
            return error;
    }
    error[0] = false;
    return error;
}