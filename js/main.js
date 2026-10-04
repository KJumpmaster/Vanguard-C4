(function(){
  const button = document.getElementById('audioToggle');
  const audio = document.getElementById('missionAudio');
  if (!button || !audio) return;
  button.addEventListener('click', async () => {
    try {
      if (audio.paused) {
        await audio.play();
        button.textContent = 'Mute Mission Audio';
      } else {
        audio.pause();
        button.textContent = 'Enable Mission Audio';
      }
    } catch {
      button.textContent = 'Enable Mission Audio';
    }
  });
})();
