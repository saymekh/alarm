'use strict';

function setAlarm() {
  let hourInput = parseInt(document.getElementById('hourInput').value);
  let minuteInput = parseInt(document.getElementById('minuteInput').value);
  
  if (isNaN(hourInput) || isNaN(minuteInput)) {
      alert('Please enter valid numeric values for hour and minute.');
      return;
  }

  if (hourInput < 0 || hourInput > 23 || minuteInput < 0 || minuteInput > 59) {
      alert('Invalid hour or minute. Please enter valid values.');
      return;
  }

  let currentHour = new Date().getHours();
  let currentMinute = new Date().getMinutes();

  // Check if the set time matches the current time
  if (hourInput === currentHour && minuteInput === currentMinute) {
      document.getElementById('alarmIndicator').classList.add('active');
      playAlarmSound();
  } else {
      document.getElementById('alarmIndicator').classList.remove('active');
  }

  // Display the alarm time above the input fields
  let alarmTimeDisplay = document.getElementById('alarmTime');
  alarmTimeDisplay.innerText = 
  'Alarm set for ' + hourInput.toString().padStart(2, '0') + ':' +
   minuteInput.toString().padStart(2, '0');

  // Check the time every second
  setInterval(function() {
    let now = new Date();
    let currentHour = now.getHours();
    let currentMinute = now.getMinutes();
    if (currentHour === hourInput && currentMinute === minuteInput) {
      playAlarmSound();
      document.getElementById('alarmIndicator').classList.add('active');
    }
  }, 1000);
}

// Function to play alarm sound
function playAlarmSound() {
    const alarmSound = new Audio('./assets/audio/alarmsound.mp3');
    alarmSound.play();
}

function updateClock() {
  let now = new Date();
  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  document.getElementById('time').innerText = hours + ':' + minutes;
}

// Update the clock every second
setInterval(updateClock, 1000);


