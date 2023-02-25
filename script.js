const display = document.querySelector(".display");
const teclasNum = [...document.querySelectorAll(".num")];
const teclaLimpar = document.querySelector(".limpar");
const teclaAdicao = document.querySelector(".adicao");
const teclaSubtracao = document.querySelector(".diminuir");
const teclaMultiplicao = document.querySelector(".multiplicar");
const teclaDivisao = document.querySelector(".dividir");
const teclaIgual = document.querySelector(".igual");
const teclaApagar = document.querySelector(".apagar")
const teclaPonto = document.querySelector(".ponto");

let isNum = true;
let operacao;
let isoperador = false;
let valAnterior;
let resultado;
teclaPonto.addEventListener("click",(e)=>{
    display.innerHTML += "."
})
teclasNum.map((e)=>{
    e.addEventListener("click",(evt)=>{
        if(isNum){
            display.innerHTML = ''
            display.textContent = evt.target.innerHTML
            isNum = false;
            isoperador = false;
        }else{
            display.textContent += evt.target.innerHTML
            isoperador = false
        }
    })
})
teclaLimpar.addEventListener("click",(e)=>{
    display.innerHTML = "0";
    valAnterior = ""
    isNum = true
})

teclaAdicao.addEventListener("click",(e)=>{verificarDisplay(e)})
teclaSubtracao.addEventListener("click",(e)=>{verificarDisplay(e)})
teclaDivisao.addEventListener("click",(e)=>{verificarDisplay(e)})
teclaMultiplicao.addEventListener("click",(e)=>{verificarDisplay(e)})


teclaIgual.addEventListener("click",(e)=>{
    switch(operacao){
        case '+':
            if(display!=0){
                resultado = parseFloat(valAnterior)+parseFloat(display.innerHTML)
                display.innerHTML = resultado;
                operacao = ''
            }
            else{
                display.innerHTML = '0'
            }
            break
        case '-':
            if(display!=0){
                resultado = parseFloat(valAnterior)-parseFloat(display.innerHTML)
                display.innerHTML = resultado;
                operacao = ''
            }
            break
        case 'x':
            if(display!=0){
                resultado = parseFloat(valAnterior)*parseFloat(display.innerHTML)
                display.innerHTML = resultado;
                operacao = ''
            }
            break
        case '/':
            if(display!=0){
                resultado = parseFloat(valAnterior)/parseFloat(display.innerHTML)
                if (Number.isInteger(resultado)){
                    display.innerHTML = resultado
                    operacao = ''
                }
                else{
                    display.innerHTML = resultado.toFixed(5)
                    operacao = ''
                }
            }
            break
    }
})
teclaApagar.addEventListener("click",limpar)

function limpar(){
    if(display.innerHTML!=0){
        display.innerHTML = display.innerHTML.slice(0,-1)
    }
}
function verificarDisplay(e){
    if(!isoperador && display.innerHTML!=0){
        valAnterior = display.innerHTML;
        display.innerHTML = ''
        operacao = `${e.target.innerHTML}`
        isoperador=true;
        console.log(operacao)
    }
    else{
        display.innerHTML = 0
    }
}