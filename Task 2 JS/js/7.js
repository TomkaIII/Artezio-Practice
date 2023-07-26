var rectangle = document.getElementById('rectangle');
var activeRectangle = false;

rectangle.addEventListener('click', function(){
    if(activeRectangle){
        activeRectangle = false;

        rectangle.style.border = '2px grey solid';
        rectangle.style.borderRadius = '0px';
    } else{
        activeRectangle = true;

        rectangle.style.border = '5px black solid';
        rectangle.style.borderRadius = '4px';
    }
});

document.addEventListener('keydown', function(event){
    let height = rectangle.offsetHeight;
    let width = rectangle.offsetWidth;

    event.preventDefault();
    
    if(activeRectangle){
        switch(event.code){
            case 'ArrowUp':
                rectangle.style.height = height + "px";
                break;
            case 'ArrowDown':
                rectangle.style.height = height - 20+ "px";
                break;
            case 'ArrowLeft':
                rectangle.style.width = width -20 + "px";
                break;
            case 'ArrowRight':
                rectangle.style.width = width  + "px";
                break;
            case 'Digit1':
                rectangle.style.backgroundColor = '#e74949';
                break;
            case 'Digit2':
                rectangle.style.backgroundColor = '#50cb45';
                break;
            case 'Digit3':
                rectangle.style.backgroundColor = '#e19743';
                break;
            case 'Digit4':
                rectangle.style.backgroundColor = '#eb82f7';
                break;
            case 'Digit5':
                rectangle.style.backgroundColor = '#f2f044';
                break;
            case 'Digit6':
                rectangle.style.backgroundColor = '#6c6af2';
                break;
            case 'Digit7':
                rectangle.style.backgroundColor = '#ffb5e5';
                break;
            case 'Digit8':
                rectangle.style.backgroundColor = '#cbffb5';
                break;
            case 'Digit9':
                rectangle.style.backgroundColor = '#83f4c9';
                break;
            case 'Digit0':
                rectangle.style.backgroundColor = '#ffffff';
                break;
        }
    }
});
