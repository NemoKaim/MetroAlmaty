
let schedule = JSON.parse(localStorage.getItem('schedule1w'));
let schedule1 = JSON.parse(localStorage.getItem('schedule1w'));
let schedule2 = JSON.parse(localStorage.getItem('schedule2w'));
let schedule3 = JSON.parse(localStorage.getItem('schedule3w'));
let schedule4 = JSON.parse(localStorage.getItem('schedule4w'));
let schedule5 = JSON.parse(localStorage.getItem('schedule5w'));
let schedule6 = JSON.parse(localStorage.getItem('schedule6w'));
let schedule7 = JSON.parse(localStorage.getItem('schedule7w'));
let schedule8 = JSON.parse(localStorage.getItem('schedule8w'));
let schedule9 = JSON.parse(localStorage.getItem('schedule9w'));
let schedule10 = JSON.parse(localStorage.getItem('schedule10w'));
let schedule11 = JSON.parse(localStorage.getItem('schedule11w'));

let schedule01 = JSON.parse(localStorage.getItem('schedule01w'));
let schedule02 = JSON.parse(localStorage.getItem('schedule02w'));
let schedule03 = JSON.parse(localStorage.getItem('schedule03w'));
let schedule04 = JSON.parse(localStorage.getItem('schedule04w'));
let schedule05 = JSON.parse(localStorage.getItem('schedule05w'));
let schedule06 = JSON.parse(localStorage.getItem('schedule06w'));
let schedule07 = JSON.parse(localStorage.getItem('schedule07w'));
let schedule08 = JSON.parse(localStorage.getItem('schedule08w'));
let schedule09 = JSON.parse(localStorage.getItem('schedule09w'));
let schedule010 = JSON.parse(localStorage.getItem('schedule010w'));
let schedule011 = JSON.parse(localStorage.getItem('schedule011w'));

var buttonChanged1 = document.getElementById('button1');
var buttonChanged2 = document.getElementById('button2');

document.getElementById('button1').addEventListener('click', function() {

  buttonChanged1.classList.add('changed');
  buttonChanged2.classList.remove('changed');

  schedule = JSON.parse(localStorage.getItem('schedule1w'));
  schedule1 = JSON.parse(localStorage.getItem('schedule1w'));
  schedule2 = JSON.parse(localStorage.getItem('schedule2w'));
  schedule3 = JSON.parse(localStorage.getItem('schedule3w'));
  schedule4 = JSON.parse(localStorage.getItem('schedule4w'));
  schedule5 = JSON.parse(localStorage.getItem('schedule5w'));
  schedule6 = JSON.parse(localStorage.getItem('schedule6w'));
  schedule7 = JSON.parse(localStorage.getItem('schedule7w'));
  schedule8 = JSON.parse(localStorage.getItem('schedule8w'));
  schedule9 = JSON.parse(localStorage.getItem('schedule9w'));
  schedule10 = JSON.parse(localStorage.getItem('schedule10w'));
  schedule11 = JSON.parse(localStorage.getItem('schedule11w'));

  schedule01 = JSON.parse(localStorage.getItem('schedule01w'));
  schedule02 = JSON.parse(localStorage.getItem('schedule02w'));
  schedule03 = JSON.parse(localStorage.getItem('schedule03w'));
  schedule04 = JSON.parse(localStorage.getItem('schedule04w'));
  schedule05 = JSON.parse(localStorage.getItem('schedule05w'));
  schedule06 = JSON.parse(localStorage.getItem('schedule06w'));
  schedule07 = JSON.parse(localStorage.getItem('schedule07w'));
  schedule08 = JSON.parse(localStorage.getItem('schedule08w'));
  schedule09 = JSON.parse(localStorage.getItem('schedule09w'));
  schedule010 = JSON.parse(localStorage.getItem('schedule010w'));
  schedule011 = JSON.parse(localStorage.getItem('schedule011w'));
});

