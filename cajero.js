const BotonAgregarD = document.getElementById('btnAgregar');
const inputAgregar = document.getElementById('cantidadAgregar');
const BotonRetirarD = document.getElementById('btnRetirar');
const inputRetirar = document.getElementById('cantidadRetirar');

let saldo = 1000;
const Saldohtml = document.getElementById('montoActual');

let actualizarDinero = ()=>{
 // I don't know what to do.
    Saldohtml.textContent = saldo;
}
actualizarDinero();

BotonAgregarD.addEventListener('click',()=>{
    event.preventDefault();
    let valorInter = parseInt(inputAgregar.value);
    if(isNaN(valorInter) || valorInter < 1){
        inputAgregar.value = '';
        return alert('Introduzca cantidad válida');
    }
    
    saldo += valorInter;
    actualizarDinero();
    inputAgregar.value = '';
});

BotonRetirarD.addEventListener('click',()=>{
    event.preventDefault();
    let valorInter = parseInt(inputRetirar.value);
    if(isNaN(valorInter) || valorInter < 1){
        inputRetirar.value = '';
        return alert('Introduzca cantidad válida');
    }
    else if( saldo - valorInter < 10){
        inputRetirar.value = '';
        return alert('Debe haber mínimo $10 en su cuenta');
    }
    saldo -= valorInter;
    actualizarDinero();
    inputRetirar.value = '';
});

