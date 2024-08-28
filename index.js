const formularioHtmlLgin = document.getElementById('formularioLogin')
const usuarioBasesDatos = 'marianovl'
const passwordBasesDatos = '1234'

formularioHtmlLgin.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const userInput = document.getElementById('user').value;
    const passwordInput = document.getElementById('pw').value;

    validarDatos(userInput, passwordInput);
});

function validarDatos(paramUsuario, paramPassword){

    if(paramUsuario === usuarioBasesDatos && paramPassword === passwordBasesDatos){
       window.location.href = 'cajero.html';
    }
    else if(paramUsuario != usuarioBasesDatos){
        alert('User name incorrecto.');
    }
    else if(paramPassword != passwordBasesDatos){
        alert('Password incorrecta.');
    }
    else{

    }

}

