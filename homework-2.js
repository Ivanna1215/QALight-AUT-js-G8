// 1.  Ви прийшли в Макдональдз з трьома друзями.
//     Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//     Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//     то виводити в консоль текст "Ми йдемо в інше кафе"
//     (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

function enouqfFood(friends, hamburgersAvailable, friesAvailable) {
    if (hamburgersAvailable >= friends && friesAvailable >= 1) {
        console.log("Ми поїли");
    } else {
        console.log("Ми йдемо в інше кафе");
    }
    return this
}

enouqfFood(5, 3, 5);

// 2.Напишіть умовну інструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
// Результат виводити в консоль.

function checkPrice(price) {
    if (price >= 1000 && price <= 1900) {
        console.log("The price is between 1000 and 1900")
    } else {
        console.log("The price is not between 1000 and 1900");
    }
    return this
}

checkPrice(5000);


// 3.  Напишіть умовну інструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
//     Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
//     Результат виводити в консоль.

function checkPriceSecond(price) {
    if (price < 1000 || price > 1900) {
        console.log("The price is not between 1000 and 1900")
    } else {
        console.log("The price is  between 1000 and 1900")
    }
    return this
}

checkPriceSecond(500);
checkPriceSecond(1200);
checkPriceSecond(5000);

function checkPriceThird(price) {
    if (!(price >= 1000 && price <= 1900)) {
        console.log("The price is not between 1000 and 1900");
    } else {
        console.log("The price is  between 1000 and 1900")
    }
    return this
}

checkPriceThird(999);
checkPriceThird(1001);
checkPriceThird(1900);
checkPriceThird(1901);


// 4.  За номером пори року вивести назву цієї пори року використовуючи інструкцію if-else-if
//     Результат виводити в консоль.

function whatIsTheSeason(number) {
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
    return this
}

whatIsTheSeason(4);

// 5.  Задано 3 числа (a, b, c), які не рівні між собою.
//     Використовуючи вкладені умовні оператори (інструкції) if визначте середнє між цими трьома числами
//     (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням)
//     Результат виводити в консоль.


function averageNum(i, j, k) {
    if (i > j && i < k || i < j && i > k) {
        console.log(`${i} - average`)
    } else if (j > i && j < k || i > j && k > j) {
        console.log(`${j} - average`)
    } else if (k > i && k < j || i > k && j > k) {
        console.log(`${k} - average`)
    }
    return this
}

averageNum(15, 45, 12);

// 6.  Задано номер дня тижня.
//     За заданим номером вивести назву дня тижня використовуючи switch.
//     Результат виводити в консоль.

function whatIsDay(num) {
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
    return this
}

whatIsDay(10);

// 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.

function resultNum(a, b, action) {
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
}

resultNum(5, 6, '*')

// 8. Використовуючи цикл for перемістити значення від 1 до 5 у масив myArray.

function moveNum(startNum, endNum) {
    let myArray = [];
    for (let i = startNum; i <= endNum; i++) {
        myArray.push(`${i}`)
    }
    console.log(myArray)
    return this
}

moveNum(35, 45)

// / 9. Напишіть 2 цикли.
//    За допомогою першого передайте парні числа від 1 до 9 у змінну myArray за допомогою циклу for.
//    За допомогою другого передайте непарні числа від 1 до 9 у змінну myArray за допомогою циклу for.

function addNumberintoArr(startNum, endNum) {

    let myArraySecond = []

    for (let i = startNum; i <= endNum; i++) {
        if (i % 2 == 0) {
            myArraySecond.push(`${i}`)
        }
    }

    console.log(myArraySecond);

    for (let i = startNum; i <= endNum; i++) {
        if (i % 2) {
            myArraySecond.push(`${i}`)
        }
    }

    console.log(myArraySecond);
}

addNumberintoArr(11, 35)


// 10. Оголоcіть та ініціалізуйте змінну total = 0.
//     Використовуйте цикл for, щоб додати значення кожного елемента масиву myArr до підсумку.

function addIntoTotal(arr) {

    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i]
        console.log(`+ ${arr[i]}`)
        console.log(total)
    }
    return this
}

addIntoTotal([15, 20, 10, 40]);

// 11. Напишіть код, котрий виведе в консоль кожен піделемент в arr по одному.

function showEveryNum(arr) {
    for (let elem of arr) {
        for (let insideEl of elem) {
            console.log(insideEl)
        }
    }
    return this
}

showEveryNum([[1, 2], [3, 4], [5, 6]])

// / 12. Доповніть код нижче, так щоб в консоль повертався результат множення усіх чисел у підмасивах arr.
//     Використайте для цього вкладені цикли for.

