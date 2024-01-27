//Variaveis
const biscoito = document.querySelector("#fechado")
const btnBack = document.querySelector("#buttonReturn")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const msgMotivation = screen2.querySelector("p")

//Functions

function toogleScreens(event){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
    msgMotivation.classList.toggle("animation")
}



//Eventos
biscoito.addEventListener("click", toogleScreens)
btnBack.addEventListener("click", toogleScreens)