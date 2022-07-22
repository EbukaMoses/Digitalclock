function clock() {
  var hours = document.getElementById('hour');
  var minutes = document.getElementById('minutes');
  var seconds = document.getElementById('seconds');
  var ampm = document.getElementById('ampm');

  var h = new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();
  var am = "AM";

  if(h > 12){
    h = h - 12
    var am = "PM";
  }

  h = (h < 10) ? "0" + h : h
  // h = (h > 11 && h < 13) ? 12 : h
  m = (m < 10) ? "0" + m : m
  s = (s < 10) ? "0" + s : s

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = am;
  

}

var interval = setInterval(clock, 1000);



const setHour = document.getElementById('sethour');
const setMinute = document.getElementById('setminute');
const setam = document.getElementById('setam');
// const setMusic = document.getElementById('music').value;
const setBtn = document.getElementById('alarm-btn');


  // let setHour = customHr.value;
  // let setMinute = customMin.value;
  // let setam = customSec.value;

function message(msg, color){
  const outPut = document.querySelector('.msg');
  outPut.innerHTML = msg;
  outPut.classList.add(color);
  outPut.style.display = 'block';
  setTimeout(function(){
    outPut.style.display = 'none';
  }, 2000);
}

function clearInput(){
  setHour.value = '';
  setMinute.value ='';
  setam.value = '';
  // setMusic.value = '';
}


setBtn.addEventListener('click',function runAlarm(e){

  // setHour = (setHour < 10) ? "0" + h : h
  // // h = (h > 11 && h < 13) ? 12 : h
  // setMinute = (m < 10) ? "0" + m : m
  // s = (s < 10) ? "0" + s : s





  if(setHour.value === '' || setMinute.value === '' || setam.value === ''){
    message('**No Input Should be Empty**', 'error');
    
  }else if(setHour.value > 12 || setMinute.value > 59) {
    message('**Check that your Hour & Minute is Correct**', 'error');
  }else{
    // var string = setMusic.value;
    // var length = 6;
    // var trimmedString = string.substring(7, length)
    const row = document.createElement('tr');
      row.innerHTML = `
              <td>${setHour.value}</td>
              <td>${setMinute.value}</td>
              <td>${setam.value}</td>              
              <td><a href="#" class="btn btn-danger">Delete Alarm</a></td>
            `;
            document.querySelector('#alarmbody').appendChild(row);

            message('**Alarm set Succussfully**', 'success');

            clearInput()
            
      }

      
      e.preventDefault();
  });
  

  // if((h == setHour) && (m == setMinute) && (am == setam)){
  //   var audiolElement = document.createElement('audio');
  //     audiolElement.setAttribute('src', './music/Kcee-isse.mp3');
  //     audiolElement.play();
  //   }



  // var delay = 6000;
  // var intervalid = setInterval(playWhenReady(), delay);
  // if((h == setHour.value) && (m == setMinute.value) && (am == setam.value)){
  //   message('**Alarm set**', 'success');
  //   playWhenReady();
  // }
  // function playWhenReady(){
    // if((h == setHour.value) && (m == setMinute.value) && (am == setam.value)){
      
      // playSound(setMusic.value);
      // clearInterval(intervalid);
    
    // }
  // }

  // function playSound(soundfile){
  //   var audiolElement = document.createElement('audio');
  //   audiolElement.setAttribute('src', soundfile);
  //   audiolElement.play();
  // }
  // function playMusic(){
  //   var audio = document.getElementById('music');
  //   audio.currentTime = 0;
  //   audio.play();
  // }
// if((h == setHour.value) && (m == setMinute.value) && (am == setam.value)){
//     var audio = document.getElementById('music').value;
//     audio.currentTime = 0;
//     audio.play();
// }
