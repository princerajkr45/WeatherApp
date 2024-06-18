


let City = document.querySelector(".city");
let SearchBtn = document.querySelector(".searchBtn");
let Icon = document.querySelector(".icon")

SearchBtn.addEventListener("click", () => {
    getWeather(City.value);
    console.log(City.value)
})

const getWeather = async (city) => {
    // let city="bengaluru";
    let apiKey = "71877277b19dbe63ca4e45c18131b863";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    let res = await fetch(url)

    if (res.status == 404) {
        document.querySelector(".error").style.display = "block";
    } else {
        let data = await res.json();
        console.log(data)
        // console.log(data.main.humidity)
        // console.log(data.main.temp)
        // console.log(data.name)
        // console.log(data.wind.speed)

        if (data.weather[0].main == "Rain") {
            Icon.src = "./images/rain.png";
        }
        else if (data.weather[0].main == "Clouds") {
            Icon.src = "./images/sunny.png";
        }
        else if (data.weather[0].main == "Haze") {
            Icon.src = "./images/haze.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            Icon.src = "./images/drizzle.png"
        }
        else {
            Icon.src = "./images/cloud.png"
        }

        document.querySelector(".temperature").innerHTML = Math.floor(data.main.temp) + "°C";
        document.querySelector(".location").innerHTML = data.name;
        document.querySelector(".humi").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        document.querySelector(".error").style.display = "none";
    }

}

