console.log(`Trabalhando com listas`);

//Declarando um array
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`, `Curitiba`);

//Adicionando um item na lista depois de declarada
listaDeDestinos.push(`João Pessoa`)

//imprimindo um array
console.log(listaDeDestinos);

//Comando para deletar, o primeiro número é referente ao índice do elemento que se começará a deletar, o segundo número é quantos elementos você quer deletar a partir daquele índice.
listaDeDestinos.splice(2,1);

//imprimendo um elemento do array específico
console.log(listaDeDestinos[1]);