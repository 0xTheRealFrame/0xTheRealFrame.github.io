// |||||||||||||||||||||||||  LOADER  |||||||||||||||||||||//
gsap.to('.loader-text', 1, {
    width: '100%',
    onComplete: function () {
        gsap.to('.loader-content', 0, {
            display: 'none'
        })
        gsap.to('#loader', 1.2, {
            y: '-100%',
            ease: 'Expo.easeInOut',
            onComplete: function () {
                opacity()
                gsap.to('body', {
                    overflowY: 'scroll'
                })
            }
        })
    }
})
// |||||||||||||||||||||||||  LOADER  |||||||||||||||||||||//

//  |||||||||||||||||||||||||  MASONRY OF BLOG AND TESTIMONIAL |||||||||||||||||||||

$(window).load(function () {

    $('.testimonials-container').masonry({
        itemSelector: '.testimonial',
        isAnimated: true
    });


    $('.blogs-container').masonry({
        itemSelector: '.blog',
        isAnimated: true
    });

});

//  |||||||||||||||||||||||||  MASONRY OF BLOG AND TESTIMONIAL |||||||||||||||||||||




//  |||||||||||||||||||||||||  OPACITY TRANSITION ON SCROLL |||||||||||||||||||||

function opacity() {
    var elements = $(".opacity-scroll").toArray();
    $(window).scroll(function () {
        elements.forEach(function (item) {
            if ($(this).scrollTop() >= $(item).offset().top - window.innerHeight) {
                $(item).removeClass("opacity-scroll");
            }
        });
    });
    elements.forEach(function (item) {
        if ($(this).scrollTop() >= $(item).offset().top - window.innerHeight) {
            $(item).removeClass("opacity-scroll");
        }
    });
};
//  |||||||||||||||||||||||||  OPACITY TRANSITION ON SCROLL |||||||||||||||||||||




//  |||||||||||||||||||||||||  COUNTER FUNCTION ON SCROLL |||||||||||||||||||||  
$(function () {
    var elements = $(".counter").toArray();
    $(window).scroll(function () {
        elements.forEach(function (item) {
            if ($(this).scrollTop() >= $(item).offset().top - window.innerHeight) {
                count(item)
            }
        });
    });
    elements.forEach(function (item) {
        if ($(this).scrollTop() >= $(item).offset().top - window.innerHeight) {
            count(item)
        }
    });
});

//  |||||||||||||||||||||||||  COUNTER FUNCTION ON SCROLL |||||||||||||||||||||  




//  |||||||||||||||||||||||||  SWIPER JS |||||||||||||||||||||  

//  |||||||||||||||||||||||||  CASE STUDY HEIIGHT BASED ON LARGEST DIV |||||||||||||||||||||  

var projects_height = document.querySelectorAll('.project-container')
var projects_container = document.querySelector('.case-study-information')
var max_height;
projects_height.forEach(project => $(function () {
    max_height = Math.max(parseInt(project.offsetHeight + 50))
    projects_container.style.height = max_height + 'px';
}))

window.addEventListener('resize', function () {
    var projects_height = document.querySelectorAll('.project-container')
    var images_container = document.querySelector('.case-study-information')
    var max_height;
    projects_height.forEach(project => $(function () {
        max_height = Math.max(parseInt(project.offsetHeight + 50))
        images_container.style.height = max_height + 'px';
    }))
})

//  |||||||||||||||||||||||||  CASE STUDY HEIIGHT BASED ON LARGEST DIV |||||||||||||||||||||  



