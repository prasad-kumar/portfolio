
 // responsive navbar code 

 const mobile_nav_btn = document.querySelector('.mobile-nav-btn');
 const header = document.querySelector('.header');

 mobile_nav_btn.addEventListener('click', () => {
   header.classList.toggle('active');
 })
 
 
 // ========================================
 // portfolio filter code
 // ========================================
 
const p_btns = document.querySelector('.p-btns');
const p_btn = document.querySelectorAll('.p-btn');
const img_overlay  = document.querySelectorAll('.img-overlay');

p_btns.addEventListener('click', (e) => {
    const p_btn_clicked = e.target;

    p_btn.forEach(curElem => curElem.classList.remove('p-btn-active'));
    p_btn_clicked.classList.add('p-btn-active');
    
    // finding btn-num
    const btn_num = p_btn_clicked.dataset.btnNum;
    if(btn_num){
      const img_active = document.querySelectorAll(`.p-btn--${btn_num}`)

      img_overlay.forEach(curElem => curElem.classList.add('img-overlay-hide'))
      
      img_active.forEach(curElem => curElem.classList.remove('img-overlay-hide'));
    }
    
  })
  
  

  // ========================================
  // sticky navigation
  // ========================================
  const sectionHero = document.querySelector(".section-hero");
  
  const observer = new IntersectionObserver(
      (entries) => {
          const ent = entries[0];
          !ent.isIntersecting ?
              document.body.classList.add("sticky") :
              document.body.classList.remove("sticky");
      }, {
          // viewport
          root: null,
          threshold: 0,
          rootMargin: "-100px",
      }
  );
  // when the hero section end part reached then we need to show the sticky navigation
  observer.observe(sectionHero);



// swiper code

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// responsive testimonial code

const myJsMedia = (e) => {
  if(e.matches){
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: {
        delay: 2500,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }else{
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 20,
      autoplay: {
        delay: 2500,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}

const widthsize = window.matchMedia('(max-width: 780px)');

myJsMedia(widthsize);

widthsize.addEventListener('change', myJsMedia);

// ========================================
//  animated counter number
// ========================================

const workSection = document.querySelector(".section-work-data");

const workSectionObserve = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    // work data animation code

    const counterElem = document.querySelectorAll('.counter-number');
    const speed = 200;

    counterElem.forEach(curElem => {

      const updateNumber = () => {
      
        const targetNumber = parseInt(curElem.dataset.number);
        const initialNumber = parseInt(curElem.innerText);
        const incrementNumber = Math.trunc(targetNumber / speed);

        if(initialNumber < targetNumber){
          curElem.innerText = `${initialNumber + incrementNumber}+`;
          setTimeout(updateNumber, 10);
        }
      }
    
      updateNumber();
    })
    
};

const workSecObserver = new IntersectionObserver(workSectionObserve, {
    root: null,
    threshold: 0,
});

workSecObserver.observe(workSection);


// scroll to top code

const hero = document.querySelector('.section-hero');
const scrollElem = document.querySelector('.scroll-to-top');

scrollElem.addEventListener('click', () => {
  hero.scrollIntoView({behavior:"smooth"});
})

