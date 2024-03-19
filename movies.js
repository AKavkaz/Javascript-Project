function movieInfo() {
    const id = localStorage.getItem("imdbID");
}
  
movieInfo();

const id = localStorage.getItem("imdbID")

async function movieDesc() {
    const moviesInfo = await fetch(`https://www.omdbapi.com/?i=${localStorage.getItem("imdbID")}&apikey=fbb2e191`)
    let moviesInfoData = await moviesInfo.json()
    if (!Array.isArray(moviesInfoData)) {
        moviesInfoData = [moviesInfoData];
    }

    const movieDescEl = document.querySelector('.container')
    movieDescEl.innerHTML = moviesInfoData.map((movie) => moviesInfoHTML(movie))
    console.log(moviesInfoData)
}
movieDesc()

function moviesInfoHTML(movie) {
    return `<div class="movie__img--wrapper">
    <h1>${movie.Title}</h1>
    <img src="${movie.Poster}" alt="">
</div>
<div class="movie__info--wrapper">
    <h3><span class="red">Released: </span>${movie.Released}</h3>
    <h3><span class="red">Actors: </span>${movie.Actors}</h3>
    <h3><span class="red">Genre: </span>${movie.Genre}</h3>
    <h3><span class="red">Director: </span>${movie.Director}</h3>
    <h3><span class="red">Writer: </span>${movie.Writer}</h3>
    <h3><span class="red">Language: </span>${movie.Language}</h3>
    <h3><span class="red">Plot: </span>${movie.Plot}</h3>
</div>`
}