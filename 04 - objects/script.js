const person = {
    firstName: 'Breno',
    lastName: 'Ribeiro',
    age: 22,
    hobbies: ['Jogar futebol', 'Ouvir música', 'Ler'],
    dog: {
        name: 'Simba',
        age: 4
    }
}
// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
// const hobbies = person.hobbies;

// console.log(firstName)
// console: Breno
// console.log(lastName)
// console: Ribeiro
// console.log(age)
// console: 22
// console.log(hobbies)
// console: ['Jogar futebol', 'Ouvir música', 'Ler']
const read = person.hobbies[2]
console.log(read)
// console: Ler

// ---------------------------------------------------------------------------------------
// DESTRUCTURING

// + propriedade renomeda = primeiroNome
const {firstName: primeiroNome, lastName, age, hobbies, dog: {name: dogName}} = person

console.log(primeiroNome)
// console: Breno
console.log(lastName)
// console: Ribeiro
console.log(age)
// console: 22
console.log(hobbies)

// Adicionando uma propriedade ao objeto

// person.dog = 'Simba'
console.log(person)
// console: {firstName: 'Breno', lastName: 'Ribeiro', age: 22, hobbies: Array(3), dog: 'Simba'}

// Usando objetos dentro de um objeto
console.log(person.dog.age)
// console: 4

console.log(dogName)
// console: Simba

// ---------------------------------------------------------------------------------------

const todos = [
    {   
        id: 1,
        description: "Estudar Programação",
        isCompleted: false,
    },
    {   
        id: 2,
        description: "Ler",
        isCompleted: true,
    },
    {   
        id: 3,
        description: "Treinar",
        isCompleted: true,
    },
]

//  Acessar o último item da lista e mostrar elemento description
const descriptionOfLastTodo = todos[2].description;
console.log(descriptionOfLastTodo)
// console: Treinar