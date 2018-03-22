// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
    hamburger.addEventListener("click", function() {
        // Toggle class "is-active"
        hamburger.classList.toggle("is-active");
        // Do something else, like open/close menu
    });

$(document).ready(function(){
  $('.slider-wrap').slick({
    appendDots:$(".slider__dots"),
    dots: true,
  //   customPaging : function(slider, i) {
  //     return '<button class="pager__item"> '+' </button>';
  // },
    appendArrows: $(".slider__btns"),
    prevArrow: '<button type="button" class="slick-prev slider-arrow"></button>',
    nextArrow: '<button type="button" class="slick-next slider-arrow"></button>',
    fade: true,
    cssEase: 'linear'
  });
});

// menu

var link = document.querySelector('.hamburger');
var items = document.querySelectorAll('.menu__item');
var menu = document.querySelector('.menu');

link.addEventListener('click', function (e) {
    e.preventDefault();

    menu.classList.toggle('animated');

    if (menu.classList.contains('animated')) {
        [].slice.call(items).forEach(function (item) {
            item.firstElementChild.classList.remove('bounce-in');
        });
    }
}, true);

document.querySelector('.menu__left')
    .addEventListener('transitionend', showItems);


function showItems() {
    var counter = 0;

    function recursion() {
        items[counter].firstElementChild.classList.add('bounce-in');
        counter++;

        if (counter < items.length) {
            setTimeout(recursion, 200);
        }
    }

    recursion();
}
