console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`, `Curitiba`);

const idadeComprador = 17;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade")
//     listaDeDestinos.splice(2, 1);
// } else if (estaAcompanhada) {

//     console.log("Comprador está acompanhado")
//     listaDeDestinos.splice(2, 1);

// } else {
//     console.log("Não é maior de idade e não posso vender");
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem !")
    listaDeDestinos.splice(2, 1);
} else {
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque: \n\n")
if (idadeComprador > 18 && temPassagemComprada){
    console.log("Boa Viagem");
} else {
    console.log("Você não pode embarcar");
}

// || ou - && e

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);