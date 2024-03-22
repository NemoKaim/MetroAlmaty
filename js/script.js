
const schedule1 = [ //Райымбек батыра
    "06:22:30", "06:28:42", "06:34:54", "06:41:06", "06:47:18", "06:53:30", 
    "06:59:42", "07:05:54", "07:12:06", "07:18:18", "07:24:30", "07:30:42", 
    "07:36:54", "07:42:32", "07:48:10", "07:53:48", "07:59:26", "08:05:04", 
    "08:10:42", "08:16:20", "08:21:58", "08:27:36", "08:33:14", "08:38:52", 
    "08:44:32", "08:50:10", "08:55:48", "09:06:20", "09:16:40", "09:27:00", 
    "09:37:20", "09:47:40", "09:58:00", "10:08:20", "10:18:40", "10:29:00", 
    "10:39:20", "10:49:40", "11:00:00", "11:10:20", "11:20:40", "11:31:00", 
    "11:41:20", "11:51:40", "12:02:00", "12:12:20", "12:22:40", "12:33:00", 
    "12:43:20", "12:53:40", "13:04:00", "13:14:20", "13:24:40", "13:35:00", 
    "13:45:20", "13:55:40", "14:06:00", "14:16:20", "14:26:40", "14:37:00", 
    "14:47:20", "14:57:40", "15:08:00", "15:18:20", "15:28:40", "15:39:00", 
    "15:49:20", "15:59:40", "16:10:00", "16:20:20", "16:30:40", "16:41:00", 
    "16:51:20", "17:01:40", "17:07:18", "17:12:56", "17:18:34", "17:24:12", 
    "17:29:50", "17:35:28", "17:41:06", "17:46:44", "17:52:22", "17:58:00", 
    "18:03:40", "18:09:18", "18:14:56", "18:20:34", "18:26:12", "18:31:50", 
    "18:37:28", "18:43:06", "18:48:44", "18:54:22", "19:00:00", "19:05:40", 
    "19:11:18", "19:16:56", "19:22:34", "19:28:12", "19:33:50", "19:39:28", 
    "19:45:06", "19:50:44", "20:01:00", "20:11:20", "20:21:40", "20:32:00", 
    "20:42:20", "20:52:40", "21:03:00", "21:13:20", "21:23:40", "21:34:00", 
    "21:44:20", "21:54:40", "22:05:00", "22:15:20", "22:25:40", "22:36:00", 
    "22:46:20", "22:56:40", "23:07:00", "23:17:20", "23:27:40", "23:38:00", 
    "23:48:20", "23:57:40", "00:02:00"
];

let schedule = schedule1;

const schedule2 = [ //Жибек жолы
    "06:23:35", "06:38:35", "06:54:35", "07:10:35", "07:25:35", "07:40:35", 
    "07:56:35", "08:12:35", "08:27:35", "08:42:35", "08:58:35", "09:14:35", 
    "09:29:35", "09:42:00", "09:54:25", "10:06:50", "10:19:15", "10:31:40", 
    "10:44:05", "10:56:30", "11:08:50", "11:21:15", "11:33:40", "11:46:05", 
    "11:58:30", "12:10:50", "12:23:15", "12:35:40", "12:48:05", "13:00:30", 
    "13:12:50", "13:25:15", "13:37:40", "13:50:05", "14:02:30", "14:14:50", 
    "14:27:15", "14:39:40", "14:52:05", "15:04:30", "15:16:50", "15:29:15", 
    "15:41:40", "15:54:05", "16:06:30", "16:18:50", "16:31:15", "16:43:40", 
    "16:56:05", "17:08:30", "17:20:50", "17:33:15", "17:45:40", "17:58:05", 
    "18:10:30", "18:22:50", "18:35:15", "18:47:40", "19:00:05", "19:12:30", 
    "19:24:50", "19:37:15", "19:49:40", "20:05:10", "20:20:40", "20:36:10", 
    "20:51:40", "21:07:10", "21:22:40", "21:38:10", "21:53:40", "22:09:10", 
    "22:24:40", "22:40:10", "22:55:40", "23:11:10", "23:26:40", "23:42:10", 
    "23:57:40", "00:04:20"
];

