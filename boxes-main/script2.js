let start = document.getElementById("start");
let pause = document.getElementById("pause");
let stop = document.getElementById("stop");
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let ajay;

start.addEventListener("click", function () {
  timer = true;
  stopWatch();
});
function stopWatch() {
  if (timer) {
    milliseconds++;
    if (milliseconds == 100) {
      seconds++;
      milliseconds = 0;
    }
    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes == 0) {
      hours++;
      minutes = 0;
    }
    let h = hours;
    let m = minutes;
    let s = seconds;
    let ms = milliseconds;
    if (hours < 10) {
      h = "0" + hours;
    }
    if (minutes < 10) {
      m = "0" + minutes;
    }
    if (seconds < 10) {
      s = "0" + seconds;
    }
    if (milliseconds < 10) {
      ms = "00" + milliseconds;
    } else if (milliseconds < 100) {
      ms = "0" + milliseconds;
    }
    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = s;
    document.getElementById("seconds").innerHTML = m;
    document.getElementById("milliseconds").innerHTML = ms;
    setTimeout(stopWatch, 10);
  }
}
