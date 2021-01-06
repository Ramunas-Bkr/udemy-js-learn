const numberOfFilms = prompt('How much movie have you seen?', 'Number');

let personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('One of the last movies whar you watched', ''),
    b = prompt('Movie evaluation', 'score from 1 to 10'),
    c = prompt('One of the last movies whar you watched', ''),
    d = prompt('Movie evaluation', 'score from 1 to 10');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);