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

  // ボタンタグを生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });
  // console.log(completeButton);
  // ボタンタグを生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "消去";
  deleteButton.addEventListener("click", () => {
    alert("消去");
  });
  // console.log(deleteButton);

  // divにliを子要素としてついか
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // console.log(div);

  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
