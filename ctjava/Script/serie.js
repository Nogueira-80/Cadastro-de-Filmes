const serie = [
    { titulo: "Devil May Cry", imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/75KximV3WhtvlWFneTrf1Pw61cu.jpg", descricao: "Nesta batalha épica do bem contra o mal, as linhas não estão nada claras. E as esperanças de salvação estão nas mãos de um caçador de demônios diabolicamente bonito." , breve: "Devil may cry" },
    { titulo: "Spider-Noir", imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/rfrzXSaiuvRMLo8PRQds0TfFrZC.jpg", descricao: "O detetive particular Ben Reilly é contratado para casos simples... até que gângsteres, monstros e uma misteriosa femme fatale tecem uma teia que o obriga a confrontar seu passado como o único super-herói de Nova York: O Spider." ,breve: "Spider-noir" },
    { titulo: "Supernatural", imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/eK4gEBWNGJoxCD67KFKzaKfSzWU.jpg", descricao: "Os irmãos Dean e Sam vasculham o país em busca de atividades paranormais, brigando com demônios, fantasmas e monstros no caminho." , breve: "Sobrenatural" },
    { titulo: "Game of Thrones", imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/eDn8XWA0a4U3zOhd1gh7HExdt4Y.jpg", descricao: "Em uma terra onde os verões podem durar vários anos e o inverno toda uma vida, sete nobres famílias lutam pelo controle da mítica terra de Westeros, dividida depois de uma guerra. Num cenário que lembra a Europa medieval, reis, rainhas, cavaleiros e renegados usam todos os meios possíveis em um jogo político pela disputa do Trono de Ferro, o símbolo do poder absoluto." , breve: "Game of Thrones" },
    { titulo: "Rick e Morty", imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/5qfd0e2uMbVInX3YdeFbDsfxi1t.jpg", descricao: "O brilhante cientista beberrão Rick sequestra Morty, seu neto aborrescente, para viver loucuras em outros mundos e dimensões alternativas.", breve: "Rick and Morty" },
    { titulo: "Flash", imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/lFxIoMKqkgTuxpghTPHBjoVstMV.jpg", descricao: "Um perito forense desperta de um coma com poderes especiais que serão postos à prova na luta contra forças que ameaçam a cidade." , breve: "Flash" },
]

const listarSeries = document.getElementById("listarSeries");

function mostrarSerie(lista) {
    listarSeries.innerHTML = ""
    lista.forEach(serie => {
        listarSeries.innerHTML += `
        <div class="col-md-4">
          <div class="card card-filme h-100">
            <img src="${serie.imagem}" class="card-img-top">
            <div class="card-body">
              <h3>${serie.titulo}</h3>
              <p>${serie.breve}</p>
              <button class="btn btn-dark" onclick="verDetalhes('${serie.titulo}', '${serie .descricao}')">Ver detalhes</button>
            </div>
          </div>
        </div>
        `
    })
}

mostrarSerie(serie)

function verDetalhes(titulo, descricao) {
    Swal.fire({
        title: titulo,
        text: descricao,
        icon: "info"
    })
}