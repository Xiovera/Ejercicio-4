var minutos, costoMinuto, costoLlamada;

minutos = prompt("Por favor, ingresa los minutos");
costoMinuto = prompt("Por favor, ingresa el costo por Minuto");

costoLlamada = parseFloat(minutos) * parseFloat(costoMinuto);

alert(costoLlamada);