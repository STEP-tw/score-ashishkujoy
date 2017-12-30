const ScoreBoard = function(basePoint,incFactor,incPeriod) {
  this.noOfFoodEaten = 0;
  this.score=0;
  this.incPeriod=incPeriod;
  this.incFactor = incFactor;
  this.incBy = basePoint;
}

ScoreBoard.prototype.incrementScore = function() {
  this.noOfFoodEaten++;
  if(this.noOfFoodEaten%this.incPeriod==0){
    this.incBy = this.incBy*this.incFactor;
  }
  this.score+=this.incBy;
}

ScoreBoard.prototype.getCurrentScore = function() {
  return this.score;
}

ScoreBoard.prototype.getNoOfFoodEaten = function() {
  return this.noOfFoodEaten;
}
