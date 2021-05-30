const city = `Cuiaba`;
const api_key = `e8a288bbd74931cdd54fc8e3b880e825`;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

https://api.openweathermap.org/data/2.5/weather?q=Cuiaba&appid=e8a288bbd74931cdd54fc8e3b880e825

atuTemp()

function atuTemp() {
    fetch (url)
    .then( response => {return response.json()})
    .then( jsonbody => {
        const tempArredondada = Math.round( jsonbody.main.temp - 273.15);
        
        console.log(jsonbody.main.temp - 273.15)
        document.querySelector(`#temperatura`).innerHTML = `${tempArredondada}°C`;
    })
}

setInterval (atuTemp, 1000)