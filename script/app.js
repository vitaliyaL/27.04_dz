const userName = prompt("Введите ваше имя:");
const userSurname = prompt("Введите вашу фамилию:");
const login = prompt("Введите ваш никнейм:");
if (userName && userSurname) {
  console.log(`Добро пожаловать, ${userName} ${userSurname}!`);
} else if (!userName && userSurname && login) {
  console.log(`Добро пожаловать, ${login}!`);
} else if (userName && !userSurname) {
  console.log(`Добро пожаловать, ${userName}!`);
} else{
    console.log(`Добро пожаловать, Noname!`);
}
