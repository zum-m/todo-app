import "./styles.css";

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストを追加する関数
const createIncompleteList = (text) => {
  // divを生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liを生成
  const li = document.createElement("li");
  li.innerText = text;

  // 完了ボタンタグを生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    // console.log(text);

    // div以下を初期か
    addTarget.textContent = null;
    // console.log(addTarget);

    // liを生性
    const li = document.createElement("li");
    li.innerText = text;
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグを完了リストから消去
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト所得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // divの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    console.log(addTarget);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
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

const onClickAdd = () => {
  // テキストボックスを所得し初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
