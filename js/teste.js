
const filmes = [
  {
    Title: "Star Wars: Episode IV - A New Hope",
    Year: "1977",
    Rated: "PG",
    Released: "25 May 1977",
    Runtime: "121 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "George Lucas",
    Writer: "George Lucas",
    Actors: "Mark Hamill, Harrison Ford, Carrie Fisher",
    Plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth ...",
    Language: "English",
    Country: "United States",
    Awards: "Won 6 Oscars. 63 wins & 29 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.6/10" },
      { Source: "Rotten Tomatoes", Value: "93%" },
      { Source: "Metacritic", Value: "90/100" },
    ],
    Metascore: "90",
    imdbRating: "8.6",
    imdbVotes: "1,350,260",
    imdbID: "tt0076759",
    Type: "movie",
    DVD: "06 Dec 2005",
    BoxOffice: "$460,998,507",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver",
    Plot: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "United States",
    Awards: "Won 3 Oscars. 89 wins & 131 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjA3NGExZDktNDlhZC00NjYyLTgwNmUtZWUzMDYwMTZjZWUyXkEyXkFqcGdeQXVyMTU1MDM3NDk0._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.8/10" },
      { Source: "Rotten Tomatoes", Value: "82%" },
      { Source: "Metacritic", Value: "83/100" },
    ],
    Metascore: "83",
    imdbRating: "7.8",
    imdbVotes: "1,226,636",
    imdbID: "tt0499549",
    Type: "movie",
    DVD: "22 Apr 2010",
    BoxOffice: "$772,010,731",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "La Brea",
    Year: "2021–",
    Rated: "TV-14",
    Released: "28 Sep 2021",
    Runtime: "N/A",
    Genre: "Drama, Mystery, Sci-Fi",
    Director: "N/A",
    Writer: "David Appelbaum",
    Actors: "Natalie Zea, Eoin Macken, Chiké Okonkwo",
    Plot: "A massive sinkhole mysteriously opens up in Los Angeles, separating part of a family in an unexplainable primeval world, alongside a desperate group of strangers.",
    Language: "English",
    Country: "United States",
    Awards: "1 win & 3 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYzM4NWVmOWYtN2ZiNC00NDI1LWFlNjUtNjRkZTdlOGQxYmY5XkEyXkFqcGdeQXVyMTUwMzM5ODkz._V1_SX300.jpg",
    Ratings: [{ Source: "Internet Movie Database", Value: "5.6/10" }],
    Metascore: "N/A",
    imdbRating: "5.6",
    imdbVotes: "10,230",
    imdbID: "tt11640018",
    Type: "series",
    totalSeasons: "1",
    Response: "True",
  },
  {
    Title: "Com Licença, Eu Vou à Luta",
    Year: "1986",
    Rated: "N/A",
    Released: "17 Jul 1986",
    Runtime: "81 min",
    Genre: "Biography, Drama",
    Director: "Lui Farias",
    Writer: "Lui Farias, Roberto Farias, Eliane Maciel",
    Actors: "Fernanda Torres, Marieta Severo, Carlos Augusto Strazzer",
    Plot: "Based on a famous autobiography, this film tells of teenage angst, as lived in the miserable lower middle class Rio bedroom suburbs, by 15 year-old Eliane. To boot, she comes from a dysfunctional family. Her mother is particularly...",
    Language: "Portuguese",
    Country: "Brazil",
    Awards: "4 wins & 2 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYjMwNGViOTQtMzZkMC00M2MyLWFhZDMtOWQ3ZTI5Zjk5NzgzXkEyXkFqcGdeQXVyMTY2MzYyNzA@._V1_SX300.jpg",
    Ratings: [{ Source: "Internet Movie Database", Value: "6.8/10" }],
    Metascore: "N/A",
    imdbRating: "6.8",
    imdbVotes: "156",
    imdbID: "tt0139942",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "The Daughters of Joshua Cabe",
    Year: "1972",
    Rated: "N/A",
    Released: "13 Sep 1972",
    Runtime: "73 min",
    Genre: "Western",
    Director: "Philip Leacock",
    Writer: "Paul Savage",
    Actors: "Buddy Ebsen, Karen Valentine, Lesley Ann Warren",
    Plot: "Due to a home-steading law, a fur trapper schemes to keep his land by hiring a hooker, a pickpocket, and a thief to pose as his family.",
    Language: "English",
    Country: "United States",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYjdlY2U1NWUtYTcwMS00NTIxLWI2ZGQtOTNiYmIxM2Q1OWY4XkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_SX300.jpg",
    Ratings: [{ Source: "Internet Movie Database", Value: "6.7/10" }],
    Metascore: "N/A",
    imdbRating: "6.7",
    imdbVotes: "190",
    imdbID: "tt0068447",
    Type: "movie",
    DVD: "08 Jul 2014",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "Re-Animator",
    Year: "1985",
    Rated: "Unrated",
    Released: "18 Oct 1985",
    Runtime: "84 min",
    Genre: "Comedy, Horror, Sci-Fi",
    Director: "Stuart Gordon",
    Writer: "H.P. Lovecraft, Dennis Paoli, William Norris",
    Actors: "Jeffrey Combs, Bruce Abbott, Barbara Crampton",
    Plot: "After an odd new medical student arrives on campus, a dedicated local and his girlfriend become involved in bizarre experiments centering around the re-animation of dead tissue.",
    Language: "English, German",
    Country: "United States",
    Awards: "4 wins & 4 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjcxOTcwZDAtYjg4Ny00YzUzLWJkNDgtMzhkMDJlOTg1YTFiXkEyXkFqcGdeQXVyMzg1ODEwNQ@@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.2/10" },
      { Source: "Rotten Tomatoes", Value: "94%" },
      { Source: "Metacritic", Value: "73/100" },
    ],
    Metascore: "73",
    imdbRating: "7.2",
    imdbVotes: "65,199",
    imdbID: "tt0089885",
    Type: "movie",
    DVD: "20 Mar 2007",
    BoxOffice: "$2,023,414",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "Rea",
    Year: "2019",
    Rated: "N/A",
    Released: "18 Oct 2019",
    Runtime: "23 min",
    Genre: "Short, Drama",
    Director: "Joanna Bielinski",
    Writer: "Joanna Bielinski, Daniel Weil",
    Actors: "Philipp Christopher, Rainer Ewerrien, Paula Hans",
    Plot: "After the birth of their first child, the narcissistic Rea breaks under the mother's role until her frustration finally erupts in domestic violence against her husband.",
    Language: "German",
    Country: "Germany",
    Awards: "1 win & 7 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmEwYjAzNGItMmM4ZS00YmFmLWE2ZmItMDBmYzA1YjA3ZTI1XkEyXkFqcGdeQXVyNzQyNzU2NQ@@._V1_SX300.jpg",
    Ratings: [],
    Metascore: "N/A",
    imdbRating: "N/A",
    imdbVotes: "N/A",
    imdbID: "tt8593902",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "Aas",
    Year: "1953",
    Rated: "N/A",
    Released: "N/A",
    Runtime: "N/A",
    Genre: "Romance",
    Director: "Devendra Goel",
    Writer: "Devendra Goel, S. Naziruddin, S.K. Prem",
    Actors: "Kamini Kaushal, Shekhar, Om Prakash",
    Plot: "Widower Ashok lives a wealthy lifestyle in Bombay, India, along with his son, Kishore, his paternal aunt, a maid-servant, Chanda, and three other employees. He makes a living running an export-import business near Flora Fountain. ...",
    Language: "Hindi",
    Country: "India",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYmMxYTUyN2UtOTMxZS00Nzk3LWIwNjYtMjQyMzA5NGQzYzM4XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    Ratings: [{ Source: "Internet Movie Database", Value: "5.1/10" }],
    Metascore: "N/A",
    imdbRating: "5.1",
    imdbVotes: "20",
    imdbID: "tt0178202",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "Teheran, payetakht-e Iran ast",
    Year: "1966",
    Rated: "N/A",
    Released: "14 Oct 2019",
    Runtime: "18 min",
    Genre: "Documentary, Short",
    Director: "Kamran Shirdel",
    Writer: "N/A",
    Actors: "N/A",
    Plot: "N/A",
    Language: "Persian",
    Country: "Iran",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTY5YjUzNzAtNDI2YS00N2RjLWIwMTQtYzgxZDE0Zjk2NTQ4L2ltYWdlXkEyXkFqcGdeQXVyMjYyOTgwNjY@._V1_SX300.jpg",
    Ratings: [{ Source: "Internet Movie Database", Value: "7.3/10" }],
    Metascore: "N/A",
    imdbRating: "7.3",
    imdbVotes: "121",
    imdbID: "tt0930789",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "Dupa ea",
    Year: "2007",
    Rated: "N/A",
    Released: "31 Aug 2007",
    Runtime: "90 min",
    Genre: "Drama",
    Director: "Cristina Ionescu",
    Writer: "Lia Bugnar",
    Actors: "Dragos Bucur, Anca Florea, Valentina Pelinel",
    Plot: "Stefan is a young manager in a big advertising agency, happily married and having a young daughter. He suddenly falls in love with a woman he sees on the street, at a light stop. His life changes completely as he is desperately tr...",
    Language: "Romanian",
    Country: "Romania",
    Awards: "1 nomination",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGQ5MWFhZDgtMDA3Yi00ZDMxLThjODgtZDhjNmRkNGRiYjNjXkEyXkFqcGdeQXVyNDkzNTM2ODg@._V1_SX300.jpg",
    Ratings: [{ Source: "Internet Movie Database", Value: "6.5/10" }],
    Metascore: "N/A",
    imdbRating: "6.5",
    imdbVotes: "184",
    imdbID: "tt0487152",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "Wo ist Fred?",
    Year: "2006",
    Rated: "N/A",
    Released: "16 Nov 2006",
    Runtime: "107 min",
    Genre: "Comedy, Romance, Sport",
    Director: "Anno Saul",
    Writer: "Bora Dagtekin, Jane Ainscough, Ken Daurio",
    Actors: "Til Schweiger, Alexandra Maria Lara, Jürgen Vogel",
    Plot: "To catch a basketball from the favorite team of his girlfriend's spoiled son, Fred poses as a paralyzed, wheelchair-bound fan. But when he catches the ball, he also catches the attention of young, attractive filmmaker Denise, who ...",
    Language: "German",
    Country: "Germany",
    Awards: "2 wins",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMmZmMjk3N2UtNmQxMy00YmIyLTlhNTYtNWNiYzk1YmVjODYzXkEyXkFqcGdeQXVyMzA3Njg4MzY@._V1_SX300.jpg",
    Ratings: [{ Source: "Internet Movie Database", Value: "6.3/10" }],
    Metascore: "N/A",
    imdbRating: "6.3",
    imdbVotes: "5,884",
    imdbID: "tt0487271",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "Aa Naluguru",
    Year: "2004",
    Rated: "N/A",
    Released: "09 Dec 2004",
    Runtime: "141 min",
    Genre: "Drama",
    Director: "Chandra Siddhartha",
    Writer: "Madan, Chandra Siddhartha",
    Actors: "Rajendra Prasad, Aamani, Raja",
    Plot: "A man fights for his philosophy: that human relations are more important than money.",
    Language: "Telugu",
    Country: "India",
    Awards: "2 wins & 4 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGZjNDBhNGQtM2M4Ny00ZTVhLTk4ZWMtNDMyNzQ2Mjk0ZGJhXkEyXkFqcGdeQXVyNjQ1MDcxNzM@._V1_SX300.jpg",
    Ratings: [{ Source: "Internet Movie Database", Value: "8.6/10" }],
    Metascore: "N/A",
    imdbRating: "8.6",
    imdbVotes: "3,254",
    imdbID: "tt1601792",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "Johan Falk: Alla råns moder",
    Year: "2012",
    Rated: "N/A",
    Released: "28 Sep 2012",
    Runtime: "97 min",
    Genre: "Action, Crime, Thriller",
    Director: "Anders Nilsson",
    Writer:
      "Tage Åström (screenplay), Anders Nilsson (storyline), Joakim Hansson (storyline), Anders Nilsson (concept), Joakim Hansson (concept), Anders Nilsson (characters), Joakim Hansson (characters)",
    Actors: "Jakob Eklund, Jens Hultén, Meliz Karlge, Mikael Tornving",
    Plot: "Some men infiltrate the retired chief engineer Arthur Jönsson's home. They look through the residence for a few drawings. Some time later the same men, who turn out to be former Swedish ...",
    Language: "Swedish",
    Country: "Sweden, Germany",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BM2IwN2ZiZTctODU5Ny00ZDk5LWFhN2QtYTgxNjNlOTUxMmZjXkEyXkFqcGdeQXVyMTQzMjU1NjE@._V1_SX300.jpg",
    Ratings: [{ Source: "Internet Movie Database", Value: "6.8/10" }],
    Metascore: "N/A",
    imdbRating: "6.8",
    imdbVotes: "2,024",
    imdbID: "tt2239108",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "Ca$h",
    Year: "2010",
    Rated: "R",
    Released: "26 Mar 2010",
    Runtime: "108 min",
    Genre: "Crime, Thriller",
    Director: "Stephen Milburn Anderson",
    Writer: "Stephen Milburn Anderson",
    Actors: "Sean Bean, Chris Hemsworth, Victoria Profeta",
    Plot: 'A man meets up with two "good guys" to recover what is unlawfully his, taking them on his whirlwind ride, doing things they never would have imagined, just to survive.',
    Language: "English",
    Country: "United States",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTU3NDI5MDk1OF5BMl5BanBnXkFtZTcwMzY2ODk5NA@@._V1_SX300.jpg",
    Ratings: [{ Source: "Internet Movie Database", Value: "5.9/10" }],
    Metascore: "N/A",
    imdbRating: "5.9",
    imdbVotes: "9,625",
    imdbID: "tt1106860",
    Type: "movie",
    DVD: "17 Aug 2010",
    BoxOffice: "$46,488",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "Cas",
    Year: "2016",
    Rated: "Not Rated",
    Released: "06 Nov 2016",
    Runtime: "50 min",
    Genre: "Drama, Romance",
    Director: "Joris van den Berg",
    Writer: "Bastiaan Tichler",
    Actors: "Kevin Hassing, Wieger Windhorst, Felix Meyer",
    Plot: "In the comedy-drama Cas, Pepijn and Sjors' steady, seven-year relationship is shaken up after they allow a young student named Cas to sleep on their couch until he finds a place of his own. Gradually, both men fall head over heels...",
    Language: "Dutch",
    Country: "Netherlands",
    Awards: "3 wins",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZGE1NjdlMTktMjUzZS00ZmFkLWE4NTAtMmJjMDllNDZiMDA2XkEyXkFqcGdeQXVyNjM3MDI1ODQ@._V1_SX300.jpg",
    Ratings: [{ Source: "Internet Movie Database", Value: "6.4/10" }],
    Metascore: "N/A",
    imdbRating: "6.4",
    imdbVotes: "405",
    imdbID: "tt5858380",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "Cast Away",
    Year: "2000",
    Rated: "PG-13",
    Released: "22 Dec 2000",
    Runtime: "143 min",
    Genre: "Adventure, Drama, Romance",
    Director: "Robert Zemeckis",
    Writer: "William Broyles Jr.",
    Actors: "Tom Hanks, Helen Hunt, Paul Sanchez",
    Plot: "A FedEx executive undergoes a physical and emotional transformation after crash landing on a deserted island.",
    Language: "English, Russian",
    Country: "United States",
    Awards: "Nominated for 2 Oscars. 15 wins & 38 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2Y5ZTU4YjctMDRmMC00MTg4LWE1M2MtMjk4MzVmOTE4YjkzXkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.8/10" },
      { Source: "Rotten Tomatoes", Value: "89%" },
      { Source: "Metacritic", Value: "73/100" },
    ],
    Metascore: "73",
    imdbRating: "7.8",
    imdbVotes: "587,490",
    imdbID: "tt0162222",
    Type: "movie",
    DVD: "06 Nov 2001",
    BoxOffice: "$233,632,142",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
];

