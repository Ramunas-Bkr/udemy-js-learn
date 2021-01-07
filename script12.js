// Užduotis Nr 1
// 1.) sukurti kintamąjį numberOfFilms ir jame patalpinti atsakymą į vartotojo klausimą:
// "Kiek filmų jūs pažiūrėjote?"
// 2.) sukurti objektą personalMovieDB ir jame patalpinti šias savybes:
// - count - čia talpinamas atsakymas į pirmą klausimą
// - movies - tuščias objektas
// - actors - tuščias objektas
// - genres - tuščias masyvas
// - privat - čia patalpinti boolean reikšmę false
// 3.) Užduokite vartotojui po 2 kartus šiuos klausimus:
//      - "Vienas iš paskutinių matytų filmų?"
//      - "Koks filmo vertinimas?"
// atsakymus reikia patalpinti į atskirus kintamuosius.
// Įrašyti atsakymus į objektą movies tokiu formatu:
//      movies: {
//          'logan': '8.1'
// }
// Patikrinti, kad viskas veiktų be klaidų konsolėje

// Užduotis Nr2
// 1.) Panaudojus ciklą automatizuoti klausimus vartotojui apie filmus
// 2.) Padaryti taip, kad vartotojas negalėtų palikti atsakymą kaip tuščia eilutė, atšaukti atsakymą ar
// įvesti pavadinimą, ilgesnį nei 50 žodžių. Jei taip įvyksta, gražiname vartotoją prie klausimų.
// 3.) Su sąlygų operatoriumi patikrinti personalMoviesDB.count reikšmę:
//      a.) jei count mažiau už 10 konsolėje išvesti užrašą: "Pažiūrėjai nedaug filmų"
//      b.) jei count tarp 10 ir 30 konsolėje išvesti užrašą: "Esi klasiškas žiūrovas"
//      c.) jei reikšmė didesnė nei 31 išvesti "Tu esi kinomianiakas"
//      kitais atvejais konsolėje išvesti "Klaida" 

'use strict';

const numberOfFilms = prompt('How much movie have you seen?', '');

let personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('One of the last movies whar you watched', ''),
        b = prompt('Movie evaluation', '');
    
    if (a != null && a != '' && a.length < 50 && b != null && b != '') {
        personalMoviesDB.movies[a] = b;
    } else {
        i--;
    }
}

console.log(personalMoviesDB);

if (personalMoviesDB.count < 10) {
    console.log('You watched few movies!');
} else if (personalMoviesDB.count < 31) {
    console.log('You are classic spectator');
} else if (personalMoviesDB.count > 31) {
    console.log('You cinemaniac');
} else {
    console.log('Error');
}