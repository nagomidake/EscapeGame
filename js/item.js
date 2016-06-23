//アイテム画面ようのコンテナ
var itemContainer = new createjs.Container();

//アイテムの画像を用意しておく
var Ring = new createjs.Bitmap("images/Ling.png");
var Cutter = new createjs.Bitmap("images/Cutter.png");
var DVDCase = new createjs.Bitmap("images/DVD.png");
var DVDPaper = new createjs.Bitmap("images/KIRINUKI_Paper.png");
var NumberPaper = new createjs.Bitmap("images/KUSHA_KAMI_Number.png");
var Calcurator = new createjs.Bitmap("images/Cal.png");
var AAbattery = new createjs.Bitmap("images/Denchi.png");
var Rimocon = new createjs.Bitmap("images/Rimocon.png");
var KeyOfBookShelf = new createjs.Bitmap("images/Key1.png");
var Compass = new createjs.Bitmap("images/Compass.png");
var KeyOfCloset = new createjs.Bitmap("images/Key2.png");
var ScrewDriver = new createjs.Bitmap("images/ScrewDriver.png");
var RingCase = new createjs.Bitmap("images/LingCase.png");
var Diary = new createjs.Bitmap("images/Diary.png");
var KeyOfDoor = new createjs.Bitmap("images/Key3.png");
//var PaperOfHer = new createjs.Bitmap("");

var itemList = new Array();

//現在選択されていアイテム名（文字列型）
var selectItemName = new String();

//現在選択されていアイテム（オブジェクト型）
var selectItemName = new Object();

//前に選択されていたアイテム（ボタンオブジェクト）
var beforeSelectItem = null;

function initItem(){
  var itemBar = new createjs.Shape();
  itemBar.graphics.beginStroke("rgb(144, 144, 144)");
  itemBar.graphics.setStrokeStyle(5);
  itemBar.graphics.beginFill("white");
  itemBar.graphics.drawRect(0, 540, 800, 160);
  itemContainer.addChild(itemBar);

  var count = 0;
  for(var i = 0; i < 16; i++){
    var ITEM = new Object();

    ITEM['item' + i] = new createjs.Bitmap("images/blackBox.png");
    ITEM['item' + i].scaleX = 0.4;
    ITEM['item' + i].scaleY = 0.4;

    if(i < 8){
      ITEM['item' + i].y = 544;
    }else if(i === 8){
      count = 0;
      ITEM['item' + i].y = 623;
    }else{
      ITEM['item' + i].y = 623;
    }

    ITEM['item' + i].x = (10 + count * 82);

    itemList[i] = ITEM['item' + i];
    itemContainer.addChild(itemList[i]);

    count++;
  }

  var itemButton = createItemButton("About\nItem", 131, 150, "rgb(178, 212, 120)");
  itemButton.x = 663;
  itemButton.y = 544;
  itemContainer.addChild(itemButton);
  itemButton.addEventListener("click", aboutItem);

  mainContainer.addChild(itemContainer);

  getRing();
}

function itemSelect(event, itemObj){
  //前にセレクトされた線を透明に戻す
  if(beforeSelectItem != null){
    beforeSelectItem.graphics._stroke.style = "rgba(255, 255, 255, 0.01)";
  }
  //何が選択されたかと選択された線に色をつける
  selectItemName = itemObj[0];
  selectItem = itemObj[1]
  itemObj[2].graphics._stroke.style = "rgb(93, 252, 248)";

  //前にセレクトされたアイテムに格納
  beforeSelectItem = itemObj[2];
}

function aboutItem(){
  //上画面の子要素をすべて消す
  escapeContainer.removeAllChildren();
  mainContainer.addChild(escapeContainer);

  var mainBmp = new createjs.Bitmap(selectItem.image);
  escapeContainer.addChild(bmpScaler(mainBmp));

  //アイテムクリック用の領域
  var toItemClick = new createMoveButton("", 350, 350, "rgba(255, 255, 255, 0)");
  toItemClick.x = 230;
  toItemClick.y = 80;
  escapeContainer.addChild(toItemClick);

  itemDetail( selectItem, toItemClick);

  //バックボタン
  var backButton = createBackButton();
  escapeContainer.addChild(backButton);

  //ボタンクリック時のイベント登録
  returnRoom(backButton);

  mainContainer.addChild(escapeContainer);
}

function getRing(){
  thisItem = itemList[0];

  thisItem.image = Ring.image;
  thisItem.scaleX = 0.075;
  thisItem.scaleY = 0.133;

  //セレクトできる領域
  var selectButton = createSelectButton();
  selectButton.x = thisItem.x;
  selectButton.y = thisItem.y;

  //itemSelectの引数に渡すためのオブジェクト
  var argObj = new Object();
  argObj[0] = "Ring";
  argObj[1] = thisItem;
  argObj[2] = selectButton;

  selectButton.on("click", itemSelect, null, false, argObj);

  itemContainer.addChild(selectButton);
}

