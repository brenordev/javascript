const sum = 1 + 3

if(sum === 2) {
    console.log("Sum is 2!")
} else if (sum === 3){
    console.log('Sum is 3!')
} else {
    console.log("Sum is not a 2!")
}

// ----------------------------------------------------------
// OPERADORES AND (&&) E OR (||)

// && - AND
// || - OR

const sum1 = 2 + 2 ;
const sum2 = 3 + 10 ;
    if(sum1 === 4 && sum2 === 6){
    console.log('Sum1 is 4 and Sum2 is 6')
    // console: Sum1 is 4 and Sum2 is 6
}
    if(sum1 === 4 || sum2 === 6){
    console.log('Sum1 is 4 and Sum2 is 6')}

// ----------------------------------------------------------
// TERNARY OPERATOR

let number = sum === 2 ? 2 : 4;
// Leia-se number igual sum é igual a 2 ?
// Se sim, number recebe 2 
// Se não, number recebe 4


    if(sum === 2){
        number = 2
    } else {
        number= 4
    }
    console.log(number)
    // console: 4

// ----------------------------------------------------------
// SWITCH CASE

const car = "Tesla";

    switch(car) {
        case "Mercedes":
            console.log('Mercedes is beatiful!')
            break;
        case 'Ferrari':
            console.log('Ferrari is very red!')
            break;
        case 'Tesla':
            console.log('Tesla is very smart!')
            break;
    }
// Necessário o uso do break para que o script não execute mesmo já tendo um critério correspondido;


