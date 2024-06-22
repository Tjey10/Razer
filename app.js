
window.addEventListener("scroll", function(){
    var reveal = document.querySelectorAll(".reveal");
   for(var i= 0; i < reveal.length ; i++ ){
      var windowheight = window.innerHeight;
      var revealTop = reveal[i].getBoundingClientRect().top;
      var revealpoint = 150;

      if(revealTop < windowheight - revealpoint){
          reveal[i].classList.add("active");
      } else{
        reveal[i].classList.remove("active");
      }
   }
});

const hamburgerIcon = document.querySelector(".fa-house");
const mobileNav = document.querySelector(".mobile-nav");
const xmark = document.querySelector(".mobile-nav .fa-xmark");



hamburgerIcon.addEventListener("click", () =>{
  mobileNav.classList.toggle("expand-on");
});

xmark.addEventListener("click", () =>{
  mobileNav.classList.remove("expand-on");
});

document.addEventListener('DOMContentLoaded', () => {
  const faqs = document.querySelectorAll('.faq');

  faqs.forEach((faq) => {
      const faqHead = faq.querySelector('.head'); 
      const faqSub = faq.querySelector('.faq-sub'); 

      faqHead.addEventListener('click', () => {
          faqSub.classList.toggle('dropdown');  
      });
  });
});




