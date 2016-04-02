$('.img-holder').imageScroll({
    image: null,
    imageAttribute: 'image',
    container: $('body'),
    speed: 0.1,
    coverRatio: 0.75,
    holderClass: 'imageHolder',
    holderMinHeight: 200,
    extraHeight: 0,
    mediaWidth: 1600,
    mediaHeight: 900,
    parallax: true,
    touch: false,
});

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

$("#menu-toggle").click(function(e) {
  $(".btn").attr("id", "arrow")
});

// $("#menu-toggle").click(function() {
//     $(".btn").toggleClass("src", "../images/arrow-02.png");
//     console.log('.btn');
// });

