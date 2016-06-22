//CodeDayOrder 曜日暗号
var CDO = new Array();
var CorrectCDO = ["Tu", "We", "Th", "Fr", "Sa", "Mo", "Su"];

function dayCipher(event, day){
  CDO.push(day);
  if(CDO.toString() == CorrectCDO.toString()){
    dayCipherF = true;
    alert("開いたようだ");
    openLeftCloset();
  }
}
