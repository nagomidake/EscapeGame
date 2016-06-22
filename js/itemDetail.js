//アバウトアイテム上で更に詳細に見れるアイテム設定

function itemDetail(selectItem, toItemClick){

  switch (selectItem.image) {
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

    default:

  }
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

    //バックボタン
    var backButton = createBackButton();
    escapeContainer.addChild(backButton);

    //ボタンクリック時のイベント登録
    returnRoom(backButton);

    mainContainer.addChild(escapeContainer);
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

    //バックボタン
    var backButton = createBackButton();
    escapeContainer.addChild(backButton);

    //ボタンクリック時のイベント登録
    returnRoom(backButton);

    mainContainer.addChild(escapeContainer);
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

    //バックボタン
    var backButton = createBackButton();
    escapeContainer.addChild(backButton);

    //ボタンクリック時のイベント登録
    returnRoom(backButton);

    mainContainer.addChild(escapeContainer);
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
  }else{
    var mainBmp = new createjs.Bitmap("images/Cal_URA_Open.png");
    escapeContainer.addChild(bmpScaler(mainBmp));
  }
  //電池ゲットの領域
  var toItemClick = new createMoveButton("", 350, 350, "rgba(255, 255, 255, 0)");
  toItemClick.x = 230;
  toItemClick.y = 80;
  escapeContainer.addChild(toItemClick);

  toItemClick.addEventListener("click", getAAbattery);

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

  var mainBmp = new createjs.Bitmap("images/Diary_Open.png");
  escapeContainer.addChild(bmpScaler(mainBmp));

  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //ボタンクリック時のイベント登録
  returnRoom(backButton);

  mainContainer.addChild(escapeContainer);
}
