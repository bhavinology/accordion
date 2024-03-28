const q1 = document.querySelector("#q1");
const a1 = document.querySelector("#a1");
const q2 = document.querySelector("#q2");
const a2 = document.querySelector("#a2");

q1.addEventListener("click", generalHandler);
q2.addEventListener("click", generalHandler);

function generalHandler(e) {
  switch (e.target.id) {
    case "q1":
      a1.classList.toggle("hide");
      break;
    case "q2":
      a2.classList.toggle("hide");
      break;
    default:
      console.log("No Code");
  }
}
