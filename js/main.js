let projetos = [];
const endPointApi =
  "https://api.themoviedb.org/3/account/14196078/rated/movies?api_key=ce7533c109968faa724d1787f65b8a21&language=pt-BR&session_id=f1d321a989bbb4aacc7452aebb13c3c8d7c71d84&sort_by=created_at.asc&page=1";
getApi();
let novaLista = [];

async function getApi() {
  const res = await fetch(endPointApi);
  projetos = await res.json();
  selectResult(projetos);

}

function selectResult() {
  let result = Object.values(projetos).slice(1,2 )
  viewMovies(result);
}

function viewMovies() {
  const posicao = Object.keys(projetos)[1];
  novaLista = projetos[posicao]
  // console.log(novaLista);
  exibirFilmesNaTela(novaLista)
  
}



const elementoParaInserirFilmes = document.getElementById('filmes')



// imprime na ttela 
function exibirFilmesNaTela(novaLista) {
  console.log(novaLista)
  // const novoArray = []
  novaLista.forEach(filme => {
  //  const indice = novoArray.map(function(e) {
  //     return e.imdbID 
  //   })
  // novoArray.indexOf(filme.imdbID)
  //    if(indice >= 0){
      // console.log("teste")
      // debugger
    elementoParaInserirFilmes.innerHTML += `
              <div class="col-md-2 p-2 imagem" id="opem-modal" onclick="toggleModal()">
              
                  <img class="img-fluid teste" style="min-height: 150px;" src="${filme.backdrop_path}" id="" alt="Carregando">
              </div>
              <div class="col-md-4 p-2 fs-5 text-muted fw-bold">
              ${filme.original_title}
              <div class="col-md-12 estrelas"><p class="rating">
              ${filme.rating} IMDB Rating<p>
              </div>
              <div class="col-md-12 ">
             
              </div>
                
              </div>
              <div class="col-md-2 p-2 text-muted">
             
              </div>
              <div class="col-md-1 p-2 text-muted">
              ${filme.release_date}
              </div>
              <div class="col-md-3 p-2 text-muted">
              
              </div>
              <span class="linha"></span>
              <div id="fade" class="hide" onclick="toggleModal()">
              </div>
              <div id="modal" class="hide">
                  <div class="modal-header">
                      <h2></h2>
                      <button id="close-modal"  onclick="toggleModal()">Fechar</button>
                  </div>
                  <div class="modal-body">
                      <p></p>
                  </div>
              </div>
            
      
       
        `
      //  } else {
      //     novoArray.push(novaLista)
      //   }
  });
  // console.log("result")
  // debugger
}
