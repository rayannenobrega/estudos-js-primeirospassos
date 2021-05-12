console.log("Trabalhando com variáveis");
//JS é case sensitive

idade = 29;
Idade = 30;
//São variáveis distintas, porém, manter duas variáveis assim é uma má prática pois fica muito confuso.
console.log(idade);
console.log(Idade);

const idade = 29;
const nome = "Ricardo";
//Quando não inserimos a palavra 'const' antes da variável, dizemos que ela pode ir para um escopo global. Portanto, trata-se de uma boa prática inserir a palavra 'const' antes da declaração. Diferente das linguagens fortemente tipadas, elas são declaradas da mesma forma.

let ano = 2020;