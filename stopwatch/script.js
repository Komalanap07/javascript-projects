const minuteslabel = document.getElementById("minutes");
const seclabel = document.getElementById("seconds");
const miliseclabel = document.getElementById("milisec");

const startbtn = document.getElementById("startbtn");
const stopbtn = document.getElementById("stopbtn");
const pausebtn = document.getElementById("pausebtn");
const resetbtn = document.getElementById("resetbtn");

const laplist = document.getElementById("laplist");
let min = 0;
let sec = 0;
let mili = 0;
let interval;

startbtn.addEventListener("click", starttimer);
pausebtn.addEventListener("click", pausetimer);
stopbtn.addEventListener("click", stoptimer);
resetbtn.addEventListener("click", resettimer);

function starttimer() {
    if (interval) return;
  interval = setInterval(updatetimer, 10);
  startbtn.disabled = true;
}
function pausetimer() {
  clearInterval(interval);
  interval = null; 
  pausebtn.disabled = true;
  startbtn.disabled = false;
}
function stoptimer() {
  clearInterval(interval);
  interval = null;

  
  let li = document.createElement("li");
  li.textContent = `Lap ${laplist.childElementCount + 1}: ${padtime(min)}:${padtime(sec)}: ${padtime(mili)}`;
  laplist.appendChild(li);

  startbtn.disabled = false;
}

function resettimer() {
  clearInterval(interval);
  interval = null; 
  mili = 0;
  sec = 0;
  min = 0;
  displaytimer();
  resetbtn.disabled = true;
  startbtn.disabled = false;
  pausebtn.disabled = false;
   laplist.innerHTML = "";
}
function updatetimer() {
  mili++;
  if (mili >= 100) {
    mili = 0;
    sec++;
    if (sec >= 60) {
      sec = 0;
      min++;
    }
  }
  displaytimer();
}

function displaytimer() {
  minuteslabel.textContent = padtime(min);
  seclabel.textContent = padtime(sec);
  miliseclabel.textContent = padtime(mili);
}
function padtime(time) {
  return time.toString().padStart(2, "0");
}
