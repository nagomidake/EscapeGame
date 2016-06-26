var completeDiv = document.getElementById("complete");
var loadingDiv = document.getElementById("loading");
var lodingPercent = document.getElementById("percent");

completeDiv.style.visibility = "hidden";

function loadingScreen(per){
  loadingDiv.style.visibility = "visible";
  var percent = [per, "%"].join("");
  lodingPercent.innerHTML = percent;
}

function completeScreen(){
  loadingDiv.style.visibility = "hidden";
  completeDiv.style.visibility = "visible";
}
