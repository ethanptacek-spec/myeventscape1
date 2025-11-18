document.querySelectorAll('.phase-card').forEach((card) => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.phase-card').forEach((btn) => btn.classList.remove('active'));
    card.classList.add('active');
    const detail = document.querySelector('[data-phase-detail]');
    if (detail) {
      detail.textContent = card.dataset.detail;
    }
  });
});

const layerButtons = document.querySelectorAll('[data-layer-target]');
const layerPanels = document.querySelectorAll('.layer-panel');

layerButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.layerTarget;
    layerButtons.forEach((button) => button.classList.remove('is-active'));
    btn.classList.add('is-active');

    layerPanels.forEach((panel) => {
      const isActive = panel.id === `layer-${target}`;
      panel.classList.toggle('is-active', isActive);
    });
  });
});
