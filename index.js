// Variables and Data Types
const movies = [
  { title: "3 Idiots", genre: "Drama", rating: 8.4, releaseYear: 2009 },
  { title: "Dangal", genre: "Biography", rating: 8.3, releaseYear: 2016 },
  { title: "Bahubali", genre: "Action", rating: 8.2, releaseYear: 2015 },
];

// Function Declaration: Add a movie
function addMovie(collection, movie) {
  collection.push(movie);
}

// Adding a new movie using the addMovie function
addMovie(movies, {
  title: "Gully Boy",
  genre: "Drama",
  rating: 7.9,
  releaseYear: 2019,
});

// Function Expression: List movies by genre
const listMoviesByGenre = function (collection, genre) {
  return collection.filter((movie) => movie.genre === genre);
};

// Arrow Function: Find highest-rated movie
const findHighestRatedMovie = (collection) => {
  return collection.reduce((highest, movie) =>
    movie.rating > highest.rating ? movie : highest
  );
};

// Arrays: Use map() to list movie titles
const getMovieTitles = (collection) => collection.map((movie) => movie.title);

// Arrays: Use filter() to find movies released after a year
const moviesAfterYear = (collection, year) => {
  return collection.filter((movie) => movie.releaseYear > year);
};

// this Keyword and Scope - Example within an object
const movieManager = {
  collection: movies,
  showCount: function () {
    console.log(`We have ${this.collection.length} movies in the collection.`);
  },
};

movieManager.showCount();

// Logging Results using Template Literals and Destructuring
console.log("🎬 All Movie Titles:");
getMovieTitles(movies).forEach((title) => console.log(`- ${title}`));

console.log("\n🎭 Drama Movies:");
listMoviesByGenre(movies, "Drama").forEach(({ title, rating }) =>
  console.log(`${title} has a rating of ${rating}`)
);

console.log("\n🌟 Highest Rated Movie:");
const highestRated = findHighestRatedMovie(movies);
console.log(`${highestRated.title} with a rating of ${highestRated.rating}`);

console.log("\n📅 Movies Released After 2010:");
moviesAfterYear(movies, 2010).forEach(({ title, releaseYear }) =>
  console.log(`${title} was released in ${releaseYear}`)
);

console.log("\n📽️ All Movie Details:");
movies.forEach(({ title, genre, rating, releaseYear }) => {
  console.log(
    `${title} (${releaseYear}) is a ${genre} movie with a rating of ${rating}.`
  );
});