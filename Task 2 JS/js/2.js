function getTextInfo(el){
    var reg = /\n/g;

    var signCount = el.value.replace(reg, '').length;
    var wordCount = el.value.replace(reg, ' ').split(' ').length;
    var textCount = el.value.split('\n').length;

    var answer1 = document.getElementById("signCountTask2");
    var answer2 = document.getElementById("wordCountTask2");
    var answer3 = document.getElementById("textCountTask2");
    
    answer1.innerHTML = "Количество символов:" + signCount;
    answer2.innerHTML = "Количество слов: " + wordCount;
    answer3.innerHTML = "Количество строк: " + textCount;
}