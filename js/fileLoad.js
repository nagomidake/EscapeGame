// 読み込む外部ファイル情報
var imageManifest = [
    {src: "/images/test.png"}, 
    {src: "/images/test.png"},
    {src: "/images/test.png"},
    {src: "/images/test.png"},
    {src: "/images/test.png"},
    {src: "/images/test.png"},
    {src: "/images/test.png"},
    {src: "/images/test.png"},
    {src: "/images/test.png"},
    {src: "/images/test.png"},
    {src: "/images/test.png"},
    {src: "/images/test.png"},
    {src: "/images/test.png"},
    {src: "/images/test.png"},
    {src: "/images/test.png"},
    {src: "/images/test.png"},
    {src: "/images/test.png"},
    {src: "/images/test.png"},
    {src: "/images/test.png"},
    {src: "/images/test.png"},
    {src: "/images/test.png"},
    {src: "/images/test.png"},
    {src: "/images/test.png"},
    {src: "/images/test.png"},
    {src: "/images/test.png"},

];

// LoadQueueクラス
var loadImage = new createjs.ImageLoader();

// 並列での読み込み数を設定
loadImage.setMaxConnections(6);

// 読み込みの進行状況が変化した
loadImage.addEventListener("progress", handleProgress);
// 1つのファイルを読み込み終わったら
loadImage.addEventListener("fileload", handleFileLoadComplete);
// 全てのファイルを読み込み終わったら
loadImage.addEventListener("complete", handleComplete);

// 読み込み開始
loadImage.loadManifest(manifest);

function handleProgress(event) {
    // 読み込み率を0.0~1.0で取得
    var progress = event.progress;
}

function handleFileLoadComplete(event) {
    // 読み込んだファイル
    var result = event.result;
}

function handleComplete() {
    console.log("LOAD COMPLETE");
}
