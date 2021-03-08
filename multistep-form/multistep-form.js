let state = 0;

tabState(state);

function tabState(n) {
  const tabs = document.querySelectorAll('div.tab');
  let steps = document.querySelectorAll('span.step');
  const prevBtn = document.querySelector('#prev-btn');
  const nextBtn = document.querySelector('#next-btn');

  tabs[n].style.display = 'flex';

  if (n === 0) {
    prevBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'inline';
  }

  if (n === tabs.length - 1) {
    nextBtn.innerHTML = 'Submit';
  } else {
    nextBtn.innerHTML = 'Next';
  }

  const setActiveStep = function (step) {
    steps = document.querySelectorAll('.step');

    for (let i = 0; i < steps.length; i++) {
      steps[i].className = steps[i].className.replace(' active', '');
    }

    steps[step].className += ' active';
  };

  setActiveStep(n);
}

function validateForm() {
  let valid = true;
  const tabs = document.querySelectorAll('.tab');
  const tabInputs = tabs[state].querySelectorAll('input');
  const steps = document.querySelectorAll('.step');

  for (let i = 0; i < tabInputs.length; i++) {
    if (tabInputs[i].value === '') {
      tabInputs[i].className += ' invalid';
      valid = false;
    }
  }

  if (valid) {
    steps[state].className += ' complete';
  }

  return valid;
}

function prevNext(pN) {
  if (pN === 1 && !validateForm()) return false;

  const tabs = document.querySelectorAll('.tab');
  tabs[state].style.display = 'none';
  state = state + pN;

  if (state >= tabs.length) {
    document.querySelector('#register-form').submit();
    return false;
  }

  tabState(state);
}
