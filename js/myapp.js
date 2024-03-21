// console.log("Hola Mundo");
// variables javascript
// const y let (var = let pero consume más memoria)

const soyString = "Soy un string";
const soyNumerico = 11;
const soyBooleano = true;
const soyUnaPersona = {
    "dni": "70437424",
    "edad": 24,
    "name": "Frank De La Rosa",
    "epitafio": "Me diverti mucho, tu Dev Favorito brothercito"
};


function especial(a, b) {
    let resultado = 0;
    resultado = (a*b)+(a/b)-(a-b)+(a+b);
    return resultado;
}

function anuncio() {
    alert("Uso la funcion especial");
}

function operacion(a, b, operacion) {
    let resultado = 0;
    switch (operacion) {
        case "suma": 
            resultado = Number(a) + Number(b);
            break;
        case "resta":
            resultado = Number(a) - Number(b);
            break;
        case "multi":
            resultado = Number(a) * Number(b);
            break;
        case "divi":
            resultado = Number(a) / Number(b);
            break;
        case "promedio":
            resultado = (Number(a) + Number(b))/2;
            break;
        case "especial":
            anuncio();
            resultado = especial(Number(a), Number(b));
            break;
        case "conditional":
            if (Number(a) == 2 && Number(b) == 3) {
                resultado = 1234;
            } else {
                if (Number(a) > 100 || Number(b) > 50) {
                    resultado = 1111;
                }
            }
            break;
        default:
            resultado = 0;
            break;
    }
    return resultado;
}

function calcularArea(base, altura) {
    return (base*altura)/2;
}

function siEsPar(numero) {
    let mensaje = "No Soy par";
    if (numero % 2 == 0) {
        mensaje = "Si soy par";
    }
    return mensaje;
}

function convertCecius(grados) {
    const gradosFahrenheit = (grados * 9/5) + 32;
    return gradosFahrenheit;
}

console.log(operacion(101,3,"conditional"));
console.log("área: " + calcularArea(14,150));
console.log(siEsPar(1414));
console.log("Grados Fahrenheit: " + convertCecius(35));