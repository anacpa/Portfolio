const titulo = document.getElementById("tituloProjeto");
const conteudo = document.getElementById("conteudoProjeto");

const imagens = document.querySelectorAll(".slider img");


// recebe imagem como parametro
// vai buscar data-titulo e data-conteudo da imagem e guarda templates (#titulo-ccdm...)
// limpa html
// copia o conteudo dos templates para #tituloProjeto e #conteudoProjeto

function atualizar(img) {
    // atualizar titulo
    if (img.dataset.titulo) {
        const tituloTemplate = document.querySelector(img.dataset.titulo);
        if (tituloTemplate) {
            titulo.innerHTML = "";
            titulo.appendChild(tituloTemplate.content.cloneNode(true));
        }
    }

    // atualizar conteudo
    if (img.dataset.conteudo) {
        const conteudoTemplate = document.querySelector(img.dataset.conteudo);
        if (conteudoTemplate) {
            conteudo.innerHTML = "";
            conteudo.appendChild(conteudoTemplate.content.cloneNode(true));
        }
    } else {
        // Clear content if no data-conteudo attribute
        conteudo.innerHTML = "";
    }
}


// entry.isIntersecting - imagem entrou no ecra
// entry.intersectionRatio > 0.8 - pelo menos 80% da imagem esta visivel (mais como seguranca, nao e obrigatorio)
// threshold: [0.8] - define o momento 
// se tudo ok entao atualiza

const centrado = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.8) {
            atualizar(entry.target);
        }
    });

}, {
    root: document.querySelector(".slider"),
    threshold: [0.8]
});


//observa todas as imagens 
imagens.forEach(img => centrado.observe(img));

// mostrar automaticamente o 1 projeto quando carrega pag
if (imagens[0]) {
  atualizar(imagens[0]);
}
