console.log("Conversão de Tipo");

console.log("ano" + 2020);
console.log("2" + "2");

//Aqui se pede pra fazer a conversão de texto para número explicitamente.
console.log(parseInt("2") + parseInt("2"));

//Ele tenta converter automaticamente para número. Não faz isso com o + porque também é o sinal de concatenação, então é necessário converter.
console.log("10" / "2");

//Nesse caso ele retorna NaN (not a number)
console.log("Ricardo"/ 2);