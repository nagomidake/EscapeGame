function goToRoom4(){
  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  onRoom = 4;
  returnScreen = function (){goToRoom4()};

  //部屋の画像を表示
  var room4Bmp = new createjs.Bitmap("images/Room4.png");
  escapeContainer.addChild(bmpScaler(room4Bmp));

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
  //クローゼットに行くための領域
  var toCloset = new createMoveButton("", 150, 240, "rgba(255, 255, 255, 0)");
  toCloset.x = 180;
  toCloset.y = 200;
  escapeContainer.addChild(toCloset);

  //カレンダーを見に行く為の領域
  var toCalendar = new createMoveButton("", 100, 100, "rgba(255, 255, 255, 0)");
  toCalendar.x = 540;
  toCalendar.y = 160;
  escapeContainer.addChild(toCalendar);

  //家具イベント登録
  toCloset.addEventListener("click", goToCloset);
  toCalendar.addEventListener("click", goToCalender);


  //部屋移動時のイベント登録
  toRightRoomButton.addEventListener("click", goToRoom1);
  toLeftRoomButton.addEventListener("click", goToRoom3);

  mainContainer.addChild(escapeContainer);
}

function goToCloset(){
  returnScreen = function (){goToCloset()};

  CDO.length = 0;
  ClosetSoundF = true;

  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  var mainBmp = new createjs.Bitmap("images/TANSU.png");
  escapeContainer.addChild(bmpScaler(mainBmp));

  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //左の戸に行く為の領域
  var toLeftCloset = new createMoveButton("", 115, 410, "rgba(255, 255, 255, 0)");
  toLeftCloset.x = 290;
  toLeftCloset.y = 85;
  escapeContainer.addChild(toLeftCloset);

  var toRightCloset = new createMoveButton("", 110, 410, "rgba(255, 255, 255, 0)");
  toRightCloset.x = 405;
  toRightCloset.y = 85;
  escapeContainer.addChild(toRightCloset);

  toLeftCloset.addEventListener("click", goToLeftCloset);
  toRightCloset.addEventListener("click", goToRightCloset);

  //ボタンクリック時のイベント登録
  backButton.addEventListener("click", goToRoom4);

  mainContainer.addChild(escapeContainer);
}

function goToLeftCloset(){
  if(dayCipherF){
    openLeftCloset();
  }else{
    returnScreen = function (){goToLeftCloset()};

    //上画面の子要素をすべて消す
    escapeContainer.removeAllChildren();
    mainContainer.addChild(escapeContainer);

    var mainBmp = new createjs.Bitmap("images/TANSU_Left_Up.png");
    escapeContainer.addChild(bmpScaler(mainBmp));

    //バックボタン
    var backButton = createBackButton();
    escapeContainer.addChild(backButton);

    //各種ボタンの領域
    var SundayButton = new createMoveButton("", 78, 90, "rgba(255, 255, 255, 0)");
    SundayButton.x = 120;
    SundayButton.y = 250;
    escapeContainer.addChild(SundayButton);
    SundayButton.on("click", dayCipher, null, false, "Su");

    var MondayButton = new createMoveButton("", 78, 90, "rgba(255, 255, 255, 0)");
    MondayButton.x = 203;
    MondayButton.y = 250;
    escapeContainer.addChild(MondayButton);
    MondayButton.on("click", dayCipher, null, false, "Mo");

    var TuesdayButton = new createMoveButton("", 78, 90, "rgba(255, 255, 255, 0)");
    TuesdayButton.x = 286;
    TuesdayButton.y = 250;
    escapeContainer.addChild(TuesdayButton);
    TuesdayButton.on("click", dayCipher, null, false, "Tu");

    var WednesdayButton = new createMoveButton("", 76, 90, "rgba(255, 255, 255, 0)");
    WednesdayButton.x = 369;
    WednesdayButton.y = 250;
    escapeContainer.addChild(WednesdayButton);
    WednesdayButton.on("click", dayCipher, null, false, "We");

    var ThursdayButton = new createMoveButton("", 75, 90, "rgba(255, 255, 255, 0)");
    ThursdayButton.x = 452;
    ThursdayButton.y = 250;
    escapeContainer.addChild(ThursdayButton);
    ThursdayButton.on("click", dayCipher, null, false, "Th");

    var FridayButton = new createMoveButton("", 76, 90, "rgba(255, 255, 255, 0)");
    FridayButton.x = 533;
    FridayButton.y = 250;
    escapeContainer.addChild(FridayButton);
    FridayButton.on("click", dayCipher, null, false, "Fr");

    var SaturdayButton = new createMoveButton("", 74, 90, "rgba(255, 255, 255, 0)");
    SaturdayButton.x = 618;
    SaturdayButton.y = 250;
    escapeContainer.addChild(SaturdayButton);
    SaturdayButton.on("click", dayCipher, null, false, "Sa");

    //ボタンクリック時のイベント登録
    backButton.addEventListener("click", goToCloset);

    mainContainer.addChild(escapeContainer);
  }
}

var ClosetSoundF = true;

