const boxEl = document.querySelector(".box");
document.addEventListener("keydown", (e) => {
  let keyName = e.key === 32 ? "Space" : e.key;
  boxEl.querySelector(".key-code").innerText = e.key;
  boxEl.querySelector(".key-name").innerText = keyName.toUpperCase();
  boxEl.querySelector(".key span").innerText = keyName;
  boxEl.querySelector(".code span").innerText = e.which;  
  boxEl.classList.add("active");
});
