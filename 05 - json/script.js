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
//  Convertendo uma variável para JSON 

const todosJSON = JSON.stringify(todos)
console.log(todosJSON)
// console: [{"id":1,"description":"Estudar Programação","isCompleted":false},{"id":2,"description":"Ler","isCompleted":true},{"id":3,"description":"Treinar","isCompleted":true}]


// ------------------------------------------------------------------------------------------

// Convertendo JSON para uma variável

const todoList = JSON.parse(todosJSON)
console.log(todoList)
// console: 
// (3) [{…}, {…}, {…}]
// 0:{id: 1, description: 'Estudar Programação', isCompleted: false}
// 1:{id: 2, description: 'Ler', isCompleted: true}
// 2:{id: 3, description: 'Treinar', isCompleted: true}