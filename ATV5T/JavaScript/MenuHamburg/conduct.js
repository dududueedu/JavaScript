//comportamento
let botao = document.querySelector(" .navegador .nav-cabecalho .meu-botao")
console.log(botao)

let menu = document.querySelector(".navegador .menu")
console.log(menu)

botao.addEventListener("click", function(){
    menu.classList.toggle("active")
})