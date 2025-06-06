const budget = {
  'Military': 877000000000,
  'Healthcare': 1400000000000,
  'Social Security': 1200000000000,
  'Education': 200000000000,
};

const rates = {};
const secondsInYear = 365 * 24 * 60 * 60;

for (let key in budget) {
  rates[key] = budget[key] / secondsInYear;
}

const start = Date.now();
const container = document.getElementById('spending-container');

for (let key in rates) {
  const div = document.createElement('div');
  div.className = 'category-block';
  div.innerHTML = `
    <div class="category">${key}</div>
    <div class="counter" id="${key}-counter">$0</div>
  `;
  container.appendChild(div);
}

setInterval(() => {
  const elapsed = (Date.now() - start) / 1000;
  for (let key in rates) {
    const value = rates[key] * elapsed;
    document.getElementById(`${key}-counter`).innerText =
      `$${value.toLocaleString(undefined, {maximumFractionDigits: 0})}`;
  }
}, 1000);