const schedule3 = [ //Алмалы
    "06:25:45", "06:40:45", "06:56:45", "07:12:45", "07:27:45", "07:42:45", "07:58:45", "08:14:45", "08:29:45", "08:44:45", "09:00:45", "09:16:45", "09:31:45", "09:44:10", "09:56:35", "10:09:00", "10:21:25", "10:33:50", "10:46:15", "10:58:40", "11:11:00", "11:23:25", "11:35:50", "11:48:15", "12:00:40", "12:13:00", "12:25:25", "12:37:50", "12:50:15", "13:02:40", "13:15:00", "13:27:25", "13:39:50", "13:52:15", "14:04:40", "14:17:00", "14:29:25", "14:41:50", "14:54:15", "15:06:40", "15:19:00", "15:31:25", "15:43:50", "15:56:15", "16:08:40", "16:21:00", "16:33:25", "16:45:50", "16:58:15", "17:10:40", "17:23:00", "17:35:25", "17:47:50", "18:00:15", "18:12:40", "18:25:00", "18:37:25", "18:49:50", "19:02:15", "19:14:40", "19:27:00", "19:39:25", "19:51:50", "20:07:20", "20:22:50", "20:38:20", "20:53:50", "21:09:20", "21:24:50", "21:40:20", "21:55:50", "22:11:20", "22:26:50", "22:42:20", "22:57:50", "23:13:20", "23:28:50", "23:44:20", "23:59:50", "00:06:30"
];


const schedule4 = [ //Абая
    "06:28:15", "06:43:15", "06:59:15", "07:15:15", "07:30:15", "07:45:15", "08:01:15", "08:17:15", "08:32:15", "08:47:15", "09:03:15", "09:19:15", "09:34:15", "09:46:40", "09:59:05", "10:11:30", "10:23:55", "10:36:20", "10:48:45", "11:01:10", "11:13:30", "11:25:55", "11:38:20", "11:50:45", "12:03:10", "12:15:30", "12:27:55", "12:40:20", "12:52:45", "13:05:10", "13:17:30", "13:29:55", "13:42:20", "13:54:45", "14:07:10", "14:19:30", "14:31:55", "14:44:20", "14:56:45", "15:09:10", "15:21:30", "15:33:55", "15:46:20", "15:58:45", "16:11:10", "16:23:30", "16:35:55", "16:48:20", "17:00:45", "17:13:10", "17:25:30", "17:37:55", "17:50:20", "18:02:45", "18:15:10", "18:27:30", "18:39:55", "18:52:20", "19:04:45", "19:17:10", "19:29:30", "19:41:55", "19:54:20", "20:09:50", "20:25:20", "20:40:50", "20:56:20", "21:11:50", "21:27:20", "21:42:50", "21:58:20", "22:13:50", "22:29:20", "22:44:50", "23:00:20", "23:15:50", "23:31:20", "23:46:50", "00:02:20", "00:09:00"
];


const schedule5 = [ //Байконыр
    "06:31:25", "06:46:25", "07:02:25", "07:18:25", "07:33:25", "07:48:25", "08:04:25", "08:20:25", "08:35:25", "08:50:25", "09:06:25", "09:22:25", "09:37:25", "09:49:50", "10:02:15", "10:14:40", "10:27:05", "10:39:30", "10:51:55", "11:04:20", "11:16:40", "11:29:05", "11:41:30", "11:53:55", "12:06:20", "12:18:40", "12:31:05", "12:43:30", "12:55:55", "13:08:20", "13:20:40", "13:33:05", "13:45:30", "13:57:55", "14:10:20", "14:22:40", "14:35:05", "14:47:30", "14:59:55", "15:12:20", "15:24:40", "15:37:05", "15:49:30", "16:01:55", "16:14:20", "16:26:40", "16:39:05", "16:51:30", "17:03:55", "17:16:20", "17:28:40", "17:41:05", "17:53:30", "18:05:55", "18:18:20", "18:30:40", "18:43:05", "18:55:30", "19:07:55", "19:20:20", "19:32:40", "19:45:05", "19:57:30", "20:13:00", "20:28:30", "20:44:00", "20:59:30", "21:15:00", "21:30:30", "21:46:00", "22:01:30", "22:17:00", "22:32:30", "22:48:00", "23:03:30", "23:19:00", "23:34:30", "23:50:00", "00:05:30", "00:12:10"
];

