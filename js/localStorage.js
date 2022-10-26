
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
