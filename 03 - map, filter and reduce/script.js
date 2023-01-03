// MAP - Executa uma determinada função em cada item da lista e retorna uma nova lista com a função executada

const number = [ 1, 2, 3, 4, 5]

const numbersMultipliedByTwo = number.map(function(number){
    return number * 2;
})
// Retorna todos os números da lista multiplicado por 2
console.log(numbersMultipliedByTwo)
// console: [2, 4, 6, 8, 10]

// ----------------------------------------------------------------------------------------------------------
// FILTER - Filtra a lista e retorna uma lista nova baseada no filtro aplicado

const ages = [8, 13, 27, 30, 22, 40]

const evenAges = ages.filter(function(age){
    return age % 2 === 0;
})
// Retorna somente idades que são pares
console.log(evenAges)
// console: [8, 30, 22, 40]

// ----------------------------------------------------------------------------------------------------------
// Reduce - Reduzir todos os valores de uma lista para um só

// const ages = [8, 13, 27, 30, 22, 40]

const sumOfAges = ages.reduce(function(age, accumulator){
    return accumulator + age
}, 0)

console.log(sumOfAges)
// console: 140
