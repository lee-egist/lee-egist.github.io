// var myTime = new Date();
// console.log(myTime);
// var startDate = new Date(2015, 6, 13);
// console.log(startDate);
// var timeleft = myTime - startDate;
// var countdown = new Date(timeleft)
// console.log(countdown.getUTCHours(), countdown.getMinutes(), countdown.getSeconds());

function countdown(){
  var myTime = new Date();
  var end = new Date(2015, 7, 3);
  console.log(end);
  var count = end - myTime;
  console.log(count);
  var timeleft = new Date(count);
  console.log(timeleft.getDate());

  document.getElementById('timer').innerHTML = (timeleft.getDate(), ":", timeleft.getUTCHours(), ":", timeleft.getMinutes(),":", timeleft.getSeconds());

};
countdown();
window.setTimeout(countdown () , 6000);
