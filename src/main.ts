import "./style.css";

let count = 0;

const subtitle = document.createElement("p");
subtitle.textContent = "Hello World, I'm an egg counter";
document.body.appendChild(subtitle);

const button = document.createElement("button");
button.textContent = "Click Me To Gain An Egg!!🥚";
document.body.appendChild(button);

const counterDisplay = document.createElement("div");
counterDisplay.textContent = `You have ${count} eggs!`;
document.body.appendChild(counterDisplay);

button.addEventListener("click", () => {
  count += 1;
  counterDisplay.textContent = `You have ${count} eggs! 🥚`;
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
  counterDisplay.textContent = `You have ${Math.floor(count)} eggs! 🥚`;
  upgradeButtonA.disabled = Math.floor(count) < upButtonAcost;
  upgradeButtonB.disabled = Math.floor(count) < upButtonBcost;
  upgradeButtonC.disabled = Math.floor(count) < upButtonCcost;
  requestAnimationFrame(step);
}
requestAnimationFrame(step);
let upButtonAcost = 10;
let upButtonBcost = 100;
let upButtonCcost = 1000;

const upgradeButtonA = document.createElement("button");
upgradeButtonA.textContent = `Click Me To Gain a Hen 🐣(${upButtonAcost} eggs)`;
document.body.appendChild(upgradeButtonA);

upgradeButtonA.addEventListener("click", () => {
  if (count >= upButtonAcost) {
    count -= upButtonAcost;
    growthRate += .1;
    grDisplay.textContent = `Current Growth Rate is ${growthRate.toFixed(1)}!`;
    upButtonAcost *= 1.15;
    upgradeButtonA.textContent = `Click Me To Gain a Hen 🐣(${
      upButtonAcost.toFixed(0)
    } eggs)`;
  }
});

const upgradeButtonB = document.createElement("button");
upgradeButtonB.textContent =
  `Click Me To Gain a Duck 🦆(${upButtonBcost} eggs)`;
document.body.appendChild(upgradeButtonB);

upgradeButtonB.addEventListener("click", () => {
  if (count >= upButtonBcost) {
    count -= upButtonBcost;
    growthRate += 2;
    grDisplay.textContent = `Current Growth Rate is ${growthRate.toFixed(1)}!`;
    upButtonBcost *= 1.15;
    upgradeButtonB.textContent = `Click Me To Gain a Duck 🦆 (${
      upButtonBcost.toFixed(0)
    } eggs)`;
  }
});

const upgradeButtonC = document.createElement("button");
upgradeButtonC.textContent =
  `Click Me To Gain a Golden Goose 🦄 (${upButtonCcost} eggs)`;
document.body.appendChild(upgradeButtonC);

upgradeButtonC.addEventListener("click", () => {
  if (count >= upButtonCcost) {
    count -= upButtonCcost;
    growthRate += 50;
    grDisplay.textContent = `Current Growth Rate is ${growthRate.toFixed(1)}!`;
    upButtonCcost *= 1.15;
    upgradeButtonC.textContent = `Click Me To Gain a Golden Goose 🦄 (${
      upButtonCcost.toFixed(0)
    } eggs)`;
  }
});

const grDisplay = document.createElement("div");
document.body.appendChild(grDisplay);
grDisplay.textContent = `Current Growth Rate is ${
  growthRate.toFixed(1)
} eggs/sec!`;
