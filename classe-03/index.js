const texto = "Aprenda programar do zero na Cubos Academy";

let urlfinal = texto;
let urlanterior = "";

while (urlfinal !== urlanterior) {

    urlanterior = urlfinal;

    urlfinal = urlfinal.replace(" ", "-");
}

console.log(urlfinal);

