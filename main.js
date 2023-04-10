/*
 Створити ф-ю декоратор const analysePerfomace= metricsDecorator(someFunctionCallback);
Виклик const time = analysePerfomace(); повинен виміряти скільки часу(у mls) витрачається на виконання ф-її someFunctionCallback
Приклад(*) важкого someFunctionCallback ( 1e8 - e8 кількість нулів після 1)
Подосліджуйте скільки часу займе виконання заповнення масиву, сумування великої кількості елементі(для себе), або інші варіанти. Увімкніть фантазію, та зробіть якісь більш важкі операції.
 */

// 1. Створити ф-ю декоратор const analysePerfomace = metricsDecorator(someFunctionCallback);

function metricsDecorator(callback) {
  return function() {
    const startTime = performance.now();
    const result = callback.apply(this, arguments);
    const endTime = performance.now();
    const duration = endTime - startTime;
    console.log(`Duration: ${duration}ms`);
    return result;
  }
}

const sumNumbers = () => {
  let sum = 0;
  let i = 0;

  for (; i < 1e8; i++) {
    sum += i;
  }
  console.log(sum, i);
};

const fillArray = () => {
  let arr = [];
  let i = 0;

  for (; i < 1e8; i++) {
    arr[i] = i;
  }
};

const forwardCount = () => {
  let noob = 0;
  
  do {
    noob += 1;
  } while (noob < 1e8);
};

const analysePerfomace1 = metricsDecorator(sumNumbers);
const analysePerfomace2 = metricsDecorator(fillArray);
const analysePerfomace3 = metricsDecorator(forwardCount);

const time1 = analysePerfomace1();
const time2 = analysePerfomace2();
const time3 = analysePerfomace3();