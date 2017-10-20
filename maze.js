
var loser = false; //whether the user hits a wall


window.onload = function()
{
//var allBoundaries = document.querySelectorAll("div#maze div.boundary");
  	//for (var x = 0; x < allBoundaries.length; x++){
  		//allBoundaries[x].addEventListener("mouseover", turnRed);
  	//}
  	//allBoundaries[x].addEventListener("mouseover",turnRed());
  //	}
  	var e = document.getElementById("end");
   e.addEventListener("mouseover",gameOver);
   var s = document.getElementById("start");
   s.addEventListener("click",startGame);
   var allBoundaries = document.querySelectorAll("div#maze div.boundary");
  
      for (var x = 0; x < allBoundaries.length; x++){
          allBoundaries[x].addEventListener("mouseover",turnRed);
      }
  };
  
function turnRed(){
    loser = true;
    var bouns = document.querySelectorAll("div#maze div.boundary");
    for(var i = 0; i<bouns.length; i++){
        bouns[i].setAttribute("class", "boundary youlose");
    }
}

function gameOver(){
    var sessionStart = document.getElementById("status");
    
    if (!loser){
        loser = true;
        sessionStart.innerHTML = "Congratulations! You won! :-)";
      } 
      else {
          sessionStart.innerHTML = "HaHa! You lost.";
      }
 }

function startGame(){
    loser = false;
    var bouns = document.querySelectorAll("div#maze div.boundary");
    document.addEventListener("mouseover",function(){
        var x = event.clientX; //Get the horizontal coordinate
        var y = event.clientY; //get the vertical coordinate
        if(x < maze.offsetLeft || y > maze.offsetRight){
            turnRed();
        }
    });
    for (var i = 0; i<bouns.length; i++){
        bouns[i].setAttribute("class","boundary");
    }
}
