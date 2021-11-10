const comentario = "Esse COVID é muito perigoso!";

function verificaComentario(frase) {


    if (comentario.includes("COVID")) {
        console.log("Comentário bloqueado por conter palavras proibidas")
    } else if (comentario.includes("covid")) {
        console.log("Comentário bloqueado por conter palavras proibidas")

    } else if (comentario.includes("pandemia")) {
        console.log("Comentário bloqueado por conter palavras proibidas")

    } else if (comentario.includes("PANDEMIA")) {
        console.log("Comentário bloqueado por conter palavras proibidas")

    } else {
        console.log("Comentário autorizado")
    }
}

verificaComentario(comentario);