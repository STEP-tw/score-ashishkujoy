const drawGrids=function(numberOfRows,numberOfCols) {
  let grid=document.getElementById("grid");
  for (var i = 0; i < numberOfRows; i++) {
    let row=document.createElement("tr");
    for (var j = 0; j < numberOfCols; j++) {
      let col=document.createElement("td");
      col.id=`${j}_${i}`;
      row.appendChild(col);
    }
    grid.appendChild(row);
  }
}

const paintCell=function(pos,color) {
  let cell=document.getElementById(pos.getCoord().join("_"));
  if(cell)
    cell.className=color;
}

const paintBody=function(pos) {
  paintCell(pos,"snake");
}

const paintHead=function(pos) {
  paintCell(pos,"snake_head");
}

const unpaintSnake=function(pos) {
  paintCell(pos,"");
}

const drawSnake=function(snake) {
  snake.getBody().forEach(function(pos){
    paintBody(pos);
  });
  paintHead(snake.getHead());
}

const drawFood=function(food) {
  if(food.isSuperFood())
    paintCell(food.getPosition(),"super-food");
  else
  paintCell(food.getPosition(),"food");  
}

const changeScoreView = function(newScore) {
  let score = document.getElementById("current_score");
  score.innerHTML=newScore;
}

const displayRestartButton = function() {
  let restartPosition = document.getElementById("restart_position");
  let restartButton = document.createElement('button');
  restartButton.id = "restart_button";
  restartButton.innerHTML = "restart";
  restartButton.onclick = restart ;
  restartPosition.appendChild(restartButton);
}

const restart = function(){
  location.reload();
}