function multiplicationNum(arr) {

    let total = 1;
    for (let i = 0; i < arr.length; i++) {
        total = total * arr[i]
        console.log(`* ${arr[i]}`)
        console.log(total)
    }
    return this
}

multiplicationNum([5, 2, 10, 4]);


// /** ЗАВДАННЯ 1
//  *
//  * 1. Оголосіть змінну та присвойте їй стрілочну функцію

let sum = (a, b) => console.log(a + b);
sum(5, 6);

//  * 2. У функції не повинно бути параметрів

let noParam = () => console.log('Hello!')

noParam()

//  * 3. Поверніть з функції рядок "Привіт, світ!"

let helloWorld = () => 'Hello  world!'

//  * 4. Викличте функцію та виведіть результат у консоль

console.log(helloWorld());

/** ЗАВДАННЯ 2
 *
 * 1. Виведіть у консоль "Привіт, світ!" із затримкою 5 секунд
 *
 * 2. Використовуйте стрілочну функцію
 */

setTimeout(helloWorld, 2000)

/** ЗАВДАННЯ 3
 *
 * 1. Створіть об'єкт із трьома властивостями та присвойте його значення змінній:
 * - name
 * - surname
 * - favoriteNumber
 *
 * 2. Напишіть функцію, що прийматиме цей обʼєкт як аргумент і
 *     створюватиме в ньому додаткове поле age з довільним значенням.
 * Результат роботи функції це вивід у консоль рядка
 * "My name is <name> <surname>, I'm <age> years old and my favorite number is <favoriteNumber>"
 */

let newOb = [];
newOb.name = 'Ivanna';
newOb.surName = 'Kovaliv';
newOb.favoriteNum = 11;


function showInfoAbotMe(newOb) {
    newOb.age = 25;
    console.log(`My name is ${newOb.name}, I'm ${newOb.age} years old and my favorite number is ${newOb.favoriteNum}`)
}

showInfoAbotMe(newOb)

/** ЗАВДАННЯ 4
 *
 * 1. Створіть масив з кількома елементами таких типів (int, boolean, string)
 *
 * 2. Створіть стрілочну функцію, що прийматиме цей масив як аргумент.
 *
 * 3. В функції замініть елемент масиву з типом int на інший з типом string (використовуйте метод typeof для визначення типу елемента масиву)
 *
 * 4. Поверніть новий масив як результат роботи функції та виведіть його у консоль
 */

let arrElem = [1234567890123456789012345678901234567890n, true, 'I like running']

let res = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(typeof (arr[i]))
        if (typeof (arr[i]) === 'bigint') {
            console.log('Hello')
            arr[i] = 'I do it'
        }
    }
    console.log(arr)
};

res(arrElem)

/** ЗАВДАННЯ 5
 * 1. Є код, який містить виклик функції всередині setTimeout.
 * Цей код зараз викликає помилку, оскільки функція myFn визначена тільки всередині setTimeout.
 *
 * 2. Виправте код таким чином, щоб функцію myFn можна було викликати як всередині setTimeout, так і окремо.
 *
 * 3. Виведіть повідомлення "hello from myFn" двічі: один раз після затримки 2 секунди, і один раз без таймаута.
 *
 * setTimeout(function myFn() {
 *   console.log('hello from myFn');
 * }, 2000);
 *
 * myFn();
 */

function myFn() {
    console.log('hello from myFn');
}

myFn()
setTimeout(myFn, 2000)


/** ЗАВДАННЯ 6
 *
 * 1. Створіть масив із 3 об'єктами "cars"
 *
 * 2. Кожен об'єкт повинен мати три властивості
 * - carBrand (рядок)
 * - price (число)
 * - isAvailableForSale (логічне значення)
 *
 * 3. Створіть функцію, що прийматиме цей масив в якості аргументу.
 *
 * 4. В середині функції додайте ще один такий же обʼєкт в масив.
 *     Не створюйте новий обʼєкт в середині функції, а візьміть його з масиву.
 *
 * 5. Поверніть з функції новий масив. Результат роботи функції виведіть у консоль.
 */

let toyota = { carBrand: 'Toyota', price: 60000, isAvailableForSale: false };
let bmv = { carBrand: 'BMV', price: 80000, isAvailableForSale: false };
let tesla = { carBrand: 'Tesla', price: 80000, isAvailableForSale: false };
let arrCars = [toyota, bmv, tesla]

console.log(arrCars)

function addSameobj(arr) {
    console.log(arr.concat([arr[0]]))
}

addSameobj(arrCars)

