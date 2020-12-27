function open_news(title, content) {
    var html;
    if ('' == document.getElementById(title).innerHTML) {
        html = content;
    } else {
        html = '';
    }

    document.getElementById(title).innerHTML = html;
}

window.onload = function () {
    var html = '';

    articles.forEach(article => {
        html += `
            <button class='vex mem-foam news-item effect-fade left' onclick='open_news(
                "${article.title}",
                "${article.content}"
            )' ontouchstart=''>
                <h4>${article.title}</h4>
                <p>${article.date}<p>
                <div id='${article.title}' class='news'></div>
            </button>
        `
    })

    document.getElementById('stage').innerHTML = html;

    grant_effect();
};