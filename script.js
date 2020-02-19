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
