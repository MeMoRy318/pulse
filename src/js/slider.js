function slider (){
    $(document).ready(function(){
        $('.slider__content').slick({
          speed: 1200,
          prevArrow: '<button type="button" class="slick-prev slider__prev"><img src="icons/arrow/left.png"></button>',
          nextArrow: '<button type="button" class="slick-next slider__next"><img src="icons/arrow/right.png"></button>',
        });
      });
}
