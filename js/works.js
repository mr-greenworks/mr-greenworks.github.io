function open_work(category, title, img_cnt) {
    var html = `
        <button onclick="location.href = '../html/works.html'">
            <img src='../img/header.png' class='header-image'>
        </button>

        <div id="carousel-work" class="carousel slide carousel-fade" data-interval='false'>
            <ol class="carousel-indicators">
                <li data-target="#carousel-work" data-slide-to="0" class="active"></li>
    `;

    for (var i = 1; i < img_cnt; i++) {
        html += '<li data-target="#carousel-work" data-slide-to="${i}"></li>';
    }

    html += `
        </ol>
            <div class="carousel-inner">
                <div class="carousel-item pad active">
                    <img src='../works/${category}/${title}/0.jpg' class='carousel-image'>
                </div>
    `;

    for (var i = 1; i < img_cnt; i++) {
        html += `
                <div class="carousel-item pad">
                    <img src='../works/${category}/${title}/${i}.jpg' class='carousel-image'>
                </div>
        `;
    }
    
    html += `
            </div>
        </div>
    `;

    document.body.innerHTML = html;
}

function open_category(category) {
    var html = '';

    works[category].forEach(work => {
        html += `
            <div class='d-flex align-items-center work-item'>
                <img src='../works/${category}/${work.title}/0.jpg' class='work-image effect-fade bottom'>
                <button class='row align-items-center work-title effect-fade left' onclick='open_work("${category}", "${work.title}", ${work.img_cnt})'>
                    <div class='col'>
                        <h3>${work.title}</h3>
                        <p>${work.year}年施工</p>
                    </div>
                    <div class='col-3'>
                        <img src='../img/right_arrow.png' class='icon'>
                    </div>
                </button>
            </div>
        `;
    });

    document.getElementById('stage').innerHTML = html;
}