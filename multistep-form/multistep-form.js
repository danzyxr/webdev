let state = 0;

tabState(state);

function tabState(n) {
  let tabs = document.querySelectorAll("div.tab");
  let steps = document.querySelectorAll("span.step");
  let prevBtn = document.querySelector("#prev-btn");
  let nextBtn = document.querySelector("#next-btn");

  tabs[n].style.display = "flex";

  if (n == 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "inline";
  }

  if (n == tabs.length - 1) {
    nextBtn.innerHTML = "Submit";
  } else {
    nextBtn.innerHTML = "Next";
  }

  const setActiveStep = function (x) {
    steps = document.querySelectorAll(".step");

    for (let i = 0; i < steps.length; i++) {
      steps[i].className = steps[i].className.replace(" active", "");
    }

    steps[x].className += " active";
  };

  setActiveStep(n);
}

function validateForm() {
  let valid = true;
  let tabs = document.querySelectorAll(".tab");
  let tabInputs = tabs[state].querySelectorAll("input");
  let steps = document.querySelectorAll(".step");

  for (let i = 0; i < tabInputs.length; i++) {
    if (tabInputs[i].value == "") {
      tabInputs[i].className += " invalid";
      valid = false;
    }
  }

  if (valid) {
    steps[state].className += " complete";
  }

  return valid;
}

function prevNext(pN) {
  if (pN == 1 && !validateForm()) return false;

  let tabs = document.querySelectorAll(".tab");
  tabs[state].style.display = "none";
  state = state + pN;

  if (state >= tabs.length) {
    document.querySelector("#register-form").submit();
    return false;
  }

  tabState(state);
}
