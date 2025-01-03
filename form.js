const firstName = document.querySelector('#validationCustom01'); 
const lastName = document.querySelector('#validationCustom02'); 
const user = document.querySelector('#validationCustomUsername'); 
const email = document.querySelector('#validationCustom03'); 
const checkbox = document.querySelector('input[type="checkbox"]'); 

const form = document.querySelector('.needs-validation'); 

const btnSubmit = document.querySelector('.btn'); 
const spinner = document.querySelector('.loader'); 

 const formulario = {
    validationCustom01: '',
    validationCustom02: '',
    validationCustomUsername: '', 
    validationCustom03: '', 
    checkbox: false
 }


firstName.addEventListener('input', validar);
lastName.addEventListener('input', validar);
user.addEventListener('input', validar);
email.addEventListener('input', validar);
checkbox.addEventListener('change', validar); 

form.addEventListener('submit', enviar); 


function validar(e){

    if(e.target.value.trim() === '' && e.target.type !== 'checkbox'){
        mostrarAlerta('Este campo es obligatorio', e.target.parentElement); 
        formulario[e.target.name] = ''; 
        comprobarFormulario(); 
        return; 
    }

    if(e.target.id === 'validationCustom03' && !validarEmail(e.target.value)){
        mostrarAlerta('Email invalido', e.target.parentElement); 
        formulario[e.target.name] = '';
        comprobarFormulario(); 
        return; 
    }

    // if(e.target.type === "checkbox" )

    if(e.target.type === 'checkbox' && !e.target.checked){
        mostrarAlerta('Debes aceptar los terminos y condiciones', e.target.parentElement.parentElement); 
        formulario[e.target.name] = false;
        comprobarFormulario();
        return; 
        
    } else if (e.target.type === 'checkbox'){ // si el check box esta marcado
        formulario[e.target.name] = true; 
        comprobarFormulario();
        limpiarAlerta(e.target.parentElement.parentElement); 
        return; 
    }

    limpiarAlerta(e.target.parentElement); 
    if(e.target.type !== 'checkbox'){
    formulario[e.target.name] = e.target.value.trim(); 
    }
    comprobarFormulario(); 

    console.log(formulario)

}

function comprobarFormulario(){
    const formularioCompleto = Object.values(formulario).every(value => value !== '' && value !== false); 

    if(formularioCompleto){
        btnSubmit.disabled = false; 
        return; 
    }
    btnSubmit.disabled = true; 

}

function enviar(e){
    e.preventDefault(); 

    btnSubmit.style.display = 'none'; 
    spinner.style.display = 'flex'; 
    

    setTimeout(() => {
        spinner.style.display = 'none'; 

        const alertaExito = document.createElement('p'); 
        alertaExito.classList.add('exito');
        alertaExito.textContent = 'Registro enviado'; 

        form.appendChild(alertaExito); 

        setTimeout(() => {
            alertaExito.remove();
            btnSubmit.style.display = 'flex'; 
        }, 3000);
    }, 3000);

    reiniciarObjetoFormulario(); 

}

function mostrarAlerta(mensaje, referencia){
    limpiarAlerta(referencia); 

    const alerta = document.createElement('p');
    alerta.textContent = mensaje; 
    alerta.classList.add('error'); 
    referencia.appendChild(alerta); 
    return; 
}

function limpiarAlerta(referencia){
    const alerta = referencia.querySelector('.error');
    if(alerta){
        alerta.remove(); 
    }
}

function validarEmail(email){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const resultado = regex.test(email); 
    return resultado; 
}

function reiniciarObjetoFormulario(){
    Object.assign(formulario, {
        validationCustom01: '',
        validationCustom02: '',
        validationCustomUsername: '', 
        validationCustom03: '',
        checkbox: false
    })

    firstName.value = ''; 
    lastName.value = ''; 
    user.value = ''; 
    email.value = ''; 
    checkbox.checked = false;

    btnSubmit.disabled = true; 
}