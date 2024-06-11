const btnCtn = document.getElementById("btn-ctn");

// array with package costs
const packageCostArray = [
  { name: "Bronze", cost: 1500, selected: false, id: 1 },
  { name: "Silver", cost: 3000, selected: false, id: 2 },
  { name: "Gold", cost: 5000, selected: false, id: 3 },
];

// create button
function createButton(package) {
  const newButton = document.createElement("button");
  const newContent = document.createTextNode(`${package.name}: Off`);
  newButton.appendChild(newContent);
  newButton.classList.add("new-btn");

  // create unique ID to the button
  newButton.id = `button-${package.id}`;

  // add click event to toggle state
  newButton.addEventListener("click", () => {
    // deselect all buttons
    packageCostArray.forEach((pkg) => {
      pkg.selected = false;
      const button = document.getElementById(`button-${pkg.id}`);
      if (button) {
        button.textContent = `${pkg.name}: Off`;
        button.classList.remove("active");
      }
    });

    // select the clicked button
    package.selected = true;

    newButton.textContent = `${package.name}: On`;
    newButton.classList.add("active");

    // get the cost of the clicked button

    const selectedCost = packageCostArray
      .filter((pkg) => pkg.selected)
      .map((pkg) => pkg.cost);

    console.log(packageCostArray);
    console.log(selectedCost[0]);
  });

  return newButton;
}

// function to map package cost array to individual buttons
function packageCostMap() {
  packageCostArray.forEach((package) => {
    const newButton = createButton(package);
    btnCtn.appendChild(newButton);
  });
}

// initial call to render buttons
packageCostMap();
