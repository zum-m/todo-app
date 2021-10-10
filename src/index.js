import "./styles.css";

const onClickAdd = () => {
  // テキストボックスを所得し初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divを生成
  const div = document.createElement("div");
  div.className = "list-row";
  // console.log(div);

  // liを生成
  const li = document.createElement("li");
  li.innerText = inputText;
  // console.log(li);

  // divにliを子要素としてついか
  div.appendChild(li);
  console.log(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
