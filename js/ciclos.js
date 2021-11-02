let estilo = Number(prompt(`Ingrese el estilo que desea: 
1 - Pop
2 - Rock
3 - Reggae
4 - Electrónica
5 - Rap
6 - Trap
7 - Música Clásica`));
const mail = prompt("Ingrese su email");


while (estilo >= 1 || estilo <= 7) {

    if (estilo < 1 || estilo > 7) {
        alert("El número ingresado es incorrecto. Intentelo nuevamente");
        estilo = Number(prompt(`Ingrese el estilo que desea: 
        1 - Pop
        2 - Rock
        3 - Reggae
        4 - Electrónica
        5 - Rap
        6 - Trap
        7 - Música Clásica`));  
    } else {
        switch (estilo) {
            case 1:
                alert("Enviaremos música del estilo músical Pop al siguiente correo: " + mail);
                break;
            case 2:
                alert("Enviaremos música del estilo músical Rock al siguiente correo: " + mail);
                break;
            case 3:
                alert("Enviaremos música del estilo músical Reggae al siguiente correo: " + mail);
                break;
            case 4:
                alert("Enviaremos música del estilo músical Electrónica al siguiente correo: " + mail);
                break;
            case 5:
                alert("Enviaremos música del estilo músical Rap al siguiente correo: " + mail);
                break;
            case 6:
                alert("Enviaremos música del estilo músical Trap al siguiente correo: " + mail);
                break;
            case 7:
                alert("Enviaremos música del estilo Clásica al siguiente correo: " + mail);
                break;
        }
    }  
    break; 
}




