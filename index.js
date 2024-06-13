const btnCtn = document.getElementById("btn-ctn");
const plnCtn = document.getElementById("pln-ctn");
const hstPln = document.getElementById("hst-pln");
const mtsPln = document.getElementById("mts-pln");

// array with package costs
const packageCostArray = [
  { name: "Package 1", cost: 1500, selected: false, id: 1 },
  { name: "Package 2", cost: 3000, selected: false, id: 2 },
  { name: "Package 3", cost: 5000, selected: false, id: 3 },
];

// array with payment durations
const packagePlanArray = [{ duration: 6 }, { duration: 9 }, { duration: 12 }];

// array with hosting durations
const hostingArray = [
  { duration: 1, selected: false, id: 1 },
  { duration: 2, selected: false, id: 2 },
  { duration: 3, selected: false, id: 3 },
];

// const containing maintenence boolean value
let maintenanceSwitch = false;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// SELECT PACKAGE FUNCTIONS ++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++

function createButtonOne(package) {
  const newButton = document.createElement("button");
  const newContent = document.createTextNode(`${package.name}`);
  newButton.appendChild(newContent);
  newButton.classList.add("new-btn");

  // create unique ID to the button
  newButton.id = `button-one-${package.id}`;

  // add click event to toggle state
  newButton.addEventListener("click", () => {
    // deselect all package buttons
    packageCostArray.forEach((pkg) => {
      pkg.selected = false;
      const button = document.getElementById(`button-one-${pkg.id}`);
      if (button) {
        button.textContent = `${pkg.name}`;
        button.classList.remove("active");
      }
    });

    // select the clicked package button
    package.selected = true;

    newButton.textContent = `${package.name}`;
    newButton.classList.add("active");

    // get the cost of the clicked button
    const selectedCost = packageCostArray
      .filter((pkg) => pkg.selected)
      .map((pkg) => pkg.cost);

    console.log(packageCostArray);
    console.log(`Selected cost £: ${selectedCost[0]}`);
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

// initial call to render package buttons
packageCostMap();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// SELECT PAYMENT BUTTON FUNCTIONS +++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function createButtonTwo(plan) {
  const newButton = document.createElement("button");
  const newContent = document.createTextNode(`${plan.duration} months`);
  newButton.appendChild(newContent);
  newButton.classList.add("new-btn");

  // create unique ID for the button
  newButton.id = `button-two-${plan.duration}`;

  // add click event to toggle state
  newButton.addEventListener("click", () => {
    // deselect all payment buttons
    packagePlanArray.forEach((pln) => {
      const button = document.getElementById(`button-two-${pln.duration}`);
      if (button) {
        button.textContent = `${pln.duration} months`;
        button.classList.remove("active");
      }
    });

    // select the clicked payment button
    newButton.textContent = `${plan.duration} months`;
    newButton.classList.add("active");

    console.log(`Selected payment plan: ${plan.duration} months`);

    console.log(packagePlanArray);
  });

  return newButton;
}

// function to map payment plan array to individual buttons
function packagePlanMap() {
  packagePlanArray.forEach((plan) => {
    const newButton = createButtonTwo(plan);
    plnCtn.appendChild(newButton);
  });
}

// initial call to render payment buttons
packagePlanMap();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// HOSTING FUNCTION +++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function createButtonThree(hosting) {
  const newButton = document.createElement("button");
  const newContent = document.createTextNode(
    `${hosting.duration} Month${hosting.duration > 1 ? "s" : ""}`
  );
  newButton.appendChild(newContent);
  newButton.classList.add("new-btn");

  // create unique ID for the button
  newButton.id = `button-three-${hosting.id}`;

  // add click event to toggle state
  newButton.addEventListener("click", () => {
    // deselect all hosting buttons
    hostingArray.forEach((host) => {
      host.selected = false;
      const button = document.getElementById(`button-three-${host.id}`);
      if (button) {
        button.textContent = `${host.duration} Month${
          host.duration > 1 ? "s" : ""
        }`;
        button.classList.remove("active");
      }
    });

    // select the clicked hosting button
    hosting.selected = true;
    newButton.textContent = `${hosting.duration} Month${
      hosting.duration > 1 ? "s" : ""
    }`;
    newButton.classList.add("active");

    // get duration of selected button
    const selectedDuration = hostingArray
      .filter((host) => host.selected)
      .map((host) => host.duration);

    console.log("Selected Duration:", selectedDuration[0]); // Should only contain one element

    console.log(hostingArray);
    console.log(`Selected hosting plan: ${hosting.duration} months`);
  });

  return newButton;
}

// function to map hosting array to individual buttons
function hostingDurationMap() {
  hostingArray.forEach((hosting) => {
    const newButton = createButtonThree(hosting);
    hstPln.appendChild(newButton);
  });
}

// initial call to render hosting buttons
hostingDurationMap();

// add maintenance:

function addMaintenance() {
  const newButton = document.createElement("button");
  updateButtonText(newButton);
  newButton.classList.add("new-btn");

  newButton.addEventListener("click", () => {
    maintenanceSwitch = !maintenanceSwitch;

    updateButtonText(newButton);

    console.log(maintenanceSwitch);
  });

  mtsPln.appendChild(newButton);
}

function updateButtonText(button) {
  button.textContent = maintenanceSwitch ? "Yes" : "No";
}

// Call to render maintenance button
addMaintenance();

// calculate the total values:

// reset calculator
