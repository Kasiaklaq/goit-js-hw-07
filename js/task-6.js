function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector('#controls');
    const input = controls.querySelector('input');
    const createBtn = controls.querySelector('[data-create]');
    const destroyBtn = controls.querySelector('[data-destroy]');
    const boxesContainer = document.querySelector('#boxes');

    createBtn.addEventListener('click', () => {
      const amount = parseInt(input.value);
      if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        input.value = ''; // Clear input value
      } else {
        alert('Please enter a number between 1 and 100');
      }
    });

    destroyBtn.addEventListener('click', destroyBoxes);

    function createBoxes(amount) {
      destroyBoxes(); // Clear previous boxes
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
        box.style.backgroundColor = getRandomHexColor();
        box.textContent = `${i + 1}`;
        fragment.appendChild(box);
      }
      boxesContainer.appendChild(fragment);
    }

    function destroyBoxes() {
      boxesContainer.innerHTML = '';
    }