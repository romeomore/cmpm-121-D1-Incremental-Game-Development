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
button.addEventListener("click", () => {
  count++;
  button.textContent = `You Have ${count} Eggs, you Hen`;

  setInterval(autoClicker, 1000);

  function autoClicker() {
    count++;
    button.textContent = `You Have ${count} Eggs, you Hen`;
  }
});
