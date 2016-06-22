function soundInit(){
  createjs.Sound.registerSound("sound/AllowButton.mp3", "AllowButton");
  createjs.Sound.registerSound("sound/ClickButton.mp3", "ClickButton");
  createjs.Sound.registerSound("sound/Curtain.mp3", "Curtain");
  createjs.Sound.registerSound("sound/Drawer.mp3", "Drawer");
  createjs.Sound.registerSound("sound/itemGet.mp3", "itemGet");
  createjs.Sound.registerSound("sound/Key.mp3", "Key");
  createjs.Sound.registerSound("sound/NumberButton.mp3", "NumberButton");
  createjs.Sound.registerSound("sound/Page.mp3", "Page");
  createjs.Sound.registerSound("sound/Shelf.mp3", "Shelf");
  createjs.Sound.registerSound("sound/Success.mp3", "Success");
  createjs.Sound.registerSound("sound/Switch.mp3", "Switch");
}

function playSound(soundName){
  switch (soundName) {
    case "AllowButton":
      createjs.Sound.play("AllowButton");
      break;
    case "ClickButton":
      createjs.Sound.play("ClickButton");
      break;
    case "Curtain":
      createjs.Sound.play("Curtain");
      break;
    case "Drawer":
      createjs.Sound.play("Drawer");
      break;
    case "itemGet":
      createjs.Sound.play("itemGet");
      break;
    case "Key":
      createjs.Sound.play("Key");
      break;
    case "NumberButton":
      createjs.Sound.play("NumberButton");
      break;
    case "Page":
      createjs.Sound.play("Page");
      break;
    case "Shelf":
      createjs.Sound.play("Shelf");
      break;
    case "Success":
      createjs.Sound.play("Success");
      break;
    case "Switch":
      createjs.Sound.play("Switch");
      break;

    default:

  }
}
