let NombreUsuario = "Mateo Londoño";
let SaldoCuenta = 50000;
let LimiteExtraccion = 500;
let ClaveCorrecta = 0000;

IniciarSesion();

function IniciarSesion(){

let clave = prompt("Digite su clave");
if (clave == ClaveCorrecta){
    alert( `Bienvenido ${NombreUsuario}`);
    document.body.style.display = "block";
    window.onload = function(){
        CargarNombreEnPantalla();
        CargarSaldoEnPantalla();
        CargarLimiteExtaraccionEnPantalla();
    }
}else{
    SaldoCuenta = 0;
    alert("Clave incorrecta. Tu dinero ha sido retenido por cuestiones de seguridad");
}


//Funciones para actualizar datos en HTML

function CargarNombreEnPantalla(){
    document.getElementById("nombre").innerHTML = "Bienvenido/a "+ NombreUsuario;
}

function CargarSaldoEnPantalla(){
    document.getElementById("saldo-cuenta").innerHTML = "$"+ SaldoCuenta;
}

function CargarLimiteExtaraccionEnPantalla(){
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $"+ LimiteExtraccion;
}

}