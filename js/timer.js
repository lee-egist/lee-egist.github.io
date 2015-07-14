function countdown(){
  var myTime = new Date();
  var end = new Date(2015, 7, 3);
  var count = end - myTime;
  var timeleft = new Date(count);
  var days = timeleft.getDate();
  var hours = timeleft.getUTCHours();
  var min = timeleft.getMinutes();
  var sec = timeleft.getSeconds();
  var myText = [days, hours, min, sec].join(":");
  document.getElementById('timer').innerHTML = myText;
};
function count(){
  setInterval(function() {
    var myTime = new Date();
    var end = new Date(2015, 7, 3);
    var count = end - myTime;
    var timeleft = new Date(count);
    var days = timeleft.getDate();
    var hours = timeleft.getUTCHours();
    var min = timeleft.getMinutes();
    var sec = timeleft.getSeconds();
    var myText = [days, hours, min, sec].join(":");
    var my_sentence = ["Countdown to Onsite ", myText].join("- ")
    document.getElementById('timer').innerHTML = my_sentence;
  }, 1000);
};
