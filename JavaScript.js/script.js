const apikey = "781eaf963228d53950ae1d3040161ace";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
    document.querySelector(".wind").innerHTML= data.wind.speed + "km/h";


    if(data.weather[0].main == "Clouds"){
        weatherIcon.src ="cloudy-2.png";
    } 
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src ="sun.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src ="rainy-day-2.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src ="weather.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src ="cloudy-2.png";
    }

    document.querySelector(".weather").style.display ="block";
    document.querySelector(".error").style.display = "none";

    }

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
