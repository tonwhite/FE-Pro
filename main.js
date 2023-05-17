/*
Існує об‘єкт виду:

const smartphones = {
  apple: ["iphone-10", "iphone-11", "iphone-12"],
  samsung: ["Galaxy A32", "Galaxy A03s", "Galaxy A73 5G"],
  oneplus: ["Nord AC2003", "9 LE2113", "8T KB2003"],
};

Створити такій ітератор:

smartphones[Symbol.iterator] = function() {

 …
}

Щоб отримати можливість використати for-of:

for (const smartphone of smartphones) {
  console.log(smartphone); 
}
З таким результатом:

(Вивід  в консолі значень змінної smartphone  циклу for - of. Виводиться по черзі, порядок не важливий)

  apple - iphone-10
  apple - iphone-11
  apple - iphone-12
  samsung - Galaxy A32
  samsung - Galaxy A03s
  samsung - Galaxy A73 5G
  oneplus - Nord AC2003
  oneplus - 9 LE2113
  oneplus - 8T KB2003"
 */



