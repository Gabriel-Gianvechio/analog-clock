let digitalElement = document.querySelector('.digital');
let secondElement = document.querySelector('.p_s');
let minuteElement = document.querySelector('.p_m');
let hourElement = document.querySelector('.p_h');

function updateCloak(){
    //relógico digital
    let now = new Date(); 
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    console.log(hour);

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;


    //relógio analógico
    let secondDeg = (( 360 / 60 ) * second) - 90;
    let minuteDeg = (( 360 / 60 ) * minute) - 90;
    let hourDeg = (( 360 / 12 ) * hour) - 90;


    secondElement.style.transform = `rotate(${secondDeg}deg)`;
    minuteElement.style.transform = `rotate(${minuteDeg}deg)`;
    hourElement.style.transform = `rotate(${hourDeg}deg)`;
};

function fixZero(time){
    // if (time <10){
    //     return '0'+time;
    // } else {
    //     return time;
    // }
    //ou simplificando o código a cima:
    return time < 10 ? `0${time}` : time;
}

updateCloak();
setInterval(updateCloak, 1000); //setIntervalo vai rodar a função updateCloak a cada 1000milisegundos (1segundo)