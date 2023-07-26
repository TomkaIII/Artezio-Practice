var maxLenght = 10;

function validInput(el, textarea){
    var textItem = document.getElementById(textarea);

    var checkValue =  el.value.length - maxLenght;

    if(checkValue < 0){
        textItem.innerHTML = "Отсталось символов: " + Math.abs(checkValue);
        textItem.style.color = 'black';
    } else if(checkValue > 0){
        textItem.innerHTML = "&#10006 Превышено символов: " + checkValue;
        textItem.style.color = 'red';
    } else {
        textItem.innerHTML = "";
    }
}