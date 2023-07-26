const year = document.getElementById('year');
const month = document.getElementById('month');
const day = document.getElementById('day');

const dateNowItem = document.getElementById('dateNow');

const today = new Date();

var months = new Array('января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря')

dateNow.innerHTML = '<b>Сегодня:</b> ' + today.getDate() +' '+ months[today.getMonth()] + ' ' + today.getFullYear() + 'года';

for(let date = today.getFullYear(); date >= 1900; date--){
    const option = document.createElement('option');
    option.value = date;
    option.text = date + 'г.';

    year.append(option);
}

for(let monthNum = 1; monthNum <= 12; monthNum++){
    monthName = getMonthByNumber(monthNum);

    const option = document.createElement('option');
    option.value = monthNum;
    option.text = monthName;

    month.append(option);
}

addDays(1);

function getMonthByNumber(num){
    const date = new Date();
    date.setMonth(num-1);

    return monthName = date.toLocaleString('ru-ru',{
        month: 'long',
    });
}

function getDaysInMonth(monthNum){
    return new Date(0,monthNum,0).getDate();
}

function addDays(monthNum){
    for (let days = 1; days <= getDaysInMonth(monthNum); days++) {
    const option = document.createElement('option');
    option.value = days;
    option.text = days;

    day.append(option);
    }
}

function dropDays(){
    var length = day.options.length;

    var length = day.options.length;
    for (i = length-1; i >= 0; i--) {
        day.options[i] = null;
    }
}

month.onchange = function(){
    let index = month.selectedIndex;
    let option = month.options; 
    let value = option[index].value;

    let dayIndex = day.selectedIndex;

    dropDays();
    addDays(value);

    if(dayIndex <= getDaysInMonth(value)){
        day.selectedIndex = dayIndex;
    }
    
    getResultDate();
}

day.onchange = function(){
    getResultDate();
}

year.onchange = function(){
    getResultDate();
}

function getResultDate(){
    let indexYear = year.selectedIndex;
    let optionYear = year.options; 
    let valueYear = optionYear[indexYear].value;

    let indexDay = day.selectedIndex;
    let optionDay = day.options; 
    let valueDay = optionDay[indexDay].value;

    let indexMonth = month.selectedIndex;
    let optionMonth = month.options; 
    let valueMonth = optionMonth[indexMonth].value;

    var dayDiff = today.getDate() - valueDay;
    var monthDiff = today.getMonth() - valueMonth + 1;
    var yearDiff = today.getFullYear() - valueYear;
    var date = new Date(valueYear, valueMonth, valueDay);

    var dateDiff = 'Событие произошло <b>' + Math.abs(dayDiff) + ' дней ' + Math.abs(monthDiff) + ' месяц(ев/а) ' + Math.abs(yearDiff) + ' лет </b>назад';
    
    if(date - today > 0){
        dateDiff = 'Событие произойдёт через <b>' + Math.abs(dayDiff) + ' дней ' + Math.abs(monthDiff)  + ' месяц(ев/а) ' + Math.abs(yearDiff) + ' лет </b>';
    }

    var resultItem = document.getElementById('resultDate').innerHTML = dateDiff;
}