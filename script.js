let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");
let specialChar = ["%", "*", "-", "+", "/", "="];
let output = "";

const calculate = (btnValue) => {
  if (btnValue === "=" && btnValue !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DE") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChar.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
