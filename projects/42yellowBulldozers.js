function Character(name, bag, stats, tasklist){
  // attributes
  this.name = name;
  this.bag = bag;
  this.stats = stats;
  this.tasklist = tasklist;
};
  // messages
  // puts an item into your bag
  Character.prototype.putItem = function (item) {
    this.bag.putItem(item);
  };

  //use the given item if avaiable
  Character.prototype.useItem = function (item){
    var itemIndex = NaN;
    if (this.bag.includes(item)){
      itemIndex = this.bag.indexOf(item)
      delete this.bag[itemIndex]
      return true
    } else {
      console.log("You Don't have that item");
      return false
    }
  };
  // this may need to be moved to task
  Character.prototype.try_task = function (taskObject) {
    // body...
    var statNeeded = taskObject.statName
    var statMinToPass = taskObject.minPasslimit
  };
  Character.prototype.statBenfited = function (plusStat) {
    // body...
    this.stats[plusStat] += 1;
  };
  Character.prototype.info = function () {
    // body...
    console.log(this.name);
    console.log(this.bag);
    console.log(this.stats);
    console.log(this.tasklist);
  };
  Character.prototype.bagItems(){

  }

//
// This code is fot the Task Object
//
function Task(thePromt, theLimit, theStat, theCost, theBenefit, benefitStat) {
  // attributes
  this.taskPrompt = thePromt;
  this.minPasslimit = theLimit;
  this.statName = theStat;
  this.healthCost = theCost;
  this.healthBenefit = theBenefit;
  this.statBenfited = benefitStat;
};
Task.prototype.callTask = function() {
  console.log(this.taskPrompt)
};

Task.prototype.pass = function(stat){
    if(stat.stamina > this.minPasslimit){
      console.log('true');
      // characterStatBenefit(this.statBenfited);
      // characterHeatlhImprovement(this.healthBenefit);
    } else {
      console.log('false');
      // characterHealthLost(this.healthCost);
    }
};

function Stat(){
  this.myStats = new Map();
  this.character_stats = [ 'Health', 'Charm', 'Intellect', 'Stamina' ];
  console.log(this.character_stats.length);
  for(var count = 0; count < this.character_stats.length; count++) {
    var rand = Math.floor((Math.random() * 6)+ 5);
    this.myStats.set(this.character_stats[count], rand);
  }
};

Stat.prototype.getInfo = function () {
  // body...
  var mytry = this.myStats.entries();
  for (var i = 0; i < mytry.length; i++) {
    console.log(mytry.next().value);
  }
};

//
// This code is for the bag Object
//
function Bag(){
  // attributes
  this.items = [];
  // messages
};

Bag.prototype.putItem = function(item) {
  for (var i = 0; i < item.length; i++) {
    this.items.push(item[i]);
  }
};

Bag.prototype.useItem = function(item) {
  if(this.items.includes(item)){
    delete this.items(item);
    return true;
  }
};

Bag.prototype.listItem = function(){
  console.log(this.items);
};


/*************************** Driver code **************************************/
var a1task = new Task('Get to the ship!', 9, 'Stamina', 10, 3, null);
var a2task = new Task('Stop Bulldozer!', 7, 'Charm', 4, 1, 'Intellect');
var a3task = new Task('Try to relax.', 8, 'Health', 1, 1, 'Stamina');
var a4task = new Task('Find your towel!', 6, 'Intellect', 5, 2, 'Health');
var alltask1 = new Task('Have a drink?', 3, 'Health', 0, 1, 'Charm');
alltask1.callTask();
alltask1.pass({stamina: 70});
var aurthurTasks = [a1task, a2task, a3task, a4task, alltask1];
var authurStats = new Stat();
var authursBag = new Bag();
authursBag.putItem(['peanuts', 'paper', 'cellphone', 'babelFish']);
authursBag.listItem();
var fordsBag = new Bag();
fordsBag.putItem(['towel', 'Hitchhikers Guide', 'Hitchhikers Ring', 'Script']);
var trilliansBag = new Bag();
trilliansBag.putItem(['bra', 'glasses', 'wallet', 'cellphone', 'keys', 'dentalfloss', 'chapstick', 'coins', 'medication', 'snacks', 'sweater', 'book']);
var zaphodsBag = new Bag();
zaphodsBag.putItem(['sunglasses', 'handkerchif', 'Mageratha Coordinates', 'keys', 'marker', 'self portrait']);

var authur = new Character('Authur', authursBag, authurStats, aurthurTasks);
authur.info();
