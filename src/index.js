
const creditCardInputs = document.querySelectorAll('.credit-card__input');

creditCardInputs.forEach(input => input.addEventListener('keydown', (e) => {
  e.preventDefault();
  maskText(e.key, input);
}));

function maskText(key, input) {
  const { mask, separator = '-' } = input.dataset;
  if (key === 'Backspace') {
    input.value = input.value.slice(0, input.value.length - 1);
    return;
  }
  if (/\d/.test(key) && input.value.length < mask.length) {
    mask[input.value.length + 1] === separator ? input.value += `${key}${separator}` : input.value += `${key}`;
  }
}
