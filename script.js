const q1 = document.querySelector("#q1");
const a1 = document.querySelector("#a1");
const q2 = document.querySelector("#q2");
const a2 = document.querySelector("#a2");

q1.addEventListener("click", function () {
  console.log("q1");
  a1.classList.toggle("hide");
});

q2.addEventListener("click", function () {
  console.log("q2");
  a2.classList.toggle("hide");
});
