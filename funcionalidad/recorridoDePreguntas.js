let buttonSi = document.querySelector("#button_si");
let buttonNo = document.querySelector("#button_no");
let preguntaActual = document.querySelector("#pregunta"); 
let formulario = document.querySelector("#formulario"); 
let puntero = 0; //como imagino que no vamos a hacer todo, lo hago rapido
/*Estoy haciendo esto segun el recorrido que tenemos
pre establecido, nada mas*/
let preguntas = ["¿La persona está conciente?",
    "Resira"];
let respuestas = [["Usted se encuentra ante un paro cardiorespiratorio", "Ir a guia RCP", "link placeholder"]];


buttonSi.addEventListener("click", ()=>{afirmacion()});
buttonNo.addEventListener("click", ()=>{negacion()}); 

function afirmacion() {
    switch (puntero) {
        case 1:
            mostrarRespuesta()
            break;

        default:
            puntero++; 
            setPregunta();
            break;
    }
}

function mostrarRespuesta() {
    preguntaActual.innerHTML = respuestas[0][0];
    buttonSi.remove();
    buttonNo.remove();
    let buttonIrA = document.createElement("button"); 
    buttonIrA.classList.add("boton_bordo"); 
    buttonIrA.innerHTML = respuestas[0][1];
    buttonIrA.type = "button"; 
    buttonIrA.addEventListener("click", ()=>{irAGuia()});
    formulario.appendChild(buttonIrA); 
}

function irAGuia() {
    /**/
    window.location = "guiaRcp.html";
}

function setPregunta() {
    preguntaActual.innerHTML = preguntas[puntero]; 
}