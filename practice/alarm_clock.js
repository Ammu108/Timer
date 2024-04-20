let hourHand = document.querySelector(".hour_hand");
let minuteHand = document.querySelector(".minute_hand");
let secondHand = document.querySelector(".second_hand");
let digital_analog = document.querySelector(".digital_Clock");
let selectData = document.querySelectorAll('select');
let setAlarmBtn = document.querySelector("#set_alarm");
let isAlarmSet,timeSet;
let ring = new Audio("MV27TES-alarm.mp3");

setInterval(()=>{
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  let hourDeg = (hour * 30) + (minute / 2);
  let minuteDeg = (minute * 6);
  let secondDeg = (second * 6);

  hourHand.style.transform = `rotate(${hourDeg}deg`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg`;
  secondHand.style.transform = `rotate(${secondDeg}deg`;

  // digital_analog.innerText = `${hour}:${minute}:${second}`;
  digital_analog.innerHTML = date.toLocaleTimeString();

  
  if(hour <= 9 ){
    hour = `0${hour}`;
  }else{
    hour = hour;
  }
  if(minute <= 9 ){
    minute = `0${minute}`;
  }else{
    minute = minute;
  }

  // if(isAlarmSet == true && timeSet == `${hour}:${minute}:${second}:${ampm}`){
  //   let audio = new Audio("MV27TES-alarm.mp3");
  //   audio.play();
  // }

   if(isAlarmSet === `${hour}:${minute}:${ampm}`){
     ring.play();
   }else{
     console.log("false");
   }
},1000)

for (let i = 12; i >= 1; i--){
  if(i <= 9){
    i = `0${i}`;
  }else{
    i = i;
  }
  let option = `<option value="${i}">${i}</opton>`;
  selectData[0].firstElementChild.insertAdjacentHTML('afterend',option);
}

for (let i = 59; i >= 1; i--){
  if(i <= 9){
    i = `0${i}`;
  }else{
    i = i;
  }
  let option = `<option value="${i}">${i}</opton>`;
  selectData[1].firstElementChild.insertAdjacentHTML('afterend',option);
}


for (let i = 0; i < 2; i++){
  var ampm;
  if(i == 1){
    ampm = "AM"; 
  }else{
    ampm = "PM";
  }
  let option = `<option value="${ampm}">${ampm}</opton>`;
    selectData[2].firstElementChild.insertAdjacentHTML('afterend',option);
}

setAlarmBtn.addEventListener('click', ()=>{
  if(timeSet){
    ring.pause();
    isAlarmSet = "";
    selectData.forEach((element)=>{
      element.classList.remove("disabled");
    });
    setAlarmBtn.innerText = "Set Alarm";
    return ( timeSet = false);
  }
  let alarmTime = `${selectData[0].value}:${selectData[1].value}:${selectData[2].value }`;
  isAlarmSet = alarmTime;
  timeSet = true;
  // ring.play();

  selectData.forEach((element)=>{
    element.classList.add("disabled");
  })
  setAlarmBtn.innerText = "Clear Alarm";
});
