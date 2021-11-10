const cpf = "12345678900";
const cnpj = "12345678000199";

function validarCpf(numeroCpf) {
    if (cpf.length == 11) {

        let separar = cpf.split("")

        separar.splice(3, 0, ".")
        separar.splice(7, 0, ".");
        separar.splice(11, 0, "-");

        let numeroformatado = "";

        for (let numero of separar) {
            numeroformatado += numero;
        }

        console.log(numeroformatado);



    } else {
        console.log("CPF Inválido")
    }
}

function validarCnpj(numeroCnpj) {
    if (cnpj.length == 14) {
        let separar = cnpj.split("")

        separar.splice(2, 0, ".")
        separar.splice(6, 0, ".");
        separar.splice(10, 0, "/");
        separar.splice(15, 0, "-");

        let numeroformatado = "";

        for (let numero of separar) {
            numeroformatado += numero;
        }

        console.log(numeroformatado);

    } else {
        console.log("CNPJ Inválido")
    }

}


validarCpf(cpf);

validarCnpj(cnpj);



