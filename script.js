// 闪现 3 秒后进入主页面
setTimeout(() => {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("main").classList.remove("hidden");
}, 3000);

function openBottle() {
  document.getElementById("main").classList.add("hidden");
  document.getElementById("bottle").classList.remove("hidden");
}

function throwBottle() {
  const msg = document.getElementById("message").value;
  if (msg.trim() === "") return;
  document.getElementById("done").classList.remove("hidden");
}
