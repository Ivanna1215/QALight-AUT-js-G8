// +

// конкатенація рядків
console.log('Hello' + ' ' + 'world'); // Hello world

// додавання чисел
console.log(5 + 5); // 10

console.log(5 + '5'); // 55
console.log(5 + + '5'); // 10

// інкремент та декремент

let incr = 5
decr = 5;

console.log(incr);
console.log(++incr); // 6
console.log(incr++); // 6

console.log(decr);
console.log(--decr); // 4
console.log(decr--); // 4

let a = 10;
b = 10;

console.log(a++); // 10
console.log(a);

console.log(++b); // 11
console.log(b);

// порівняння

console.log(5 > 10); // false
console.log(15 > 10); // true

console.log(10 <= 10); // true
console.log(10 >= 10); // true

// остача від ділення
console.log(5 % 2); // 1

// =
let c = 5; // присвоєння
console.log(5 == 5); // не строге порівняння
console.log(5 === 5); // строге порівняння

console.log(5 == '5'); // true
console.log(5 === '5'); // false

console.log(5 != '5'); // false

// && - логічне І
// || - логічне АБО

let isChecked = true,
    isClosed = false;

console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
console.log(isChecked && isClosed); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log(isChecked || isClosed); // true

console.log(!true); // false
console.log(!false); // true

console.log(isChecked && !isClosed); // true
console.log(!isChecked || isClosed); // false

// Я хочу купити картоплю фрі та гамбургер, якщо обидва товари є в наявності, то я куплю їх і буду ситий

let isPotatoFry = true,
    isHamburger = true;

// console.log(isPotatoFry && isHamburger); // true
//
// isPotatoFry = false;
// console.log(isPotatoFry && isHamburger); // false


isPotatoFry = 5;
isHamburger = 3;

console.log(isPotatoFry && isHamburger); // true

isPotatoFry = false;
console.log(isPotatoFry && isHamburger); // false

// Я хочу купити картоплю фрі та гамбургер, якщо обидва товари є в наявності, то я куплю їх і буду ситий

// let isPotatoFry = true,
//     isHamburger = true;

// console.log(isPotatoFry && isHamburger); // true
//
// isPotatoFry = false;
// console.log(isPotatoFry && isHamburger); // false


let isPotatoFry = 0,
    isHamburger = 5;

if (isPotatoFry && isHamburger) {
    console.log('I will buy both');
}

// Значення що приводяться до false
// 0
// null
// undefined
// ''
// NaN

