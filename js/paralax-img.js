$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    $('.Hero-Bakg').css('top', -(scrollTop * 0.4) + 'px');
    $('.Hero-desc').css('top', -(scrollTop * 0.3) + 'px');
    $('.Footer-Bakg').css('top', -(scrollTop * 6) + 'px');
    $('.geekImg').css('top', -(scrollTop * 0.2) + 'px');
});
