function getCount(el){
    var count = el.value.length;
    var answer = document.getElementById("answer1");
    answer.innerHTML = "Количество символов:" + count;
}