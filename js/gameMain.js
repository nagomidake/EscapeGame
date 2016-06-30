//アイテム画面の上の画像の為のコンテナ
var escapeContainer = new createjs.Container();

//自分が今どの部屋にいるかを格納する変数
var onRoom = 0;

//前の画面を保持しておく変数
var returnScreen = null

function gameMain(){
  mainContainer.removeAllChildren();

  var stage = new createjs.Stage("gameCanvas");
  stage.addChild(mainContainer);
  stage.update();

  initItem();
  //音声の登録
  soundInit();
  goToRoom1();
  updateFlame();

}

function updateFlame(){
  var stage = new createjs.Stage("gameCanvas");
  stage.addChild(mainContainer);

  //RAF（60ｆｐｓ）ごとに更新
  createjs.Ticker.timingMode = createjs.Ticker.RAF;

  createjs.Ticker.addEventListener("tick", stage);

  stage.enableMouseOver();
}

function howToPlay(){

}

function GameClear(){
  if(PaperOfHerF){
    window.location.href = "https://googledrive.com/host/0B7nR_-_SLLEaaGpQa2lQQTZTd00";
  }else{
    window.location.href = "https://googledrive.com/host/0B7nR_-_SLLEaMTM4elN6eHFhRFE";
  }
}
