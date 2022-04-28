const userName = prompt("Задание 1: \nВведите ваше имя:");
const userSurname = prompt("Введите вашу фамилию:");
const login = prompt("Введите ваш никнейм:");
if (userName && userSurname) {
  console.log(`Добро пожаловать, ${userName} ${userSurname}!`);
} else if (!userName && userSurname && login) {
  console.log(`Добро пожаловать, ${login}!`);
} else if (userName && !userSurname) {
  console.log(`Добро пожаловать, ${userName}!`);
} else {
  console.log(`Добро пожаловать, Noname!`);
}

function isCyrillic(str) {
  return /[а-я]/i.test(str);
}
function isInteger(num) {
  return (num ^ 0) === num;
}
const str = prompt("Задание 2: \nВведите любое число:");
if (str) {
  console.log(`Вы ввели: ${str}.`);
  const num = +str;
  if (!isNaN(num)) {
    let str = "Введенное вами число ";
    num >= 100 ? (str += "больше ста, ") : (str += "меньше ста, ");
    num % 2 === 0 ? (str += "четное, ") : (str += "нечетное, ");
    isInteger(num) ? (str += "недробное, ") : (str += "дробное, ");
    num >= 0 ? (str += "положительное.") : (str += "отрицательное.");
    console.log(str);
  } else {
    isCyrillic(str)
      ? console.log(`Вместо числа введен текст на кирилице.`)
      : console.log(`Вместо числа введен текст на латинице.`);
  }
} else {
  console.log("");
}

const num1 = +prompt("Задание 3: \nВведите первое число:");
if (num1) {
  const num2 = +prompt("Введите второе число:");
  if (num2) {
    const num3 = +prompt("Введите третье число:");
    if (num3) {
      !isNaN(num1) && !isNaN(num2) && !isNaN(num3)
        ? alert(num1 + num2 + num3)
        : alert("Данные введены некорректно!");
    } else {
      console.log("");
    }
  } else {
    console.log("");
  }
} else {
  console.log("");
}

const usName = prompt("Задание 3: \nВведите ваше имя:");
if (usName) {
  const age = +prompt("Введите ваш возраст:");
  age >= 18
    ? alert(`Добро пожаловать, ${usName}!`)
    : alert(`Извините, ${usName}, доступ закрыт!`);
} else {
  console.log("");
}

const number = +prompt("Задание 4: \nВведите любое число:");
if (number) {
  if (!isNaN(number)) {
    switch (number) {
      case 0:
        console.log(`${number} -> ноль`);
        break;
      case 1:
        console.log(`${number} -> один`);
        break;
      case 2:
        console.log(`${number} -> два`);
        break;
      case 3:
        console.log(`${number} -> три`);
        break;
      case 4:
        console.log(`${number} -> четыре`);
        break;
      case 5:
        console.log(`${number} -> пять`);
        break;
      case 6:
        console.log(`${number} -> шесть`);
        break;
      case 7:
        console.log(`${number} -> семь`);
        break;
      case 8:
        console.log(`${number} -> восемь`);
        break;
      case 9:
        console.log(`${number} -> девять`);
        break;
      default:
        console.log("Данные введены некорректно: число должно быть от 0 до 9!");
        break;
    }
  } else {
    console.log("Данные введены некорректно: необходимо ввести число!");
  }
} else {
  console.log("");
}

function zodiak(str) {
  const i = str.indexOf("/");
  const day = +str.slice(0, i);
  const month = +str.slice(-i + 1);
  if (
    !isNaN(day) &&
    !isNaN(month) &&
    month > 0 &&
    month < 13 &&
    day > 0 &&
    day < 32
  ) {
    switch (month) {
      case 1:
        day < 21
          ? console.log(`${str}-Козерог`)
          : console.log(`${str}-Водолей`);
        break;
      case 2:
        if (day > 29) {
          console.log("Ошибка! в Феврале не более 29 дней!");
          break;
        } else {
          day < 20 ? console.log(`${str}-Водолей`) : console.log(`${str}-Рыбы`);
          break;
        }
      case 3:
        day < 21 ? console.log(`${str}-Рыбы`) : console.log(`${str}-Овен`);
        break;
      case 4:
        day < 21 ? console.log(`${str}-Овен`) : console.log(`${str}-Телец`);
        break;
      case 5:
        day < 22 ? console.log(`${str}-Телец`) : console.log(`${str}-Близнецы`);
        break;
      case 6:
        day < 22 ? console.log(`${str}-Близнецы`) : console.log(`${str}-Рак`);
        break;
      case 7:
        day < 23 ? console.log(`${str}-Рак`) : console.log(`${str}-Лев`);
        break;
      case 8:
        day < 22 ? console.log(`${str}-Лев`) : console.log(`${str}-Дева`);
        break;
      case 9:
        day < 24 ? console.log(`${str}-Дева`) : console.log(`${str}-Весы`);
        break;
      case 10:
        day < 24 ? console.log(`${str}-Весы`) : console.log(`${str}-Скорпион`);
        break;
      case 11:
        day < 23
          ? console.log(`${str}-Скорпион`)
          : console.log(`${str}-Стрелец`);
        break;
      case 12:
        day < 23
          ? console.log(`${str}-Стрелец`)
          : console.log(`${str}-Козерог`);
        break;
    }
  } else {
    console.log("Данные введены некорректно!");
  }
}
const date = prompt("Введите дату, чтобы узнать знак зодиака:\nПример: 01/01");
zodiak(date);