function openLeftCloset(){
  returnScreen = function (){openLeftCloset()};

  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  if(ClosetSoundF){
    playSound("Shelf");
  }

  if(ScrewDriverF){
    var mainBmp = new createjs.Bitmap("images/TANSU_Left_Open_NoScrewDtiver.png");
    escapeContainer.addChild(bmpScaler(mainBmp));
  }else{
    var mainBmp = new createjs.Bitmap("images/TANSU_Left_Open.png");
    escapeContainer.addChild(bmpScaler(mainBmp));
    //ドライバーを取る為の領域
    var toGetScrewDriver = new createMoveButton("", 100, 120, "rgba(255, 255, 255, 0)");
    toGetScrewDriver.x = 300;
    toGetScrewDriver.y = 235;
    escapeContainer.addChild(toGetScrewDriver);
    toGetScrewDriver.addEventListener("click", getScrewDriver);
  }

  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //ボタンクリック時のイベント登録
  backButton.addEventListener("click", goToCloset);

  mainContainer.addChild(escapeContainer);
}

function goToRightCloset(){
  if(ClosetOpenF){
    openRightCloset();
  }else{
    returnScreen = function (){goToRightCloset()};

    //上画面の子要素をすべて消す
    escapeContainer.removeAllChildren();
    mainContainer.addChild(escapeContainer);

    var mainBmp = new createjs.Bitmap("images/TANSU_Right_Up.png");
    escapeContainer.addChild(bmpScaler(mainBmp));

    //戸を開けるための領域
    var toOpenRightCloset = new createMoveButton("", 310, 410, "rgba(255, 255, 255, 0)");
    toOpenRightCloset.x = 305;
    toOpenRightCloset.y = 55;
    escapeContainer.addChild(toOpenRightCloset);

    toOpenRightCloset.addEventListener("click", openRightCloset)

    //バックボタン
    var backButton = createBackButton();
    escapeContainer.addChild(backButton);

    //ボタンクリック時のイベント登録
    backButton.addEventListener("click", goToCloset);

    mainContainer.addChild(escapeContainer);
  }
}

function openRightCloset(){
  if(selectItemName == "KeyOfCloset" && !ClosetOpenF){
    ClosetOpenF = true;
    playSound("Key");
  }

  if(ClosetOpenF){
    returnScreen = function (){openRightCloset()};

    //上画面の子要素をすべて消す
    escapeContainer.removeAllChildren();
    mainContainer.addChild(escapeContainer);

    if(ClosetSoundF){
      playSound("Shelf");
    }

    if(NumberPaperF){
      var mainBmp = new createjs.Bitmap("images/TANSU_Right_Open_NoKUSHAKUSHA_NoCompass.png");
      escapeContainer.addChild(bmpScaler(mainBmp));
    }else{
      var mainBmp = new createjs.Bitmap("images/TANSU_Right_Open_NoCompass.png");
      escapeContainer.addChild(bmpScaler(mainBmp));
    }

    if(!NumberPaperF){
      //クシャクシャの紙をとるけるための領域
      var toGetPaper = new createMoveButton("", 100, 120, "rgba(255, 255, 255, 0)");
      toGetPaper.x = 410;
      toGetPaper.y = 235;
      escapeContainer.addChild(toGetPaper);
      toGetPaper.addEventListener("click", getNumberPaper);
    }

    //紙を見るための領域
    var toLookPaper = new createMoveButton("", 100, 100, "rgba(255, 255, 255, 0)");
    toLookPaper.x = 410;
    toLookPaper.y = 380;
    escapeContainer.addChild(toLookPaper);
    toLookPaper.addEventListener("click", goLookWestPaper);

    //バックボタン
    var backButton = createBackButton();
    escapeContainer.addChild(backButton);

    //ボタンクリック時のイベント登録
    backButton.addEventListener("click", goToCloset);

    mainContainer.addChild(escapeContainer);
  }else{
    showMessage("鍵がかかっているようだ");
  }
}

function goLookWestPaper(){
  returnScreen = function (){goLookWestPaper()};

  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  playSound("Page");

  var mainBmp = new createjs.Bitmap("images/TANSU_Right_Open_4ORIShow.png");
  escapeContainer.addChild(bmpScaler(mainBmp));

  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //ボタンクリック時のイベント登録
  backButton.addEventListener("click", openRightCloset);

  mainContainer.addChild(escapeContainer);
}

function goToCalender(){
  returnScreen = function (){goToCalender()};

  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  var mainBmp = new createjs.Bitmap("images/Calender.png");
  escapeContainer.addChild(bmpScaler(mainBmp));

  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //カレンダーの裏を見るための領域
  var toBackCalenderButton = new createMoveButton("", 470, 490, "rgba(255, 255, 255, 0)");
  toBackCalenderButton.x = 150;
  toBackCalenderButton.y = 20;
  escapeContainer.addChild(toBackCalenderButton);

  toBackCalenderButton.addEventListener("click", goToBackCalenderButton);
  //ボタンクリック時のイベント登録
  backButton.addEventListener("click", goToRoom4);

  mainContainer.addChild(escapeContainer);
}

function goToBackCalenderButton(){
  returnScreen = function (){goToBackCalenderButton()};

  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  var mainBmp = new createjs.Bitmap("images/Calender_Button.png");
  escapeContainer.addChild(bmpScaler(mainBmp));

  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //スイッチオンの為の領域
  var toSwitchOn = new createMoveButton("", 185, 255, "rgba(255, 255, 255, 0)");
  toSwitchOn.x = 295;
  toSwitchOn.y = 160;
  escapeContainer.addChild(toSwitchOn);

  toSwitchOn.addEventListener("click", goToSwitchOn);

  //ボタンクリック時のイベント登録
  backButton.addEventListener("click", goToCalender);

  mainContainer.addChild(escapeContainer);
}

function goToSwitchOn(){
  showMessage("スイッチを押した");
  playSound("Switch");
  switchFlag = true;
}
