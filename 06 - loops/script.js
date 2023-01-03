for (let index = 0; index < 10; index++){
    console.log(index)

// console
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

// Executa o console log enquanto o index for menor do que 10,
//  a cada execução é adicionado +1 ao valor da index inicinado do 0 até o 9
}

const cars = ["Ferrari", "Tesla", "Mercedes"]

    // for (let i = 0; i < cars.length; i++){
    //     console.log(cars[i])
    // }
// console: 
// Ferrari
// Tesla
// Mercedes
// ------------------------------------------------------------------------------------

// Para cada carro na lista de carros irá logar o carro

// for (let car of cars){
//     console.log(car)
// }

// ------------------------------------------------------------------------------------

//  FOREACH - 

// Diferença do forEach que tem como segundo parâmentro a index, o número da executação atual
cars.forEach(function(car, index){
    console.log(car)
    console.log(index)

// console: 
// Ferrari
// 0
// Tesla
// 1
// Mercedes
// 2
})

// ------------------------------------------------------------------------------------
// WHILE - Enquanto

let index = 0 

while (index < 10) {
console.log('Index é menor que 10')

// index = index + 1;
// index += 1;
index++;
}


// FOR IN LOOP
const person = {
    name: 'Jane',
    age: 21
}

for (propery in person){
    console.log(person[propery])

// console: 
// Jane
// 21
}
