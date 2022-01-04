const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");

// 코드를 그대로 설명하는 주석은 가독성을 떨어뜨린다
// '왜' 이렇게 작성했는지를 설명해야 한다

function onAdd() {
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: "center" });
  input.value = "";
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");

  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const name = document.createElement("span");
  name.setAttribute("class", "item__name");
  name.innerText = text;

  const itemDivider = document.createElement("div");
  itemDivider.setAttribute("class", "item__divider");

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "item__delete");
  deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
  deleteBtn.addEventListener("click", () => {
    items.removeChild(itemRow);
  });

  item.appendChild(name);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);
  return itemRow;
}

addBtn.addEventListener("click", () => {
  onAdd();
});

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    onAdd();
  }
});
