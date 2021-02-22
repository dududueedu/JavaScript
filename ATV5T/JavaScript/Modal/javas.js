let openModal = document.querySelector(".open_modal")
console.log(openModal)

let overlayModal = document.querySelector(".overlay_modal")

openModal.addEventListener("click", function(){
    overlayModal.classList.add("active")
})