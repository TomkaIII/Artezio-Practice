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

var lastWordCount = 0;

function validInputWithRestriction(el){
    var checkBox = document.getElementById("banExceeding");

    if(!checkBox.checked){
        validInput(el,"answer4");

        lastWordCount = el.value.length;
    } else if(checkBox.checked){
        if(el.value.length <= maxLenght){
            validInput(el,"answer4");
        } else if(el.value.length > maxLenght){
            if(el.value.length < lastWordCount){
                validInput(el,"answer4");
            } else{
                el.value = el.value.slice(0,-1);
            }
        }

        lastWordCount = el.value.length;
    }
}