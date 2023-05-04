/*
Створити ф-ю HOF 😜 cachebleProcess(cb) задача якого оптимізувати виклики ф-й з однаковими параметрами (наприклад для якихось обчислень) приклад:

factorial(3) => 6
factorial(3) => 6

Приклад вище демонструє виклик ф-ї factorial з одним і тим самим параметром, тобто двічі виконалось обчислення одного і того самого.
Покращмо таку реалізацію, шляхом кешування обчислень, приклад:

const memoFactorial = cachebleProcess(factorial);

memoFactorial(3) ⇒ calculate => 6
memoFactorial(3) => receive value from cache => 6  
*/

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

function cacheableProcess(cb) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    
    if (!cache.hasOwnProperty(key)) {
      cache[key] = cb.apply(null, args);
    }

    return cache[key];
  };
}

function metricsDecorator(callback) {
  return function () {
    const startTime = performance.now();
    const result = callback.apply(this, arguments);
    const endTime = performance.now();
    const duration = endTime - startTime;
    console.log(`Duration: ${duration}ms`);
    return result;
  };
}

const memoFactorial = cacheableProcess(factorial);

const memoFactorialWithMetrics = metricsDecorator(memoFactorial);

console.log(memoFactorialWithMetrics(8000));
console.log(memoFactorialWithMetrics(8000));