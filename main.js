var horasTrabajasdasSemana, pagoPorHora, pagoSemanal;

alert("Datos para calcular sueldo semanal");
horasTrabajasdasSemana = prompt("Por favor, ingresa numero de horas trabajadas");
pagoPorHora = prompt("Por favor, ingresa el pago por una hora de trabajo");

pagoSemanal = parseFloat(horasTrabajasdasSemana)*parseFloat(pagoPorHora);

alert(pagoSemanal);