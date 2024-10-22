let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = input.value;

  let btn2 = document.createElement("button");
  btn2.innerText = "delete";
  btn2.classList.add("delete");

  let brtag = document.createElement("br");

  ul.appendChild(brtag);
  ul.appendChild(item);
  item.appendChild(btn2);
  input.value = "";
});

let delbtns = document.querySelectorAll(".delete");

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    console.log("deleted");
    let item = event.target.parentElement;
    console.log(item);
    item.remove();
  }
});
