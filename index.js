const btnCtn = document.getElementById("btn-ctn");

// Array with package costs
const packageCostArray = [
  { name: "selectA", cost: 1500, selected: false },
  { name: "selectB", cost: 3000, selected: false },
  { name: "selectC", cost: 5000, selected: false },
];

// Function to create a button
function createButton(package) {
  const newButton = document.createElement("button");
  const newContent = document.createTextNode(`${package.name}: Off`);
  newButton.appendChild(newContent);
  newButton.classList.add("new-btn");

  // Adding click event to toggle state
  newButton.addEventListener("click", () => {
    package.selected = !package.selected;
    newButton.textContent = `${package.name}: ${
      package.selected ? "On" : "Off"
    }`;
  });

  return newButton;
}

// Function to map package cost array to individual buttons
function packageCostMap() {
  packageCostArray.forEach((package) => {
    const newButton = createButton(package);
    btnCtn.appendChild(newButton);
  });
}

// Initial call to render buttons
packageCostMap();
