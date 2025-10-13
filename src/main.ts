import "./style.css";

let count = 0;
let start: number;
let growthRate = 1;

const subtitle = document.createElement("p");
subtitle.textContent = "Hello World, I'm an egg counter";
document.body.appendChild(subtitle);

const button = document.createElement("button");
button.textContent = "Click Me To Gain An Egg!!🥚";
document.body.appendChild(button);

const counterDisplay = document.createElement("div");
counterDisplay.textContent = `You have ${count} eggs!`;
document.body.appendChild(counterDisplay);

const grDisplay = document.createElement("div");
document.body.appendChild(grDisplay);
grDisplay.textContent = `Current Growth Rate is ${
  growthRate.toFixed(1)
} eggs/sec!`;

button.addEventListener("click", () => {
  count += 1;
  counterDisplay.textContent = `You have ${count} eggs! 🥚`;
});
/* Old Automatic Clicking
se
tInterval(autoClicker, 1000);
function autoClicker() {
  count++;
  counterDisplay.textContent = `You have ${count} eggs!`;
}
*/
interface Item {
  name: string;
  cost: number;
  rate: number;
  emoji: string;
  description: string;
}

const avaliableItems: Item[] = [
  {
    name: "Hen",
    cost: 10,
    rate: 0.1,
    emoji: "🐣",
    description: "Hen that lays eggs slowly but surely",
  },
  {
    name: "Duck",
    cost: 100,
    rate: 2,
    emoji: "🦆",
    description: "Quacks a lot but helps gather eggs",
  },
  {
    name: "Swan",
    cost: 250,
    rate: 10,
    emoji: "🦢",
    description: "Elegantly and efficiently lays eggs",
  },
  {
    name: "Peacock",
    cost: 500,
    rate: 25,
    emoji: "🦚",
    description: "Struts to help boost egg emprie",
  },
  {
    name: "Golden Goose",
    cost: 1000,
    rate: 50,
    emoji: "🦄",
    description: "Mythical creature that lays pure golden eggs",
  },
];

const upgradeButtons: HTMLButtonElement[] = [];

avaliableItems.forEach((item) => {
  const upgradeButton = document.createElement("button");
  upgradeButton.textContent =
    `Click Me To Gain a ${item.name} ${item.emoji} (${item.cost} eggs!!)`;
  upgradeButton.disabled = true;
  document.body.appendChild(upgradeButton);

  const desc = document.createElement("p");
  desc.textContent = item.description + ` +${item.rate} eggs/sec`;
  desc.style.fontStyle = "airel";
  desc.style.marginTop = "2px";
  document.body.appendChild(desc);

  upgradeButton.addEventListener("click", () => {
    if (count >= item.cost) {
      count -= item.cost;
      growthRate += item.rate;
      item.cost *= 1.15;
      grDisplay.textContent = `Current Growth Rate is ${
        growthRate.toFixed(1)
      }!`;
      upgradeButton.textContent = `Click Me To Gain a ${item.emoji} (${
        item.cost.toFixed(0)
      } eggs!!)`;
    }
  });
  upgradeButtons.push(upgradeButton);
});

function step(timestamp: number) {
  if (start === undefined) {
    start = timestamp;
  }
  const delta = (timestamp - start) / 1000;
  start = timestamp;
  count += delta * growthRate;
  counterDisplay.textContent = `You have ${Math.floor(count)} eggs! 🥚`;
  avaliableItems.forEach((item, i) => {
    upgradeButtons[i].disabled = Math.floor(count) < item.cost;
  });
  requestAnimationFrame(step);
}
requestAnimationFrame(step);
/* Old Buttons
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
*/