function getCutter(){
  playSound("itemGet");

  CutterF = true;

  thisItem = itemList[1];

  thisItem.image = Cutter.image;
  thisItem.scaleX = 0.075;
  thisItem.scaleY = 0.133;

  //セレクトできる領域
  var selectButton = createSelectButton();
  selectButton.x = thisItem.x;
  selectButton.y = thisItem.y;

  //itemSelectの引数に渡すためのオブジェクト
  var argObj = new Object();
  argObj[0] = "cutter";
  argObj[1] = thisItem;
  argObj[2] = selectButton;

  selectButton.on("click", itemSelect, null, false, argObj);

  itemContainer.addChild(selectButton);
  goOpenCurtain();
}

function getKey1(){
  playSound("itemGet");
  KeyOfBookShelfF = true;

  thisItem = itemList[2];

  thisItem.image = KeyOfBookShelf.image;
  thisItem.scaleX = 0.075;
  thisItem.scaleY = 0.133;

  //セレクトできる領域
  var selectButton = createSelectButton();
  selectButton.x = thisItem.x;
  selectButton.y = thisItem.y;

  //itemSelectの引数に渡すためのオブジェクト
  var argObj = new Object();
  argObj[0] = "KeyOfBookShelf";
  argObj[1] = thisItem;
  argObj[2] = selectButton;

  selectButton.on("click", itemSelect, null, false, argObj);

  itemContainer.addChild(selectButton);
  goToBed();
}

function getDVDCase(){
  playSound("itemGet");
  DVDCaseF = true;

  thisItem = itemList[3];

  thisItem.image = DVDCase.image;
  thisItem.scaleX = 0.075;
  thisItem.scaleY = 0.133;

  //セレクトできる領域
  var selectButton = createSelectButton();
  selectButton.x = thisItem.x;
  selectButton.y = thisItem.y;

  //itemSelectの引数に渡すためのオブジェクト
  var argObj = new Object();
  argObj[0] = "DVDCase";
  argObj[1] = thisItem;
  argObj[2] = selectButton;

  selectButton.on("click", itemSelect, null, false, argObj);

  itemContainer.addChild(selectButton);
  goToLowShelf();
}

function getDVDPaper(){
  playSound("itemGet");
  DVDPaperF = true;

  thisItem = itemList[4];

  thisItem.image = DVDPaper.image;
  thisItem.scaleX = 0.075;
  thisItem.scaleY = 0.133;

  //セレクトできる領域
  var selectButton = createSelectButton();
  selectButton.x = thisItem.x;
  selectButton.y = thisItem.y;

  //itemSelectの引数に渡すためのオブジェクト
  var argObj = new Object();
  argObj[0] = "DVDPaper";
  argObj[1] = thisItem;
  argObj[2] = selectButton;

  selectButton.on("click", itemSelect, null, false, argObj);

  itemContainer.addChild(selectButton);
  goToLowShelf();
}

function getRimocon(){
  playSound("itemGet");
  RimoconF = true;

  thisItem = itemList[5];

  thisItem.image = Rimocon.image;
  thisItem.scaleX = 0.075;
  thisItem.scaleY = 0.133;

  //セレクトできる領域
  var selectButton = createSelectButton();
  selectButton.x = thisItem.x;
  selectButton.y = thisItem.y;

  //itemSelectの引数に渡すためのオブジェクト
  var argObj = new Object();
  argObj[0] = "Rimocon";
  argObj[1] = thisItem;
  argObj[2] = selectButton;

  selectButton.on("click", itemSelect, null, false, argObj);

  itemContainer.addChild(selectButton);
  goToOnShelf();
}

function getCalc(){
  playSound("itemGet");
  CalcuratorF = true;

  thisItem = itemList[6];

  thisItem.image = Calcurator.image;
  thisItem.scaleX = 0.075;
  thisItem.scaleY = 0.133;

  //セレクトできる領域
  var selectButton = createSelectButton();
  selectButton.x = thisItem.x;
  selectButton.y = thisItem.y;

  //itemSelectの引数に渡すためのオブジェクト
  var argObj = new Object();
  argObj[0] = "Calcurator";
  argObj[1] = thisItem;
  argObj[2] = selectButton;

  selectButton.on("click", itemSelect, null, false, argObj);

  itemContainer.addChild(selectButton);
  goToOpenHighShelf();
}

