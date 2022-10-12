
// const elemList = document.querySelector('ul.list').firstElementChild.textContent;//из первого элемента текст
// const elemListEnd = document.querySelector('ul.list').lastElementChild.textContent;//из последнего элемента текст

// console.log(elemList);
// console.log(elemListEnd);


//задача 14-48 Метод принимает массив слов и возвращает новый массив из длины этих слов

const planets = ["Earth", "Mars", "Venus", "Jupiter"];
let planetsLengths = [];
planets.map(elem => planetsLengths.push(elem.length));

    // console.log(element);
    // console.log(element.length);
console.log(planetsLengths);

//лучший вариант

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);

