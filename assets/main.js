// Recuperamos los datos que el usuario ingresará en los inputs.
function guardarDatos(){
  localStorage.nombre = document.getElementById('nombre').value;
  localStorage.password = document.getElementById('password').value;
}

/* En la siguiente función le diremos que si nuestros datos ingresados son diferentes a undefined me los imprima en la pantalla, de lo contrario me envie un mensaje "No has introducido tu nombre y tu password". */
function recuperarDatos(){
  if((localStorage.nombre != "") && (localStorage.password != "")){
    document.getElementById('datos').innerHTML = "Nombre: " + localStorage.nombre + "<br/> Password: " + localStorage.password;
  }else{
    document.getElementById('datos').innerHTML += "No has introducido tu nombre y tu password.";
  }
}
