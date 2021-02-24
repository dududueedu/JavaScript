let form_nome = document.querySelector(".form_nome")
let form_msg = document.querySelector(".form_msg")
let botao_sumit = document.querySelector(".botao_submit") 

let mural = document.querySelector(".mural")

botao_sumit.addEventListener("click", function(event){
    event.preventDefault()

    let nome = form_nome.value
    let msg = form_msg.value

    let card = document.createElement("div")
    card.classList.add("card")
    mural.appendChild(card)

    let h3 = document.createElement("h3")
    h3.classList.add("nome_card")
    let texto_h3 = document.createTextNode(nome)
    h3.appendChild(texto_h3)
    card.appendChild(h3)

    let p = document.createElement("p")
    p.classList.add("msg_card")
    let mensagem = document.createTextNode(msg)
    p.appendChild(mensagem)
    card.appendChild(p)
})