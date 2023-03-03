const botao  = document.querySelector('#robotron'); 
botao.addEventListener("click", (evento) => {
    console.log("Cliquei no robô")
    console.log(evento)
});

function dizOi(nome){
    console.log("Oi "+nome)
    console.log("Bem Vindo ao Robotron 2000")
    
}

dizOi("Jorge");