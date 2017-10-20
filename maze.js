var sessionStart = document.getElementById("status");
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
    if (loser){
        sessionStart.innerHTML = "HaHa! You lost.";
      } 
      else {
          sessionStart.innerHTML = "Congratulations! You won! :)";
      }
 }

function startGame(){
    loser = false;
    var bouns = document.querySelectorAll("div#maze div.boundary");
    
    for (var i = 0; i<bouns.length; i++){
        bouns[i].setAttribute("class","boundary");
    }
}
