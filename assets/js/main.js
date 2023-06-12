var LightNumber = 1;
var direction = "RIGHT"
var intervalID = null;

var Lights = $('.light')

console.log(Lights)
Lights[LightNumber].style.background = 'red';

function updateLights(){
    /console.log('updates!');/
    $('.light').css({background: 'black'});

    Lights[LightNumber].style.background = 'red';


    if (LightNumber > 0){
        Lights[LightNumber - 1].style.background = 'pink';
    }
    if (LightNumber < 10){
        Lights[LightNumber + 1].style.background = 'pink';
    }
    if (LightNumber === 10){
        direction = 'LEFT'
    }
    if (direction === 'RIGHT'){
        LightNumber++;
    }else{
        LightNumber--;
    }
    if (LightNumber === 0){
        direction = 'RIGHT'
    }

}

$('#start').on('click',() => {
    intervalID = setInterval(updateLights,100)
});
$('#stop').on('click',() => {
    clearInterval(intervalID);
});
