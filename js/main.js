
window.onscroll = function () {
    scrollFunction();
};

var progressEle = document.getElementById("skills");
var posProgress = progressEle.offsetTop;
var intElemOffsetHeight = progressEle.clientHeight;

function scrollFunction() {
    // PROGRESS BAR
    if (window.pageYOffset + intElemOffsetHeight >= posProgress) {
        progressEle.classList.add("progess-animate");
    } else {
        progressEle.classList.remove("progess-animate");
    }

    //   SHRINKING HEADER
    if
        ($(document).scrollTop() > 100) {
        $("header").addClass("shrink");
    }
    else {
        $("header").removeClass("shrink");
    }
};


// LIGHT BOX
lightbox.option({
    'fadeDuration': 0,
    'showImageNumberLabel': false
});

// VENO BOX
new VenoBox({
    selector: '.my-video-links',
});

// COUNT UP 
$('.num').countUp({
    'time': 1000
});

//TESTIMONIAL CAROUSEL
$('.testimonial__carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplaySpeed: 1000,
    margin: 20,
    nav: false,
    responsive: {
        0: {
            items: 2
        },
        768: {
            autoplay: false,
            items: 3
        },
        1200: {
            items: 1
        }
    }
});

// CLIENTS CAROUSEL
$('.clients__carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplaySpeed: 1000,
    margin: 20,
    nav: false,
    responsive: {
        0: {
            items: 2
        },
        768: {
            items: 3
        },
        1200: {
            items: 6
        }
    }
});