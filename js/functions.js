//利便性の為に作った自作関数たち
function bmpScaler(bmp){
  bmp.scaleX = 0.85;
  return bmp;
}

function createBackButton(){
  var backButton = createButton("", 800, 30, "rgba(254, 254, 254, 0.2)");
  backButton.y = 510;
  return backButton;
}

function returnRoom(backButton){
  /*if(onRoom === 1){
    backButton.addEventListener("click", goToRoom1);
  }else if(onRoom === 2){
    backButton.addEventListener("click", goToRoom2);
  }else if(onRoom === 3){
    backButton.addEventListener("click", goToRoom3);
  }else if(onRoom === 4){
    backButton.addEventListener("click", goToRoom4);
  }*/
  backButton.addEventListener("click", returnScreen);
}

//コンバインしてなくなったアイテムをブラックボックス化
function changeBlackBox(changeItem){
  changeItem.image = new createjs.Bitmap("images/blackBox.png").image;
  changeItem.scaleX = 0.4;
  changeItem.scaleY = 0.4;
}


function showMessage(text) {
  var height = 50;
  // ボタン要素をグループ化
  var message = new createjs.Container();
  message.name = text; // ボタンに参考までに名称を入れておく(必須ではない)
  // 通常時の座布団を作成
  var bgUp = new createjs.Shape();
  bgUp.graphics
          .setStrokeStyle(1.0)
          .beginStroke("rgba(255, 255, 255, 0.65)")
          .beginFill("rgba(255, 255, 255, 0.65)")
          .drawRoundRect(0.5, 0.5, 800 - 1.0, height - 1.0, 4);
  message.addChild(bgUp);
  bgUp.visible = true; // 表示する
  // ラベルを作成
  var label = new createjs.Text(text, "24px sans-serif", "rgb(13, 13, 13)");
  label.x = 400;
  label.y = 25;
  label.textAlign = "center";
  label.textBaseline = "middle";
  message.addChild(label);

  escapeContainer.addChild(message);
  mainContainer.addChild(escapeContainer);

  var removeMessage = setInterval(function(){
    escapeContainer.removeChild(message);
  },2000);

}
