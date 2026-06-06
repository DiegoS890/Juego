const btn1 = document.querySelector(".boton1");
const btn2 = document.querySelector(".boton2");
const btn3 = document.querySelector(".boton3");

const respuesta = document.querySelector("#Respuesta");

let contador = 0;

// PIEDRA
btn1.addEventListener("click", () => {

    let carta = "Tijeras";

    contador++;

const round = document.createElement("p");
round.classList.add("R")
round.textContent = "Ronda: " + contador;
respuesta.appendChild(round);

    const eleccion = document.createElement("p");

    eleccion.classList.add("op1");
    eleccion.textContent = "Usuario: " + carta;

    respuesta.appendChild(eleccion);

    const elementos = ["Tijeras", "Papel", "Piedra"];
const elementosAleatorio = elementos[Math.floor(Math.random() * elementos.length)];
const aleatorio = document.createElement("p");
aleatorio.classList.add("random");
aleatorio.textContent = "PC: "  + elementosAleatorio;
respuesta.appendChild(aleatorio);

let estado;

if (elementosAleatorio === "Papel"){
     estado = "Ganaste";
}else if (carta === elementosAleatorio){
    estado = "Empate";
}else{
    estado = "Perdiste, La PC gana";
}


const Result = document.createElement("p");
Result.classList.add("resultado");
Result.textContent = "Resultado: " + estado;
respuesta.appendChild(Result);
});


// PAPEL
btn2.addEventListener("click", () => {

    contador++;
let carta = "Papel";

const round = document.createElement("p");
round.classList.add("R")
round.textContent = "Ronda: " + contador;
respuesta.appendChild(round);

    const eleccion = document.createElement("p");

    eleccion.classList.add("op2");
    eleccion.textContent = "Usuario: " + carta;

    respuesta.appendChild(eleccion);

    const elementos = ["Tijeras", "Papel", "Piedra"];
const elementosAleatorio = elementos[Math.floor(Math.random() * elementos.length)];
const aleatorio = document.createElement("p");
aleatorio.classList.add("random");
aleatorio.textContent = "PC: "  + elementosAleatorio;
respuesta.appendChild(aleatorio);

let estado;

if (elementosAleatorio === "Piedra"){
     estado = "Ganaste";
}else if (carta === elementosAleatorio){
    estado = "Empate";
}else{
    estado = "Perdiste, La PC gana";
}


const Result = document.createElement("p");
Result.classList.add("resultado");
Result.textContent = "Resultado: " + estado;
respuesta.appendChild(Result);
});


// TIJERAS
btn3.addEventListener("click", () => {

    contador++;
    let carta = "Piedra";

const round = document.createElement("p");
round.classList.add("R")
round.textContent = "Ronda: " + contador;
respuesta.appendChild(round);

    const eleccion = document.createElement("p");

    eleccion.classList.add("op3");
    eleccion.textContent = "Usuario: " + carta;

    respuesta.appendChild(eleccion);

    const elementos = ["Tijeras", "Papel", "Piedra"];
const elementosAleatorio = elementos[Math.floor(Math.random() * elementos.length)];
const aleatorio = document.createElement("p");
aleatorio.classList.add("random");
aleatorio.textContent = "PC: "  + elementosAleatorio;
respuesta.appendChild(aleatorio);

let estado;

if (elementosAleatorio === "Tijeras"){
     estado = "Ganaste";
}else if (carta === elementosAleatorio){
    estado = "Empate";
}else{
    estado = "Perdiste, La PC gana";
}


const Result = document.createElement("p");
Result.classList.add("resultado");
Result.textContent = "Resultado: " + estado;
respuesta.appendChild(Result);
});