function open_news(title) {
    var html;
    if ('' == document.getElementById(title).innerHTML) {
        html = articles[title].content;
    } else {
        html = '';
    }

    document.getElementById(title).innerHTML = html;
}

window.onload = function () {
    var html = '';

    for (let title in articles) {
        html += `
            <button class='vex mem-foam news-item effect-fade left' onclick='open_news(
                "${title}",
            )' ontouchstart=''>
                <h4>${title}</h4>
                <p>${articles[title].date}<p>
                <div id='${title}' class='news'></div>
            </button>
        `
    }

    document.getElementById('stage').innerHTML = html;

    grant_effect();
};