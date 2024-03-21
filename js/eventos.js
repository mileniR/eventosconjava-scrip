const subtitle = document.getElementById("subTitleJS");
const subtitle2 = document.getElementById("subTitleJS2");
/*
    ESPERA DE LA
    RESPUESTA DEL API
*/
setTimeout(function(){
    subtitle.textContent = "Mis platos de comida";
    setTimeout(function(){
        subtitle2.textContent = "En mi opinion";
    }, 1000);
}, 1000);

//arrays de presidentes del peru desde FUJIMORI

const platosdecomida = [
    {
        "nombre": "arroz con pollo",
        "isRico": true,
        "opinion" : "tiene un buen sabor"
    },
    {
        "nombre": "lomo saltado",
        "isRico": true,
        "opinion" : "tiene un buen sabor"
    },
    {
        "nombre": "payares",
        "isRico": false,
        "opinion" : "no tiene un buen sabor"
    },
    {
        "nombre": "tallarin rojo",
        "isRico": false,
        "opinion" : "no tiene un buen sabor"
    },
   
    {
        "nombre": "causa",
        "isRico": true,
        "opinion" : "tiene un buen sabor"
    },
    {
        "nombre": "lentejas",
        "isRico": false,
        "opinion" : "no tiene un buen sabor"
    },
    {
        "nombre": "Estofado de Pollo",
        "isRico": true,
        "opinion" : "tiene un buen sabor"
    }
 
];


const platosElement = document.getElementById("plats");
let contenido = "";
platosdecomida.forEach(function(platos) {    
    let claseicon = "rico";
    if (platos.isRico) {
        claseicon = "rico";
    } else {
        claseicon = "no-rico";
    }
    let opinion = platos.opinion + "";

    const template = `
        <div class="platos">
            <div class="icon icon-${claseicon}"></div>
            <div class="data">
                <h4>${platos.nombre}</h4>           
            </div>
            <div class="opinion">
            ${opinion}
        </div>

        </div>
    `;
    contenido = contenido + template;
});

platosElement.innerHTML = contenido;