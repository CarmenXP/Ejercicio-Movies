import {movies} from "./data/movies.js";

let getMovies= movies;
console.log(getMovies);
let lauchCard= document.querySelector("#root");

function getMovieByYear(year){
    let list= getMovies.movies.filter((movie)=>movie.year===year);
    console.log(list)
    
    list.forEach(movie=>{
        let cards= document.createElement("div");
        cards.classList.add("card");
        cards.innerHTML=
        `
        <div class="container">
        <h3>${movie.title}</h3>
        <p>${movie.year}</p>
        <p>${movie.director}<p/>
        </div>
        `
        lauchCard.appendChild(cards)

    })
   
}
 getMovieByYear(1991);



/*function draw(){
    lauchCard.innerHTML="";
getMovies.movies.forEach(movie => {
    let cards= document.createElement("div");
    cards.classList.add("card");
    cards.innerHTML=
    `
    <div class="container">
    <h3>${movie.title}</h3>
    <p>${movie.year}</p>
    <p>${movie.director}<p/>
    </div>
    `
    lauchCard.appendChild(cards)
    
});
}
draw()*/