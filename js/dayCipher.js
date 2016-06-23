//CodeDayOrder 曜日暗号
var CDO = new Array();
var CorrectCDO = ["Tu", "We", "Th", "Fr", "Sa", "Mo", "Su"];

function dayCipher(event, day){
  playSound("ClickButton");
  CDO.push(day);
  if(CDO.toString() == CorrectCDO.toString()){
    dayCipherF = true;
    playSound("Success");
    alert("開いたようだ");
    openLeftCloset();
  }
}
