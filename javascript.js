const music = new Audio('https://raw.githubusercontent.com/Xiija/TestFiles/master/Yuki%20%26%20Tako%2001.mp3');

let alarmClose=document.getElementById("alarmClose");
let alarmSubmit=document.getElementById("alarmSubmit");
alarmSubmit.addEventListener(
    'click',setAlarm)
alarmClose.addEventListener(
    'click',function()
    {
        music.pause();
    }
)

    
function ringbell()
{
    music.play();
}

function setAlarm(e)
{
e.preventDefault()
let alarm=document.getElementById("alarm").value;
let alarmDate=new Date(alarm)  //time to ring alarm

 let now=new Date(); //present date -> when alarmDate equals now , then alarm rings
 let timeToAlarm=alarmDate-now;

 if(timeToAlarm>=0)
 {
    document.getElementById("errorMessage").innerHTML=""
     setTimeout(
         ringbell,
         timeToAlarm
     )
 }
 else{
     document.getElementById("errorMessage").innerHTML="Wrong Date"
 }
console.log(alarmDate);
}
