'use strict';
const numberOfFilms = prompt('Сколько фильмов вы уже просмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}
showFirstMessage('Hello world');
console.log(num);

function calc(a, b) {
    return (a + b);
}
console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));