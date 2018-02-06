//task 1
let question = prompt('Какой сегодня день');
alert ('Сегодня - ' + question);


//task 2
let role = prompt('Введите Ваш статус: ', 'Гость, Директор или оставьте пустым');
role == 'Гость'? alert('Привет') : (role == 'Директор')? alert('Здравствуйте') : (role == '')? alert('Познакомимся?') : alert('');


//task 3
let name = prompt('Каково \"официальное\" название JavaScript?');
if (name == 'EcmaScript'){
	alert('Верно!');
}else{
	alert('Не знаете? \"EcmaScript\"!');
}


//task 4
let name2 = prompt('Кто пришел?');
if (name2 == 'Админ'){
	let pass = prompt ('Пароль?');
	if(pass == 'Черный Властелин'){
		alert('Добро пожаловать!');
	}else if (pass == '' || pass == null){
		alert('Вход отменен');
	}else{
		alert('Пароль неверен');
	}
}else if(name2 == '' || name2 == null){
	alert('Вход отменен');
}else{
	alert('Я вас не знаю');
}


//task 5
var n = 15;
var fibonacci = [0, 1];
for (i = 2; i < n; i ++) {
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
  console.log(fibonacci[i]);
}


//task 6
while (true){
let number1 = Math.floor(Math.random() * (21 - 10)) + 10;
let number2 = Math.floor(Math.random() * (21 - 10)) + 10;
let question2 = prompt(number1+' + '+number2+'?');
if(question2 == (number1+number2)){
	alert('Верно');
	break;
}};