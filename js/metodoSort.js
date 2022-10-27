const ordenaPorAno = document.getElementById('ano')
const ordenaPorAz = document.getElementById('a-z')
const ordenaPorZa = document.getElementById('z-a')

ordenaPorAno.addEventListener('click', ordenaAno)
ordenaPorAz.addEventListener('click', ordenaAz)
ordenaPorZa.addEventListener('click', ordenaZa)

function ordenaAno(){
  let filmesOrdenados = filmes.sort((a,b)=> b.imdbRating - a.imdbRating)
    elementoParaInserirFilmes.innerHTML = ""
    exibirFilmesNaTela(filmesOrdenados)
    rodarCheckBoxStatus()
}
function ordenaAz(){
  let filmesOrdenados = filmes.sort(function (a,b){
    if(a.Title > b.Title){
      return 1
    }
    if(a.Title < b.Title){
      return -1
    }
    return 0
  })
  elementoParaInserirFilmes.innerHTML = ""
  exibirFilmesNaTela(filmesOrdenados)
  rodarCheckBoxStatus()
}

function ordenaZa(){
  let filmesOrdenados = filmes.sort(function (a,b){
    if(a.Title < b.Title){
      return 1
    }
    if(a.Title > b.Title){
      return -1
    }
    return 0
  })
  elementoParaInserirFilmes.innerHTML = ""
  exibirFilmesNaTela(filmesOrdenados)
  rodarCheckBoxStatus()
}
