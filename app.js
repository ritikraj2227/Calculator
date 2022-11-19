var container = document.querySelector(".container");
var btn = document.querySelectorAll("span");
var input = document.querySelector(".input");

for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function (event) {
    if (this.innerHTML == "=") {
      input.innerHTML = eval(input.innerHTML);
    } else {
      if (this.innerHTML == "Ac") {
        input.innerHTML = "";
      } else {
        input.innerHTML += this.innerHTML;
      }
    }
  });
}

var checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
