
// 1.  Ви прийшли в Макдональдз з трьома друзями.
//     Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//     Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//     то виводити в консоль текст "Ми йдемо в інше кафе"
//     (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)


let hamburgersAvailable = 4;
let friesAvailable = 4;

let friends = 5; 

if (hamburgersAvailable >= friends && friesAvailable >= friends) {
    console.log("Ми поїли");
} else {
    console.log("Ми йдемо в інше кафе");
}


// 2.Напишіть умовну інструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
// Результат виводити в консоль.

let price;

price = 200;

if (price >= 1000 && price <= 1900) {
    console.log("The price is between 1000 and 1900")
} else {
    console.log("The price is not between 1000 and 1900");
}
// 3.  Напишіть умовну інструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
//     Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
//     Результат виводити в консоль.


if (price < 1000 || price > 1900) {
    console.log("The price is not between 1000 and 1900")
}

if (!(price >= 1000 && price <= 1900)) {
    console.log("The price is not between 1000 and 1900");
}

// 4.  За номером пори року вивести назву цієї пори року використовуючи інструкцію if-else-if
//     Результат виводити в консоль.

let number;

number = 2;

if (number === 1) {
    console.log('It is a winter!')
} else if (number === 2) {
    console.log('It is a spring!')
} else if (number === 3) {
    console.log('It is a summer!')
} else if (number === 4) {
    console.log('It is an autumn!')
} else {
    console.log('Error!')
}


// 5.  Задано 3 числа (a, b, c), які не рівні між собою.
//     Використовуючи вкладені умовні оператори (інструкції) if визначте середнє між цими трьома числами
//     (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням)
//     Результат виводити в консоль.

let i;
let j;
let k;

i = 110;
j = 200;
k = 153;

if (i > j && i < k || i < j && i > k) {
    console.log(`${i} - average`)
} else if (j > i && j < k || i > j && k > j) {
    console.log(`${j} - average`)
} else if (k > i && k < j || i > k && j > k) {
    console.log(`${k} - average`)
}


// 6.  Задано номер дня тижня.
//     За заданим номером вивести назву дня тижня використовуючи switch.
//     Результат виводити в консоль.

let num = 3;

switch (num) {
    case 1:
        console.log('This is a Monday');
        break;
    case 2:
        console.log('This is a Tuesday');
        break;
    case 3:
        console.log('This is a Wednesday');
        break;
    case 4:
        console.log('This is a Thursday');
        break;
    case 5:
        console.log('This is a Friday');
        break;
    case 6:
        console.log('This is a Saturday');
        break;
    case 7:
        console.log('This is a Sunday');
        break;
    default:
        console.log('This is default output');
        break;
}


// 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.

let a = 3;
let b = 1;
let action;

action = '+';

switch (action) {
    case '+':
        console.log(a + b);
        break;
    case '-':
        console.log(a - b);
        break;
    case '*':
        console.log(a * b);
        break;
    case '/':
        console.log(a / b);
        break;
    default:
        console.log('This is default output');
        break;
}