$(document).ready(function () {

    var parallaxSlider;
    var parallaxSliderOptions = {
        speed: 1500,
        parallax: true,
        loop: true,
        centeredSlides: true,
        mousewheel: true,
        on: {
            init: function () {
                let swiper = this;
                for (let i = 0; i < swiper.slides.length; i++) {
                    $(swiper.slides[i])
                        .find('.img-container')
                        .attr({
                            'data-swiper-parallax': 1 * swiper.width,
                        });
                }
                gsap.set('.project-container', {
                    opacity: 0
                })
                var current_slide = document.querySelector('.swiper-slide-active')
                var div = current_slide.getAttribute("data-text");
                gsap.to(div, 1, {
                    opacity: 1,
                    pointerEvents: 'all'
                })
            },
            resize: function () {
                this.update();
            },
            slideChangeTransitionEnd: function () {
                var current_slide = document.querySelector('.swiper-slide-active')
                var div = current_slide.getAttribute("data-text");
                gsap.to('.project-container', .1, {
                    opacity: 0,
                    pointerEvents: 'none',
                    onComplete: function () {
                        gsap.to(div, .5, {
                            opacity: 1,
                            pointerEvents: 'all'
                        })
                    }

                })
            },
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },
        observer: true,
        observeParents: true,
    };

    var parallax_slider = document.querySelector('.parallax-slider')

    if (parallax_slider) {
        parallaxSlider = new Swiper('.parallax-slider', parallaxSliderOptions);
        $(window).on('resize', function () {
            parallaxSlider.destroy();
            parallaxSlider = new Swiper('.parallax-slider', parallaxSliderOptions);
        });
    }

});



//  |||||||||||||||||||||||||  SWIPER JS |||||||||||||||||||||  




//  |||||||||||||||||||||||||  NAVIGATION ANIMATION |||||||||||||||||||||  

$(function () {


    var menubar = document.querySelector('.menubar')
    var navigation = document.querySelector('#navigation')
    var navigation_links = document.querySelectorAll('.navigation-link')

    gsap.set('.navigation-opacity', {
        opacity: 0
    })

    navigation_links.forEach(a => a.addEventListener('click', function () {
        if (menubar.classList.contains('menubar-close')) {
            menubar.classList.remove('menubar-close');
            gsap.to('.navigation-opacity', .5, {
                opacity: 0,
                onComplete: function () {
                    gsap.to(navigation, .5, {
                        transform: 'translateX(100%)'
                    })
                }
            })
            gsap.to('#navigation-fixed', .5, {
                backdropFilter: 'blur(10px)',
            })
        } else {
            gsap.to(navigation, .5, {
                transform: 'translateX(0%)',
                onComplete: function () {
                    gsap.to('.navigation-opacity', .5, {
                        opacity: 1
                    })
                }
            })
            gsap.to('#navigation-fixed', .5, {
                backdropFilter: 'blur(0px)',
            })
            menubar.classList.add('menubar-close');
        }
    }))
})

//  |||||||||||||||||||||||||  NAVIGATION ANIMATION |||||||||||||||||||||  




//  ||||||||||||||||||||||||| HIDE GRAPHICS WHEN NOT ON SCREEN |||||||||||||||||||||  


$(window).scroll(function () {
    if ($('#app')) {
        var scroll = $(window).scrollTop()
        if (scroll > window.innerHeight + 50) {
            $('#app').css('display', 'none')
        } else {
            $('#app').css('display', 'block')
        }
    }
});

//  ||||||||||||||||||||||||| HIDE GRAPHICS WHEN NOT ON SCREEN |||||||||||||||||||||  




//  ||||||||||||||||||||||||| COLLAPSE FIXED NAVIGATION ON SCROLL |||||||||||||||||||||  

$(window).scroll(function () {
    if ($('#navigation-fixed')) {
        var scroll = $(window).scrollTop()
        if (scroll > 50) {
            $('#navigation-fixed').css('padding', '5px')
            $('#navigation-fixed').css('border-bottom', '1px solid rgb(235,235,235,.2)')
        } else {
            $('#navigation-fixed').css('padding', '10px')
            $('#navigation-fixed').css('border-bottom', 'none')
        }
    }
});

//  ||||||||||||||||||||||||| COLLAPSE FIXED NAVIGATION ON SCROLL |||||||||||||||||||||  

//  ||||||||||||||||||||||||| RELOAD ON RESIZE |||||||||||||||||||||  

if (window.innerWidth < 676) {

} else {
    $(window).bind('resize', function (e) {
        this.location.reload(false);
    });
}

//  ||||||||||||||||||||||||| RELOAD ON RESIZE |||||||||||||||||||||  