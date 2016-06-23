function goToRoom1(){
  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  onRoom = 1;
  CTO.length = 0;
  CBO.length = 0;
  boxWithCompassF = false;

  //部屋の画像を表示
  var room1Bmp = new createjs.Bitmap("images/Room1.png");
  escapeContainer.addChild(bmpScaler(room1Bmp));

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

  //部屋移動時のイベント登録
  toRightRoomButton.addEventListener("click", goToRoom2);
  toLeftRoomButton.addEventListener("click", goToRoom4);

  //ここから家具関係
  //ドアに行くための領域
  var toDoor = new createMoveButton("", 100, 250, "rgba(255, 255, 255, 0)");
  toDoor.x = 550;
  toDoor.y = 150;
  escapeContainer.addChild(toDoor);

  //本棚に行くための領域
  var toBookshelf = new createMoveButton("", 267, 180, "rgba(255, 255, 255, 0)");
  toBookshelf.x = 117;
  toBookshelf.y = 240;
  escapeContainer.addChild(toBookshelf);

  //家具移動時のイベント登録
  toDoor.addEventListener("click", goToDoor);
  toBookshelf.addEventListener("click", goToBookshelf);

  //ドアの上のN
  var N = new createjs.Text("N", "80px Impact", "DarkRed");
  N.x = 580;
  N.y = 50;
  escapeContainer.addChild(N);

  mainContainer.addChild(escapeContainer);
}

function goToDoor(){
  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  var image = loadQueue.getResult("images/Door.png");
  var mainBmp = new createjs.Bitmap(image);
  escapeContainer.addChild(bmpScaler(mainBmp));

  //ドアを開けるための領域
  var toOpenDoor = new createMoveButton("", 190, 435, "rgba(255, 255, 255, 0)");
  toOpenDoor.x = 300;
  toOpenDoor.y = 60;
  escapeContainer.addChild(toOpenDoor);
  toOpenDoor.addEventListener("click", openDoor);

  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //ボタンクリック時のイベント登録
  backButton.addEventListener("click", goToRoom1);

  mainContainer.addChild(escapeContainer);
}

function openDoor(){
  if(selectItemName == "KeyOfDoor" && !doorOpenF){
    doorOpenF = true;
    playSound("Key");
  }

  if(doorOpenF){
    //上画面の子要素をすべて消す
    escapeContainer.removeAllChildren();
    mainContainer.addChild(escapeContainer);

    var doorBmp = new createjs.Bitmap("images/Door_Open.png");
    escapeContainer.addChild(bmpScaler(doorBmp));

    //部屋から脱出するための領域
    var toEscapeRoom = new createMoveButton("", 190, 435, "rgba(255, 255, 255, 0)");
    toEscapeRoom.x = 300;
    toEscapeRoom.y = 60;
    escapeContainer.addChild(toEscapeRoom);
    toEscapeRoom.addEventListener("click", GameClear);

    //バックボタン
    var backButton = createBackButton();
    escapeContainer.addChild(backButton);

    //ボタンクリック時のイベント登録
    backButton.addEventListener("click", goToRoom1);

    mainContainer.addChild(escapeContainer);
  }else{
    showMessage("鍵がかかっているようだ");
  }

}

function goToBookshelf(){
  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  var mainBmp = new createjs.Bitmap("images/HONDANA.png");
  escapeContainer.addChild(bmpScaler(mainBmp));

  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //本に行くための領域
  var toBooks = new createMoveButton("", 180, 245, "rgba(255, 255, 255, 0)");
  toBooks.x = 197;
  toBooks.y = 265;
  escapeContainer.addChild(toBooks);

  //一番上の引き出しに行くための領域
  var toHighShelf = new createMoveButton("", 235, 85, "rgba(255, 255, 255, 0)");
  toHighShelf.x = 377;
  toHighShelf.y = 265;
  escapeContainer.addChild(toHighShelf);

  //真ん中の引き出しに行くための領域
  var toMidShelf = new createMoveButton("", 235, 70, "rgba(255, 255, 255, 0)");
  toMidShelf.x = 377;
  toMidShelf.y = 350;
  escapeContainer.addChild(toMidShelf);

  //一番下の引き出しに行くための領域
  var toLowShelf = new createMoveButton("", 235, 85, "rgba(255, 255, 255, 0)");
  toLowShelf.x = 377;
  toLowShelf.y = 420;
  escapeContainer.addChild(toLowShelf);

  //棚の上に行くための領域
  var toOnShelf = new createMoveButton("", 415, 85, "rgba(255, 255, 255, 0)");
  toOnShelf.x = 197;
  toOnShelf.y = 185;
  escapeContainer.addChild(toOnShelf);

  //領域をクリックした時のイベント登録
  toBooks.addEventListener("click", goToBooks);
  toHighShelf.addEventListener("click", goToHighShelf);
  toMidShelf.addEventListener("click", goToMidShelf);
  toLowShelf.addEventListener("click", goToLowShelf);
  toOnShelf.addEventListener("click", goToOnShelf);

  //ボタンクリック時のイベント登録
  backButton.addEventListener("click", goToRoom1);

  mainContainer.addChild(escapeContainer);

}

