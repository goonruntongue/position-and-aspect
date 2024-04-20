// モーダルの初期位置を一度だけ指定
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".modal-wrap").style.transform = "translate(-50%)";
    document.querySelector(".modal-wrap").style.left = "50%";
})


// コンテナ領域の指定
let container = document.querySelector(".modal-wrap");

// ドラッグで動かすエリアの指定
let bar = document.querySelector(".top-bar");
// モーダル内でドラッグ無効化するための識別子
let isDragging = false;

// マウスとタッチの位置を統一的に取得する関数
function getPosition(e) {
    if (e.touches && e.touches.length > 0) {
        // タッチイベントの場合
        return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    } else {
        // マウスイベントの場合
        return { x: e.clientX, y: e.clientY };
    }
}

// ドラッグ開始処理
function startDrag(e) {
    // スライダー、チェックボックス、ハンバーガーメニューの場合はドラッグを開始しない
    if (e.target.type === "range" || e.target.type === "checkbox" || e.target.classList.contains("ham") || e.target.tagName === "SUMMARY") {
        return;
    }
    e.preventDefault();
    let pos = getPosition(e);
    let rect = container.getBoundingClientRect();
    let offsetX = pos.x - rect.left;
    let offsetY = pos.y - rect.top;

    // ドラッグ中に移動する処理
    function onDrag(e) {
        // ページ読み込み時のモーダルについたtransformをリセット
        document.querySelector(".modal-wrap").style.transform = "translate(0)";
        document.querySelector(".modal-wrap").style.left = "unset";
        let pos = getPosition(e);
        container.style.left = pos.x - offsetX + "px";
        container.style.top = pos.y - offsetY + "px";
    }

    // ドラッグ終了処理
    function endDrag() {
        bar.removeEventListener("mousemove", onDrag);
        bar.removeEventListener("touchmove", onDrag);
        bar.removeEventListener("mouseup", endDrag);
        bar.removeEventListener("touchend", endDrag);
        isDragging = false;
    }

    bar.addEventListener("mousemove", onDrag);
    bar.addEventListener("touchmove", onDrag);
    bar.addEventListener("mouseup", endDrag);
    bar.addEventListener("touchend", endDrag);
    isDragging = true;
}

// イベントリスナーを追加
bar.addEventListener("mousedown", startDrag);
bar.addEventListener("touchstart", startDrag);

// ハンバーガースイッチ
let userAction = "ontouchend" in window ? "touchend" : "click";
document.querySelector(".ham").addEventListener(userAction, function() {
    this.classList.toggle("open");
    document.querySelector(".modal-wrap").classList.toggle("open");
    document.querySelector(".modal").classList.toggle("open");
    document.querySelector(".top-bar").classList.toggle("open");
});