(function(){
  const target = new Date('2026-07-28T12:00:00-07:00');
  const el = document.getElementById('countdown');
  function tick(){
    if(!el) return;
    const now = new Date();
    let diff = target - now;
    if(diff <= 0){ el.textContent = 'MISSION WINDOW OPEN'; return; }
    const d = Math.floor(diff/86400000); diff %= 86400000;
    const h = Math.floor(diff/3600000); diff %= 3600000;
    const m = Math.floor(diff/60000); diff %= 60000;
    const s = Math.floor(diff/1000);
    el.textContent = `${d}D ${String(h).padStart(2,'0')}H ${String(m).padStart(2,'0')}M ${String(s).padStart(2,'0')}S`;
  }
  tick(); setInterval(tick,1000);

  const btn = document.getElementById('audioToggle');
  const audio = document.getElementById('missionAudio');
  if(btn && audio){
    btn.addEventListener('click', async () => {
      try{
        if(audio.paused){ await audio.play(); btn.textContent = 'Mute Mission Audio'; }
        else{ audio.pause(); btn.textContent = 'Enable Mission Audio'; }
      }catch(e){ btn.textContent = 'Audio Blocked'; }
    });
  }
})();
