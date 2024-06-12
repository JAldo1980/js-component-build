const btnCtn = document.getElementById("btn-ctn");
const plnCtn = document.getElementById("pln-ctn");

// array with package costs
const packageCostArray = [
  { name: "Package 1", cost: 1500, selected: false, id: 1 },
  { name: "Package 2", cost: 3000, selected: false, id: 2 },
  { name: "Package 3", cost: 5000, selected: false, id: 3 },
];

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// SELECT PACKAGE FUNCTIONS ++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++

function createButtonOne(package) {
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
    const newButton = createButtonOne(package);
    btnCtn.appendChild(newButton);
  });
}

// initial call to render buttons
packageCostMap();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// SELECT PAYMENT BUTTON FUNCTIONS +++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const packagePlanArray = [{ duration: 6 }, { duration: 9 }, { duration: 12 }];

function createButtonTwo(plan) {
  const newButton = document.createElement("button");
  const newContent = document.createTextNode(`${plan.duration} months`);
  newButton.appendChild(newContent);
  newButton.classList.add("new-btn");

  // create unique ID for the button
  newButton.id = `plan-${plan.duration}`;

  // add click event to toggle state
  newButton.addEventListener("click", () => {
    // deselect all buttons
    packagePlanArray.forEach((pln) => {
      const button = document.getElementById(`plan-${pln.duration}`);
      if (button) {
        button.textContent = `${pln.duration} months`;
        button.classList.remove("active");
      }
    });

    // select the clicked button
    newButton.textContent = `${plan.duration} months`;
    newButton.classList.add("active");

    console.log(`Selected payment plan: ${plan.duration} months`);
  });

  return newButton;
}

// function to map package plan array to individual buttons
function packagePlanMap() {
  packagePlanArray.forEach((plan) => {
    const newButton = createButtonTwo(plan);
    plnCtn.appendChild(newButton);
  });
}

// initial call to render buttons
packagePlanMap();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// HOSTING FUNCTION +++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const btnCtn = document.getElementById("btn-ctn");

// array with hosting durations
const hostingArray = [
  { duration: 1, selected: false, id: 1 },
  { duration: 2, selected: false, id: 2 },
  { duration: 3, selected: false, id: 3 },
];

// create button
function createButton(hosting) {
  const newButton = document.createElement("button");
  const newContent = document.createTextNode(
    `${hosting.duration} Month${hosting.duration > 1 ? "s" : ""}: Off`
  );
  newButton.appendChild(newContent);
  newButton.classList.add("new-btn");

  // create unique ID for the button
  newButton.id = `button-${hosting.id}`;

  // add click event to toggle state
  newButton.addEventListener("click", () => {
    // deselect all buttons
    hostingArray.forEach((host) => {
      host.selected = false;
      const button = document.getElementById(`button-${host.id}`);
      if (button) {
        button.textContent = `${host.duration} Month${
          host.duration > 1 ? "s" : ""
        }: Off`;
        button.classList.remove("active");
      }
    });

    // select the clicked button
    hosting.selected = true;
    newButton.textContent = `${hosting.duration} Month${
      hosting.duration > 1 ? "s" : ""
    }: On`;
    newButton.classList.add("active");

    // get duration of selected button
    const selectedDuration = hostingArray
      .filter((host) => host.selected)
      .map((host) => host.duration);

    console.log("Selected Duration:", selectedDuration[0]); // Should only contain one element

    console.log(hostingArray);
  });

  return newButton;
}

// function to map hosting array to individual buttons
function hostingDurationMap() {
  hostingArray.forEach((hosting) => {
    const newButton = createButton(hosting);
    btnCtn.appendChild(newButton);
  });
}

// initial call to render buttons
hostingDurationMap();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// MAINTENANCE FUNCTION +++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// will need a simple boolean here
