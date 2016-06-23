//CodeTurnOrder 回転暗号用
var CTO = new Array();
var CorrectCTO = ["R", "L", "L", "L", "L", "R"];

function arrowCipher(event, arrow){
  playSound("AllowButton");
  CTO.push(arrow);
  if(CTO.toString() == CorrectCTO.toString()){
    arrowCipherF = true;
    playSound("Success");
    alert("開いたようだ");
    goToOpenHighShelf();
  }
}
