## Variáveis e Tipos de Dados

No JavaScript existe três formas de declaras variáveis que são: **var**, **let** e **const**.

### Var
_Forma antiga e não recomendável hoje em dia de declarar variáveis, a variável pode ser reatribuída ou redeclarada_

_O escopo de uma variável declarada com ‘var’ é içado (hosting), o que significa que a variável pode ser acessada antes de sua declaração no código._

```
var x = 5;
x = 10; // Reatribuição
var x = 15; // Redeclaração

function exemplo(){
	var y = 20;

    console.log(x);
    console.log(y); 
}
exemplo();

console.log(x);
console.log(y);
```

```
console: 15 // variável global
console: 20 // variável local
```

``` 
console: 15
console: ReferenceError: y is not defined
```


### Let

- Escopo de bloco.
- A variável pode ser reatribuída, mas não pode ser redeclarada no mesmo escopo.
- O escopo de uma variável declarada com ‘**let**’ é limitado ao bloco em que ela é declarada.

```
let x = 5;
x = 10; // Reatribuição
let x = 15; // Erro: SyntaxError: Identifier 'x' has already been declared

if (true) {
  let y = 20;
  console.log(x); // Output: 10
  console.log(y); // Output: 20
}

console.log(x); 
console.log(y); 
```
> console: 10

> console: 20

> console: 10

> console: ReferenceError: y is not defined

### Tipos de Dados - STRING

```
const message = 'Hello World!'

console.log(message.length)
console: 12
```
_Length retorna o número de caracteres ou elementos da estrutura de dados_.



### Tipos de Dados - NUMBER

```
const number = 5;

console.log(10 - number)
console: 5 - Como tipo Number

console.log(10 - number.toString())
```

Tranforma o tipo de dado Number em String
console: 5 - Como String

```

```

console.log(typeof number)
 Mostra qual tipo de dado é
 console: number

console.log(typeof number.toString())
 console: string

### Tipos de Dados - Boolean
Um booleano, e um tipo de dado lógico que pode ter apenas um de dois valores possíveis: **true** ou **false**

```
console.log(2 == 3) 

console: false

console.log(2 == 2) 

console: true

const x = null
 Significa que não tem nenhum valor,tipo vazio;

const y = undefined
 Como se a variável não tivesse sido definida ainda;
```



### Métodos JavaScript

const firstName = 'Breno'
const lastName = 'Ribeiro'

console.log('Meu nome é ' + firstName + ' ' + lastName) 
 Concatenação de string
 console: Meu nome é Breno Ribeiro
 ----------------------------------------------------------------------------------
console.log(`Meu nome é ${firstName} ${lastName}`)
 Template string
 console: Meu nome é Breno Ribeiro
 ----------------------------------------------------------------------------------
console.log(`Meu nome é ${firstName.toUpperCase()} ${lastName}`)
 Letras maiúsculas
 console: Meu nome é BRENO Ribeiro
 ----------------------------------------------------------------------------------
console.log(`Meu nome é ${firstName.toLowerCase()} ${lastName}`)
 Letras minúsculas
 console: Meu nome é breno Ribeiro
 ##################################################################################

  Split - Divide uma String em um Array de Strings de acordo com algum separador
const names = 'Felipe,João,Julia'
console.log(names.split(','))
 console: 
 0:"Felipe"
 1:"João"
 2:"Julia"
 ----------------------------------------------------------------------------------
console.log(names.split(''))
 console: 
 0:"F"
 1:"e"
 2:"l"
 3:"i"
 4:"p"
 5:"e"
 6:","
 7:"J"
 8:"o"
 9:"ã"
 10:"o"
 11:","
 12:"J"
 13:"u"
 14:"l"
 15:"i"
 16:"a"
