// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

// let res = await fetch(`https://www.omdbapi.com/?apikey=3d282f0&s=${search}`);

document.getElementById("wallet").innerText =
  localStorage.getItem("amount") || 0;
let id;
async function searchMovies() {
  try {
    const search = document.getElementById("search").value;

    const res = await fetch(
      `https://www.omdbapi.com/?s=${search}&apikey=4516ab55`
    );

    const data = await res.json();

    const movies = data.Search;

    return movies;
  } catch (error) {
    console.log(error);
  }
}

function AppendMovie(data) {
  document.getElementById("movies").innerHTML = "";

  data.forEach(function (movie) {
    const movieDiv = document.createElement("div");
    movieDiv.style.margin = "10px";
    movieDiv.style.textAlign = "center";

    const img = document.createElement("img");
    img.src = movie.Poster;
    img.style.width = "300px";
    img.style.height = "450px";

    const title = document.createElement("p");
    title.innerText = movie.Title;

    const bookNow = document.createElement("button");
    bookNow.innerText = "Book Now";
    bookNow.class = "book_now";
    bookNow.addEventListener("click", () => {
      watchNow(movie);
    });

    movieDiv.append(img, title, bookNow);

    document.getElementById("movies").append(movieDiv);
  });
}

function watchNow(movie) {
  const watchMovie = {
    title: movie.Title,
    poster: movie.Poster,
    id: movie.imdbID,
  };
  localStorage.setItem("movie", JSON.stringify(watchMovie));
  window.location = "./checkout.html";
}

async function main() {
  let data = await searchMovies();

  if (data === undefined) {
    return false;
  }
  AppendMovie(data);
}

function debounce(func, delay) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    func();
  }, delay);
}
