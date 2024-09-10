const apikey = "e250d8bf4e67c9fc9d1352a67b1dc7b5";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiurl + `&q=${city}` + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = 'block';
        document.querySelector(".weather").style.display = 'none';
    }
    else{
        document.querySelector(".error").style.display = 'none';
    }
    
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML =data.main.humidity+" %";
    document.querySelector(".Wind").innerHTML = Math.round(data.wind.speed)+" km/h";

    if(data.weather[0].main == 'Clear'){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == 'Mist','haze'){
        weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = 'flex';
    
}

searchBtn.addEventListener("click", ()=>{
    var city = searchBox.value;
    checkWeather(city);
})
