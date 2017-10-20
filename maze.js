window.onload = function()
{
  	var boundary1 = document.getElementById("boundary1");
  	boundary1.addEventListener("mouseover", function(){
  		boundary1.setAttribute("class", "boundary youlose");});	
}
var allBoundaries = document.querySelectorAll("div#maze div.boundary");
  	for (var x = 0; x < allboun.length; x++){
  		allBoundaries[x].addEventListener("mouseover", turnRed);
  	}
  }
  function turnRed() {
      var allBoundaries = document.querySelectorAll("div#maze div.boundary");
      for (var x = 0; x < allboun.length; x++){
          allBoundaries[x].setAttribute("class", "boundary youlose");
      }
  }
