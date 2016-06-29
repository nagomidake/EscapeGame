var body = document.body;

var loadingDiv = document.getElementById("loading");
var lodingPercent = document.getElementById("percent");
var titleDiv = document.getElementById("title");

titleDiv.style.visibility = "hidden";

function loadingScreen(per){
  loadingDiv.style.visibility = "visible";
  var per100 = per*100;
  var percent = [per100.toFixed(1), "%"].join("");
  lodingPercent.innerHTML = percent;
}

function completeScreen(){
  body.removeChild(loadingDiv);
  titleDiv.style.visibility = "visible";
}
