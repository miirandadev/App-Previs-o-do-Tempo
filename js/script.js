const key = "daa5ba82e5cce5a20cb63c7c6632d4fc"

function insert (dados) {
    console.log(dados)
    document.querySelector(".city-name").innerHTML = `Tempo em ${dados.name}`
    document.querySelector(".temperature").innerHTML = `${Math.floor(dados.main.temp)}°C`
    document.querySelector(".text-forecast").innerHTML = dados.weather[0].description
    document.querySelector(".humidity").innerHTML = `Umidade: ${dados.main.humidity}%`
    document.querySelector(".icon-img").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function searchCity(city) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response =>response.json())
    insert (dados)
}

function clickButton(){
    const city = document.querySelector(".city").value
    searchCity(city)
}