const schedule6 = [ //Театр
    "06:33:45", "06:48:45", "07:04:45", "07:20:45", "07:35:45", "07:50:45", "08:06:45", "08:22:45", "08:37:45", "08:52:45", "09:08:45", "09:24:45", "09:39:45", "09:52:10", "10:04:35", "10:17:00", "10:29:25", "10:41:50", "10:54:15", "11:06:40", "11:19:00", "11:31:25", "11:43:50", "11:56:15", "12:08:40", "12:21:00", "12:33:25", "12:45:50", "12:58:15", "13:10:40", "13:23:00", "13:35:25", "13:47:50", "14:00:15", "14:12:40", "14:25:00", "14:37:25", "14:49:50", "15:02:15", "15:14:40", "15:27:00", "15:39:25", "15:51:50", "16:04:15", "16:16:40", "16:29:00", "16:41:25", "16:53:50", "17:06:15", "17:18:40", "17:31:00", "17:43:25", "17:55:50", "18:08:15", "18:20:40", "18:33:00", "18:45:25", "18:57:50", "19:10:15", "19:22:40", "19:35:00", "19:47:25", "19:59:50", "20:15:20", "20:30:50", "20:46:20", "21:01:50", "21:17:20", "21:32:50", "21:48:20", "22:03:50", "22:19:20", "22:34:50", "22:50:20", "23:05:50", "23:21:20", "23:36:50", "23:52:20", "00:07:50", "00:14:30"
];

const schedule7 = [ //Алатау
    "06:21:35", "06:36:35", "06:51:35", "07:07:35", "07:23:35", "07:38:35", "07:53:35", "08:09:35", "08:25:35", "08:40:35", "08:55:35", "09:11:35", "09:27:35", "09:42:35", "09:55:00", "10:07:25", "10:19:50", "10:32:15", "10:44:40", "10:57:05", "11:09:30", "11:21:50", "11:34:15", "11:46:40", "11:59:05", "12:11:30", "12:23:50", "12:36:15", "12:48:40", "13:01:05", "13:13:30", "13:25:50", "13:38:15", "13:50:40", "14:03:05", "14:15:30", "14:27:50", "14:40:15", "14:52:40", "15:05:05", "15:17:30", "15:29:50", "15:42:15", "15:54:40", "16:07:05", "16:19:30", "16:31:50", "16:44:15", "16:56:40", "17:09:05", "17:21:30", "17:33:50", "17:46:15", "17:58:40", "18:11:05", "18:23:30", "18:35:50", "18:48:15", "19:00:40", "19:13:05", "19:25:30", "19:37:50", "19:50:15", "20:02:40", "20:18:10", "20:33:40", "20:49:10", "21:04:40", "21:20:10", "21:35:40", "21:51:10", "22:06:40", "22:22:10", "22:37:40", "22:53:10", "23:08:40", "23:24:10", "23:39:40", "23:55:10", "00:10:40", "00:17:20"
];

const schedule8 = [ //Сайран
    "06:24:15", "06:39:15", "06:54:15", "07:10:15", "07:26:15", "07:41:15", "07:56:15", "08:12:15", "08:28:15", "08:43:15", "08:58:15", "09:14:15", "09:30:15", "09:45:15", "09:57:40", "10:10:05", "10:22:30", "10:34:55", "10:47:20", "10:59:45", "11:12:10", "11:24:30", "11:36:55", "11:49:20", "12:01:45", "12:14:10", "12:26:30", "12:38:55", "12:51:20", "13:03:45", "13:16:10", "13:28:30", "13:40:55", "13:53:20", "14:05:45", "14:18:10", "14:30:30", "14:42:55", "14:55:20", "15:07:45", "15:20:10", "15:32:30", "15:44:55", "15:57:20", "16:09:45", "16:22:10", "16:34:30", "16:46:55", "16:59:20", "17:11:45", "17:24:10", "17:36:30", "17:48:55", "18:01:20", "18:13:45", "18:26:10", "18:38:30", "18:50:55", "19:03:20", "19:15:45", "19:28:10", "19:40:30", "19:52:55", "20:05:20", "20:20:50", "20:36:20", "20:51:50", "21:07:20", "21:22:50", "21:38:20", "21:53:50", "22:09:20", "22:24:50", "22:40:20", "22:55:50", "23:11:20", "23:26:50", "23:42:20", "23:57:50", "00:13:20", "00:20:00"
];

const schedule9 = [ //Москва
    "06:26:55", "06:41:55", "06:56:55", "07:12:55", "07:28:55", "07:43:55", "07:58:55", "08:14:55", "08:30:55", "08:45:55", "09:00:55", "09:16:55", "09:32:55", "09:47:55", "10:00:20", "10:12:45", "10:25:10", "10:37:35", "10:50:00", "11:02:25", "11:14:50", "11:27:10", "11:39:35", "11:52:00", "12:04:25", "12:16:50", "12:29:10", "12:41:35", "12:54:00", "13:06:25", "13:18:50", "13:31:10", "13:43:35", "13:56:00", "14:08:25", "14:20:50", "14:33:10", "14:45:35", "14:58:00", "15:10:25", "15:22:50", "15:35:10", "15:47:35", "16:00:00", "16:12:25", "16:24:50", "16:37:10", "16:49:35", "17:02:00", "17:14:25", "17:26:50", "17:39:10", "17:51:35", "18:04:00", "18:16:25", "18:28:50", "18:41:10", "18:53:35", "19:06:00", "19:18:25", "19:30:50", "19:43:10", "19:55:35", "20:08:00", "20:23:30", "20:39:00", "20:54:30", "21:10:00", "21:25:30", "21:41:00", "21:56:30", "22:12:00", "22:27:30", "22:43:00", "22:58:30", "23:14:00", "23:29:30", "23:45:00", "00:00:30", "00:16:00", "00:22:40"
];

