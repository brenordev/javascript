
// Formas de declarar variáveis:
// var = Forma antiga e não recomendável hoje em dia de declarar variáveis;

// Forma mais modernas de declarar variáveis
// let = É possível alterar a variaável;
// const = Não é possível alterar a variável;

// Variáveis e Tipos de Dados - STRING
const message = 'Hello World!'
console.log(message.length)
// Retorna o número de caracteres;
// console: 12
// ----------------------------------------------------------------------------------
//Variáveis e Tipos de Dados - NUMBER
const number = 5;
console.log(10 - number)
// console: 5 - Como tipo Number

console.log(10 - number.toString())
// Tranforma o tipo de dado Number em String
// console: 5 - Como String

console.log(typeof number)
// Mostra qual tipo de dado é
// console: number

console.log(typeof number.toString())
// console: string
// ----------------------------------------------------------------------------------
//Variáveis e Tipos de Dados - BOOLEAN
false
true
console.log(2 == 3) // 2 É IGUAL A 3
// console: false

console.log(2 == 2) // 2 É IGUAL A 2
// console: true

const x = null
// Significa que não tem nenhum valor,tipo vazio;

const y = undefined
// Como se a variável não tivesse sido definida ainda;
// ----------------------------------------------------------------------------------

// MÉTODOS JAVASCRIPT

const firstName = 'Breno'
const lastName = 'Ribeiro'

console.log('Meu nome é ' + firstName + ' ' + lastName) 
// Concatenação de string
// console: Meu nome é Breno Ribeiro
// ----------------------------------------------------------------------------------
console.log(`Meu nome é ${firstName} ${lastName}`)
// Template string
// console: Meu nome é Breno Ribeiro
// ----------------------------------------------------------------------------------
console.log(`Meu nome é ${firstName.toUpperCase()} ${lastName}`)
// Letras maiúsculas
// console: Meu nome é BRENO Ribeiro
// ----------------------------------------------------------------------------------
console.log(`Meu nome é ${firstName.toLowerCase()} ${lastName}`)
// Letras minúsculas
// console: Meu nome é breno Ribeiro
// ##################################################################################

//  Split - Divide uma String em um Array de Strings de acordo com algum separador
const names = 'Felipe,João,Julia'
console.log(names.split(','))
// console: 
// 0:"Felipe"
// 1:"João"
// 2:"Julia"
// ----------------------------------------------------------------------------------
console.log(names.split(''))
// console: 
// 0:"F"
// 1:"e"
// 2:"l"
// 3:"i"
// 4:"p"
// 5:"e"
// 6:","
// 7:"J"
// 8:"o"
// 9:"ã"
// 10:"o"
// 11:","
// 12:"J"
// 13:"u"
// 14:"l"
// 15:"i"
// 16:"a"
