(()=>{const root=document.documentElement,button=document.getElementById('langToggle');
function language(bm){root.classList.toggle('show-bm',bm);root.lang=bm?'ms':'en';button.textContent=bm?'EN':'BM';button.setAttribute('aria-label',bm?'Switch to English':'Switch to Bahasa Malaysia');}
try{language(localStorage.getItem('portfolio-language')==='ms')}catch(e){}
button.addEventListener('click',()=>{const bm=!root.classList.contains('show-bm');language(bm);try{localStorage.setItem('portfolio-language',bm?'ms':'en')}catch(e){}});
const buttons=[...document.querySelectorAll('[data-flow]')],panels=[...document.querySelectorAll('[data-panel]')];
buttons.forEach(b=>b.addEventListener('click',()=>{buttons.forEach(x=>x.setAttribute('aria-pressed',String(x===b)));panels.forEach(p=>p.hidden=p.dataset.panel!==b.dataset.flow);}));
const links=[...document.querySelectorAll('nav a[href^="#"]')];
if(links.length&&'IntersectionObserver'in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.setAttribute('aria-current',String(a.hash==='#'+e.target.id)))}),{rootMargin:'-30% 0px -60% 0px'});links.forEach(a=>{const s=document.querySelector(a.hash);if(s)io.observe(s)});}
})();
