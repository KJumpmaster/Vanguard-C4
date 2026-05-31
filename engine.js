(() => {
  const statusBox = document.getElementById('statusBox');
  const detailPanel = document.getElementById('detailPanel');
  const nodeLayer = document.getElementById('nodeLayer');
  const rankLayer = document.getElementById('rankLayer');

  if (statusBox) {
    statusBox.textContent = 'RESEARCH TREE PREVIEW READY';
  }

  if (rankLayer) {
    const ranks = ['Rank I', 'Rank II', 'Rank III', 'Rank IV', 'Rank V'];
    rankLayer.innerHTML = ranks.map((rank) => `<div class="rank-marker">${rank}</div>`).join('');
  }

  if (nodeLayer) {
    const previewNodes = [
      { name: 'Aircraft Registry', meta: 'SkyPilot readiness source', type: 'standard' },
      { name: 'Pilot Qualifications', meta: 'Certification and role context', type: 'squadron' },
      { name: 'Combat Power View', meta: 'Force capacity signal', type: 'premium' },
    ];

    nodeLayer.innerHTML = previewNodes.map((node, index) => `
      <button class="tree-node ${node.type}" type="button" data-index="${index}">
        <strong>${node.name}</strong>
        <span>${node.meta}</span>
      </button>
    `).join('');

    nodeLayer.querySelectorAll('.tree-node').forEach((button) => {
      button.addEventListener('click', () => {
        const node = previewNodes[Number(button.dataset.index)];
        if (detailPanel && node) {
          detailPanel.innerHTML = `
            <h3>${node.name}</h3>
            <p>${node.meta}</p>
            <p>This preview supports the SkyPilot product path while the full aircraft research dataset is expanded.</p>
          `;
        }
      });
    });
  }
})();
