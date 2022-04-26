
const creditCardInputs = document.querySelectorAll('.credit-card__input');
const imgCreditCard = document.querySelector('#creditCardImg');

creditCardInputs.forEach(input => input.addEventListener('keydown', (e) => {
  e.preventDefault();
  maskText(e.key, input);
  if (input.value.length === 1) {
    input.value === '5' ? imgCreditCard.src = './assets/mastercard.png' : imgCreditCard.src = './assets/visa.png';
  }
}));

function maskText(key, input) {
  const { mask, separator = '-' } = input.dataset;
  if (key === 'Tab') return;
  if (key === 'Backspace') {
    input.value = input.value.slice(0, input.value.length - 1);
    return;
  }
  if (/\d/.test(key) && input.value.length < mask.length) {
    mask[input.value.length + 1] === separator ? input.value += `${key}${separator}` : input.value += `${key}`;
  }
}