const schedule10 = [ //Сарыарка
    "06:29:25", "06:44:25", "06:59:25", "07:15:25", "07:31:25", "07:46:25", "08:01:25", "08:17:25", "08:33:25", "08:48:25", "09:03:25", "09:19:25", "09:35:25", "09:50:25", "10:02:50", "10:15:15", "10:27:40", "10:40:05", "10:52:30", "11:04:55", "11:17:20", "11:29:40", "11:42:05", "11:54:30", "12:06:55", "12:19:20", "12:31:40", "12:44:05", "12:56:30", "13:08:55", "13:21:20", "13:33:40", "13:46:05", "13:58:30", "14:10:55", "14:23:20", "14:35:40", "14:48:05", "15:00:30", "15:12:55", "15:25:20", "15:37:40", "15:50:05", "16:02:30", "16:14:55", "16:27:20", "16:39:40", "16:52:05", "17:04:30", "17:16:55", "17:29:20", "17:41:40", "17:54:05", "18:06:30", "18:18:55", "18:31:20", "18:43:40", "18:56:05", "19:08:30", "19:20:55", "19:33:20", "19:45:40", "19:58:05", "20:10:30", "20:26:00", "20:41:30", "20:57:00", "21:12:30", "21:28:00", "21:43:30", "21:59:00", "22:14:30", "22:30:00", "22:45:30", "23:01:00", "23:16:30", "23:32:00", "23:47:30", "00:03:00", "00:18:30", "00:25:10", "06:29:25", "06:44:25", "06:59:25", "07:15:25", "07:31:25", "07:46:25", "08:01:25", "08:17:25", "08:33:25", "08:48:25", "09:03:25", "09:19:25", "09:35:25", "09:50:25", "10:02:50", "10:15:15", "10:27:40", "10:40:05", "10:52:30", "11:04:55", "11:17:20", "11:29:40", "11:42:05", "11:54:30", "12:06:55", "12:19:20", "12:31:40", "12:44:05", "12:56:30", "13:08:55", "13:21:20", "13:33:40", "13:46:05", "13:58:30", "14:10:55", "14:23:20", "14:35:40", "14:48:05", "15:00:30", "15:12:55", "15:25:20", "15:37:40", "15:50:05", "16:02:30", "16:14:55", "16:27:20", "16:39:40", "16:52:05", "17:04:30", "17:16:55", "17:29:20", "17:41:40", "17:54:05", "18:06:30", "18:18:55", "18:31:20", "18:43:40", "18:56:05", "19:08:30", "19:20:55", "19:33:20", "19:45:40", "19:58:05", "20:10:30", "20:26:00", "20:41:30", "20:57:00", "21:12:30", "21:28:00", "21:43:30", "21:59:00", "22:14:30", "22:30:00", "22:45:30", "23:01:00", "23:16:30", "23:32:00", "23:47:30", "00:03:00", "00:18:30", "00:25:10"
];

const schedule11 = [ //Сарыарка
    "-"
];

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
          schedule = schedule1;
        }
        if(scheduleName == "schedule2"){
          schedule = schedule2;
        }
        if(scheduleName == "schedule3"){
          schedule = schedule3;
        }
        if(scheduleName == "schedule4"){
          schedule = schedule4;
        }
        if(scheduleName == "schedule5"){
          schedule = schedule5;
        }
        if(scheduleName == "schedule6"){
          schedule = schedule6;
        }
        if(scheduleName == "schedule7"){
          schedule = schedule7;
        }
        if(scheduleName == "schedule8"){
          schedule = schedule8;
        }
        if(scheduleName == "schedule9"){
          schedule = schedule9;
        }
        if(scheduleName == "schedule10"){
          schedule = schedule10;
        }
        if(scheduleName == "schedule11"){
          schedule = schedule11;
        }
        updateTimer(schedule);
        
    });
});


setInterval(() => {
    updateTimer(schedule);
}, 1000);