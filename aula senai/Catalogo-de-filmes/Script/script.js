const filmes = [
    {
        titulo: "Vingadores",
        imagem:"https://media.themoviedb.org/t/p/w300_and_h450_face/A4kvp7vY1BDLrrQIagRCffLKj1t.jpg",
        descricao: "Guerra Infinita"
    },
    {
        titulo: "Backrooms",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/a1pgQeEge47xrS4jGlDwIHiieVK.jpg",
        descricao: "Um Não-lugar",
    },
     {
        titulo: "Minecraft",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/a227F8PnXDABR1JJTuasmJmxEhf.jpg",
        descricao: "Um filme",
    },
    {
        titulo: "Motoqueira Fantasma",
        imagem:"https://media.themoviedb.org/t/p/w300_and_h450_face/vVGVlwRrvVgLPE98rwo8jo3QC2b.jpg",
        descricao: "Ghost rider"
    },
    {
        titulo: "Todo mundo em Panico",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/1z9haN6yiYsuv9D93H8n5yaCk8I.jpg",
        descricao: "Scary movie",
    },
     {
        titulo: "Gente Grande",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/ppU2xJnlKdW3F01AtC9wMuXRZCg.jpg",
        descricao: "grown ups",
    },
]

const listarFilmes = document.getElementById("listarFilmes");
function mostrarFilmes(Lista) {
    listarFilmes.innerHTML = ""
    Lista.forEach(filme => {
        listarFilmes.innerHTML += `
        <div class="col-md-4">
          <div class="card card-filme h-100">
           <img src="${filme.imagem}" class="card-img-top">
             <div class="card-body">
             <h3>${filme.titulo}</h3>
             <p>${filme.descricao}</p>
        <button class="btn btn-dark" onclick="verDetalhes ('${filme.titulo}')">Ver detalhes"</button>
             </div>
          </div>
        </div>
        `
    })
}