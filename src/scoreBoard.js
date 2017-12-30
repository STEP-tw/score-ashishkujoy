const ScoreBoard = function(incFactor) {
  this.noOfFoodEaten = 0;
  this.score=0;
  this.incBy = incFactor;
}

ScoreBoard.prototype.incrementScore = function() {
  this.noOfFoodEaten++;
  this.score+=this.incBy;
}

ScoreBoard.prototype.getCurrentScore = function() {
  return this.score;
}

ScoreBoard.prototype.getNoOfFoodEaten = function() {
  return this.noOfFoodEaten;
}
