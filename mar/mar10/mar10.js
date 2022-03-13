let sec = 59;

function fn() {
    document.getElementById('sec').innerText = sec;
    sec -=1;
    if(sec < 1) {
        sec = 60;
         }
  
}
let min = 3;

 function forMin() {
     document.getElementById('min').innerText = min;
     min -=1;
     
         
         if(min < 0) {
           
         min = 4;
        
     }
}

const pauseMin = setInterval(forMin,60000)
const stopsec = setInterval(fn,1000);

document.getElementById('btn').addEventListener('click',pause);

function pause() {
    clearInterval(stopsec);
    clearInterval(pauseMin);
}
