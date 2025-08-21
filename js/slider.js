const titulo = document.getElementById("tituloProjeto");
const conteudo = document.getElementById("conteudoProjeto");

const imagens = document.querySelectorAll(".slider img");

function atualizar(img) {
    // atualizar titulo
    const tituloTemplate = document.querySelector(img.dataset.titulo);
    titulo.innerHTML = "";
    titulo.appendChild(tituloTemplate.content.cloneNode(true));

    // atualizar conteudo
    const conteudoTemplate = document.querySelector(img.dataset.conteudo);
    conteudo.innerHTML = "";
    conteudo.appendChild(conteudoTemplate.content.cloneNode(true));
}

const centrado = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            atualizar(entry.target);
        }
    });

}, {
    root: document.querySelector(".slider"),
    threshold: [0.5]
});

imagens.forEach(img => observer.observe(img));

// mostrar automaticamente o 1 projeto quando carrega pag
if (imagens[0]) {
  atualizarTrabalho(imagens[0]);
}