document.getElementById('button2').addEventListener('click', function() {

  buttonChanged1.classList.remove('changed');
  buttonChanged2.classList.add('changed');

  schedule = JSON.parse(localStorage.getItem('schedule1e'));
  schedule1 = JSON.parse(localStorage.getItem('schedule1e'));
  schedule2 = JSON.parse(localStorage.getItem('schedule2e'));
  schedule3 = JSON.parse(localStorage.getItem('schedule3e'));
  schedule4 = JSON.parse(localStorage.getItem('schedule4e'));
  schedule5 = JSON.parse(localStorage.getItem('schedule5e'));
  schedule6 = JSON.parse(localStorage.getItem('schedule6e'));
  schedule7 = JSON.parse(localStorage.getItem('schedule7e'));
  schedule8 = JSON.parse(localStorage.getItem('schedule8e'));
  schedule9 = JSON.parse(localStorage.getItem('schedule9e'));
  schedule10 = JSON.parse(localStorage.getItem('schedule10e'));
  schedule11 = JSON.parse(localStorage.getItem('schedule11e'));

  schedule01 = JSON.parse(localStorage.getItem('schedule01e'));
  schedule02 = JSON.parse(localStorage.getItem('schedule02e'));
  schedule03 = JSON.parse(localStorage.getItem('schedule03e'));
  schedule04 = JSON.parse(localStorage.getItem('schedule04e'));
  schedule05 = JSON.parse(localStorage.getItem('schedule05e'));
  schedule06 = JSON.parse(localStorage.getItem('schedule06e'));
  schedule07 = JSON.parse(localStorage.getItem('schedule07e'));
  schedule08 = JSON.parse(localStorage.getItem('schedule08e'));
  schedule09 = JSON.parse(localStorage.getItem('schedule09e'));
  schedule010 = JSON.parse(localStorage.getItem('schedule010e'));
  schedule011 = JSON.parse(localStorage.getItem('schedule011e'));
});

function getNextTime(now, schedule) {
    let nextTime = null;
    for (let time of schedule) {
        if (time > now) {
            nextTime = time;
            break;
        }
    }
    return nextTime;
}

function updateTimer(schedule) {
    const now = new Date().toLocaleTimeString('en-US', {hour12: false});
    const nextTime = getNextTime(now, schedule);
    if (nextTime) {
        const [hours, minutes, seconds] = nextTime.split(':').map(Number);
        const targetTime = new Date();
        targetTime.setHours(hours, minutes, seconds, 0);
        const diff = Math.max((targetTime - new Date()), 0);
        const minutesLeft = Math.floor((diff / 1000 / 60) % 60);
        const secondsLeft = Math.floor((diff / 1000) % 60);
        const secondsString = secondsLeft.toString().padStart(2, '0');
        document.getElementById('timer').textContent = `${minutesLeft}:${secondsString}`;
    } else {
        document.getElementById('timer').textContent = 'Ошибка.';
    }
}


// var buttons = document.querySelectorAll(".ch");

// buttons.forEach(function(button) {
//     button.addEventListener("click", function() {
               
//         buttons.forEach(function(btn) {
//             btn.classList.remove("changed");
//         });
//         button.classList.add("changed");
//     }
// }


var buttons = document.querySelectorAll(".metro");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
               
        buttons.forEach(function(btn) {
            btn.classList.remove("changed");
        });
        button.classList.add("changed");
        
        const stationName = button.querySelector('h3').textContent;
        const targetElement = document.getElementById('title');
        targetElement.textContent = stationName;

        const scheduleName = button.getAttribute('data-schedule');
        if(scheduleName == "schedule1"){
          schedule = schedule1
        }
        if(scheduleName == "schedule2"){
          schedule = schedule2
        }
        if(scheduleName == "schedule3"){
          schedule = schedule3
        }
        if(scheduleName == "schedule4"){
          schedule = schedule4
        }
        if(scheduleName == "schedule5"){
          schedule = schedule5
        }
        if(scheduleName == "schedule6"){
          schedule = schedule6
        }
        if(scheduleName == "schedule7"){
          schedule = schedule7
        }
        if(scheduleName == "schedule8"){
          schedule = schedule8
        }
        if(scheduleName == "schedule9"){
          schedule = schedule9
        }
        if(scheduleName == "schedule10"){
          schedule = schedule10
        }
        if(scheduleName == "schedule11"){
          schedule = schedule11
        }


        if(scheduleName == "schedule01"){
          schedule = schedule01
        }
        if(scheduleName == "schedule02"){
          schedule = schedule02
        }
        if(scheduleName == "schedule03"){
          schedule = schedule03
        }
        if(scheduleName == "schedule04"){
          schedule = schedule04
        }
        if(scheduleName == "schedule05"){
          schedule = schedule05
        }
        if(scheduleName == "schedule06"){
          schedule = schedule06
        }
        if(scheduleName == "schedule07"){
          schedule = schedule07
        }
        if(scheduleName == "schedule08"){
          schedule = schedule08
        }
        if(scheduleName == "schedule09"){
          schedule = schedule09
        }
        if(scheduleName == "schedule010"){
          schedule = schedule010
        }
        if(scheduleName == "schedule011"){
          schedule = schedule011
        }

        updateTimer(schedule);
        
    });
});


setInterval(() => {
    updateTimer(schedule);
}, 1000);

