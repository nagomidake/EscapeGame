function goToRoom2(){
  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  onRoom = 2;

  //部屋の画像を表示
  var room2Bmp = new createjs.Bitmap("images/Room2.png");
  escapeContainer.addChild(bmpScaler(room2Bmp));

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
  //ベッドの下を見に行く為の領域
  var toBed = new createMoveButton("", 260, 60, "rgba(255, 255, 255, 0)");
  toBed.x = 500;
  toBed.y = 400;
  escapeContainer.addChild(toBed);

  //絵を見に行く為の領域
  var toPicture = new createMoveButton("", 175, 125, "rgba(255, 255, 255, 0)");
  toPicture.x = 143;
  toPicture.y = 145;
  escapeContainer.addChild(toPicture);

  //窓を見に行く為の領域
  var toWindow = new createMoveButton("", 175, 125, "rgba(255, 255, 255, 0)");
  toWindow.x = 505;
  toWindow.y = 115;
  escapeContainer.addChild(toWindow);

  //領域クリック時のイベント登録
  toBed.addEventListener("click", goToBed);
  toPicture.addEventListener("click", goToPicture);
  toWindow.addEventListener("click", goToWindow);

  //部屋移動時のイベント登録
  toRightRoomButton.addEventListener("click", goToRoom3);
  toLeftRoomButton.addEventListener("click", goToRoom1);

  mainContainer.addChild(escapeContainer);
}

function goToBed(){
  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  if(KeyOfBookShelfF){
    var mainBmp = new createjs.Bitmap("images/Under_the_Bed_NoKye.png");
    escapeContainer.addChild(bmpScaler(mainBmp));
  }else{
    var mainBmp = new createjs.Bitmap("images/Under_the_Bed.png");
    escapeContainer.addChild(bmpScaler(mainBmp));
  }

  //鍵を取るための領域
  if(!KeyOfBookShelfF){
    var getKey = new createMoveButton("", 150, 50, "rgba(255, 255, 255, 0)");
    getKey.x = 600;
    getKey.y = 310;
    escapeContainer.addChild(getKey);
    getKey.addEventListener("click", getKey1);
  }

  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //ボタンクリック時のイベント登録
  backButton.addEventListener("click", goToRoom2);

  mainContainer.addChild(escapeContainer);

}

function goToWindow(){
  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  var mainBmp = new createjs.Bitmap("images/Window_Close.png");
  escapeContainer.addChild(bmpScaler(mainBmp));

  //カーテンを開けるための領域
  var openCurtain = new createMoveButton("", 600, 420, "rgba(255, 255, 255, 0)");
  openCurtain.x = 110;
  openCurtain.y = 40;
  escapeContainer.addChild(openCurtain);

  //イベント登録
  openCurtain.addEventListener("click", goOpenCurtain);

  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //ボタンクリック時のイベント登録
  backButton.addEventListener("click", goToRoom2);

  mainContainer.addChild(escapeContainer);

}

function goOpenCurtain(){
  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  playSound("Curtain");

  if(CutterF && !airconONF){
    var mainBmp = new createjs.Bitmap("images/Window_Open_NoCutter.png");
    escapeContainer.addChild(bmpScaler(mainBmp));
  }else if(airconONF){
    var mainBmp = new createjs.Bitmap("images/Window_Open_UKIAGARU.png");
    escapeContainer.addChild(bmpScaler(mainBmp));
  }else{
    var mainBmp = new createjs.Bitmap("images/Window_Open.png");
    escapeContainer.addChild(bmpScaler(mainBmp));
  }

  //植木鉢を上げるための領域
  var raisePot = new createMoveButton("", 90, 100, "rgba(255, 255, 255, 0)");
  raisePot.x = 200;
  raisePot.y = 345;
  escapeContainer.addChild(raisePot);

  //カッターを取るための領域
  if(!CutterF){
    var toGetCutter = new createMoveButton("", 80, 30, "rgba(255, 255, 255, 0)");
    toGetCutter.x = 550;
    toGetCutter.y = 420;
    escapeContainer.addChild(toGetCutter);
    toGetCutter.addEventListener("click", getCutter);
  }


  //イベント登録
  raisePot.addEventListener("click", goRaisePot);

  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //ボタンクリック時のイベント登録
  backButton.addEventListener("click", goToRoom2);

  mainContainer.addChild(escapeContainer);

}