function getKey2(){
  playSound("itemGet");
  KeyOfClosetF = true;

  thisItem = itemList[7];

  thisItem.image = KeyOfCloset.image;
  thisItem.scaleX = 0.075;
  thisItem.scaleY = 0.133;

  //セレクトできる領域
  var selectButton = createSelectButton();
  selectButton.x = thisItem.x;
  selectButton.y = thisItem.y;

  //itemSelectの引数に渡すためのオブジェクト
  var argObj = new Object();
  argObj[0] = "KeyOfCloset";
  argObj[1] = thisItem;
  argObj[2] = selectButton;

  selectButton.on("click", itemSelect, null, false, argObj);

  itemContainer.addChild(selectButton);
  goToOpenHighShelf();
}

function getNumberPaper(){
  playSound("itemGet");
  NumberPaperF = true;

  thisItem = itemList[8];

  thisItem.image = NumberPaper.image;
  thisItem.scaleX = 0.075;
  thisItem.scaleY = 0.133;

  //セレクトできる領域
  var selectButton = createSelectButton();
  selectButton.x = thisItem.x;
  selectButton.y = thisItem.y;

  //itemSelectの引数に渡すためのオブジェクト
  var argObj = new Object();
  argObj[0] = "NumberPaper";
  argObj[1] = thisItem;
  argObj[2] = selectButton;

  selectButton.on("click", itemSelect, null, false, argObj);

  itemContainer.addChild(selectButton);
  openRightCloset();
}

function getAAbattery(){
  playSound("itemGet");
  AAbatteryF = true;

  thisItem = itemList[9];

  thisItem.image = AAbattery.image;
  thisItem.scaleX = 0.075;
  thisItem.scaleY = 0.133;

  //セレクトできる領域
  var selectButton = createSelectButton();
  selectButton.x = thisItem.x;
  selectButton.y = thisItem.y;

  //itemSelectの引数に渡すためのオブジェクト
  var argObj = new Object();
  argObj[0] = "AAbattery";
  argObj[1] = thisItem;
  argObj[2] = selectButton;

  selectButton.on("click", itemSelect, null, false, argObj);

  itemContainer.addChild(selectButton);
  detailCalc();
}

function getCompass(){
  playSound("itemGet");
  CompassF = true;

  thisItem = itemList[10];

  thisItem.image = Compass.image;
  thisItem.scaleX = 0.075;
  thisItem.scaleY = 0.133;

  //セレクトできる領域
  var selectButton = createSelectButton();
  selectButton.x = thisItem.x;
  selectButton.y = thisItem.y;

  //itemSelectの引数に渡すためのオブジェクト
  var argObj = new Object();
  argObj[0] = "Compass";
  argObj[1] = thisItem;
  argObj[2] = selectButton;

  selectButton.on("click", itemSelect, null, false, argObj);

  itemContainer.addChild(selectButton);
  openMidShelf();
}

function getDiary(){
  playSound("itemGet");
  DiaryF = true;

  thisItem = itemList[11];

  thisItem.image = Diary.image;
  thisItem.scaleX = 0.075;
  thisItem.scaleY = 0.133;

  //セレクトできる領域
  var selectButton = createSelectButton();
  selectButton.x = thisItem.x;
  selectButton.y = thisItem.y;

  //itemSelectの引数に渡すためのオブジェクト
  var argObj = new Object();
  argObj[0] = "Diary";
  argObj[1] = thisItem;
  argObj[2] = selectButton;

  selectButton.on("click", itemSelect, null, false, argObj);

  itemContainer.addChild(selectButton);
  goOpenBox();
}

function getScrewDriver(){
  playSound("itemGet");
  ScrewDriverF = true;

  thisItem = itemList[12];

  thisItem.image = ScrewDriver.image;
  thisItem.scaleX = 0.075;
  thisItem.scaleY = 0.133;

  //セレクトできる領域
  var selectButton = createSelectButton();
  selectButton.x = thisItem.x;
  selectButton.y = thisItem.y;

  //itemSelectの引数に渡すためのオブジェクト
  var argObj = new Object();
  argObj[0] = "ScrewDriver";
  argObj[1] = thisItem;
  argObj[2] = selectButton;

  selectButton.on("click", itemSelect, null, false, argObj);

  itemContainer.addChild(selectButton);
  openLeftCloset();
}

function getDoorKey(){
  playSound("itemGet");
  KeyOfDoorF = true;

  thisItem = itemList[13];

  thisItem.image = KeyOfDoor.image;
  thisItem.scaleX = 0.075;
  thisItem.scaleY = 0.133;

  //セレクトできる領域
  var selectButton = createSelectButton();
  selectButton.x = thisItem.x;
  selectButton.y = thisItem.y;

  //itemSelectの引数に渡すためのオブジェクト
  var argObj = new Object();
  argObj[0] = "KeyOfDoor";
  argObj[1] = thisItem;
  argObj[2] = selectButton;

  selectButton.on("click", itemSelect, null, false, argObj);

  itemContainer.addChild(selectButton);
  goRemoveScrew();
}