function goToBooks(){
  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  var mainBmp = new createjs.Bitmap("images/HONDANA_Left.png");
  escapeContainer.addChild(bmpScaler(mainBmp));

  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //本に行くための領域
  var toBooksOpen = new createMoveButton("", 330, 420, "rgba(255, 255, 255, 0)");
  toBooksOpen.x = 280;
  toBooksOpen.y = 90;
  escapeContainer.addChild(toBooksOpen);

  toBooksOpen.addEventListener("click", goToBooksOpen);

  //ボタンクリック時のイベント登録
  backButton.addEventListener("click", goToRoom1);

  mainContainer.addChild(escapeContainer);
}

function goToBooksOpen(){
    if(selectItemName == "KeyOfBookShelf" && !BookOpenF){
      BookOpenF = true;
      playSound("Key");
    }

    if(BookOpenF){
      //上画面の子要素をすべて消す
      escapeContainer.removeAllChildren();
      mainContainer.addChild(escapeContainer);

      var mainBmp = new createjs.Bitmap("images/HONDANA_Left_Open.png");
      escapeContainer.addChild(bmpScaler(mainBmp));

      //バックボタン
      var backButton = createBackButton();
      escapeContainer.addChild(backButton);

      //本をあげるための領域
      var toRaiseBook = new createMoveButton("", 50, 150, "rgba(255, 255, 255, 0)");
      toRaiseBook.x = 430;
      toRaiseBook.y = 165;
      escapeContainer.addChild(toRaiseBook);

      toRaiseBook.addEventListener("click", raiseBook);

      //ボタンクリック時のイベント登録
      backButton.addEventListener("click", goToRoom1);

      mainContainer.addChild(escapeContainer);
    }else{
      showMessage("鍵がかかっているようだ");
    }
}

function raiseBook(){
  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  var mainBmp = new createjs.Bitmap("images/HONDANA_Left_Open_4ORI.png");
  escapeContainer.addChild(bmpScaler(mainBmp));

  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //紙を見るための領域
  var lookPaper = new createMoveButton("", 50, 150, "rgba(255, 255, 255, 0)");
  lookPaper.x = 430;
  lookPaper.y = 165;
  escapeContainer.addChild(lookPaper);

  lookPaper.addEventListener("click", goLookNorthPaper);

  //ボタンクリック時のイベント登録
  backButton.addEventListener("click", goToRoom1);

  mainContainer.addChild(escapeContainer);
}

function goLookNorthPaper(){
  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  playSound("Page");

  var mainBmp = new createjs.Bitmap("images/HONDANA_Left_Open_4ORIShow.png");
  escapeContainer.addChild(bmpScaler(mainBmp));

  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //ボタンクリック時のイベント登録
  backButton.addEventListener("click", goToRoom1);

  mainContainer.addChild(escapeContainer);
}

