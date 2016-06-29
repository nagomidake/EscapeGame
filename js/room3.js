function goToRoom3(){
  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  onRoom = 3;
  returnScreen = function (){goToRoom3()};


  //部屋の画像を表示
  var room3Bmp = new createjs.Bitmap("images/Room3.png");
  escapeContainer.addChild(bmpScaler(room3Bmp));

  //右の部屋に行くためのボタン
  var toRightRoomButton = new createButton("", 40, 540, "rgba(254, 254, 254, 0.2)");
  toRightRoomButton.x = 760;
  toRightRoomButton.y = 0;
  escapeContainer.addChild(toRightRoomButton);

  //左の部屋に行くためのボタン
  var toLeftRoomButton = new createButton("", 40, 540, "rgba(254, 254, 254, 0.2)");
  toLeftRoomButton.x = 0;
  toLeftRoomButton.y = 0;
  escapeContainer.addChild(toLeftRoomButton);

  //ここから家具関係
  //エアコンに行くための領域
  var toAircon = new createMoveButton("", 240, 130, "rgba(255, 255, 255, 0)");
  toAircon.x = 300;
  toAircon.y = 50;
  escapeContainer.addChild(toAircon);

  //ソファーに行くための領域
  var toSofa = new createMoveButton("", 280, 160, "rgba(255, 255, 255, 0)");
  toSofa.x = 296;
  toSofa.y = 270;
  escapeContainer.addChild(toSofa);

  toAircon.addEventListener("click", goToAircon);
  toSofa.addEventListener("click", goToSofa);

  //部屋移動時のイベント登録
  toRightRoomButton.addEventListener("click", goToRoom4);
  toLeftRoomButton.addEventListener("click", goToRoom2);

  mainContainer.addChild(escapeContainer);
}

function goToAircon(){
  returnScreen = function (){goToAircon()};

  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  if(airconONF){
    var mainBmp = new createjs.Bitmap("images/Aircon_Open.png");
    escapeContainer.addChild(bmpScaler(mainBmp));
  }else{
    var mainBmp = new createjs.Bitmap("images/Aircon_Close.png");
    escapeContainer.addChild(bmpScaler(mainBmp));
  }
    //エアコンをつける為の領域
    var airconOn = new createMoveButton("", 640, 270, "rgba(255, 255, 255, 0)");
    airconOn.x = 80;
    airconOn.y = 190;
    escapeContainer.addChild(airconOn);
    airconOn.addEventListener("click", goAirconOn);

  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //ボタンクリック時のイベント登録
  backButton.addEventListener("click", goToRoom3);

  mainContainer.addChild(escapeContainer);
}

function goAirconOn(){
  if(rimoconPowerF && selectItemName == "Rimocon"){
    airconONF = true;
  }

  if(airconONF){
    returnScreen = function (){goAirconOn()};

    //上画面の子要素をすべて消す
    escapeContainer.removeAllChildren();
    mainContainer.addChild(escapeContainer);

    var mainBmp = new createjs.Bitmap("images/Aircon_Open.png");
    escapeContainer.addChild(bmpScaler(mainBmp));

    //バックボタン
    var backButton = createBackButton();
    escapeContainer.addChild(backButton);

    showMessage("エアコンから暖かい風がでている");

    //ボタンクリック時のイベント登録
    backButton.addEventListener("click", goToRoom3);

    mainContainer.addChild(escapeContainer);
  }else if(!airconONF){
    showMessage("エアコンがあるが、動いていないようだ");
  }
}

function goToSofa(){
  returnScreen = function (){goToSofa()};

  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  var mainBmp = new createjs.Bitmap("images/Sofa_MAKURA.png");
  escapeContainer.addChild(bmpScaler(mainBmp));

  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //枕を上げる為の領域
  var pillowUp = new createMoveButton("", 180, 190, "rgba(255, 255, 255, 0)");
  pillowUp.x = 310;
  pillowUp.y = 240;
  escapeContainer.addChild(pillowUp);

  pillowUp.addEventListener("click", goPillowUp);

  //ボタンクリック時のイベント登録
  backButton.addEventListener("click", goToRoom3);

  mainContainer.addChild(escapeContainer);
}

function goPillowUp(){
  returnScreen = function (){goPillowUp()};

  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  var mainBmp = new createjs.Bitmap("images/Sofa_4ORI.png");
  escapeContainer.addChild(bmpScaler(mainBmp));

  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //枕を上げる為の領域
  var lookPaper = new createMoveButton("", 180, 190, "rgba(255, 255, 255, 0)");
  lookPaper.x = 310;
  lookPaper.y = 240;
  escapeContainer.addChild(lookPaper);

  lookPaper.addEventListener("click", goLookSouthPaper);

  //ボタンクリック時のイベント登録
  backButton.addEventListener("click", goToSofa);

  mainContainer.addChild(escapeContainer);
}

function goLookSouthPaper(){
  returnScreen = function (){goLookSouthPaper()};

  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  playSound("Page");

  var mainBmp = new createjs.Bitmap("images/Sofa_4ORIShow.png");
  escapeContainer.addChild(bmpScaler(mainBmp));

  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //ボタンクリック時のイベント登録
  backButton.addEventListener("click", goToSofa);

  mainContainer.addChild(escapeContainer);

}
