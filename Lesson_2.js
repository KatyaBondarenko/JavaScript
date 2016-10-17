//1. Написать функцию `isPowerOfTwo`, которая указывает, является ли аргумент степенью двойки.
  //  Возвращает `true` или `false`. Реализовать с помощью рекурсии. Пример:
// isPowerOfTwo(1024); // true
// isPowerOfTwo(1023); // false


function isPowerOfTwo(n){

    if (n === 2){

        return true;
    }

    if (n%2 === 0)
    {
        var c  = n/2;

        return isPowerOfTwo(c);
    }
    if (n%2 !== 0){

        return false;
    }

}

console.log(isPowerOfTwo(14));


//2. Написать функцию `increment`, которая возвращает аргумент увеличеный на еденицу и количество вызовов функции.
// Сделать с помощью замыкания, в глобальной области видимости должна быть только переменная `increment`. Пример:
// increment(10); // { value: 11, calls: 1}
// increment(14); // { value: 15, calls: 2}


function increment(a){

    a++;

    var currentCount = 1;

    return (function() {

        currentCount++;

        return { value: a, calls: currentCount};

    })();

}

console.log(increment(10));
console.log(increment(14));
console.log(increment(55));