function goToHighShelf(){
  if(arrowCipherF){
    goToOpenHighShelf();
  }else{
    //上画面の子要素をすべて消す
    escapeContainer.removeAllChildren();
    mainContainer.addChild(escapeContainer);

    var mainBmp = new createjs.Bitmap("images/HONDANA_Right1.png");
    escapeContainer.addChild(bmpScaler(mainBmp));

    //バックボタン
    var backButton = createBackButton();
    escapeContainer.addChild(backButton);

    //暗号用の矢印
    var rightArrow = new createjs.Bitmap("images/yazirushi.png");
    rightArrow.x = 440;
    rightArrow.y = 310;
    rightArrow.scaleX = 0.8;
    rightArrow.scaleY = 0.7;
    rightArrow.rotation = -50;
    escapeContainer.addChild(rightArrow);

    var leftArrow = new createjs.Bitmap("images/yazirushiL.png");
    leftArrow.x = 330;
    leftArrow.y = 200;
    leftArrow.scaleX = 0.8;
    leftArrow.scaleY = 0.7;
    leftArrow.rotation = 50;
    escapeContainer.addChild(leftArrow);

    //矢印を押すための領域
    var toRightArrow = new createMoveButton("", 105, 210, "rgba(255, 255, 255, 0)");
    toRightArrow.x = 495;
    toRightArrow.y = 200;
    escapeContainer.addChild(toRightArrow);
    toRightArrow.on("click", arrowCipher, null, false, "R");

    var toLeftArrow = new createMoveButton("", 105, 210, "rgba(255, 255, 255, 0)");
    toLeftArrow.x = 250;
    toLeftArrow.y = 205;
    escapeContainer.addChild(toLeftArrow);
    toLeftArrow.on("click", arrowCipher, null, false, "L");

    //ボタンクリック時のイベント登録
    backButton.addEventListener("click", goToRoom1);

    mainContainer.addChild(escapeContainer);
  }
}

function goToOpenHighShelf(){
  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  playSound("Drawer");

  if(CalcuratorF && KeyOfClosetF){
    var mainBmp = new createjs.Bitmap("images/HONDANA_Right1_Open_AllNothing.png");
    escapeContainer.addChild(bmpScaler(mainBmp));
  }else if(!CalcuratorF && KeyOfClosetF){
    var mainBmp = new createjs.Bitmap("images/HONDANA_Right1_Open_NoKye.png");
    escapeContainer.addChild(bmpScaler(mainBmp));
  }else if (CalcuratorF && !KeyOfClosetF) {
    var mainBmp = new createjs.Bitmap("images/HONDANA_Right1_Open_NoCal.png");
    escapeContainer.addChild(bmpScaler(mainBmp));
  }else{
    var mainBmp = new createjs.Bitmap("images/HONDANA_Right1_Open.png");
    escapeContainer.addChild(bmpScaler(mainBmp));
  }

  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //電卓をとるための領域
  var toGetCalc = new createMoveButton("", 190, 210, "rgba(255, 255, 255, 0)");
  toGetCalc.x = 270;
  toGetCalc.y = 90;
  escapeContainer.addChild(toGetCalc);
  toGetCalc.addEventListener("click", getCalc);

  //鍵をとるための領域
  var toGetKey = new createMoveButton("", 80, 80, "rgba(255, 255, 255, 0)");
  toGetKey.x = 470;
  toGetKey.y = 300;
  escapeContainer.addChild(toGetKey);
  toGetKey.addEventListener("click", getKey2);

  //ボタンクリック時のイベント登録
  backButton.addEventListener("click", goToRoom1);

  mainContainer.addChild(escapeContainer);
}

function goToMidShelf(){
  if(NumberCipherF){
    openMidShelf();
  }else{
    //上画面の子要素をすべて消す
    escapeContainer.removeAllChildren();
    mainContainer.addChild(escapeContainer);

    var mainBmp = new createjs.Bitmap("images/HONDANA_Right2.png");
    escapeContainer.addChild(bmpScaler(mainBmp));

    //バックボタン
    var backButton = createBackButton();
    escapeContainer.addChild(backButton);

    //暗号用の数字表示
    escapeContainer.addChild(codeNum1);
    var incCodeNum1 = new createMoveButton("", 75, 100, "rgba(255, 255, 255, 0)");
    incCodeNum1.x = codeNum1.x - 12;
    incCodeNum1.y = codeNum1.y;
    escapeContainer.addChild(incCodeNum1);
    incCodeNum1.addEventListener("click", incNum1);

    escapeContainer.addChild(codeNum2);
    var incCodeNum2 = new createMoveButton("", 75, 100, "rgba(255, 255, 255, 0)");
    incCodeNum2.x = codeNum2.x - 12;
    incCodeNum2.y = codeNum2.y;
    escapeContainer.addChild(incCodeNum2);
    incCodeNum2.addEventListener("click", incNum2);

    escapeContainer.addChild(codeNum3);
    var incCodeNum3 = new createMoveButton("", 75, 100, "rgba(255, 255, 255, 0)");
    incCodeNum3.x = codeNum3.x - 13;
    incCodeNum3.y = codeNum3.y;
    escapeContainer.addChild(incCodeNum3);
    incCodeNum3.addEventListener("click", incNum3);

    escapeContainer.addChild(codeNum4);
    var incCodeNum4 = new createMoveButton("", 75, 100, "rgba(255, 255, 255, 0)");
    incCodeNum4.x = codeNum4.x - 11;
    incCodeNum4.y = codeNum4.y;
    escapeContainer.addChild(incCodeNum4);
    incCodeNum4.addEventListener("click", incNum4);

    //ボタンクリック時のイベント登録
    backButton.addEventListener("click", goToRoom1);

    mainContainer.addChild(escapeContainer);
  }
}

