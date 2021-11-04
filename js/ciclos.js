let edad = obtenerEdad();
const mail = obtenerMail();
let añoNacimiento = año(edad);

if (menorEdad(edad)) {
    alert(`Usted es menor de Edad, no podemos enviarle música.`);
} else {
    alert(`Enviaremos música del año ${añoNacimiento} al siguiente correo: ${mail}`);
}


function año(edad) {
    return 2021 - edad;
}

function menorEdad(edad) {
    return edad < 18;
}

function obtenerEdad() {
    return Number(prompt(`Ingrese su edad`));
}

function obtenerMail() {
    return prompt("Ingrese su email");
}