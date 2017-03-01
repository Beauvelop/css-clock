const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const sec = now.getSeconds();
  const secDegrees = ((sec / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secDegrees}deg)`;

  const mins = now.getMinutes();
  const minDegrees = ((mins / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;

  const hrs = now.getHours();
  const hrsDegrees = ((hrs / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hrsDegrees}deg)`;

  if (sec === 59) {
    secondHand.classList.add('noTrans')
  }

  if (mins === 59) {
    minHand.classList.add('noTrans')
  }

  if (hrs === 11) {
    hourHand.classList.add('noTrans')
  }

}

setInterval(setDate, 1000);