function openMidShelf(){
  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  playSound("Drawer");

  if(CompassF){
    var mainBmp = new createjs.Bitmap("images/HONDANA_Right2_Open_NoCompass.png");
    escapeContainer.addChild(bmpScaler(mainBmp));
  }else{
    var mainBmp = new createjs.Bitmap("images/HONDANA_Right2_Open.png");
    escapeContainer.addChild(bmpScaler(mainBmp));

    //コンパスをとるための領域
    var toGetCompass = new createMoveButton("", 200, 200, "rgba(255, 255, 255, 0)");
    toGetCompass.x = 270;
    toGetCompass.y = 70;
    escapeContainer.addChild(toGetCompass);
    toGetCompass.addEventListener("click", getCompass);
  }
  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //ボタンクリック時のイベント登録
  backButton.addEventListener("click", goToRoom1);

  mainContainer.addChild(escapeContainer);
}

function goToLowShelf(){
  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  playSound("Drawer");

  if(DVDCaseF && DVDPaperF){
    var mainBmp = new createjs.Bitmap("images/HONDANA_Right3_Open_AllNothing.png");
    escapeContainer.addChild(bmpScaler(mainBmp));
  }else if(DVDCaseF && !DVDPaperF){
    var mainBmp = new createjs.Bitmap("images/HONDANA_Right3_Open_NoDVD.png");
    escapeContainer.addChild(bmpScaler(mainBmp));
  }else if(!DVDCaseF && DVDPaperF){
    var mainBmp = new createjs.Bitmap("images/HONDANA_Right3_Open_NoPaper.png");
    escapeContainer.addChild(bmpScaler(mainBmp));
  }else{
    var mainBmp = new createjs.Bitmap("images/HONDANA_Right3_Open.png");
    escapeContainer.addChild(bmpScaler(mainBmp));
  }

  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //アイテムをとるための領域
  if(!DVDCaseF){
    //DVDケースをゲット
    var toGetDVDCase = new createMoveButton("", 140, 230, "rgba(255, 255, 255, 0)");
    toGetDVDCase.x = 210;
    toGetDVDCase.y = 100;
    escapeContainer.addChild(toGetDVDCase);
    toGetDVDCase.addEventListener("click", getDVDCase);
  }

  if(!DVDPaperF){
    //DVDに巻く紙をゲット
    var toGetDVDPaper = new createMoveButton("", 200, 230, "rgba(255, 255, 255, 0)");
    toGetDVDPaper.x = 460;
    toGetDVDPaper.y = 70;
    escapeContainer.addChild(toGetDVDPaper);
    toGetDVDPaper.addEventListener("click", getDVDPaper);
  }


  //ボタンクリック時のイベント登録
  backButton.addEventListener("click", goToRoom1);

  mainContainer.addChild(escapeContainer);
}

