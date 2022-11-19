$(window).scroll(function () {
    var sticky = $('.navbar'),
        scroll = $(window).scrollTop();
    if (scroll >= 100) sticky.addClass('sticky-header');
    else sticky.removeClass('sticky-header');
});

window.onscroll = function () {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
        height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight,
        scrolled = (winScroll / height) * 100;
    let progressBar = document.getElementById("progressBar");
    if (progressBar != null)
        progressBar.style.height = scrolled + "%";
};