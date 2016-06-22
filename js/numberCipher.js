//暗号用数字
var Num1 = 0;
var Num2 = 0;
var Num3 = 0;
var Num4 = 0;

//CodeNumber
var CodeNumber = [0, 0, 0, 0];
var CorrectCN = [1, 1, 9, 9];

var codeNum1 = new createjs.Text(Num1, "100px sans-serif", "rgb(52, 158, 47)");
codeNum1.x = 278;
codeNum1.y = 214;

var codeNum2 = new createjs.Text(Num2, "100px sans-serif", "rgb(52, 158, 47)");
codeNum2.x = 360;
codeNum2.y = 214;

var codeNum3 = new createjs.Text(Num3, "100px sans-serif", "rgb(52, 158, 47)");
codeNum3.x = 444;
codeNum3.y = 214;

var codeNum4 = new createjs.Text(Num4, "100px sans-serif", "rgb(52, 158, 47)");
codeNum4.x = 520;
codeNum4.y = 214;

function incNum1(){
  if(Num1 === 9){
    Num1 = 0;
  }else{
    Num1++;
  }
  codeNum1.text = Num1;

  codeCheck(0, Num1);
}

function incNum2(){
  if(Num2 === 9){
    Num2 = 0;
  }else{
    Num2++;
  }
  codeNum2.text = Num2;

  codeCheck(1, Num2);
}

function incNum3(){
  if(Num3 === 9){
    Num3 = 0;
  }else{
    Num3++;
  }
  codeNum3.text = Num3;

  codeCheck(2, Num3);
}

function incNum4(){
  if(Num4 === 9){
    Num4 = 0;
  }else{
    Num4++;
  }
  codeNum4.text = Num4;

  codeCheck(3, Num4);
}

function codeCheck(index, Num){
  CodeNumber[index] = Num;
  if(CodeNumber.toString() == CorrectCN.toString()){
    NumberCipherF = true;
    alert("開いたようだ");
    openMidShelf();
  }
}