function goRaisePot(){
  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  if(CutterF && !airconONF){
    var mainBmp = new createjs.Bitmap("images/Window_Open_NoCutter_4ORI.png");
    escapeContainer.addChild(bmpScaler(mainBmp));
  }else if(airconONF){
    var mainBmp = new createjs.Bitmap("images/Window_Open_UKIAGARU_4ORI.png");
    escapeContainer.addChild(bmpScaler(mainBmp));
  }else{
    var mainBmp = new createjs.Bitmap("images/Window_Open_4ORI.png");
    escapeContainer.addChild(bmpScaler(mainBmp));
  }

  //紙を見るための領域
  var lookPaper = new createMoveButton("", 90, 70, "rgba(255, 255, 255, 0)");
  lookPaper.x = 200;
  lookPaper.y = 395;
  escapeContainer.addChild(lookPaper);

  //カッターを取るための領域
  if(!CutterF){
    var toGetCutter = new createMoveButton("", 80, 30, "rgba(255, 255, 255, 0)");
    toGetCutter.x = 550;
    toGetCutter.y = 420;
    escapeContainer.addChild(toGetCutter);
    toGetCutter.addEventListener("click", getCutter);
  }


  //イベント登録
  lookPaper.addEventListener("click", goEastLookPaper);

  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //ボタンクリック時のイベント登録
  backButton.addEventListener("click", goToRoom2);

  mainContainer.addChild(escapeContainer);

}

function goEastLookPaper(){
  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  playSound("Page");

  var mainBmp = new createjs.Bitmap("images/Window_Open_4ORIShow.png");
  escapeContainer.addChild(bmpScaler(mainBmp));

  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //ボタンクリック時のイベント登録
  backButton.addEventListener("click", goToRoom2);

  mainContainer.addChild(escapeContainer);

}

function goToPicture(){
  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  if(switchFlag){
    var mainBmp = new createjs.Bitmap("images/KAIGA_Change.png");
    escapeContainer.addChild(bmpScaler(mainBmp));
  }else{
    var mainBmp = new createjs.Bitmap("images/KAIGA.png");
    escapeContainer.addChild(bmpScaler(mainBmp));
  }

  //ネジをとるための領域
  var removeScrew = new createMoveButton("", 440, 310, "rgba(255, 255, 255, 0)");
  removeScrew.x = 180;
  removeScrew.y = 120;
  escapeContainer.addChild(removeScrew);

  //イベント登録
  removeScrew.addEventListener("click", goRemoveScrew);

  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //ボタンクリック時のイベント登録
  backButton.addEventListener("click", goToRoom2);

  mainContainer.addChild(escapeContainer);

}

function goRemoveScrew(){
  if(selectItemName == "ScrewDriver"){
    removeScrewF = true;
  }

  if(removeScrewF){
    //上画面の子要素をすべて消す
    escapeContainer.removeAllChildren();
    mainContainer.addChild(escapeContainer);

    if(KeyOfDoorF){
      var mainBmp = new createjs.Bitmap("images/KAIGA_Change_NoKye.png");
      escapeContainer.addChild(bmpScaler(mainBmp));
    }else{
      var mainBmp = new createjs.Bitmap("images/KAIGA_Change_OnKye.png");
      escapeContainer.addChild(bmpScaler(mainBmp));
      //鍵を取るための領域
      var getKey = new createMoveButton("", 100, 120, "rgba(255, 255, 255, 0)");
      getKey.x = 350;
      getKey.y = 200;
      escapeContainer.addChild(getKey);
      getKey.addEventListener("click", getDoorKey);
    }

    //バックボタン
    var backButton = createBackButton();
    escapeContainer.addChild(backButton);

    //ボタンクリック時のイベント登録
    backButton.addEventListener("click", goToRoom2);

    mainContainer.addChild(escapeContainer);
  }else{
    showMessage("ネジで固定されている");
  }
}
