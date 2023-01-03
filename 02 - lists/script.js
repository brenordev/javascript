const names = ["Felipe", "João", "Julia", 10, false]

// Acessar elemento da lista
// Toda lista é baseada em 0, todo o primeiro elemento da lista inicia em 0, João é o elemento com indíce 1 da lista
const joao = names[1]
console.log(joao)
// console: João;
// Adiciona um elemento no final da lista
names.push('Pedro')
console.log(names)
//console:  ['Felipe', 'João', 'Julia', 10, false, 'Pedro'

// --------------------------------------------------------------------------------

// Adiciona um elemento no início da lista
names.unshift('Ana')
console.log(names)
// console: ['Ana', 'Felipe', 'João', 'Julia', 10, false, 'Pedro']

// --------------------------------------------------------------------------------

// Remove o último elemento da lista
// names = ['Ana', 'Felipe', 'João', 'Julia', 10, false, 'Pedro']
names.pop()
console.log(names)
// console: ['Ana', 'Felipe', 'João', 'Julia', 10, false]
console.log(names)
// console: ['Ana', 'Felipe', 'João', 'Julia', 10]

// --------------------------------------------------------------------------------

// Mudar valor do elemento da lista
names[3] = 'Gustavo'
console.log(names)
// console: ['Ana', 'Felipe', 'João', 'Gustavo', 10, false]
// --------------------------------------------------------------------------------

//  Verificar o indice do elemento
console.log(names.indexOf('Felipe'))
// console: 1

// --------------------------------------------------------------------------------

// Ordena a lista em ordem alfabética
console.log(names.sort())
// console: [10, 'Ana', 'Felipe', 'Gustavo', 'João', false]

// --------------------------------------------------------------------------------

// Mostra quantos itens uma lista possui
console.log(names.length)
// console: 6