/** ЗАВДАННЯ 7
 *
 * 1. Створіть обʼєкт
 *
 const myObject = {
 key1: true,
 key5: 10,
 key3: 'abc',
 key4: null,
 key10: NaN,
 }
 *
 * 2. Створіть функцію, що прийматиме цей обʼєкт як аргумент.
 *
 * 3. У функції реалізуйте логіку: якщо назва властивості (ключ) дорівнює key3 або key10
 *     то виводьте значення властивості в консоль.
 */

const myObject = {
    key1: true,
    key5: 10,
    key3: 'abc',
    key4: null,
    key10: NaN,
}

function showProperty(obj) {
    for (key in obj) {
        if (key === 'key3' || key === 'key10') {
            console.log(obj[key])
        }
    }
    return this
}

showProperty(myObject)



/** ЗАВДАННЯ 8
 *
 * 1. Створіть функцію "findProductById" із двома параметрами:
 * - ID товару
 * - масив товарів
 *
 * 2. Функція повинна повернути товар із певним ID
 *
 * 3. Якщо товару з певним ID у масиві товарів немає,
 * функція має повернути "undefined"
 *
 * 4. Також всередині функції виведіть у консоль товар по ID

 const products = [
 { productId: 1355, name: 'phone' },
 { productId: 5131, name: 'laptop' },
 { productId: 6134, name: 'tablet' },
 ]

 console.log(findProductById(6134, products)) // { postId: 6134, name: 'tablet' }

 console.log(findProductById(4511, products)) // undefined

 */

const products = [
    { productId: 1355, name: 'phone' },
    { productId: 5131, name: 'laptop' },
    { productId: 6134, name: 'tablet' },
]

function findProductById(id, arrProd) {
    switch (id) {
        case 1355:
            console.log('This is a phone');
            break;
        case 5131:
            console.log('This is a laptop');
            break;
        case 6134:
            console.log('This is a tablet');
            break;
        default:
            console.log('undefined');
            break;
    }
    return this
}

findProductById(11325, products)

findProductById(1355, products)


/** ЗАВДАННЯ 9
 *
 * 1. Створіть функцію "arraySortInfo" з одним параметром - "inputArray", та реалізуйте наступну логіку
 *
 * 2. Якщо хоча б один елемент у масиві не є числом – повернути "Деякі елементи не є числами"
 *
 * 3. Якщо числа у масиві відсортовані за зростанням - повернути "Масив відсортований за зростанням"
 *
 * 4. Якщо числа в масиві відсортовані за спаданням - повернути "Масив відсортований за спаданням".
 *
 * 5. Якщо масив не відсортований - повернути "Масив не відсортований"
 */

/*  const a = [5, 'abc', 10, 1]
 const b = [4, 10, 14, 25, 25, 50]
 const c = [150, 132, 80, 40]
 const d = [15, 26, 10, 23, 85]

 console.log(arraySortInfo(a)) // Деякі елементи не є числами
 console.log(arraySortInfo(b)) // Масив відсортований за зростанням
 console.log(arraySortInfo(c)) // Масив відсортований за спаданням
 console.log(arraySortInfo(d)) // Масив не відсортований */

/**
 * ПІДКАЗКИ
 *
 * Підказка 1: Використовуйте метод масивів "every"
 * Підказка 2: Ви повинні використовувати два параметри в колбек функції "element", "index"
 * Підказка 3: Кожен елемент масиву, крім першого, слід порівнювати з попереднім
 */

const a = [5, 'abc', 10, 1];
const b = [4, 10, 14, 25, 25, 50];
const c = [150, 132, 80, 40];
const d = [15, 26, 10, 23, 85];


function arraySortInfo(inputArray) {
    for (let i = 0; i < inputArray.lenght; i++) {
        const notNumber = typeof (inputArray[i]) != 'number'
    }

    return this
}

function arraySortInfo(inputArray) {
    if (!inputArray.every(element => typeof element === 'number')) {
        return "Деякі елементи не є числами";
    }

    const isAscending = inputArray.every((element, index) => {
        return index === 0 || inputArray[index - 1] <= element;
    });

    const isDescending = inputArray.every((element, index) => {
        return index === 0 || inputArray[index - 1] >= element;
    });

    if (isAscending) {
        return "Масив відсортований за зростанням";
    } else if (isDescending) {
        return "Масив відсортований за спаданням";
    } else {
        return "Масив не відсортований";
    }
}


console.log(arraySortInfo(a)); 
console.log(arraySortInfo(b));
console.log(arraySortInfo(c)); 
console.log(arraySortInfo(d)); 




