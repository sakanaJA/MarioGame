const player = document.getElementById('player');
let isJumping = false;
let gravity = 0.5;
let velocity = 0;
let jumpPower = 10;
player.style.bottom = '0px'; // 初期位置を設定

document.addEventListener('keydown', function(event) {
  if ((event.key === "ArrowUp" || event.keyCode === 32) && !isJumping) { // ジャンプ中でないときのみジャンプ可能に
    isJumping = true;
    jump();
  }
});

function jump() {
  velocity = -jumpPower;
  setTimeout(function() {
    isJumping = false;
  }, 1000);
}


function gameLoop() {
  // プレイヤーの位置を更新
  if (isJumping && parseInt(player.style.bottom) < 200) { // 200は仮のジャンプの最高点です
    velocity += gravity; // 重力を速度に加算
    player.style.bottom = `${parseInt(player.style.bottom) + velocity}px`; // 新しい位置を設定
  }

  // 地面に触れたか確認し、触れたらジャンプを停止
  if (parseInt(player.style.bottom) < 0) {
    player.style.bottom = '0px';
    isJumping = false;
    velocity = 0;
  }

  requestAnimationFrame(gameLoop); // 次のフレームを要求
}

gameLoop(); // ゲームループを開始
