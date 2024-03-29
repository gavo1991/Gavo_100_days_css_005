function obtenerFechasSemana() {
    // Obtenemos la fecha actual
    let fechaActual = new Date();
  
    // Obtenemos el día de la semana actual (0 = domingo, 1 = lunes, ..., 6 = sábado)
    let diaSemanaActual = fechaActual.getDay();
    
    // Calculamos el primer día de la semana (restamos los días pasados desde el inicio de la semana)
    let primerDiaSemana = new Date(fechaActual);
    primerDiaSemana.setDate(fechaActual.getDate() - diaSemanaActual);
  
    // Calculamos el último día de la semana (sumamos los días restantes hasta el final de la semana)
    let ultimoDiaSemana = new Date(fechaActual);
    ultimoDiaSemana.setDate(fechaActual.getDate() + (6 - diaSemanaActual));
    
    // Formateamos las fechas en el formato deseado (dd. MMM - dd. MMM)
    let formatoFecha = { day: '2-digit', month: 'short' };
    let fechaInicio = primerDiaSemana.toLocaleDateString('es-ES', formatoFecha);
    let fechaFin = ultimoDiaSemana.toLocaleDateString('es-ES', formatoFecha);
    
    // Concatenamos las fechas en el formato deseado
    let fechasSemana = `${fechaInicio} - ${fechaFin}`;
    
    return fechasSemana;
  }
  
  // Obtenemos el div donde se mostrarán las fechas
  const divFechas = document.getElementById('fechasSemana');
  let fechaMostrada = obtenerFechasSemana();
  // Mostramos las fechas dentro del div
  divFechas.insertAdjacentHTML("beforeend", `
  <span class="fecha-mostrada">${fechaMostrada}</span>
  `);
  