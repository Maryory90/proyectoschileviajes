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


