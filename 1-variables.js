let number = 5;
const userScore = 100;

// let 5number = 5; // SyntaxError: Unexpected number
// let user-score = 100; // SyntaxError: Unexpected token '-'
// let user score = 100; // SyntaxError: Unexpected identifier
// let *number = 5; // SyntaxError: Unexpected token '*'

// camelCase - змінні
// snake_case - змінні
// UPPER_SNAKE_CASE - константи
// PascalCase - класи
// kebab-case - паттерн іменування для директорій

//Виведення значення змінної в консоль
console.log(12);
console.log(number);

// Перезапис значення змінної
let number = 5;
const userScore = 100;

// console.log(number);
// number = 10;
// console.log(number);

console.log(userScore);
userScore = 200;
console.log(userScore);

// Прямих констант в JS немає

const obj = {
    a: 1,
    b: 2,
    c: 3,
}

console.log(obj);

// obj = 10;
//
// console.log(obj);

obj.a = 10;

console.log(obj);

// var - старий спосіб оголошення змінних
var a = 5;

// Як let і var працюють з областю видимості

let a;
console.log(a);
a = 10;

console.log(b);
var b = 5;

{
  let result = 5;
  console.log(result);
}
console.log(result);

{
    var result = 5;
    console.log(result);
}
console.log(result);

// const a = 3000;
// const b = 2000;
//
// // 100 code lines later
//
// console.log("Довжина авто: " + a + " мм, ширина авто: " + b + " мм");


// const length = 3000;
// const width = 2000;
//
// // 100 code lines later
//
// console.log("Довжина авто: " + length + " мм, ширина авто: " + width + " мм");

// Приклад гарного іменування змінних
const vehicleBodyLength = 3000;
const vehicleBodyWidth = 2000;

// 100 code lines later

console.log("Довжина авто: " + vehicleBodyLength + " мм, ширина авто: " + vehicleBodyWidth + " мм");

// Приклад поганого іменування змінних одна і та ж сутність названа по-різному
const carBodyLength = 3000;
const machineBodyWidth = 2000;
console.log("Довжина авто: " + carBodyLength + " мм, ширина авто: " + machineBodyWidth + " мм");
