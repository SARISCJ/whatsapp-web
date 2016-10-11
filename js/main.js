;(function() {

  window.addEventListener("load", cargar);

  var input = document.getElementById("mensajes");
  var chat = document.getElementsByClassName("avatar");
  var conversacion = document.getElementById("conversacion");
  var foto = document.getElementById("image");
  var usuario = document.getElementById("user");
  var hora = document.getElementById("hora");

  function cargar() {
    
    input.addEventListener("keyup", agregarMensaje);
    for(var i = 0, longitud = chat.length; i < longitud; i++) {
      chat[i].addEventListener("click", cambiarContac);
    }
  }

  function agregarMensaje(e) {
    var texto = input.value.trim();
    if(e.keyCode == 13) {
        mostrarMensaje();
        input.value = "";
    }
  }

  function mostrarMensaje(){
    var contenedorComentario = document.createElement("div");
    contenedorComentario.classList.add("w-message", "w-message-out");
    
    var contenedorTexto = document.createElement("div");
    contenedorTexto.classList.add("w-message-text");

    var texto = document.createElement("p");
    texto.textContent = input.value;

    var time = document.createElement("div");
    time.classList.add("time");
    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var tiempo = hora + ":" + minutos;
    time.textContent = tiempo;
    hora.textContent = tiempo;
      
    contenedorTexto.insertBefore(texto,contenedorTexto.childNodes[0]);
    contenedorTexto.insertBefore(time,contenedorTexto.childNodes[1]);
    contenedorComentario.insertBefore(contenedorTexto,contenedorComentario.childNodes[0]);
    conversacion.appendChild(contenedorComentario);
  }

  function cambiarContac(){
    foto.src = this.childNodes[1].src ;
    usuario.textContent = this.childNodes[3].textContent;
  }

})();