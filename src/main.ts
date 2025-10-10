import "./style.css";

let count = 0;

document.body.innerHTML = `
  <p>Hello world! I just edited this page.</p>
  <p></p>
  <p>Want to build a clicker that works around chickens that evolve and drop better eggs as you upgrade.</p>
  <p>Hello World, I'm an egg counter</p> 
`;

const button = document.createElement("button");
button.textContent = "Click Me To Gain An Egg!!";
document.body.appendChild(button);

const counterDisplay = document.createElement("div");
counterDisplay.textContent = `You have ${count} eggs!`;
document.body.appendChild(counterDisplay);

button.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = `You have ${count} eggs!`;
});
/* Old Automatic Clicking
setInterval(autoClicker, 1000);
function autoClicker() {
  count++;
  counterDisplay.textContent = `You have ${count} eggs!`;
}
*/

let start: number;
let growthRate = 1;

function step(timestamp: number) {
  if (start === undefined) {
    start = timestamp;
  }
  const delta = (timestamp - start) / 1000;
  start = timestamp;
  count += delta * growthRate;
  counterDisplay.textContent = `You have ${Math.floor(count)} eggs!`;
  upgradeButton.disabled = Math.floor(count) < 10;
  requestAnimationFrame(step);
}
requestAnimationFrame(step);

const upgradeButton = document.createElement("button");
upgradeButton.textContent = "Click Me To Gain a Hun(10 eggs)";
document.body.appendChild(upgradeButton);

upgradeButton.addEventListener("click", () => {
  if (count >= 10) {
    count -= 10;
    growthRate++;
  }
});
