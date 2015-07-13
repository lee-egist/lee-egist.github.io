function timer() {
  // body...
  var startDate = new Date(2015, 7, 13)
  var mytime = Date.now();
  var timeLeft = startDate - mytime;
  document.getElementById('timer').innerHTML = timeLeft.getMinutes();
}
window.onload = timer();
