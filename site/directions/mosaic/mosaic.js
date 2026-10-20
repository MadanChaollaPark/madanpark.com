const indicator=document.querySelector('.chapter-indicator');
if('IntersectionObserver' in window){
 const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){indicator.textContent=entry.target.dataset.chapter;document.querySelectorAll('.mast nav a').forEach(a=>{if(a.hash==='#'+entry.target.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}})},{rootMargin:'-15% 0px -60% 0px',threshold:0});
 document.querySelectorAll('.chapter').forEach(section=>observer.observe(section));
}
