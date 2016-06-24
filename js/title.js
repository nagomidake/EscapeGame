//ゲーム画面全体のコンテナ
var mainContainer = new createjs.Container();

//初期設定
window.addEventListener("load", init);

//タイトル画面
function init(){
  //Completeの文字を消す
  completeDiv.style.visibility = "hidden";

	//背景画像設定
  var stage = new createjs.Stage("gameCanvas");
	stage.addChild(mainContainer);
	stage.enableMouseOver();

	var bmp = new createjs.Bitmap("images/Room1.png");
	mainContainer.addChild(bmp);

	//ボタン設定
	var startButton = createButton("GameStart", 800, 50, "rgba(26, 215, 142, 0.63)");
	startButton.x = 0;
	startButton.y = 439;
	mainContainer.addChild(startButton);

	var howtoButton = createButton("HowToPlay", 800, 50, "rgba(252, 97, 48, 0.67)");
	howtoButton.x = 0;
	howtoButton.y = 490;
	mainContainer.addChild(howtoButton);

	//ボタンがクリックされたときのイベント登録
	startButton.addEventListener("click", gameMain);
	howtoButton.addEventListener("click", howToPlay);

  //音声の登録
  soundInit();

	//更新して表示
	createjs.Ticker.on("tick", function(){
		stage.update();
	});

}
