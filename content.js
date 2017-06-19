/**
 * Created by Lincoln on 6/19/2017.
 */

/*
function say(word) {
    console.log('Hero: ' + word + '.');
}

function executer(someFunction, value) {
    someFunction(value);
}

executer(say, 'Hello World');

function eat(food) {
    console.log('Hero: ' + food + '.');
}

executer(eat, 'apple');

*/

function executer(someFunction, value) {
    someFunction(value);
}

executer(function (word) {
    console.log('say:' + word);
}, 'Hello');

executer(function (food) {
    console.log('Someone eat ' + food);
}, 'banana');

executer(function (film) {
    console.log('Somebody seeing ' + film)
}, 'Good film.');