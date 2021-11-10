let identificador = "123";
let nome = "José silva costa ";
let email = "      jose@email.com  ";
let tags = ['financeiro', 'administrativo', 'geral'];

//completando identificador com 0 a esquerda

const identificadorformatado = identificador.padStart(6, "0")
console.log(identificadorformatado);

// //tirando espaços em branco do e-mail

const emailformatado = email.trim();
console.log(emailformatado);

//Nome e sobrenomes com letra maiúscula

let resultado = [];
let nomeFormatado;


let separando = nome.split(" ");
for (let i = 0; i < separando.length; i++) {
    let input = separando[i];
    let minuscula = input.toLowerCase();
    let primeiraLetra = minuscula.slice(0, 1);
    let maiuscula = minuscula.replace(primeiraLetra, primeiraLetra.toUpperCase());
    resultado = resultado + " " + maiuscula;
    nomeFormatado = resultado.trim();


}

console.log(nomeFormatado);



//fazendo da tag string única separada por vírgula

const tagsformatada = tags.join(", ");
console.log(tagsformatada);



