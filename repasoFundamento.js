// REPASO FUNDAMENTOS 1

// EJERCICIO 1
function signoZod(diaNacimiento, mesNacimiento) {
    if ((diaNacimiento >= 21 || diaNacimiento <= 19) && (mesNacimiento == "marzo" || mesNacimiento == "abril")) {
        return "Aries";
    } else if ((diaNacimiento >= 20 || diaNacimiento <= 21) && (mesNacimiento == "abril" || mesNacimiento == "mayo")) {
        return "Tauro";
    } else if ((diaNacimiento >= 21 || diaNacimiento <= 20) && (mesNacimiento == "mayo" || mesNacimiento == "junio")) {
        return "Géminis";
    } else if ((diaNacimiento >= 21 || diaNacimiento <= 22) && (mesNacimiento == "junio" || mesNacimiento == "julio")) {
        return "Cáncer";
    } else if ((diaNacimiento >= 23 || diaNacimiento <= 22) && (mesNacimiento == "julio" || mesNacimiento == "agosto")) {
        return "Leo";
    } else if ((diaNacimiento >= 23 || diaNacimiento <= 22) && (mesNacimiento == "agosto" || mesNacimiento == "septiembre")) {
        return "Virgo";
    } else if ((diaNacimiento >= 23 || diaNacimiento <= 22) && (mesNacimiento == "septiembre" || mesNacimiento == "octubre")) {
        return "Libra";
    } else if ((diaNacimiento >= 23 || diaNacimiento <= 21) && (mesNacimiento == "octubre" || mesNacimiento == "noviembre")) {
        return "Escorpio";
    } else if ((diaNacimiento >= 22 || diaNacimiento <= 21) && (mesNacimiento == "noviembre" || mesNacimiento == "diciembre")) {
        return "Sagitario";
    } else if ((diaNacimiento >= 22 || diaNacimiento <= 19) && (mesNacimiento == "diciembre" || mesNacimiento == "enero")) {
        return "Capricornio";
    } else if ((diaNacimiento >= 20 || diaNacimiento <= 18) && (mesNacimiento == "enero" || mesNacimiento == "febrero")) {
        return "Acuario";
    } else /*((diaNacimiento >= 19 || diaNacimiento <= 20) && (mesNacimiento == "febrero" || mesNacimiento =="marzo"))*/ {
        return "Piscis";
    }
}

console.log(signoZod(18, "enero"))
console.log(signoZod(20, "septiembre"))

// EJERCICIO 2
function atlasPortatil(pais) {
    if (pais == "Canadá" || pais == "Estados Unidos" || pais == "México") {
        return "América del norte";
    } else if (pais == "Venezuela" || pais == "Brasil" || pais == "Colombia" || pais == "Ecuador" || pais == "Belice") {
        return "América del sur";
    } else if (pais == "España" || pais == "Bélgica" || pais == "Polonia" || pais == "Islandia" || pais == "Suecia") {
        return "Europa";
    } else if (pais == "Marruecos" || pais == "Egipto" || pais == "Eritrea" || pais == "Congo" || pais == "Costa de Marfil") {
        return "África";
    } else if (pais == "China" || pais == "Japón" || pais == "Tailandia" || pais == "India" || pais == "Afganistán") {
        return "Asia";
    } else if (pais == "Papúa Nueva Guinea" || pais == "Nueva Zelanda" || pais == "Australia" || pais == "Kiribati" || pais == "Vanuatu") {
        return "Oceanía";
    }
}

console.log(atlasPortatil("México"))
console.log(atlasPortatil("China"))

// EJERCICIO 3
function numerosImpares(max) {
    for (let i = 0; i <= max; i++) {
        if (i % 2 != 0) {
            console.log(i)
        }
    }
}

numerosImpares(11)

// EJERCICIO 4
function girarArray(mareo) {
    return mareo.reverse();
}

console.log(girarArray(['one', 'two', 'three']))

// EJERCICIO 5
let arrColores = ["rojo", "negro", "naranja", "amarillo", "blanco"];

arrColores.forEach(
    function arcoiris(valor) {
        let comprueba = (valor == "rojo" || valor == "naranja" || valor == "amarillo" || valor == "verde" || valor == "cián" || valor == "añil" || valor == "violeta");
        if (comprueba == true) {
            console.log("El color " + valor + " está en el arcoiris")
        }
        else {
            console.log("El color " + valor + " NO está en el arcoiris")
        }
    }
)

// EJERCICIO 6
let arrayEntrada = [11, 22, 33, 44, 55, 66, 77, 88, 99];

function sonPares() {
    for (let i = 0; i < arrayEntrada.length; i++) {
        if (arrayEntrada[i] % 2 == 0) {
            return "En el array existe uno o más números pares";
        }
    }
    return "No hay ningún número par en el array";
}
console.log(sonPares())

// EJERCICIO 7
let nombresM = ["Marta", "Montse", "Manuel", "Miguel", "Mercedes", "Mónica"];

/*let primeraLetra = nombresM.map(
    function (nombresM) {
        if (nombresM[0] == "M") {
            return true
        } else {
            return false
        }
    }
)

console.log(primeraLetra)*/
/*
let myM = function (acc, val, i) {
    if (acc[i] == "M") {
        return "Verdadero"
    } else {
        return "Falso"
    }
}

let myEme = nombresM.reduce(myM, "");
console.log(myEme)*/

// EJERCICIO 8
let palabras1 = ["coche", "casa", "armario"]

function sumarCaracteres(x) {
    return x.join("").length
}

console.log(sumarCaracteres(palabras1))

// EJERCICIO 9
function compruebaNumero(numero) {
    if (numero % 2 == 0) {
        return "El numero es par"
    } else {
        return "El numero es impar"
    }
}

console.log(compruebaNumero(2))
console.log(compruebaNumero(3))

// EJERCICIO 10
let palabras101 = ["Casa", "Coche", "Ciudad", "Cesta"];
let palabras102 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let palabras103 = ["Venezuela", "Veneno", "Voltaje"];

console.log(sumarCaracteres(palabras101) + " " + compruebaNumero(sumarCaracteres(palabras101)));
console.log(sumarCaracteres(palabras102) + " " + compruebaNumero(sumarCaracteres(palabras102)));
console.log(sumarCaracteres(palabras103) + " " + compruebaNumero(sumarCaracteres(palabras103)));