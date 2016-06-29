//アバウトアイテム上で更に詳細に見れるアイテム設定

function itemDetail(selectItem, toItemClick){

  switch (selectItem.image) {
    case Ring.image:
      toItemClick.addEventListener("click", ring);
      break;
    case DVDCase.image:
      toItemClick.addEventListener("click", dvdCase);
      break;
    case DVDPaper.image:
      toItemClick.addEventListener("click", dvdPaper);
      break;
    case Rimocon.image:
      toItemClick.addEventListener("click", rimocon);
      break;
    case Calcurator.image:
      toItemClick.addEventListener("click", calcurator);
      break;
    case Diary.image:
      toItemClick.addEventListener("click", diary);
      break;
    case RingCase.image:
      toItemClick.addEventListener("click", ringCase);
      break;

    default:

  }
}

function ring(){
  showMessage("彼女の為に買った指輪だ");
}

function dvdCase(){
  if(selectItemName == "DVDPaper" && useCutterF){
    //上画面の子要素をすべて消す
    escapeContainer.removeAllChildren();
    mainContainer.addChild(escapeContainer);

    var mainBmp = new createjs.Bitmap("images/DVD+KAMI.png");
    escapeContainer.addChild(bmpScaler(mainBmp));

    itemList[3].image = new createjs.Bitmap("images/DVD+KAMI.png").image;
    changeBlackBox(itemList[4]);

    showMessage("紙をまきつけた");

    //バックボタン
    var backButton = createBackButton();
    escapeContainer.addChild(backButton);

    //ボタンクリック時のイベント登録
    returnRoom(backButton);

    mainContainer.addChild(escapeContainer);
  }else{
    showMessage("彼女が好きだったDVDだ");
  }
}

function dvdPaper(){
  if(selectItemName == "cutter"){
    useCutterF = true;

    //上画面の子要素をすべて消す
    escapeContainer.removeAllChildren();
    mainContainer.addChild(escapeContainer);

    var mainBmp = new createjs.Bitmap("images/KIRINUKI_Paper_Cut.png");
    escapeContainer.addChild(bmpScaler(mainBmp));

    itemList[4].image = new createjs.Bitmap("images/KIRINUKI_Paper_Cut.png").image
    showMessage("丸に沿って切り取った");

    //バックボタン
    var backButton = createBackButton();
    escapeContainer.addChild(backButton);

    //ボタンクリック時のイベント登録
    returnRoom(backButton);

    mainContainer.addChild(escapeContainer);
  }else{
    showMessage("切り取れそうな丸が書かれている");
  }
}


function rimocon(){
  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  var mainBmp = new createjs.Bitmap("images/Rimocon_URA.png");
  escapeContainer.addChild(bmpScaler(mainBmp));

  //アイテムクリック用の領域
  var toItemClick = new createMoveButton("", 350, 350, "rgba(255, 255, 255, 0)");
  toItemClick.x = 230;
  toItemClick.y = 80;
  escapeContainer.addChild(toItemClick);

  toItemClick.addEventListener("click", detailRimocon);

  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //ボタンクリック時のイベント登録
  returnRoom(backButton);

  mainContainer.addChild(escapeContainer);
}

function detailRimocon(){
    //上画面の子要素をすべて消す
    escapeContainer.removeAllChildren();
    mainContainer.addChild(escapeContainer);

  if(rimoconPowerF){
    var mainBmp = new createjs.Bitmap("images/Rimocon_URA_Open_Denchi.png");
    escapeContainer.addChild(bmpScaler(mainBmp));
  }else{
    var mainBmp = new createjs.Bitmap("images/Rimocon_URA_Open.png");
    escapeContainer.addChild(bmpScaler(mainBmp));

    //電池を入れる用の領域
    var toItemClick = new createMoveButton("", 350, 350, "rgba(255, 255, 255, 0)");
    toItemClick.x = 230;
    toItemClick.y = 80;
    escapeContainer.addChild(toItemClick);

    toItemClick.addEventListener("click", insertAAbattery);
  }
    //バックボタン
    var backButton = createBackButton();
    escapeContainer.addChild(backButton);

    //ボタンクリック時のイベント登録
    returnRoom(backButton);

    mainContainer.addChild(escapeContainer);
}

function insertAAbattery(){
  if(selectItemName == "AAbattery"){
    rimoconPowerF = true;
    changeBlackBox(itemList[9]);

    //上画面の子要素をすべて消す
    escapeContainer.removeAllChildren();
    mainContainer.addChild(escapeContainer);

    var mainBmp = new createjs.Bitmap("images/Rimocon_URA_Open_Denchi.png");
    escapeContainer.addChild(bmpScaler(mainBmp));

    showMessage("電池を入れた");

    //バックボタン
    var backButton = createBackButton();
    escapeContainer.addChild(backButton);

    //ボタンクリック時のイベント登録
    returnRoom(backButton);

    mainContainer.addChild(escapeContainer);
  }else{
    showMessage("電池が入っていないようだ");
  }
}

