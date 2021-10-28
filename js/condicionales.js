const edad = Number(prompt("Ingrese su edad"));
const mail = prompt("Ingrese su email");

if (edad < 20) {
    alert("Enviaremos música del año 2000 en adelante al siguiente correo: " + mail);
} else if (edad < 40) {
    alert("Enviaremos música del año 1980 en adelante al siguiente correo: " + mail);
} else if (edad < 60) {
    alert("Enviaremos música del año 1960 en adelante al siguiente correo: " + mail);
} else if (edad < 80) {
    alert("Enviaremos música del año 1940 en adelante al siguiente correo: " + mail);
} else { 
    alert("No tenemos registro de música para el año 1940 hacía atras, Muchas gracias");
} 