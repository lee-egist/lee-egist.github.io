function Elevator() {
  // body...
  this.floors = Math.floor(Math.random() * 100) + 1 ;
  this.currentFloor = Math.floor(this.floors / 2);
  this.startingFloor = Math.floor(this.floors / 2);
  this.child = new Plucky;
  this.player = new Player;
  this.rollcount = 0;
  this.diff = 5;
  this.yourtrys = this.diff * 2
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
  var start = ['You are on the', this.startingFloor, 'floor'].join(" ");

  document.getElementById('results').innerHTML = [goal, start].join("<br>");
};

Elevator.prototype.roll = function () {
  // body...
  if (this.currentFloor != this.player.desiredFloor && this.player.desiredFloor < this.currentFloor) {
    rollcount += 1;
    calculateCurrentFloor();
    this.currentFloor -= this.player.wins;

  } else if (this.currentFloor != this.player.desiredFloor && this.player.desiredFloor > this.currentFloor){
    rollcount += 1;
    calculateCurrentFloor();
    this.currentFloor += this.player.wins;
  } else if(this.currentFloor == this.player.desiredFloor){
      var results = 'The player has won!';
      var survived = ['You made it through', this.rollcount , 'floors'].join(" ");
      document.getElementById('results').innerHTML = [results, survived].join("<br>");
  } else if(this.rollcount >= this.diff){
    var mytest = Math.abs(this.diff - this.rollcount);
    var results = ('Sorry. You died of starvation.');
    var test = ['Your current floor was:', this.currentFloor].join(" ");
    var survived = ['You made it through', this.rollcount , 'floors'].join(" ");
    document.getElementById('results').innerHTML = [results, test, survived].join("<br>");
    document.getElementById('roll').disabled = true;
  }
  // if(this.currentFloor != this.player.desiredFloor && this.rollcount < this.yourtrys){
  //   this.child.reroll();
  //
  //   if (this.player.desiredFloor < this.currentFloor) {
  //
  //     if (this.child.chanceOfPushingButton > 75) {
  //       this.go_up();
  //       this.rollcount += 1;
  //       this.roll();
  //     } else {
  //       this.go_down();
  //       this.roll();
  //
  //     }
  //   } else {
  //     if(this.child.chanceOfPushingButton > 75) {
  //       this.go_down();
  //       this.rollcount += 1;
  //       this.roll();
  //     } else {
  //       this.go_up();
  //       this.roll();
  //     }
  //   }
  //
  // } else if(this.currentFloor == this.player.desiredFloor){
  //   var results = 'The player has won!';
  //   var survived = ['You made it through', this.rollcount , 'floors'].join(" ");
  //   document.getElementById('results').innerHTML = [results, survived].join("<br>");
  // } else if(this.rollcount >= this.diff){
  //   var mytest = Math.abs(this.diff - this.rollcount);
  //   var results = ('Sorry. You died of starvation.');
  //   var test = ['Your current floor was:', this.currentFloor].join(" ");
  //   var survived = ['You made it through', this.rollcount , 'floors'].join(" ");
  //   document.getElementById('results').innerHTML = [results, test, survived].join("<br>");
  // }

};
Elevator.prototype.calculateCurrentFloor = function () {
  // body...
  this.child.reroll();
  if (this.child.chanceOfPushingButton > 75) {
    this.child.wins += 1;
  } else {
    this.player.wins += 1;
  }
};

function Player(number){
  this.desiredFloor = Math.floor((Math.random() * 100) + 1);
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
