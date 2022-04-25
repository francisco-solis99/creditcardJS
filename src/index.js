
const creditCardInputs = document.querySelectorAll('.credit-card__input');

const inputParams = {
  cardNumber: { separator: '-', digits: 4, length: 16 },
  cardCVC: { separator: '', digits: 0, length: 3 },
  cardDate: { separator: '/', digits: 2, length: 4 },
};

creditCardInputs.forEach(input => input.addEventListener('keydown', (e) => {
  if (e.keyCode === 8 || e.keyCode === 46) return;
  maskText(e.target, inputParams[e.target.name] ?? inputParams.cardCVC);
}));

function maskText(input, { separator, digits, length }) {
  const numNumbers = input.value.match(/\d/g)?.length ?? 1;
  if (!(numNumbers % digits)) {
    input.value = (numNumbers + 1 < length) ? input.value + separator : input.value;
  }
}
