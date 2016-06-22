function createButton(text, width, height, keyColor) {
  // ボタン要素をグループ化
  var button = new createjs.Container();
  button.name = text; // ボタンに参考までに名称を入れておく(必須ではない)
  button.cursor = "pointer"; // ホバー時にカーソルを変更する
  // 通常時の座布団を作成
  var bgUp = new createjs.Shape();
  bgUp.graphics
          .setStrokeStyle(1.0)
          .beginStroke(keyColor)
          .beginFill("rgba(255, 255, 255, 0.65)")
          .drawRoundRect(0.5, 0.5, width - 1.0, height - 1.0, 4);
  button.addChild(bgUp);
  bgUp.visible = true; // 表示する
  // ロールオーバー時の座布団を作成
  var bgOver = new createjs.Shape();
  bgOver.graphics
          .beginFill(keyColor)
          .drawRoundRect(0, 0, width, height, 4);
  bgOver.visible = false; // 非表示にする
  button.addChild(bgOver);
  // ラベルを作成
  var label = new createjs.Text(text, "24px sans-serif", keyColor);
  label.x = width / 2;
  label.y = height / 2;
  label.textAlign = "center";
  label.textBaseline = "middle";
  button.addChild(label);
  // ロールオーバーイベントを登録
  button.addEventListener("mouseover", handleMouseOver);
  button.addEventListener("mouseout", handleMouseOut);
  function handleMouseOver(event) {
    bgUp.visble = false;
    bgOver.visible = true;
    label.color = "white";
  }
  function handleMouseOut(event) {
    bgUp.visble = true;
    bgOver.visible = false;
    label.color = keyColor;
  }
  return button;
}

//アイテムボタン用
function createItemButton(text, width, height, keyColor) {
  // ボタン要素をグループ化
  var button = new createjs.Container();
  button.name = text; // ボタンに参考までに名称を入れておく(必須ではない)
  button.cursor = "pointer"; // ホバー時にカーソルを変更する
  // 通常時の座布団を作成
  var bgUp = new createjs.Shape();
  bgUp.graphics
          .setStrokeStyle(5.0)
          .beginStroke(keyColor)
          .beginFill("rgba(255, 255, 255, 0.65)")
          .drawRoundRect(0.5, 0.5, width - 1.0, height - 1.0, 4);
  button.addChild(bgUp);
  bgUp.visible = true; // 表示する
  // ロールオーバー時の座布団を作成
  var bgOver = new createjs.Shape();
  bgOver.graphics
          .beginFill(keyColor)
          .drawRoundRect(0, 0, width, height, 4);
  bgOver.visible = false; // 非表示にする
  button.addChild(bgOver);
  // ラベルを作成
  var label = new createjs.Text(text, "50px sans-serif", keyColor);
  label.x = width / 2;
  label.y = height / 2;
  label.textAlign = "center";
  label.textBaseline = "low";
  button.addChild(label);
  // ロールオーバーイベントを登録
  button.addEventListener("mouseover", handleMouseOver);
  button.addEventListener("mouseout", handleMouseOut);
  function handleMouseOver(event) {
    bgUp.visble = false;
    bgOver.visible = true;
    label.color = "white";
  }
  function handleMouseOut(event) {
    bgUp.visble = true;
    bgOver.visible = false;
    label.color = keyColor;
  }
  return button;
}

//画面遷移用ボタン
function createMoveButton(text, width, height, keyColor) {
  // ボタン要素をグループ化
  var button = new createjs.Container();
  button.name = text; // ボタンに参考までに名称を入れておく(必須ではない)
  button.cursor = "pointer"; // ホバー時にカーソルを変更する
  // 通常時の座布団を作成
  var bgUp = new createjs.Shape();
  bgUp.graphics
          .setStrokeStyle(1.0)
          .beginStroke(keyColor)
          .beginFill("rgba(255, 255, 255, 0.01)")
          .drawRoundRect(0.5, 0.5, width - 1.0, height - 1.0, 4);
  button.addChild(bgUp);
  bgUp.visible = true; // 表示する
  // ロールオーバー時の座布団を作成
  var bgOver = new createjs.Shape();
  bgOver.graphics
          .beginFill(keyColor)
          .drawRoundRect(0, 0, width, height, 4);
  bgOver.visible = false; // 非表示にする
  button.addChild(bgOver);
  // ラベルを作成
  var label = new createjs.Text(text, "24px sans-serif", keyColor);
  label.x = width / 2;
  label.y = height / 2;
  label.textAlign = "center";
  label.textBaseline = "middle";
  button.addChild(label);
  // ロールオーバーイベントを登録
  button.addEventListener("mouseover", handleMouseOver);
  button.addEventListener("mouseout", handleMouseOut);
  function handleMouseOver(event) {
    bgUp.visble = false;
    bgOver.visible = true;
    label.color = "white";
  }
  function handleMouseOut(event) {
    bgUp.visble = true;
    bgOver.visible = false;
    label.color = keyColor;
  }
  return button;
}

//アイテムセレクト用
function createSelectButton() {
  var width = 72;
  var height = 72;
  var keyColor = "rgb(93, 252, 248)";

  // ボタン要素をグループ化
  var button = new createjs.Shape();
  button.cursor = "pointer"; // ホバー時にカーソルを変更する

  // 通常時の座布団を作成
  button.graphics
          .setStrokeStyle(5.0)
          .beginStroke("rgba(255, 255, 255, 0.01)")
          .beginFill("rgba(255, 255, 255, 0.01)")
          .drawRoundRect(0.5, 0.5, width - 1.0, height - 1.0, 4);

  return button;
}
