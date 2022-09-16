var searchForm = document.querySelector(".search-form");/* هنا جبت القورم العاديه والاساسيه*/

document.querySelector("#search-btn").onclick = () =>{ /* هنا جبت زرار السيرش وقلت لما اضغط عليه ينفذ الاامر اللي تحت*/
    searchForm.classList.toggle("active"); /* هينقذ الامر اكتيف على الفورم*/
}


let loginForm = document.querySelector (".login-form-container"); /* هنا جبت الفورم*/

document.querySelector("#login-btn").onclick = () => {
    loginForm.classList.toggle("active")
}

document.querySelector("#close-login-btn").onclick = () => {
    loginForm.classList.remove("active")
}

window.onscroll = () => {

    searchForm.classList.remove("active");

    if(window.scrollY > 80 ){
        document.querySelector(".header .header-2").classList.add("active");
    }else{
        document.querySelector(".header .header-2").classList.remove("active");
    }
}

window.onload = () => {
    if(window.scrollY > 80 ){
        document.querySelector(".header .header-2").classList.add("active");
    }else{
        document.querySelector(".header .header-2").classList.remove("active");
    }
}

/*Start Swiper */
var swiper = new Swiper(".books-slider", {
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
/*End Swiper */

/*Start Swiper featured  */

var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
/*End Swiper featured  */

/*Start Swiper Arrivals  */
var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

/*End Swiper Arrivals  */

/*Start Reviews Section*/
var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  GrabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

/*End Reviews Section*/


/* Start blogs Section*/
var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  GrabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
/* End blogs Section*/


/*Start Loader */
  function loader (){
    document.querySelector(".loader-container").classList.add("active"); /*هنا جبت اللوود وفعلت عدم التشغيل */
  }
  function fadeOut(){
    setTimeout(loader,3000); /* هنا قولت وقف عدم التشغيل بعد 3 ثواني*/
  }

  window.onload = () => { /* هنا قولت نفذ معادلة عدم التشغيل بعد تحميل الصفحة*/
    fadeOut()   
  }
/*End Loader */