function success (data,status) {
    console.log(data);
console.log(status);
}
$.get('https://www.boredapi.com//activity?type=recreational', success);

function success(data) {
    $('body').append('<h1>' + data.activity + '</h1>');
}

$.get('https://www.boredapi.com/api/activity', success);

/*function success(data, status) {
    let api = data.entries[0].API;
    let description = data.entries[0].Description;
    let link = data.entries[0].Link;

    let titre = document.querySelector('#titre');
    titre.insertAdjacentHTML('afterend', `<div>
                <h3>${api}</h3>
                <p>${description}</p>
                <a href='${link}' target='blank'>Lien</a>
            </div>`)
}

$.get('https://www.boredapi.com//activity?type=recreational', success)*/