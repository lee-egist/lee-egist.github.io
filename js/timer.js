function countdown(){
  var myTime = new Date();
  var end = new Date(2015, 7, 3);
  console.log(end);
  var count = end - myTime;
  console.log(count);
  var timeleft = new Date(count);
  console.log(timeleft.getDate());

  document.getElementById('timer').innerHTML = (timeleft.getDate(), ":", timeleft.getUTCHours(), ":", timeleft.getMinutes(),":", timeleft.getSeconds());
  console.log(timeleft.getDate(), ":", timeleft.getUTCHours(), ":", timeleft.getMinutes(),":", timeleft.getSeconds());

};
