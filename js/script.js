

let schedule = JSON.parse(localStorage.getItem('schedule1'));



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
          schedule = JSON.parse(localStorage.getItem('schedule1'));
        }
        if(scheduleName == "schedule2"){
          schedule = JSON.parse(localStorage.getItem('schedule2'));
        }
        if(scheduleName == "schedule3"){
          schedule = JSON.parse(localStorage.getItem('schedule3'));
        }
        if(scheduleName == "schedule4"){
          schedule = JSON.parse(localStorage.getItem('schedule4'));
        }
        if(scheduleName == "schedule5"){
          schedule = JSON.parse(localStorage.getItem('schedule5'));
        }
        if(scheduleName == "schedule6"){
          schedule = JSON.parse(localStorage.getItem('schedule6'));
        }
        if(scheduleName == "schedule7"){
          schedule = JSON.parse(localStorage.getItem('schedule7'));
        }
        if(scheduleName == "schedule8"){
          schedule = JSON.parse(localStorage.getItem('schedule8'));
        }
        if(scheduleName == "schedule9"){
          schedule = JSON.parse(localStorage.getItem('schedule9'));
        }
        if(scheduleName == "schedule10"){
          schedule = JSON.parse(localStorage.getItem('schedule10'));
        }
        if(scheduleName == "schedule11"){
          schedule = JSON.parse(localStorage.getItem('schedule11'));
        }


        if(scheduleName == "schedule01"){
          schedule = JSON.parse(localStorage.getItem('schedule01'));
        }
        if(scheduleName == "schedule02"){
          schedule = JSON.parse(localStorage.getItem('schedule02'));
        }
        if(scheduleName == "schedule03"){
          schedule = JSON.parse(localStorage.getItem('schedule03'));
        }
        if(scheduleName == "schedule04"){
          schedule = JSON.parse(localStorage.getItem('schedule04'));
        }
        if(scheduleName == "schedule05"){
          schedule = JSON.parse(localStorage.getItem('schedule05'));
        }
        if(scheduleName == "schedule06"){
          schedule = JSON.parse(localStorage.getItem('schedule06'));
        }
        if(scheduleName == "schedule07"){
          schedule = JSON.parse(localStorage.getItem('schedule07'));
        }
        if(scheduleName == "schedule08"){
          schedule = JSON.parse(localStorage.getItem('schedule08'));
        }
        if(scheduleName == "schedule09"){
          schedule = JSON.parse(localStorage.getItem('schedule09'));
        }
        if(scheduleName == "schedule010"){
          schedule = JSON.parse(localStorage.getItem('schedule010'));
        }
        if(scheduleName == "schedule011"){
          schedule = JSON.parse(localStorage.getItem('schedule011'));
        }

        updateTimer(schedule);
        
    });
});


setInterval(() => {
    updateTimer(schedule);
}, 1000);

