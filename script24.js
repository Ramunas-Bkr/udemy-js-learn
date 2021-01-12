'use strict';

let personalMoviesDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        this.count = +prompt('How much movie have you seen?', '');
        while (this.count == '' || this.count == undefined || isNaN(this.count)) {
            this.count = +prompt('How much movie have you seen?', '');
        }
    },
    rememberMyMovies: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('One of the last movies whar you watched', ''),
                b = prompt('Movie evaluation', '');

            if (a != null && a != '' && a.length < 50 && b != null && b != '') {
                this.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (this.count < 10) {
            console.log('You watched few movies!');
        } else if (this.count < 31) {
            console.log('You are classic spectator');
        } else if (this.count > 31) {
            console.log('You cinemaniac');
        } else {
            console.log('Error');
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 1; i++) {
            const g = prompt(`Add Your favorite genres separated by commas`, '');
            if (g == "" || g == null) {
                console.log('Please introduce correct answer');
                i--;
            } else {
                personalMoviesDB.genres = g.split(', ');
            }
        }
        this.genres.forEach((item, i) => {
            console.log(`Your favorite genre with number ${i + 1} is: ${item}`);
        });
    },
    toogleVisibleDB: function () {
        if (this.private) {
            this.private = false;
        } else {
            this.private = true;
        }
    },
    showMyDB: function () {
        if (!personalMoviesDB.private) {
            console.log(personalMoviesDB);
        } else {
            console.log('Personal Movie DB is private');
        }
    }
};
