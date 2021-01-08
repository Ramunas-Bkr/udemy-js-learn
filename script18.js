'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How much movie have you seen?', '');
    while (numberOfFilms == '' || numberOfFilms == undefined || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How much movie have you seen?', '');
    }
}
start();

let personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyMovies() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('One of the last movies whar you watched', ''),
            b = prompt('Movie evaluation', '');

        if (a != null && a != '' && a.length < 50 && b != null && b != '') {
            personalMoviesDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        const g = prompt(`Your favorite genre with number ${i + 1} is:`, '');
        personalMoviesDB.genres[i] = g;
    }
}

rememberMyMovies();
writeYourGenres();

function showMyDB() {
    if (!personalMoviesDB.private) {
        console.log(personalMoviesDB);
    } else {
        console.log('Personal Movie DB is private');
    }
}

showMyDB();

function detectPersonalLevel() {
    if (personalMoviesDB.count < 10) {
        console.log('You watched few movies!');
    } else if (personalMoviesDB.count < 31) {
        console.log('You are classic spectator');
    } else if (personalMoviesDB.count > 31) {
        console.log('You cinemaniac');
    } else {
        console.log('Error');
    }
}

detectPersonalLevel();

