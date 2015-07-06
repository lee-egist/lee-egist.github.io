function Elevator() {
  // body...
  this.currentFloor = Math.floor((Math.random() * 100) + 1);
  this.startingFloor = Math.floor((this.currentFloor / 5));
  this.child = new Plucky;
  this.player = new Player;
  this.rollCount = 0;
  this.numOfTries = 4;
}

Elevator.prototype.go_up = function () {
  // body...
  this.currentFloor += 1;
};

Elevator.prototype.go_down = function () {
  // body...
  this.currentFloor -= 1;
};

Elevator.prototype.elevatorInfo = function () {
  // body...
  var goal = ['Goal: You are trying to get to floor', this.player.desiredFloor].join(" ");
  var start = ['You are on the', this.currentFloor, 'floor'].join(" ");

  document.getElementById('results').innerHTML = [goal, start].join("<br>");
};

Elevator.prototype.roll = function () {
  // body...
  this.rollCount += 1;
  this.floorDifference = Math.abs(this.currentFloor - this.player.desiredFloor);

  if(this.rollCount == this.numOfTries){
    var plucky = '<h3>My turn! not your turn! my turn! I push the button!';
    var plucky2 = 'My elalator! not your elalator, my elalator.</h3>'
    var result = ('Sorry. You died of starvation.');
    var currentStatus = ['Your current floor was:', this.currentFloor].join(" ");
  document.getElementById('results').innerHTML = [plucky, plucky2, result, currentStatus].join("<br>");
    document.getElementById('roll').disabled = true;
  }
  else
    if (this.currentFloor != this.player.desiredFloor && this.player.desiredFloor > this.currentFloor) {

      for (var i = 0; i < this.floorDifference / 2; i++) {
        this.calculateCurrentFloor();
      }
      for (var i = 0; i < this.player.wins; i++) {
        this.currentFloor += 1;
        var floor = this.currentFloor;
        var str = 'Floor:';
        document.getElementById('floor').innerHTML = [str, floor].join(" ");
        if (this.currentFloor == this.player.desiredFloor){
          var result = 'The player has won!';
          document.getElementById('roll').disabled = true;
          document.getElementById('winner').innerHTML = [result];
          break;
        }
        this.elevatorInfo();
      }

  } else if (this.currentFloor != this.player.desiredFloor &&  this.player.desiredFloor < this.currentFloor) {
      for (var i = 0; i < this.floorDifference / 2; i++) {
        this.calculateCurrentFloor();
      }
      for (var i = 0; i < this.player.wins; i++) {
        this.currentFloor -= 1;
        var floor = this.currentFloor;
        var str = 'Floor:';
        document.getElementById('floor').innerHTML = [str, floor].join(" ");
        if (this.currentFloor == this.player.desiredFloor){
          var result = 'The player has won!';
          document.getElementById('roll').disabled = true;
          document.getElementById('winner').innerHTML = [result];
          break;
        }
        this.elevatorInfo();
      }

  } else if(this.currentFloor == this.player.desiredFloor){
      var results = 'The player has won!';
      document.getElementById('roll').disabled = true;
      document.getElementById('winner').innerHTML = [results];
  }

};
Elevator.prototype.calculateCurrentFloor = function () {
  // body...
  this.child.reroll();
  if (this.child.chanceOfPushingButton < 60) {
    this.player.wins += 1;
  }
};

function Player(number){
  this.desiredFloor = Math.floor(Math.random() * 100 + 1);
  this.wins = 0;
};

function Plucky(){
  this.chanceOfPushingButton = 0;
};

Plucky.prototype.reroll = function () {
  // body...
  this.chanceOfPushingButton = Math.floor((Math.random() * 100) + 20);
};

function play(){
document.getElementById('results').innerHTML = ' ';
document.getElementById('floor').innerHTML = " ";
document.getElementById('winner').innerHTML = " ";
game = new Elevator();
game.elevatorInfo();
document.getElementById('roll').disabled = false;
};

function roll(){
  game.roll();
};
