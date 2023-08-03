
### Function

```
function sum(a, b = 10) {
    return a + b;
}
```

#### Arrow Function

```
const sumArrow = (a, b = 10) => {
    a + b;
    console.log(a + b)

    return => a + b;
    }
```

```
const sumArrow2 = (a, b = 10) => a + b;

const sumValue = sumArrow(2)

console.log(sumValue)

```

(a, b) =  Parâmetros, se o valor de um parâmetro não é definido retorna NaN.
