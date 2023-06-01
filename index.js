//===============================================================
// creating a responsive navbar component
// ==============================================================

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener('click', () => {
  headerElem.classList.toggle('active');
});

//===============================================================
// creating a portfolio tabbed component
// ==============================================================

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener('click', (e) => {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

  p_btn_clicked.classList.add("p-btn-active");

  // TO find the number in data attr 
  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);

  // const img_active = document.querySelectorAll('.p-btn--${btn_num}');

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

  p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

  img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"));


});

// swiper js code
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    Delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// **************swiper show only one when in mobile version

// const myjsmedia = (widthsize) => {
//   if (widthsize.matches) {
//     new Swiper(".mySwiper", {
//       slidesPerView: 1,
//       spaceBetween: 30,

//     });
//   }
//   else {
//     new Swiper(".mySwiper", {
//       slidesPerView: 1,
//       spaceBetween: 30,

//     });
//   }
// };
// const widthsize = window.matchMedia("(max-width:560px )");
// myjsmedia(widthsize);
// widthsize.addEventListener("change", myjsmedia);

// scroll to top button
// /********************* */ scrooll to top button*******************************************
const hrosection = document.querySelector(".section-hero");
const footeraElemetn = document.querySelector(".section-footer");  //take footer
const scroolTotopelement = document.createElement("div"); //create div


scroolTotopelement.classList.add("scrollTop-Style");//create class in div

scroolTotopelement.innerHTML = `<ion-icon name="arrow-up-outline" class="scrooll-top"></ion-icon>` //add icon in html

footeraElemetn.after(scroolTotopelement);

//// for scroolleing herosection by get section hereo by const hrosection=document.querySelector(".section-hero");     function
const scrollTop = () => {
  hrosection.scrollIntoView({ behavior: "smooth" });

};
scroolTotopelement.addEventListener("click", scrollTop);

//********************* */animatate number*******************************************

const couterNUM = document.querySelectorAll(".counter-number");
const speed = 200;

couterNUM.forEach((curElem) => {
  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    console.log(targetNumber);
    const intitalNum = parseInt(curElem.innerText);
    console.log(intitalNum);
    const increamentNumber = Math.trunc(targetNumber / speed);
    console.log(increamentNumber);
    if (intitalNum < targetNumber) {
      curElem.innerText = `${intitalNum + increamentNumber}+`;
    }
    setTimeout(updateNumber, 10);

  }
  updateNumber();

});