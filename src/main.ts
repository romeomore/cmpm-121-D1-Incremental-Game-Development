import "./style.css";

// -----------------------------
// Game state
// -----------------------------
let count = 0;
let start: number;
let growthRate = 1;

// -----------------------------
// Game data
// -----------------------------
interface Item {
  name: string;
  cost: number;
  rate: number;
  emoji: string;
  description: string;
  quantity: number;
}

const shopItems: Item[] = [
  {
    name: "Hen",
    cost: 10,
    rate: 0.1,
    emoji: "🐣",
    description: "Hen that lays eggs slowly but surely",
    quantity: 0,
  },
  {
    name: "Duck",
    cost: 100,
    rate: 2,
    emoji: "🦆",
    description: "Quacks a lot but helps gather eggs",
    quantity: 0,
  },
  {
    name: "Swan",
    cost: 250,
    rate: 10,
    emoji: "🦢",
    description: "Elegantly and efficiently lays eggs",
    quantity: 0,
  },
  {
    name: "Peacock",
    cost: 500,
    rate: 25,
    emoji: "🦚",
    description: "Struts to help boost egg emprie",
    quantity: 0,
  },
  {
    name: "Golden Goose",
    cost: 1000,
    rate: 50,
    emoji: "🦄",
    description: "Mythical creature that lays pure golden eggs",
    quantity: 0,
  },
];

// -----------------------------
// UI elements
// Group all document.createElement calls here
// -----------------------------
const subtitle = document.createElement("p");
subtitle.textContent = "Hello World, I'm an egg counter";
document.body.appendChild(subtitle);

const button = document.createElement("button");
button.textContent = "Click Me To Gain An Egg!!🥚";
document.body.appendChild(button);

const eggCountDisplay = document.createElement("div");
eggCountDisplay.textContent = `You have ${count} eggs!`;
document.body.appendChild(eggCountDisplay);

const growthRateDisplay = document.createElement("div");
growthRateDisplay.textContent = `Current Growth Rate is ${
  growthRate.toFixed(1)
} eggs/sec!`;
document.body.appendChild(growthRateDisplay);

const itemButtons: HTMLButtonElement[] = [];

shopItems.forEach((item) => {
  const itemButton = document.createElement("button");
  itemButton.textContent =
    `Click Me To Gain a ${item.name} ${item.emoji} (${item.cost} eggs!!)`;
  itemButton.disabled = true;
  document.body.appendChild(itemButton);

  const desc = document.createElement("p");
  desc.textContent = item.description + ` +${item.rate} eggs/sec`;
  desc.style.fontStyle = "airel";
  desc.style.marginTop = "2px";
  document.body.appendChild(desc);

  itemButtons.push(itemButton);
});

const ownedDisplay = document.createElement("div");
ownedDisplay.style.marginTop = "20px";
ownedDisplay.style.padding = "10px";
ownedDisplay.style.borderTop = "2px solid #ccc";
ownedDisplay.textContent = "Owned Items:";
document.body.appendChild(ownedDisplay);

// -----------------------------
// Event listeners
// Group addEventListener calls here
// -----------------------------
button.addEventListener("click", () => {
  count += 1;
  eggCountDisplay.textContent = `You have ${count} eggs! 🥚`;
});
shopItems.forEach((item, i) => {
  const itemButton = itemButtons[i];
  itemButton.addEventListener("click", () => {
    if (count >= item.cost) {
      count -= item.cost;
      growthRate += item.rate;
      item.cost *= 1.15;
      item.quantity += 1;
      growthRateDisplay.textContent = `Current Growth Rate is ${
        growthRate.toFixed(1)
      }!`;
      itemButton.textContent = `Click Me To Gain a ${item.emoji} (${
        item.cost.toFixed(0)
      } eggs!!)`;
      renderOwnedItems();
    }
  });
});

// -----------------------------
// Update functions
// step, updateOwnedDisplay
// -----------------------------
function renderOwnedItems() {
  ownedDisplay.innerHTML = "<strong>Owned Items:</strong><br>";
  shopItems.forEach((item) => {
    if (item.quantity > 0) {
      ownedDisplay.innerHTML +=
        `${item.emoji} ${item.name}: ${item.quantity}<br>`;
    }
  });
}

function gameLoop(timestamp: number) {
  if (start === undefined) {
    start = timestamp;
  }
  const delta = (timestamp - start) / 1000;
  start = timestamp;
  count += delta * growthRate;
  eggCountDisplay.textContent = `You have ${Math.floor(count)} eggs! 🥚`;
  shopItems.forEach((item, i) => {
    itemButtons[i].disabled = Math.floor(count) < item.cost;
  });
  requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);
