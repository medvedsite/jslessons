(function () {
    'use strict';
    // this function is strict...
 }());

if (90 + 7 == 92) {
	console.log("sosi");
} else {
	console.log("hui");
}


/* тернарный оператор */
let num = 93;

(num == 92) ? console.log("da") : console.log("net"); 

/* свич */

switch (num) {
	case num <49:
		console.log("Верно");
		break;
	case num >50:
		console.log("Тоже пойдёт");
		break;
	case 93: /* Проверка значения записывается без ==  */
		console.log("А вот щас огонь");
		break;
	default:
		console.log("zaupa");
		break;
}

/* ваил и ду ваил  */

let sos = 50;

/* while (sos < 55) {
	console.log(sos);
	sos++;
} */

do {
	console.log(sos);
	sos++;
}
while (sos <55);

for (let i = 1; i < 8; i++) {
	if (i == 6) {
		continue; /* тут можно break чтоб прервать цикл, continue чтоб перепрыгнуть шаг (чет нечет) */
	}
	console.log(i);

}

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
    }

}

// Используем цикл WHILE

// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }



// Используем цикл DO...WHILE

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);



//callback funtion
function learnJS(lang,callback) {
	console.log("Я учу " + lang);
	callback();
}
learnJS("Javascript", function() {
	console.log("Я прошел 3й урок");
});



//callback functions s gotovim resheniem
function learnJS(lang,callback) {
	console.log("Я учу " + lang);
	callback();
}



learnJS("Javascript", done);

function done() {
	console.log("Я прошел 3й урок");
}

//objects

let options = {
	width: 1024,
	heigh: 800,
	name: "Kostya"
};

console.log(options.name); // получаем свойство объекта через точку.

options.bool = false; // добавили в объект новое свойство

options.colors = { //Добавили в объект (={}) новый объект с новыми свойствами 
	border : "black",
	background : "white"
};
delete options.bool; //Удалить свойство в объекте.

console.log(options);

// цикл for in перебирает свойства объекта

for (let key in options) {
	console.log('Свойство ' + key + ' имеет значение '+ options[key]);
}
console.log(Object.keys(options).length); // смотрим количество свойств.

// массивы

let arr = [1, 2, 3, 4, 5];

arr.pop(); // удаление последнего элемента массива
arr.push('5'); //добавление элемента в массив (в конец)
arr.shift(); // удаление первого элемента массива!
arr.unshift(); // добавление эелемента в начало массива

//перебор элементов массива

for (let i = 0; i < arr.length; i++) { // старый вариант перебора массива
	console.log(arr[i]);
}

arr.forEach(function(item, i, mass) { // этот вариант перебора нужно использовать
	console.log(i + ': ' + item + ' (массив : ' + mass + ')');
});

let mass = [1, 2, 4, 3, 6, 10]; // ключи 1, 2, 4, 3 и тд 

for (let key in mass) { // key in возвращает ключи
	console.log(key);
}

for (let key of mass) { // key of возвращает значения
	console.log(key);
}

// Полезные методы 

let ans = prompt('',''),
	massive = [];
massive = ans.split(','); // разделитель полученных значений с помощью запятой

let olx = ['sos', 'par', 'zal'], 
	o = olx.join(','); // обратный метод split, склеивает каждый элемент массива
	console.log(o);


let ol = ['sos', 'par', 'zal', 1], 
	a = ol.sort(); // сортирует массив по алфавиту как строки
	console.log(ol);

let olw = ['sos', 'par', 'zal', 1], 
	w = olw.sort(compareNum); // этот же метод для цифр с функцией.
	console.log(ol);	

function compareNum(a,b) {
	return a-b;
}

// ООП пример

let soldier = {
	health: 100,
	armor: 300
};

let jhon = {
	health: 200
};

jhon.__proto__ = soldier; // soldier стал прототипом объекта jhon
console.log(jhon.armor);

[111, 222, 333, 444, 555, 666, 777, 888, 999].forEach((el, idx) => {
	if (idx > 0) {console.log(el);}
	});

// получение элементов со страницы

let className = document.getElementById('ID'); //получение эл-та по #ID  (только 1 элемент)
let btn = document.getElementsByTagName('button'); //по тэгам, (все элементы) - псевдомассив
console.log(btn[0]); // - первая кнопка
let circle = document.getElementsByClassName('circle');// через класс - псевдомассив.
console.log(circle[0]);
// частоиспользуемый 
let selector = document.querySelectorAll('.wrapper.selectorName'); // forEach + (ID, class, tag)
let firstElement = document.querySelector('.class name'); // первый элемент по селектору

// действия с элементами на странице
variable.style.backgroundColor = 'black';
variable.style.borderRadius = '100%';
variable[0].style.color = 'green';

// действие со всеми элеметнами в переменной
for (let i = 0, i < variable.length, i++) {
	variable[0].style.color = 'blue';
}

variable.forEach(function(item, i, variables) {
	item.style.backgroundColor = 'blue';
});

// создаём элементы на странице 

let div = document.createElement('div'),
	text = document.createTextNode('какойто текст');

// добавляем стили
div.classList.add('className'); // добавляем стили с помощью классов css, имеет togle.

document.body.appendChild(div); // добавили наш блок к родителю в самый конец
document.body.insertBefore(div, variable[0]); // добавили блок к в начало родителя.
document.body.removeChild(variable[0]); // удалили элемент
wrapper.removeChild(variable[2]); // тоже самое 
document.body.replaceChild(btn[1], circle[2]); // заменяет один элемент другим. (2й элемент удаляет)

div.innerHTML = 'Hello world!';
div.innerHTML = '<h1>Hello world!</h1>';

