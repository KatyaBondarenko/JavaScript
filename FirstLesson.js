// Найти первые 40 чисел Фибоначи.

function fibonacciCounter(num) {

    var fibonacci = [1, 1];

    for (i = 2; i < num; i++) {

        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci;

}

console.log(fibonacciCounter(40));


// Преобразовать найденные числа. Если число чётное, то отнимаем 2. Если число нечётное, то отнимаем от него 4.

function arrayConvert(arr) {

    var length = arr.length;

    for (i = 0; i < length; i++) {

        if (arr[i] % 2 === 0) {

            arr[i] = arr[i] - 2;
        }

        else {

            arr[i] = arr[i] - 4;
        }
    }

    return arr;
}

console.log(arrayConvert(fibonacciCounter(40)));


// Посчитать среднее значение чётных и не четных преобразованных чисел.

var arr = arrayConvert(fibonacciCounter(40));

var evenCount = 0;
var oddCount = 0;

var reducerEven = function (a, b) {

    var c = 0;

    if (b % 2 === 0) {

        c = b;

        evenCount++;
    }
    return (a + c);

};

var initialValue = 0;

var totalEven = arr.reduce(reducerEven, initialValue);

console.log(totalEven);

var reducerOdd = function (a, b) {

    var c = 0;

    if (b % 2 !== 0) {

        c = b;
        oddCount++;
    }
    return (a + c);
};

var initialValue = 0;

var totalOdd = arr.reduce(reducerOdd, initialValue);

console.log(totalOdd);

console.log(totalEven / evenCount);
console.log(totalOdd / oddCount);