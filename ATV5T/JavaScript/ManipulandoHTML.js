//manipulando HTML
let titulo = document.querySelector(".titulo")
titulo.innerHTML = "MEU TITULO ALTERADO VIA JS."

titulo.style.color = "red"
titulo.style.backgroundColor = "yellow"

//manipulando CSS
let foto = document.querySelector(".foto")
foto.src = "https://loremflickr.com/300/300/snake" 

//manipulando classes
let meuspan = document.querySelector(".meu-span")
console.log(meuspan)
meuspan.classList.add("fundo-yellow", "fonte-grande")
meuspan.classList.remove("fonte-grande")
meuspan.classList.toggle("fundo-yellow")
meuspan.classList.toggle("fundo-yellow")