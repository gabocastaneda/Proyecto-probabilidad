document.getElementById('enviar').onclick = function () {
  var progreso = 0;
  if(document.getElementById('subjects').value == 1){
    progreso = 5;
  }
  if(document.getElementById('subjects').value == 2){
    progreso = 10;
  }
  if(document.getElementById('subjects').value == 3){
    progreso = 20;
  }
  if(document.getElementById('subjects').value == 4){
    progreso = 30;
  }
  if(document.getElementById('pregunta1').value == 1){
    progreso += 5;
  } else {
    progreso = progreso;
  }
  if(document.getElementById('pregunta2').value == 1){
    progreso += 5;
  } else {
    progreso = progreso;
  }
  if(document.getElementById('pregunta3').value == 1){
    progreso += 5;
  } else {
    progreso = progreso;
  }
  if(document.getElementById('pregunta4').value == 1){
    progreso += 5;
  } else {
    progreso = progreso;
  }
  if(document.getElementById('pregunta5').value == 1){
    progreso += 5;
  } else {
    progreso = progreso;
  }
  if(document.getElementById('pregunta6').value == 1){
    progreso += 5;
  } else {
    progreso = progreso;
  }
  if(document.getElementById('pregunta7').value == 1){
    progreso += 5;
  } else {
    progreso = progreso;
  }
  if(document.getElementById('pregunta8').value == 1){
    progreso += 5;
  } else {
    progreso = progreso;
  }
  if(document.getElementById('pregunta9').value == 1){
    progreso += 5;
  } else {
    progreso = progreso;
  }
  if(document.getElementById('pregunta10').value == 1){
    progreso += 5;
  } else {
    progreso = progreso;
  }
  if(document.getElementById('pregunta11').value == 1){
    progreso += 5;
  } else {
    progreso = progreso;
  }
  if(document.getElementById('pregunta12').value == 1){
    progreso += 5;
  } else {
    progreso = progreso;
  }
  if(document.getElementById('pregunta13').value == 1){
    progreso += 5;
  } else {
    progreso = progreso;
  }
  if(document.getElementById('pregunta14').value == 1){
    progreso += 5;
  } else {
    progreso = progreso;
  }
  // checar cuanto hay de porcentaje 
  if(progreso < 30){
    Swal.fire({
      title: "¡Buen trabajo!",
      text: "Sigue así",
      icon: "success"
    });
  } else if (progreso <= 60){
    Swal.fire({
      title: "Puedes mejorar",
      text: "Acercate a algún tutor para buscar apoyo, tienes "+progreso+"% de desertar",
      icon: "question"
    });
  } else {
    Swal.fire({
      title: "Busca ayuda",
      text: "Llama a un profesional para pedir ayuda "+progreso+"% de desertar",
      icon: "error"
    });
  }
  
}