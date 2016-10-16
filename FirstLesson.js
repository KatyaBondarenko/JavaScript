var elemFibonacci = 40;
var fibonacci;
var arrEven = [];
var arrNotEven = [];
var sum = 0;
var number = 0;

// Находим последовательность чисел Фибоначчи указанного индексом

function fibonacci(n) {
    fibonacci = [0, 1];
    for (var i = 2; i <= n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci;
}
fibonacci(elemFibonacci);


// фильтруем четные и нечетные значения массива

function getArr(a) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] % 2 === 0) {
            arrEven[i] = a[i] - 2;
        } else if (a[i] % 2 === 1) {
            arrNotEven[i] = a[i] - 4;
        }
    }
}
getArr(fibonacci);

// получаем сумму элементов массива

function getSum(a, b) {
    sum = a.reduce(function(a, b) {
        return a + b;
    });
    return sum;
}

getSum(arrEven);
getSum(arrNotEven);

// Получаем кол-во чисел в массиве 

function getArrNumber(a) {
    number = 0;
    for (var i = 0; i < a.length; i++) {
        if (typeof a[i] === 'number') {
            number++;
        }
    }
    return number;
}
getArrNumber(arrEven);
getArrNumber(arrNotEven);

// Находим среднее значение каждого массива

var averageEven = getSum(arrEven) / getArrNumber(arrEven);
var averageNotEven = getSum(arrNotEven) / getArrNumber(arrNotEven);

console.log(averageEven);
console.log(averageNotEven);
