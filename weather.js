const apiKey = "a91ecd159da37751a76456a6925338ab";

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;


// Отправка данных паользователя на сервер и получаем результат от сервера

const searchInput = document.querySelector('.search-container input')
const searchButton = document.querySelector('.search-container button')



async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}` );
    const data = await response.json();
    console.log(data, "data");

    document.querySelector('.weather__city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "&#8451";

    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";

    document.querySelector('.wind').innerHTML = data.wind.speed + "км/ч";
}

searchButton.addEventListener('click', function() {
    checkWeather(searchInput.value)
    searchInput.value = "";
})
