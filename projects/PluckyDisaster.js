function Elevator() {
  // body...
  this.currentFloor = (Math.random() * 100) + 1;
  this.startingFloor = Math.floor(this.currentFloor / 5);
  this.child = new Plucky;
  this.player = new Player;
  this.rollcount = 0;
  this.yourtrys = 3;
}

Elevator.prototype.go_up = function () {
  // body...
  this.currentFloor += 1;
};

Elevator.prototype.go_down = function () {
  // body...
  this.currentFloor -= 1;
};

Elevator.prototype.myInfo = function () {
  // body...
  console.log('current floor', this.currentFloor);
  console.log('desired floor', this.player.desiredFloor);
  var goal = ['Goal: You are trying to get to floor', this.player.desiredFloor].join(" ");
  var start = ['You are on the', this.startingFloor, 'floor'].join(" ");

  // document.getElementById('results').innerHTML = [goal, start].join("<br>");
};

Elevator.prototype.roll = function () {
  // body...
  this.rollcount += 1;
  this.diff = Math.abs(this.currentFloor - this.player.desiredFloor);
  if (this.currentFloor != this.player.desiredFloor && this.player.desiredFloor > this.currentFloor) {
    this.child.reroll();
    this.rollcount += 1;
    for (var i = 0; i < this.diff / 2; i++) {
      this.calculateCurrentFloor();
    }
    for (var i = 0; i < this.player.wins; i++) {
      this.currentFloor += 1;
      if (this.currentFloor == this.player.desiredFloor){
        console.log('the player has won');
        var results = 'The player has won!';
        var survived = ['You made it through', this.rollcount , 'floors'].join(" ");
        document.getElementById('results').innerHTML = [results, survived].join("<br>");
        break;
      }
    }
    console.log(this.currentFloor);

  } else if(this.currentFloor == this.player.desiredFloor){
      var results = 'The player has won!';
      var survived = ['You made it through', this.rollcount , 'floors'].join(" ");
      console.log('You won');
      document.getElementById('results').innerHTML = [results, survived].join("<br>");
  } else if(this.rollcount >= this.yourtrys){
    var mytest = Math.abs(this.diff - this.rollcount);
    var results = ('Sorry. You died of starvation.');
    var test = ['Your current floor was:', this.currentFloor].join(" ");
    var survived = ['You made it through', this.rollcount , 'floors'].join(" ");
    document.getElementById('results').innerHTML = [results, test, survived].join("<br>");
    document.getElementById('roll').disabled = true;
  }

};
Elevator.prototype.calculateCurrentFloor = function () {
  // body...
  this.child.reroll();
  if (this.child.chanceOfPushingButton > 60) {
    this.child.wins += 1;
  } else {
    this.player.wins += 1;
  }
};

function Player(number){
  this.desiredFloor = 87;
  this.wins = 0;
};

function Plucky(){
  this.chanceOfPushingButton = Math.floor((Math.random() * 100) + 20);
  this.wins = 0;
};

Plucky.prototype.reroll = function () {
  // body...
  this.chanceOfPushingButton = Math.floor((Math.random() * 100) + 20);
};

function play(){
game = new Elevator();
game.myInfo();
document.getElementById('roll').disabled = false;
};

function roll(){
  game.roll();
};

thisgame = new Elevator();
thisgame.myInfo();
thisgame.roll();
thisgame.myInfo();
thisgame.roll();
thisgame.myInfo();
thisgame.roll();
