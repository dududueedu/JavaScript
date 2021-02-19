//capturando as setas
let seta_esquerda = document.querySelector(".carrossel .seta-esquerda")
let seta_direita = document.querySelector(".carrossel .seta-direita")

let imagens = document.querySelectorAll(".carrossel .imagens")
let indicators = document.querySelectorAll(".carrossel .indicators .indicador")

let img_ativa = 0
seta_direita.addEventListener("click", function(){
    imagens[img_ativa].classList.remove("active")
    indicators[img_ativa].classList.remove("active")

    img_ativa += 1
    if(img_ativa >= imagens.length) img_ativa = 0

    imagens[img_ativa].classList.add("active")
    indicators[img_ativa].classList.add("active")
})

seta_esquerda.addEventListener("click", function(){
    imagens[img_ativa].classList.remove("active")
    indicators[img_ativa].classList.remove("active")

    img_ativa -= 1
    if(img_ativa < 0) img_ativa = 3

    imagens[img_ativa].classList.add("active")
    indicators[img_ativa].classList.add("active")
})