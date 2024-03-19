function openMenu() {
    document.body.classList += " menu--open";
}
  
function closeMenu() {
    document.body.classList.remove("menu--open");
}



const movieListEl = document.querySelector('.movie__wrapper')

async function onSearchChange(event) {
    const searchTerm = event.target.value
    const movies = await fetch(`https://www.omdbapi.com/?apikey=fbb2e191&s=${searchTerm}`)
    const moviesData = await movies.json()
    movieListEl.innerHTML = moviesData.Search.map((movie) => movieHTML(movie)).join('')
}

function movieHTML(movie) {
    return `<div class="movie">
    <div class="movie__img">
        <img src="${movie.Poster}" alt="">
        <div class="movie__content">
            <h1>${movie.Title}</h1>
            <h1>${movie.Year}</h1>
            <p><a onclick="movieInfo('${movie.imdbID}')">MORE INFO</a></p>
        </div>
    </div>
</div>`
}

function movieInfo(imdbID) {
    localStorage.setItem("imdbID", imdbID)
    window.location.href = `${window.location.origin}/movies.html`
}


