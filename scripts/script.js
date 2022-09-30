/**
 * Primer pasito definir las variables a utilizar
 */
let diaIngresado = document.getElementById("day");
let mesIngresado = document.getElementById("month");
let anhoIngresado = document.getElementById("year");
let calculardia = document.getElementById("calcular");
let res = document.getElementById("resultado");

//HORA DE LOS CONDICIONALES :D
calculardia.addEventListener("click", () => { 
    if(diaIngresado.value == ""
     || mesIngresado.value == "" 
     || anhoIngresado.value == "") {
        alert("Porfavor ingresa el dia, mes y año.");
        return;
    }
    if(anhoIngresado.value <= 0) {
        alert("Ingresa un año en valor positivo porfavor :D");
        return;
    }
    else if(anhoIngresado.value > 2100){
        alert("¿Acaso vienes del futuro?👀");
    }

    if(mesIngresado.value < 1) {
        alert("Ingresa un numero positivo para el mes");
        return;
    }
    else if(mesIngresado.value > 12){
        alert("Lo siento. En este mundo aun manejamos solo 12 meses :(");
    }
    if(diaIngresado.value < 1 || diaIngresado.value > 31) {
        alert("Ingresa un dia entre 1 y 31 porfavor");
        return;
    }
    let dateee = new Date(anhoIngresado.value, mesIngresado.value - 1, diaIngresado.value);
    let weekday = dateee.getDay();
    let diaIndicado = ""; 
// SWITCH
    switch (weekday) {
        case 0:
            diaIndicado = "Domingo";
            break;
        case 1:
            diaIndicado = "lunes";
            break;
        case 2:
            diaIndicado = "martes";
            break;
        case 3:
            diaIndicado = "miércoles";
            break;
        case 4:
            diaIndicado = "jueves";
            break;
        case 5:
            diaIndicado = "viernes";
            break;
        case 6:
            diaIndicado = "sábado";
            break;
    }

    if (weekday == 0 || weekday == 6) { diaIndicado += ", Este no es un día laboral 🥳";
    } else {
        diaIndicado += ", es un día laboral😩";
    }

    res.value = diaIndicado;
});