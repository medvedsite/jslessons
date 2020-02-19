(function () {
    'use strict';
    // this function is strict...
}());

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = +prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();




let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};



function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = +prompt("Во сколько обойдется?", '');
        if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            console.log('Произошла ошибка');
            i--;
        }
    }
}
chooseExpenses();

function detectDayBudget() {
    appData.dailyMoney = (appData.budget / 30).toFixed();
    alert('Ежедневный бюджет: ' + appData.dailyMoney);
}
detectDayBudget();


function detectLevel() {
    if (appData.dailyMoney < 100) {
        console.log('Нищий');
    } else if (appData.dailyMoney > 100 && appData.dailyMoney < 2000) {
        console.log('Средний уровень дохода');
    } else if (appData.dailyMoney > 2000) {
        console.log('Высокий уровень дохода');
    } else {
        console.log('Произошла ошибка');
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Введите сумму сбережний', ''),
            percent = +prompt('Под какой процент вкладываете ?', '');

        appData.monthIncome = save / 100 / 12 * percent;
        alert('Доход в месяц с Вашего депозита: ' + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let a = prompt("Введите статью необязательных расходов", ''),
            b = +prompt("Во сколько обойдется?", '');
        if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log('Записал');
            appData.optionalExpenses[a] = b;
        } else {
            console.log('Произошла ошибка');
            i--;
        }
    }
}
chooseOptExpenses();