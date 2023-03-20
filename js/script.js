var link = document.querySelectorAll('.nav-item .nav-link')


for (var i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function (e) {
        var curent = e.target.text
        Meal(curent)
        console.log(curent);
    })
}

var Data = []
function Meal(meal) {
    var http = new XMLHttpRequest()
    http.open('GET', `https://forkify-api.herokuapp.com/api/search?q=${meal}`)
    http.send()
    http.addEventListener('readystatechange', function () {

        if (http.readyState == 4 && http.status == 200) {
            var info = JSON.parse(http.response).recipes;
            Data = info
            display()
            console.log(info);
        }

    })
}

Meal('pizza')

function display() {
    var cartona = ``
    for (var i = 0; i < Data.length; i++) {
        cartona +=
            `
            <div class="col-md-3 shadow  my-4 text-center">
                 <img src="${Data[i].image_url}" class="w-100" alt="">
                <h4>${Data[i].title}</h4>
                <a class="btn btn-outline-success" target="_blank" href="${Data[i].source_url}"> Source</a>

            </div>
`
    }
    document.getElementById('Data').innerHTML = cartona
}
