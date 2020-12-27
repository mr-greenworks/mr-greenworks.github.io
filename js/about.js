function open_concept(title, content) {
    var html;
    if ('' == document.getElementById(title).innerHTML) {
        html = content;
    } else {
        html = '';
    }

    document.getElementById(title).innerHTML = html;
}

window.onload = function() {
    var toyama_sign = new Vivus(
        'toyama-sign-animation',
        {
            start: 'manual',
            type: 'oneByOne',
            duration: 200,
            forceRender: false,
            animTimingFunction:Vivus.EASE
        },
        (obj) => {
            obj.el.classList.add('draw');
        }
    );

    var hirata_sign = new Vivus(
        'hirata-sign-animation',
        {
            start: 'manual',
            type: 'oneByOne',
            duration: 200,
            forceRender: false,
            animTimingFunction:Vivus.EASE
        },
        (obj) => {
            obj.el.classList.add('draw');
        }
    );

    grant_effect();
    sign_animation($('#toyama-sign'), toyama_sign);
    sign_animation($('#hirata-sign'), hirata_sign);
    $(window).scroll(function(){
        grant_effect();
        sign_animation($('#toyama-sign'), toyama_sign);
        sign_animation($('#hirata-sign'), hirata_sign);
    });

    function sign_animation(element, animation) {
        var elemTop = element.offset().top;
        var elemLeft = element.offset().left;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
    
        if (scroll > elemTop - windowHeight && 0 < elemLeft) {
            element.css('opacity', 1);
            animation.play();
        }
    }

    function grant_effect() {
        $('.effect-fade').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
      
            if (scroll > elemPos - windowHeight) {
                if ($(this).hasClass('message') || $(this).hasClass('profile')) {
                    $(this).addClass('effect-scroll09');
                } else {
                    $(this).addClass('effect-scroll1');
                }  
            }
        })
    }
}