function goToOnShelf(){
  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  if(RimoconF){
    var mainBmp = new createjs.Bitmap("images/HONDANA_Top_NoRimocon.png");
    escapeContainer.addChild(bmpScaler(mainBmp));
  }else{
    var mainBmp = new createjs.Bitmap("images/HONDANA_Top.png");
    escapeContainer.addChild(bmpScaler(mainBmp));
  }

  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //アイテムをとるための領域
  if(!RimoconF){
    //リモコンをゲット
    var toGetRimocon = new createMoveButton("", 100, 100, "rgba(255, 255, 255, 0)");
    toGetRimocon.x = 535;
    toGetRimocon.y = 340;
    escapeContainer.addChild(toGetRimocon);
    toGetRimocon.addEventListener("click", getRimocon);
  }


  //暗号の箱に行くための領域
  var toBox = new createMoveButton("", 200, 230, "rgba(255, 255, 255, 0)");
  toBox.x = 132;
  toBox.y = 250;
  escapeContainer.addChild(toBox);

  //getRimocon.addEventListener("click", getRimocon);
  toBox.addEventListener("click", goToBox);

  //ボタンクリック時のイベント登録
  backButton.addEventListener("click", goToRoom1);

  mainContainer.addChild(escapeContainer);
}

function goToBox(){
  if(boxCipherF){
    goOpenBox();
  }else{
    //上画面の子要素をすべて消す
    escapeContainer.removeAllChildren();
    mainContainer.addChild(escapeContainer);

    var mainBmp = new createjs.Bitmap("images/Box.png");
    escapeContainer.addChild(bmpScaler(mainBmp));

    //バックボタン
    var backButton = createBackButton();
    escapeContainer.addChild(backButton);

    //コンパス設置のための領域
    var putCompass = new createMoveButton("", 110, 130, "rgba(255, 255, 255, 0)");
    putCompass.x = 330;
    putCompass.y = 178;
    escapeContainer.addChild(putCompass);
    putCompass.addEventListener("click", boxWithCompass);

    //ボタンクリック時のイベント登録
    backButton.addEventListener("click", goToRoom1);

    mainContainer.addChild(escapeContainer);
  }
}

function boxWithCompass(){
  if(selectItemName == "Compass"){
    boxWithCompassF = true;
  }

  if(boxWithCompassF){
    //上画面の子要素をすべて消す
    escapeContainer.removeAllChildren();
    mainContainer.addChild(escapeContainer);

    playSound("Switch");

    var mainBmp = new createjs.Bitmap("images/Box_OnCompass.png");
    escapeContainer.addChild(bmpScaler(mainBmp));

    //バックボタン
    var backButton = createBackButton();
    escapeContainer.addChild(backButton);


    //色のボタン判定のための領域
    var blueButton = new createMoveButton("", 55, 60, "rgba(255, 255, 255, 0)");
    blueButton.x = 451;
    blueButton.y = 210;
    escapeContainer.addChild(blueButton);
    blueButton.on("click", boxCipher, null, false, "B");

    var redButton = new createMoveButton("", 55, 60, "rgba(255, 255, 255, 0)");
    redButton.x = 261;
    redButton.y = 210;
    escapeContainer.addChild(redButton);
    redButton.on("click", boxCipher, null, false, "R");

    var greenButton = new createMoveButton("", 55, 60, "rgba(255, 255, 255, 0)");
    greenButton.x = 355;
    greenButton.y = 103;
    escapeContainer.addChild(greenButton);
    greenButton.on("click", boxCipher, null, false, "G");

    var yellowButton = new createMoveButton("", 55, 60, "rgba(255, 255, 255, 0)");
    yellowButton.x = 357;
    yellowButton.y = 320;
    escapeContainer.addChild(yellowButton);
    yellowButton.on("click", boxCipher, null, false, "Y");


    //ボタンクリック時のイベント登録
    backButton.addEventListener("click", goToRoom1);

    mainContainer.addChild(escapeContainer);
  }else{
    showMessage("何かがはまりそうなくぼみがある");
  }
}

function goOpenBox(){
  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  if(DiaryF){
    var mainBmp = new createjs.Bitmap("images/InBox_NoDiary.png");
    escapeContainer.addChild(bmpScaler(mainBmp));
  }else{
    var mainBmp = new createjs.Bitmap("images/InBox_Diary.png");
    escapeContainer.addChild(bmpScaler(mainBmp));
  }

  //日記をゲットするための領域
  var toGetDiary = new createMoveButton("", 200, 200, "rgba(255, 255, 255, 0)");
  toGetDiary.x = 285;
  toGetDiary.y = 130;
  escapeContainer.addChild(toGetDiary);
  toGetDiary.addEventListener("click", getDiary);

  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //ボタンクリック時のイベント登録
  backButton.addEventListener("click", goToRoom1);

  mainContainer.addChild(escapeContainer);
}
