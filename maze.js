window.onload = function()
{
var allBoundaries = document.querySelectorAll("div#maze div.boundary");
  	for (var x = 0; x < allBoundaries.length; x++){
  		allBoundaries[x].addEventListener("mouseover", turnRed);
  	}
  }
  function turnRed() {
      var allBoundaries = document.querySelectorAll("div#maze div.boundary");
      for (var x = 0; x < allBoundaries.length; x++){
          allBoundaries[x].setAttribute("class", "boundary youlose");
      }
  }