const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");




const elementoParaInserirFilmes = document.getElementById('filmes')

exibirFilmesNaTela(filmes)


// imprime na ttela 
function exibirFilmesNaTela(listaDeFilmes) {
  console.log(listaDeFilmes);
  listaDeFilmes.forEach(filme => {

    elementoParaInserirFilmes.innerHTML += `
              <div class="col-md-2 p-2 imagem" id="opem-modal ${filme.imdbID}">
              
                  <img class="img-fluid" id="foto" name="${filme.imdbID}" src="${filme.Poster}" alt="Carregando">
              </div>
              <div id="teste" class="col-md-4 p-2 fs-5 text-muted fw-bold">
              ${filme.Title}
              <div class="col-md-12 estrelas">
              <input type="checkbox" class="form-check-input bg-success" onclick="salvar(${filme.imdbID})" name="curtir" id="${filme.imdbID}" value="checkedValue">
              <label for="curtir" class="curtir text-warning">Like</label>
              </div>
    
              </div>
              <div class="col-md-2 p-2 text-muted">
              ${filme.Runtime}
              </div>
              <div class="col-md-1 p-2 text-muted">
              ${filme.Year}
              </div>
              <div class="col-md-3 p-2 text-muted">
              ${filme.Writer}
              </div>
              <span class="linha"></span>
              <div id="fade" class="hide" onclick="toggleModal()">
              </div>
              <div id="modal" class="">
              </div>
        `
  });
 
}

// setTimeout(()=>{
//   let foto = document.querySelector("#foto");
// console.log(foto);
// },2);
let container = document.querySelector(".container");
let mod = document.getElementById("modal");
let close = document.getElementById("close-modal");

container.addEventListener('click', (event)=>{
  let click = event.target.id;
  if(click == "foto"){
    console.log(event.target.name);
    let filmi = filmes.filter((testes)=>{
      return testes.imdbID === event.target.name;
    })
    console.log(filmi[0].Title);
    mod.innerHTML = ` 
    
    
      <div class="modal-header">
        <h2>${filmi[0].Title}</h2>
        <button id="close-modal">Fechar</button>
      </div>
      <div class="modal-body">
        <p>${filmi[0].Plot}</p>
      </div>
   
    `
  }
})
close.addEventListener(function(){
  console.log("teste")
})




// setTimeout(()=>{
//   let total = filmes.forEach(function(teste){
//     if(teste.imdbID === foto){
//       console.log(teste.Title);
//     }
//   })
//   console.log(total);
// },3000)