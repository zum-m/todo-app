import "./styles.css";

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

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

  // 完了ボタンタグを生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // alert("完了");
    deleteFromIncompleteList(deleteButton.parentNode);
  });
  // console.log(completeButton);

  // 消去ボタンタグを生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "消去";
  deleteButton.addEventListener("click", () => {
    // alert("消去");
    // 押された削除ボタンの親タグを未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    // console.log(deleteTarget);
    document.getElementById("incomplete-list").removeChild(deleteTarget);
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
