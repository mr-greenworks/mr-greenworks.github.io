window.onload = async function() {
    grant_effect();
    
    $(window).scroll(function(){
      grant_effect();
    });
  }

function grant_effect() {
    $('.effect-fade').each(function () {
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
  
        if (scroll > elemPos - windowHeight) {
            if ($(this).hasClass('menu-title') || $(this).hasClass('work-title')) {
                $(this).addClass('effect-scroll09');
            } else {
                $(this).addClass('effect-scroll1');
            }
        }
    })
  }

function open_work(category, title) {
    var html = `
        <div style="height: 60px;"></div>
        <h4 class='caption effect-fade left' style='text-align: center;'><u>${works[category][title].heading}</u></h4>
        <div style="height: 30px;"></div>
    `;

    for (var i = 0; i < works[category][title].img_cnt; i++) {
        html += `
            <div class='article-image-cover effect-fade bottom'><img class='article-image pad' src="../works/${category}/${title}/${i}.jpg"></div>
            <div class='caption effect-fade left'>
                <p>${works[category][title].contents[i]}</p>
            </div>
        `;
    }

    document.getElementById('stage').innerHTML = html;
}

function open_category(category) {
    var html = '';

    for (let title in works[category]) {
        html += `
            <div class='d-flex align-items-center work-item'>
                <img src='../works/${category}/${title}/0.jpg' class='work-image effect-fade bottom'>
                <button class='row align-items-center work-title effect-fade left' onclick='open_work("${category}", "${title}"); grant_effect();'>
                    <div class='col'>
                        <h5>${title}</h5>
                        <p>${works[category][title].year}年施工</p>
                    </div>
                    <div class='col-3 col-md-2'>
                        <img src='../img/right_arrow.jpg' class='icon'>
                    </div>
                </button>
            </div>
        `;
    }

    document.getElementById('stage').innerHTML = html;
}