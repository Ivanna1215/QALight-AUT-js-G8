/*
* Типи даних
*
* Прості типи або примітиви:
* - string
* - number
* - boolean
* - undefined
* - null
* - symbol
* - bigint
*
* Об'єкти:
* - object
* - array
* - function
* - date
* - regexp
* - error
* */

// number
let number = 5;
let floatNumber = 5.5;

console.log(4/ 0); // Infinity
console.log(-4/ 0); // -Infinity

console.log("Hello" / 2); // NaN

// boolean
let isOnline = true;


// null vs undefined
// console.log(something); // undefined

let emptyValue = null;
console.log(emptyValue);

let undef;
console.log(undef);

// object

let user = {};

let human = {
    name: "Bob",
    age: 25,
    isMale: true,
    languages: ["ukr", "eng"]
};

console.log(human);
// or

let human2 = new Object();
human2.name = "John";
human2.age = 25;
human2.isMale = true;
human2.languages = ["ukr", "eng"];

console.log(human2);

// Accessing object properties
console.log(human2.age);
console.log(human2.name);
console.log(human2.isMale);
console.log(human2.languages);
console.log(human2.languages[0]);
console.log(human2.languages[1]);

// конкатенація
console.log("Ім'я: " + human2.name + ", Вік: " + human2.age + ", Чоловік: " + human2.isMale + ", Мови: " + human2.la

// інтерполяція
console.log(`Ім'я: ${human2.name}, Вік: ${human2.age}, Чоловік: ${human2.isMale}, Мови: ${human2.languages}`);

let endpoint = "/users";
console.log(`https://api.example.com${endpoint}`);  // https://api.example.com/users

// array
//         індекси елементів           0    1  2     3    4          5         6
let arr = ["ukr", 6, {}, true, null, undefined, [1, 2, 3]];

console.log(arr[0]); // ukr
console.log(arr[1]); // 6
console.log(arr[2]); // {}
console.log(arr[3]); // true
console.log(arr[4]); // null
console.log(arr[5]); // undefined
console.log(arr[6]); // [1, 2, 3]
console.log(arr[6][0]); // 1
console.log(arr[6][1]); // 2
console.log(arr[6][2]); // 3


// Чому масив є об'єктом?

let numArr = [1, 2, 3];
let numObj = {a: 1, b: 2, c: 3};

// console.log(numObj.a)
// console.log(numArr[0])

let salaries = {
    Ann: 160,
    Pete: 130
}

let salaryArr = ['Ann', 160, 'Pete', 130];

let someArr = [1, 2, 3, 4];

let someArrObj = {
    0: 1,
    1: 2,
    2: 3,
    3: 4
}

console.log(someArr[0]);
//console.log(someArrObj.0);
console.log(someArrObj[0]);

let person = {
    name: "Bob",
    age: 25,
    isMale: true,
    languages: ["ukr", "eng"]
}

console.log(person.name);
console.log(person['name']);

// доступ до елементів об'єкта
// JSONPath

let someObject = {
    a: 1,
    b: 2,
    c: {
        d: { e: 4 },
        e: [1, 2, 3]
    }
}

console.log(someObject);
console.log(someObject.a);
console.log(someObject.c.d.e);
console.log(someObject.c.e[1]);

// Властовості та методи типу string
let someText = " Hello, World! ";
console.log(someText.length); // властивість типу string, яка показує довжину рядка
console.log(someText.substring(0, 6)); // метод типу string, який повертає підрядок від 0 до 6 символу
console.log(someText.trim()); // метод типу string, який видаляє пробіли з початку і кінця рядка
console.log(someText.toUpperCase()); // метод типу string, який перетворює рядок в верхній регістр
console.log(someText.toLowerCase()); // метод типу string, який перетворює рядок в нижній регістр
console.log(someText.indexOf('o')); // метод типу string, який повертає індекс першого знайденого символу
console.log(someText.slice(0, 6)); // метод типу string, який повертає підрядок від 0 до 6 символу
console.log(someText[1]); // доступ до символу по індексу
console.log(someText.replace('Hello', 'Hi')); // метод типу string, який замінює один рядок на інший


// Властовості та методи типу array
let someArr = [];

console.log(someArr);

someArr.push('Hello');
someArr.push('world');

console.log(someArr);
console.log(someArr.length); // властивість типу array, яка показує кількість елементів в масиві
console.log(someArr.join(' ')); // метод типу array, який об'єднує всі елементи масиву в один рядок
console.log(someArr.pop()); // метод типу array, який видаляє останній елемент масиву і повертає його

// Властовості та методи типу number
let someNumber = 5;
let someFloatNumber = 5.1245674679;

console.log(someNumber.toString()); // "5"
console.log(someFloatNumber.toFixed()); // "5"
console.log(someFloatNumber.toFixed(3)); // "5.125"
console.log(Math.round(someFloatNumber)); // 5


let resolutoin = "12.2px";

console.log(parseFloat(resolutoin)); // дістаємо число з рядка
console.log(parseInt(resolutoin)); // дістаємо ціле число з рядка
