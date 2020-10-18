var d = new Date();
a = d.getDay(); // getting the weekday

d.getDate(); // day as a number (1-31)
d.getDay(); // weekday as a number (0-6)
d.getFullYear(); // four digit year (yyyy)
d.getHours(); // hour (0-23)
d.getMilliseconds(); // milliseconds (0-999)
d.getMinutes(); // minutes (0-59)
d.getMonth(); // month (0-11)
d.getSeconds(); // seconds (0-59)
d.getTime(); // milliseconds since 1970  

var currentDate = new Date();
var date = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();

var mmddyyyy = pad(month + 1) + "/" + pad(date) + "/" + year;
var monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];
var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var dateWithFullMonthName = monthNames[month] + " " + pad(date) + ", " + year;
var ordinalDate = ordinal(date) + " " + monthNames[month] + ", " + year;

function dateToNiceString(myDate) {
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ];
    return month[myDate.getMonth()] + " " + myDate.getDate() + " " + myDate.getFullYear();
}


var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var d = new Date();
var day = days[d.getDay()];
var hr = d.getHours();
var min = d.getMinutes();
if (min < 10) {
    min = "0" + min;
}
var ampm = "am";
if (hr > 12) {
    hr -= 12;
    ampm = "pm";
}
var date = d.getDate();
var month = months[d.getMonth()];
var year = d.getFullYear();
var x = document.getElementById("time");
x.innerHTML = day + " " + hr + ":" + min + ampm + " " + date + " " + month + " " + year;

function getDateTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    if (month.toString().length == 1) {
        month = '0' + month;
    }
    if (day.toString().length == 1) {
        day = '0' + day;
    }
    if (hour.toString().length == 1) {
        hour = '0' + hour;
    }
    if (minute.toString().length == 1) {
        minute = '0' + minute;
    }
    if (second.toString().length == 1) {
        second = '0' + second;
    }
    var dateTime = year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;
    return dateTime;
}

// example usage: realtime clock
setInterval(function() {
    currentTime = getDateTime();
    document.getElementById("digital-clock").innerHTML = currentTime;
}, 1000);

// ! <div id="digital-clock"></div>

function sec2str(t) {
    var d = Math.floor(t / 86400),
        h = ('0' + Math.floor(t / 3600) % 24).slice(-2),
        m = ('0' + Math.floor(t / 60) % 60).slice(-2),
        s = ('0' + t % 60).slice(-2);
    return (d > 0 ? d + 'd ' : '') + (h > 0 ? h + ':' : '') + (m > 0 ? m + ':' : '') + (t > 60 ? s : s + 's');
}

function FormatSecondsAsDurationString(seconds) {
    var s = "";

    var days = Math.floor((seconds / 3600) / 24);
    if (days >= 1) {
        s += days.toString() + " day" + ((days == 1) ? "" : "s") + " + ";
        seconds -= days * 24 * 3600;
    }

    var hours = Math.floor(seconds / 3600);
    s += GetPaddedIntString(hours.toString(), 2) + ":";
    seconds -= hours * 3600;

    var minutes = Math.floor(seconds / 60);
    s += GetPaddedIntString(minutes.toString(), 2) + ":";
    seconds -= minutes * 60;

    s += GetPaddedIntString(Math.floor(seconds).toString(), 2);

    return s;
}

function GetPaddedIntString(n, numDigits) {
    var nPadded = n;
    for (; nPadded.length < numDigits;) {
        nPadded = "0" + nPadded;
    }

    return nPadded;
}

var m = new Date();
var dateString = m.getUTCFullYear() + "/" + (m.getUTCMonth() + 1) + "/" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes() + ":" + m.getUTCSeconds();
const dayes = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
]

let u = new Date(new Date().getTime() + 4 * 60 * 60 * 1000).toLocaleTimeString(); // 3:18:48 PM or 15:18:48

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

function formatTime(date) {
    var hours = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours()
    var minutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes()

    return hours + ':' + minutes
}
var d = new Date();
var curr_date = d.getDate();
var curr_month = d.getMonth() + 1; //Months are zero based
var curr_year = d.getFullYear();
var curr_hour = d.getHours();
var curr_min = d.getMinutes();
var formattedDate = curr_date + "-" + curr_month + "-" + curr_year + " " + curr_hour + ":" + curr_min;
document.getElementById("DATE").innerHTML = formattedDate;

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

console.log(formatAMPM(new Date));