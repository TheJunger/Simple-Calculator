let uno = document.querySelector(".uno")
let dos = document.querySelector(".dos")
let tres = document.querySelector(".tres")
let cuatro = document.querySelector(".cuatro")
let cinco = document.querySelector(".cinco")
let seis = document.querySelector(".seis")
let siete = document.querySelector(".siete")
let ocho = document.querySelector(".ocho")
let nueve = document.querySelector(".nueve")
let cero = document.querySelector(".cero")
let teclado = document.querySelector(".teclado")

let mas = document.querySelector(".mas")
let menos = document.querySelector(".menos")
let bDividir = document.querySelector(".dividir")
let bMultiplicar = document.querySelector(".multiplicar")

let reset= document.querySelector(".reset")
let bResultado= document.querySelector(".resultado")
let clear = document.querySelector(".clear")

let operador = document.querySelector(".operador")
let primerOperador = document.querySelector(".num1")
let segundoOperador = document.querySelector(".num2")
let resultadoPantalla = document.querySelector(".resultadoP")

numeros1 = ""
numeros2 = ""
nuevoNumero = ""
answer = undefined

numOneAdd = true
numTwoAdd = false

 let comprobacion = numero =>{
    if (numOneAdd==true) {
        numeros1 += numero
        primerOperador.textContent = numeros1
    }
    if (numTwoAdd==true) {
        numeros2 += numero
        segundoOperador.textContent = numeros2
    }
    if (answer !== undefined) {
        primerOperador.textContent = answer
    }
}

let suma = (numero1,numero2) =>{
    if (answer == undefined) {
        answer = parseInt(numero1)+parseInt(numero2)
    }
    else if (answer !== undefined) {
        answer = parseInt(answer)+parseInt(numero2)
    }
}

let resta = (numero1,numero2) => {
    if (answer == undefined) {
        answer = parseInt(numero1)-parseInt(numero2)
    }
    else if (answer !== undefined) {
        answer = parseInt(answer)-parseInt(numero2)
    }
}

let multiplicacion = (numero1,numero2) => {
    if (answer == undefined) {
        answer = parseInt(numero1)*parseInt(numero2)
    }
    else if (answer !== undefined) {
        answer = parseInt(answer)*parseInt(numero2)
    }
}

let division = (numero1,numero2) => {
    if (answer == undefined) {
        answer = parseInt(numero1)/parseInt(numero2)
    }
    else if (answer !== undefined) {
        answer = parseInt(answer)/parseInt(numero2)
    }    
}

uno.addEventListener("click", ()=>{
    comprobacion(uno.textContent)
})
dos.addEventListener("click", ()=>{
    comprobacion(dos.textContent)
})
tres.addEventListener("click", ()=>{
    comprobacion(tres.textContent)
})
cuatro.addEventListener("click", ()=>{
    comprobacion(cuatro.textContent)
})
cinco.addEventListener("click", ()=>{
    comprobacion(cinco.textContent)
})
seis.addEventListener("click", ()=>{
    comprobacion(seis.textContent)
})
siete.addEventListener("click", ()=>{
    comprobacion(siete.textContent)
})
ocho.addEventListener("click", ()=>{
    comprobacion(ocho.textContent)
})
nueve.addEventListener("click", ()=>{
    comprobacion(nueve.textContent)
})
cero.addEventListener("click", ()=>{
    comprobacion(cero.textContent)
})

clear.addEventListener("click", ()=>{
    if (answer == undefined){
        if (numOneAdd == true){
            primerOperador.textContent = "0"
            numeros1 = ""
        }
    }
    else if (numTwoAdd == true){
        segundoOperador.textContent = "0"
        numeros2 = ""
    }
})

const setOperador = operadorTo =>{
    if (answer == undefined){
        numOneAdd = false
        numTwoAdd = true
        operador.textContent = operadorTo
        operador.style.display = "inline"
        segundoOperador.style.display = "inline"
    }
    else if (answer !== undefined) {
        numeros2 = ""
        console.log(numeros2)
        numTwoAdd = true
        segundoOperador.style.display = "inline"
        operador.textContent = operadorTo
        operador.style.display = "inline"
        segundoOperador.textContent = ""
        if(primerOperador.textContent.length > 8){
            segundoOperador.style.fontSize = "25px"
            operador.style.fontSize = "25px"
        }
        else if (primerOperador.textContent.length < 8){
            segundoOperador.style.fontSize = "60px"
            operador.style.fontSize = "60px"
        }
    }
}

mas.addEventListener("click", ()=>{
    setOperador("+")
})

menos.addEventListener("click", ()=>{
    setOperador("-")
})

bMultiplicar.addEventListener("click", ()=>{
    setOperador("x")
})

bDividir.addEventListener("click", ()=>{
    setOperador("/")
})

reset.addEventListener("click", ()=>{
    history.go()
})

const operacion = operacion =>{
    if (answer == undefined){
        operacion(numeros1,numeros2)
        primerOperador.style.display = "none"
        operador.style.display = "none"
        segundoOperador.style.display = "none"
        resultadoPantalla.style.display ="inline"
        resultadoPantalla.textContent = answer
        if(resultadoPantalla.textContent.length > 8){
            resultadoPantalla.style.fontSize = "25px"
        }
        else if(resultadoPantalla.textContent.length < 8){
            resultadoPantalla.style.fontSize = "60px"
        }
    }
    else if (answer !== undefined){
        operacion(answer,numeros2)
        operador.style.display = "none"
        segundoOperador.style.display = "none"
        resultadoPantalla.style.display ="inline"
        resultadoPantalla.textContent = answer
        if(resultadoPantalla.textContent.length > 8){
            resultadoPantalla.style.fontSize = "25px"
        }
        if(resultadoPantalla.textContent.length < 8){
            resultadoPantalla.style.fontSize = "60px"
        }
    }
}

bResultado.addEventListener("click", ()=>{
    if(operador.textContent == "+"){
        operacion(suma)
    }
    if(operador.textContent == "-"){
        operacion(resta)
    }  
    if(operador.textContent == "x"){
        operacion(multiplicacion)
    }
    if(operador.textContent == "/"){
        operacion(division)
    }
})


















