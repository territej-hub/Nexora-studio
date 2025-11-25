// script.js - mobile nav toggle & reveal logic
document.addEventListener('DOMContentLoaded', function(){
  const ham = document.getElementById('hamburger');
  const mobile = document.getElementById('mobileNav');
  if(ham){
    ham.addEventListener('click', function(){
      ham.classList.toggle('active');
      mobile.style.display = mobile.style.display === 'block' ? 'none' : 'block';
    });
  }

  // reveal on scroll
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add('visible');
    });
  },{threshold:0.08});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
});
