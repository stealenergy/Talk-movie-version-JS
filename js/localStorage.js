const like = document.getElementById('star')

like.addEventListener('click', salvar)

function salvar() {
    for (let i = 0; i < filmes.length; i++) {
      let favorito = document.getElementById(filmes[i].imdbID);
      if (favorito.checked) {
        localStorage.setItem(filmes[i].imdbID, JSON.stringify(favorito.checked));
      } else {
        localStorage.setItem(filmes[i].imdbID, JSON.stringify(false));
      }
    }
  }
  function rodarCheckBoxStatus() {
    for (let i = 0; i < filmes.length; i++) {
      let favorito = document.getElementById(filmes[i].imdbID);
      if (localStorage.getItem(filmes[i].imdbID) === 'true') {
        favorito.checked = true
      } else {
        favorito.checked = false
      }
    }
  }
  rodarCheckBoxStatus()

//   function alternar(e) {
//     if (!e.target.matches('input')) return;
//     const index = e.target.dataset.index;
//     console.log(e)
//     console.log(e.target.dataset.index)
//     alteraArray(index, e);
//     localStorage.setItem('items', JSON.stringify(filmes));
//     exibirFilmesNaTela(filmes);
// }

// elementoParaInserirFilmes.addEventListener('click', alternar);
// exibirFilmesNaTela(filmes);

// function alteraArray(index, e) {
//   filmes[index].imdbID = e.target.id.split(":")[0];
// }
  