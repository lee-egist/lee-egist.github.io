function Elevator() {
  // body...
  this.currentFloor = Math.floor((Math.random() * 100) + 1);
  this.startingFloor = Math.floor((this.currentFloor / 5));
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
  var goal = ['Goal: You are trying to get to floor', this.player.desiredFloor].join(" ");
  var start = ['You are on the', this.currentFloor, 'floor'].join(" ");

  document.getElementById('results').innerHTML = [goal, start].join("<br>");
};

Elevator.prototype.roll = function () {
  // body...
  this.rollcount += 1;
  this.diff = Math.abs(this.currentFloor - this.player.desiredFloor);
  if(this.rollcount = this.yourtrys){
    var mytest = Math.abs(this.diff - this.rollcount);
    var results = ('Sorry. You died of starvation.');
    var test = ['Your current floor was:', this.currentFloor].join(" ");
  document.getElementById('results').innerHTML = [results, test].join("<br>");
    document.getElementById('roll').disabled = true;
  } else if (this.currentFloor != this.player.desiredFloor && this.player.desiredFloor > this.currentFloor) {
    this.child.reroll();
    for (var i = 0; i < this.diff / 2; i++) {
      this.calculateCurrentFloor();
      this.myInfo();
    }
    for (var i = 0; i < this.player.wins; i++) {
      this.currentFloor += 1;
      if (this.currentFloor == this.player.desiredFloor){
        var results = 'The player has won!';
        document.getElementById('results').innerHTML = results;
        break;
      }
    }

  } else if (this.currentFloor != this.player.desiredFloor && this.player.desiredFloor < this.currentFloor) {
    this.child.reroll();
    for (var i = 0; i < this.diff / 2; i++) {
      this.calculateCurrentFloor();
      this.myInfo();
    }
    for (var i = 0; i < this.player.wins; i++) {
      this.currentFloor -= 1;
      if (this.currentFloor == this.player.desiredFloor){
        var results = 'The player has won!';
        document.getElementById('results').innerHTML = results;
        break;
      }
    }

  } else if(this.currentFloor == this.player.desiredFloor){
      var results = 'The player has won!';
      console.log('You won');
      document.getElementById('results').innerHTML = [results];
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
  this.desiredFloor = Math.floor(Math.random() * 100 + 1);
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
