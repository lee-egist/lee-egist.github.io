function count(){
  setInterval(function() {
    var myTime = new Date();
    var end = new Date(2015, 6, 26, 9, 0, 0);
    var count = end - myTime;
    var timeleft = new Date(count);
    var offset = myTime.getTimezoneOffset();
    console.log(offset);
    var days = paddnum(timeleft.getUTCDate());
    var hours = paddnum(timeleft.getUTCHours());
    var min = paddnum(timeleft.getMinutes());
    var sec = paddnum(timeleft.getSeconds());
    var myText = [days, hours, min, sec].join(":");
    var my_sentence = ["Countdown to Onsite ", myText].join("- ")
    document.getElementById('timer').innerHTML = my_sentence;
  }, 1000);
};
function paddnum(num){

  if (num < 9){
    num = ["0", num].join('');
  }
  return num;
};
