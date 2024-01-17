function say(mesage = "hallo gibahTech") {
  console.log(mesage);
}
say();

// function default

function createDiv(
  height = "100px",
  width = "100px",
  border = "1px solid black"
) {
  let div = document.createElement("div");
  div.style.height = height;
  div.style.width = width;
  div.style.border = border;

  document.body.append(div);
  return div;
}
createDiv();
createDiv(undefined, undefined, "5px solid red");

function put(toy, toyBox = []) {
  toyBox.push(toy);
  return toyBox;
}

console.log("Toy Human");
console.log("Toy Car");

function require() {
  throw new Error("No arguments");
}

function add(x = require(), y = require()) {
  return x * y;
}

console.log(add(1, 4));
console.log(add(100, 5000));
