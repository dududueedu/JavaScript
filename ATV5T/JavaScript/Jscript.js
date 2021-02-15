//declarando variaveis

let x = 12
console.log(x)

let char = "tribos music"
console.log(char)
//if
if(char == "tribos music"){
    console.log("É VERDADE.")
}else{
    console.log("É MENTIRA.")
}

//listas
let l = [10, 20, 30, 40, 50]
console.log(l[2])

//for
for (let i = 0; i < l.length; i++){
    console.log("indice: "+i, "conteúdo: "+l[i])
}

//objetos
let pessoa = {
    nome: "Eduardo",
    curso: "SI",
    matricula: "010101"
}
console.log(pessoa)

//funções
function add(x, y) {
    return x+y
}
console.log(add(x, 10))

let subtracao = function(x, y){return x-y}
console.log(subtracao(44, 10))

let multiplicacao = (x, y) => {return x*y}
console.log(multiplicacao(3, 7))

let divisao = (x, y) => (x/y)
console.log(divisao(45, 3))