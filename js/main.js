const slides = document.querySelectorAll('.price-list__slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()

        slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}

$(function () {

    $('.price-list__slider').slick({
        centerMode: true,
        initialSlide: 3,
        arrows: false,
        centerPadding: '238px',
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 1500,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '230px',
              slidesToShow: 4
            }
          },
         
          {
            breakpoint: 1440,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '130px',
              slidesToShow: 4
            }
          }, 
          {
            breakpoint: 1340,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '230px',
              slidesToShow: 3
            }
          },          
    {
      breakpoint: 1020,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '130px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 865,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '130px',
        slidesToShow: 2
      }
    }
  ]
        
    });

    $('.delivery__gallery-mob').slick({
      arrows: false,
      dots: true,
      infinite: true
    });

    $('.menu-btn').on('click', function(){
      $('.menu__list').toggleClass('active');
     });
})


