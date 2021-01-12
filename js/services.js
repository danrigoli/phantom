function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const services = document.getElementById("services-heading");
const web_prices = document.getElementById("web-prices-heading");
const store_prices = document.getElementById("store-prices-heading");
const why_us = document.getElementById("why-heading");
const team = document.getElementById("team-heading");



$(window).on('scroll', function () {

    if (isInViewport(services)) {
        setTimeout(() => {
            $("#services-row").removeClass('invisible');
            $("#services-row").addClass('animate__animated animate__fadeInLeft');
        }, 1000);
        $("#services-heading").removeClass('invisible')
        $("#services-heading").addClass('animate__animated animate__fadeInDown')
        return 0;
    }

    if (isInViewport(web_prices)) {

        setTimeout(() => {
            $(".web-prices").removeClass('invisible');
            $(".web-prices").addClass('animate__animated animate__fadeInLeft');
        }, 1000);
        setTimeout(() => {
            $("#web-prices-subheading").removeClass('invisible');
            $("#web-prices-subheading").addClass('animate__animated animate__fadeInDown');
        }, 500);
        $("#web-prices-heading").removeClass('invisible')
        $("#web-prices-heading").addClass('animate__animated animate__fadeInDown')
        return 0;

    }

    if (isInViewport(store_prices)) {

        setTimeout(() => {
            $(".store-prices").removeClass('invisible');
            $(".store-prices").addClass('animate__animated animate__fadeInLeft');
        }, 1000);
        setTimeout(() => {
            $("#store-prices-subheading").removeClass('invisible');
            $("#store-prices-subheading").addClass('animate__animated animate__fadeInDown');
        }, 500);
        $("#store-prices-heading").removeClass('invisible')
        $("#store-prices-heading").addClass('animate__animated animate__fadeInDown')
        return 0;

    }

    if (isInViewport(why_us)) {

        setTimeout(() => {
            $("#why-3").removeClass('invisible');
            $("#why-3").addClass('animate__animated animate__fadeInLeft');
        }, 1500);
        setTimeout(() => {
            $("#why-2").removeClass('invisible');
            $("#why-2").addClass('animate__animated animate__fadeInRight');
        }, 1000);
        setTimeout(() => {
            $("#why-1").removeClass('invisible');
            $("#why-1").addClass('animate__animated animate__fadeInLeft');
        }, 500);
        $("#why-heading").removeClass('invisible')
        $("#why-heading").addClass('animate__animated animate__fadeInDown')
        return 0;

    }
    if (isInViewport(team)) {

        setTimeout(() => {
            $("#team-last").removeClass('invisible');
            $("#team-last").addClass('animate__animated animate__fadeInUp');
        }, 2500);
        setTimeout(() => {
            $("#team-3").removeClass('invisible');
            $("#team-3").addClass('animate__animated animate__fadeInRight');
        }, 2000);
        setTimeout(() => {
            $("#team-2").removeClass('invisible');
            $("#team-2").addClass('animate__animated animate__fadeInUp');
        }, 1500);
        setTimeout(() => {
            $("#team-1").removeClass('invisible');
            $("#team-1").addClass('animate__animated animate__fadeInLeft');
        }, 1000);
        setTimeout(() => {
            $("#team-subheading").removeClass('invisible');
            $("#team-subheading").addClass('animate__animated animate__fadeInDown');
        }, 500);
        $("#team-heading").removeClass('invisible')
        $("#team-heading").addClass('animate__animated animate__fadeInDown')
        return 0;

    }
});