import "./style.css";

let count = 0;

document.body.innerHTML = `
  <p>Hello world! I just edited this page.</p>
  <p>Want to build a clicker that works around chickens that evolve and drop better eggs as you upgrade.</p>
`;

const button = document.createElement("button");
button.textContent = "Click Me To Gain An Egg!!";
document.body.appendChild(button);
button.addEventListener("click", () => {
  count++;
  button.textContent = `You Have ${count} Eggs`;
});
