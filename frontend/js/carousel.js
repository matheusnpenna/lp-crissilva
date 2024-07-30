new Glider(document.querySelector('.carousel-testimony'), {
  slidesToShow: 4,
  slidesToScroll: 4,
  draggable: false,
  gap: 20,
  responsive: [
    { breakpoint: 991, settings: { slidesToShow: 4, slidesToScroll: 4 } },
    { breakpoint: 560, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    { breakpoint: 280, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
}); 