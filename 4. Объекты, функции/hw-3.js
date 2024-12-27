// Базовое
//Задание 1 – Создать объект counter всеми возможными способами;

let counter = {};
let counter2 = new Object();
let counter3 = Object.create({});
let counter4 = Object.assign({}, counter3);

//Задание 2 – Скопировать объект counter всеми возможными способами;

let copyCounter = Object.assign({}, counter);

let copyCounter2 = {}
for (let key in counter) {
    copyCounter2[key] = counter[key]
}

let copyCounter3 = JSON.parse(JSON.stringify(counter));

let copyCounter4 = {}
copyCounter4 = {...counter}

//Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами; 

function makeCounter() {
    console.log(counter);
}

const makeCounter2 = function() {
    console.log(counter);
}

const makeCounter3 = function makeCounterThird() {
    console.log(counter);
}

const makeCounter4 = () => console.log(counter);

(function() {
    console.log(counter);
})();

// Продвинутое:
//Задание 1 – Развернуть строку в обратном направлении при помощи методов массивов:

function reverseStr(str) {
    return str.split('').reverse().join('');
}

//Задание 2– Написать функцию глубокого сравнения двух объектов:

const Z = { here: { is: "on", other: "3" } }
const obj1 = { here: { is: "on", other: "3" }, object: Z };
const obj2 = { here: { is: "on", other: "2" }, object: Z };

const deepEqual = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
};

