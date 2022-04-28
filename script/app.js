const userName = prompt("Введите ваше имя:");
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
const str = prompt("Введите любое число:");
console.log(`Вы ввели: ${str}.`)
const num= +str;
if (!isNaN(num)) {
    let str='Введенное вами число ';
    (num>=100) ? str+='больше ста, ':str+='меньше ста, ';
    (num%2===0) ?  str+='четное, ':str+='нечетное, ';
    isInteger(num) ? str+='недробное, ': str+='дробное, ';
    (num>=0) ? str+='положительное.': str+='отрицательное.';
    console.log(str)
} else {
  isCyrillic(str)
    ? console.log(`Вместо числа введен текст на кирилице.`)
    : console.log(`Вместо числа введен текст на латинице.`);
}

const num1 = +prompt("Введите первое число:");
if (num1) {
  const num2 = +prompt("Введите второе число:");
  if (num2) {
    const num3 = +prompt("Введите третье число:");
    if (num3) {
      (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) ? alert(num1 + num2 + num3): alert("Данные введены некорректно!");
    } else {
      console.log("");
    }
  } else {
    console.log("");
  }
} else {
  console.log("");
}

const usName = prompt("Введите ваше имя:");
if(usName) {
  const age = +prompt("Введите ваш возраст:");
  (age >= 18) ? alert(`Добро пожаловать, ${usName}!`):alert(`Извините, ${usName}, доступ закрыт!`);
} else {
  console.log("");
}