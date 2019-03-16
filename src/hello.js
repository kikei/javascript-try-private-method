export default class Hello {
  #HELLO = 'Hello';
  #target = 'world';
  #listElement = null;
  constructor(container) {
    if (container) {
      removeChildren(container);
      const list = makeList();
      this.#listElement = list;
      container.appendChild(list);
    }
  }
  print(message) {
    this.#showMessage(`${this.#HELLO}, ${this.#target}${message}`);
  }
  set target(target) {
    this.#target = target;
  }
  #showMessage(message) {
    const itemElement = makeListItem(message);
    this.#listElement.appendChild(itemElement);
  }
}

function makeList() {
  const list = document.createElement('ul');
  return list;
}

function makeListItem(text) {
  const textNode = document.createTextNode(text);
  const item = document.createElement('li');
  item.appendChild(textNode);
  return item;
}

function removeChildren(parent) {
  while (parent.firstChild)
    parent.removeChild(parent.firstChild);
}
