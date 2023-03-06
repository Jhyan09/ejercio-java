function validarEntrada() {
    var entrada = document.getElementById("entrada").value;
    if (isNaN(entrada)) {
      alert("La entrada es un texto");
    } else {
      alert("La entrada es un número");
    }
  }