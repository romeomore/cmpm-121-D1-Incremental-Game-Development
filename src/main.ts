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
  upgradeButtonA.disabled = Math.floor(count) < 10;
  upgradeButtonB.disabled = Math.floor(count) < 100;
  upgradeButtonC.disabled = Math.floor(count) < 1000;
  requestAnimationFrame(step);
}
requestAnimationFrame(step);

const upgradeButtonA = document.createElement("button");
upgradeButtonA.textContent = "Click Me To Gain a Hun(10 eggs)";
document.body.appendChild(upgradeButtonA);

upgradeButtonA.addEventListener("click", () => {
  if (count >= 10) {
    count -= 10;
    growthRate += .1;
    grDisplay.textContent = `Current Growth Rate is ${growthRate.toFixed(1)}!`;
  }
});

const upgradeButtonB = document.createElement("button");
upgradeButtonB.textContent = "Click Me To Gain a Hun(100 eggs)";
document.body.appendChild(upgradeButtonB);

upgradeButtonB.addEventListener("click", () => {
  if (count >= 100) {
    count -= 100;
    growthRate += 2;
    grDisplay.textContent = `Current Growth Rate is ${growthRate.toFixed(1)}!`;
  }
});

const upgradeButtonC = document.createElement("button");
upgradeButtonC.textContent = "Click Me To Gain a Hun(1000 eggs)";
document.body.appendChild(upgradeButtonC);

upgradeButtonC.addEventListener("click", () => {
  if (count >= 1000) {
    count -= 1000;
    growthRate += 50;
    grDisplay.textContent = `Current Growth Rate is ${growthRate.toFixed(1)}!`;
  }
});

const grDisplay = document.createElement("div");
document.body.appendChild(grDisplay);
grDisplay.textContent = `Current Growth Rate is ${
  growthRate.toFixed(1)
} eggs/sec!`;
