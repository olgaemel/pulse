// $(document).ready(function () {
//   $(".carousel__inner").slick({
//     speed: 1200,
//     // adaptiveHeight: true,
//     // autoplay: true,
//     // autoplaySpeed: 2000,
//     prevArrow:
//       '<button type="button" class="slick-prev"><img src="icons/left.png" alt="product" /></button>',

//     nextArrow:
//       '<button type="button" class="slick-next"><img src="icons/right.png" alt="product" /></button>,',

//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           dots: true,
//           arrows: false,
//         },
//       },
//     ],
//   });
// });

const slider = tns({
  container: ".carousel__inner",
  items: 1,
  slideBy: "page",
  autoplay: false,
  controls: false,
  nav: false,
  responsive: {
    900: {
      nav: true,
    },
  },
});

document.querySelector(".prev").addEventListener("click", function () {
  slider.goTo("prev");
});

document
  .querySelector(".next")
  .addEventListener("click", () => slider.goTo("next"));