function calcurator(){
  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  var mainBmp = new createjs.Bitmap("images/Cal_URA.png");
  escapeContainer.addChild(bmpScaler(mainBmp));

  //アイテムクリック用の領域
  var toItemClick = new createMoveButton("", 350, 350, "rgba(255, 255, 255, 0)");
  toItemClick.x = 230;
  toItemClick.y = 80;
  escapeContainer.addChild(toItemClick);

  toItemClick.addEventListener("click", detailCalc);

  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //ボタンクリック時のイベント登録
  returnRoom(backButton);

  mainContainer.addChild(escapeContainer);
}

function detailCalc(){
  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  if(AAbatteryF){
    var mainBmp = new createjs.Bitmap("images/Cal_URA_Open_NoDENCHI.png");
    escapeContainer.addChild(bmpScaler(mainBmp));
    showMessage("電池を取り出した");
  }else{
    var mainBmp = new createjs.Bitmap("images/Cal_URA_Open.png");
    escapeContainer.addChild(bmpScaler(mainBmp));
  }
  //電池ゲットの領域
  var toItemClick = new createMoveButton("", 350, 350, "rgba(255, 255, 255, 0)");
  toItemClick.x = 230;
  toItemClick.y = 80;
  escapeContainer.addChild(toItemClick);

  if(!AAbatteryF){
    toItemClick.addEventListener("click", getAAbattery);
  }
  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //ボタンクリック時のイベント登録
  returnRoom(backButton);

  mainContainer.addChild(escapeContainer);
}

function diary(){
  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  playSound("Page");

  var mainBmp = new createjs.Bitmap("images/Diary_Open.png");
  escapeContainer.addChild(bmpScaler(mainBmp));

  showMessage("彼女の日記だ");

  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //ボタンクリック時のイベント登録
  returnRoom(backButton);

  mainContainer.addChild(escapeContainer);
}

function ringCase(){
  if(selectItemName == "Ring"){
    ringCaseWithRingF = true;
    changeBlackBox(itemList[0]);

    itemList[14].image = new createjs.Bitmap("images/LingCase_OnLing.png").image;
    RingCase.image = new createjs.Bitmap("images/LingCase_OnLing.png").image;
  }

  if(ringCaseWithRingF){
    //上画面の子要素をすべて消す
    escapeContainer.removeAllChildren();
    mainContainer.addChild(escapeContainer);

    var mainBmp = new createjs.Bitmap("images/LingCase_OnLing.png");
    escapeContainer.addChild(bmpScaler(mainBmp));

    showMessage("指輪をはめた");

    //アイテムクリック用の領域
    var toItemClick = new createMoveButton("", 350, 350, "rgba(255, 255, 255, 0)");
    toItemClick.x = 230;
    toItemClick.y = 80;
    escapeContainer.addChild(toItemClick);
    toItemClick.addEventListener("click", detailRingCase);

    //バックボタン
    var backButton = createBackButton();
    escapeContainer.addChild(backButton);

    //ボタンクリック時のイベント登録
    returnRoom(backButton);

    mainContainer.addChild(escapeContainer);
  }else{
      detailRingCase();
  }
}

function detailRingCase(){
  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  var mainBmp = new createjs.Bitmap("images/LingCase_URA.png");
  escapeContainer.addChild(bmpScaler(mainBmp));

  //アイテムクリック用の領域
  var toItemClick = new createMoveButton("", 350, 350, "rgba(255, 255, 255, 0)");
  toItemClick.x = 230;
  toItemClick.y = 80;
  escapeContainer.addChild(toItemClick);
  toItemClick.addEventListener("click", openRingCase);

  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //ボタンクリック時のイベント登録
  returnRoom(backButton);

  mainContainer.addChild(escapeContainer);
}

function openRingCase(){
  if(ringCaseWithRingF && !PaperOfHerF){
    //上画面の子要素をすべて消す
    escapeContainer.removeAllChildren();
    mainContainer.addChild(escapeContainer);

    var mainBmp = new createjs.Bitmap("images/LingCase_URA_InPaper.png");
    escapeContainer.addChild(bmpScaler(mainBmp));

    //アイテムクリック用の領域
    var toItemClick = new createMoveButton("", 350, 350, "rgba(255, 255, 255, 0)");
    toItemClick.x = 230;
    toItemClick.y = 80;
    escapeContainer.addChild(toItemClick);
    toItemClick.addEventListener("click", getHerPaper);
  }else if(PaperOfHerF){
    //上画面の子要素をすべて消す
    escapeContainer.removeAllChildren();
    mainContainer.addChild(escapeContainer);

    var mainBmp = new createjs.Bitmap("images/LingCase_URA_Open.png");
    escapeContainer.addChild(bmpScaler(mainBmp));
  }else{
    showMessage("開きそうなくぼみがあるが開かない")
  }

  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //ボタンクリック時のイベント登録
  returnRoom(backButton);

  mainContainer.addChild(escapeContainer);
}
