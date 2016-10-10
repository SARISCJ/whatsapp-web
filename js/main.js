;(function() {

  window.addEventListener("load", cargar);
    var contador = 1;

  function cargar() {
    var input = document.getElementById("mensajes");
    input.addEventListener("e.keyCode==13", agregarMensaje);
  }

  function agregarMensaje(evento) {
    evento.preventDefault();

var comentario = document.getElementById("conversacion");
    
    var contenedorComentario = document.createElement("div");
    contenedorComentario.classList.add("w-message");

    var contenedorPadre = document.createElement("div");
    contenedorPadre.classList.add("w-message-text");

    var usuario = document.createElement("h5");

    var texto = document.createElement("p");
    texto.textContent = texto.value;

    var time = document.createElement("div");

    horaPublicacion(time);
    contenedorComentario.appendChild(usuario);
    contenedorComentario.appendChild(texto);
    contenedorComentario.appendChild(time);
    comentario.appendChild(contenedorComentario);

    texto.value = "";
    contador++;
  }

}

});

})();

