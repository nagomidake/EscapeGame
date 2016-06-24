var completeDiv = document.getElementById("complete");
var loadingDiv = document.getElementById("loading");

completeDiv.style.visibility = "hidden";

function loadingScreen(){
  loadingDiv.style.visibility = "visible";
}

function completeScreen(){
  loadingDiv.style.visibility = "hidden";
  completeDiv.style.visibility = "visible";
}
