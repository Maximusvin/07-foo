// 1. Напишіть функцію, що повертає куб числа.

const getNumberCube = (num) => Math.pow(num, 3);
console.log("Куб числа: ", getNumberCube(5));

// 2. Напишіть функцію, що додає перше число до другого і ділить результат на третє число.

const getResultMathOperation = (num1, num2, num3 = 1) => (num1 + num2) / num3;
console.log(
  "Результат математичного виразу: ",
  getResultMathOperation(2, 3, 2)
);

// 3. Напишіть функцію, що приймає число від 1 до 7 і повертає відповідну назву дня (українською).

const getCurrentDay = (order) => {
  let currentDay = null;

  if (order > 0 || order <= 7) {
    switch (order) {
      case 1:
        currentDay = "Понеділок";
        break;
      case 2:
        currentDay = "Вівторок";
        break;
      case 3:
        currentDay = "Середа";
        break;
      case 4:
        currentDay = "Четвер";
        break;
      case 5:
        currentDay = "Пятниця";
        break;
      case 6:
        currentDay = "Субота";
        break;
      case 7:
        currentDay = "Неділя";
        break;
    }
  } else {
    currentDay = "Невірний формат дати. Введіть число від 1 до 7";
  }

  return currentDay;
};

console.log("День тижня: ", getCurrentDay(3));

// 4. Реалізуйте функцію знаходження факторіала

const getFactorial = (num) => {
  let factorial = 1;

  while (num > 1) {
    factorial *= num;
    num -= 1;
  }

  return factorial;
};

console.log("Факторіал1: ", getFactorial(5));

// або:

function getFactorial2(num) {
  return num !== 1 ? num * getFactorial2(num - 1) : 1;
}
console.log("Факторіал2: ", getFactorial2(5));

// 5.  Напишіть функцію яка отримує години хвилини та секунди і повертає це число в секундах.

const getSeconds = (hour, min, sec) => hour * 3600 + min * 60 + sec;

console.log("К-сть секунд: ", getSeconds(5, 23, 54));

// 6.    Написати функцію, яка приймає секунди, і перетворює їх у години хвилини та секунди у форматі «гг: хх: сс».
// якщо кількість годин більша за 23.59.59 - вивести повідомлення "Більше одного дня".

const getCurrentFormatTime = (sec) => {
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor(sec / 60) - hours * 60;
  const seconds = sec % 60;

  const formatTime = [
    hours.toString().padStart(2, "0"),
    minutes.toString().padStart(2, "0"),
    seconds.toString().padStart(2, "0"),
  ].join(":");

  const secondsPerDay = 24 * 3600;

  return sec < secondsPerDay ? formatTime : "Більше одного дня";
};

console.log("Поточний час: ", getCurrentFormatTime(86399));

// 7. 4 відмінності ерров фанкшина від звичайної функції.

/*

1. Не має псевдомасиву arguments,
2. Контекст визначається при її об'явлені, а не визові.
3. Стрілка не буває методом об'єкта,
4. Стрілка не може бути конструктором. 
5. До стрілки не можливо примінити call, apply, bind

*/
