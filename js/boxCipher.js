//CodeBoXOrder 回転暗号用
var CBO = new Array();
var CorrectCBO = ["B", "G", "R", "R", "Y", "G", "B"];

function boxCipher(event, color){
  playSound("ClickButton");
  CBO.push(color);
  if(CBO.toString() == CorrectCBO.toString()){
    boxvCipherF = true;
    playSound("Success");
    alert("開いたようだ");
    goOpenBox();
  }
}
