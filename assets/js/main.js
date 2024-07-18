// Inicializar todos los tooltips en la página
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});


//alerta al hacer click (Enviar))
$(document).ready(function() {
  $('#enviarFormularioConta').click(function() {
    alert('Mensaje enviado, ¡Gracias por contactarnos!..');
  });
});

/*
//desaparecer contenido
$(document).ready(function(){
  $(".card-title").click(function(){
    $(".ocultar").toggle();
  });
});
//volver a aparecer contendido
$(document).ready(function(){
  $("#mostrarTodo").click(function(){
    $(".card-body").show();
  });
});
*/

