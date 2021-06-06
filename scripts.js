function addElementToDOM(type, content, parentId) {
  const parent = document.getElementById(parentId);
  const elem = document.createElement(type);
  const text = document.createTextNode(content);

  elem.appendChild(text);
  parent.appendChild(elem);
}

function addItem(e) {
  const taskValue = document.getElementById("typeUsername").value;
  if (e.key == "+" || e.keyCode == "13") {
    e.preventDefault();
    addElementToDOM("li", taskValue, "list");
    document.getElementById("typeUsername").value = "";
  }
}

const list = document.querySelectorAll("#list");
console.log(list);
