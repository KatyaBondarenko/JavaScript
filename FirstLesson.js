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



var arrayConvert = fibonacciCounter(40).map(function(num){

    if (num % 2 === 0) {

        return num = num - 2;
    }

    else {

       return num = num - 4;
    }

});

console.log(arrayConvert);


// Посчитать среднее значение чётных и не четных преобразованных чисел.


var filteredArrayToEven = arrayConvert.filter(function(value){

    if (value % 2 === 0) {

        return value;
    }

});

console.log(filteredArrayToEven);


var filteredArrayToOdd = arrayConvert.filter(function(value){

    if (value % 2 !== 0) {

        return value;
    }

});

console.log(filteredArrayToOdd);


var arr = arrayConvert;



var reducer = function (a, b) {


    return (a + b);

};



var totalEven = filteredArrayToEven.reduce(reducer, 0);

console.log(filteredArrayToEven.reduce(reducer, 0));

var totalOdd = filteredArrayToOdd.reduce(reducer, 0);

console.log(filteredArrayToOdd.reduce(reducer, 0));


console.log(totalEven/filteredArrayToEven.length);
console.log(totalOdd/filteredArrayToOdd.length);
