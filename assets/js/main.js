// Populate personal info from config
document.addEventListener('DOMContentLoaded', ()=>{
  // Populate name fields
  const siteName = document.getElementById('site-name');
  const heroName = document.getElementById('hero-name');
  const field = document.getElementById('field');
  const contactEmail = document.getElementById('contact-email');
  const footerName = document.getElementById('footer-name');
  
  if(siteName) siteName.textContent = config.name;
  if(heroName) heroName.textContent = config.name;
  if(field) field.textContent = config.field;
  if(contactEmail) {
    contactEmail.textContent = config.email;
    contactEmail.href = 'mailto:' + config.email;
  }
  if(footerName) footerName.textContent = config.name;
  
  // Handle class-based elements (multiple instances)
  document.querySelectorAll('.site-name').forEach(el => el.textContent = config.name);
  document.querySelectorAll('.author-name').forEach(el => el.textContent = config.name);
  document.querySelectorAll('.footer-name').forEach(el => el.textContent = config.name);
});

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
