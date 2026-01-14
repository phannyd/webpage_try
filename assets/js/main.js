// Simple nav toggle for mobile
function setupToggle(toggleId, navId){
  const t = document.getElementById(toggleId);
  const n = document.getElementById(navId);
  if(!t || !n) return;
  t.addEventListener('click', ()=>{
    const shown = n.style.display === 'flex' || n.style.display === '';
    n.style.display = shown ? 'none' : 'flex';
  });
}

setupToggle('nav-toggle','site-nav');
setupToggle('nav-toggle-2','site-nav-2');
setupToggle('nav-toggle-3','site-nav-3');
setupToggle('nav-toggle-4','site-nav-4');
setupToggle('nav-toggle-5','site-nav-5');
