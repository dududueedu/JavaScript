let openModal = document.querySelector(".open_modal")
console.log(openModal)

let overlayModal = document.querySelector(".overlay_modal")

openModal.addEventListener("click", function(){
    overlayModal.classList.add("active")
})

let botao_close = document.querySelector(".overlay_modal .container_modal .footer .botao_close")
botao_close.addEventListener("click", function(){
    overlayModal.classList.remove("active")
})

let botaoX = document.querySelector(".overlay_modal .container_modal .header_modal .botaoX")
botaoX.addEventListener("click", function(){
    overlayModal.classList.remove("active")
})

window.addEventListener("click", function(event){
    if(event.target == overlayModal) overlayModal.classList.remove("active")
})