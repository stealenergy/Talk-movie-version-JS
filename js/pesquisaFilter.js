/**
 * Requisitos:
 * 
 * - Ter uma tabela com todos os filmes da lista (Poster, Title, Year, Runtime, Writer) OK
 * - Ter um select que permita o usuário ordenar os filmes pelo campo imdbRating, Year ou Title (ASC, DESC) OK
 * - Permitir que o usuário selecione um filme e adicione como favorito (usar dnv localstorage) (Vai ficar uma estrela do lado do filme) OK
 * - Permitir que o usuário busque um filme pelo campo (Title, Year) OK
 * - Plus (Clicar na imagem e abrir um modal com mais informações)
 */

 const searchBar = document.querySelector("input[type='search']");

 searchBar.addEventListener('keyup', (tecla) => {
     const procuraLetra = tecla.target.value.toLowerCase();
 
     const filmesOrdenados = filmes.filter((character) => {
         return (
             character.Title.toLowerCase().includes(procuraLetra) ||
             character.Year.toLowerCase().includes(procuraLetra)
         );
     });
     elementoParaInserirFilmes.innerHTML = ""
     exibirFilmesNaTela(filmesOrdenados)
 });
 

