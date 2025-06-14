const btn=document.getElementById('getWeather');
const cityInput=document.getElementById('city');
const Cityname=document.getElementById('cityname');
const temperature=document.getElementById('temperature');
const description=document.getElementById('description');


btn.addEventListener("click",()=>{
    const city=cityInput.value;

    if(city){
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`;

        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            if(data.cod === '404'){
                alert('City not found!');
            }else{
                Cityname.textContent=data.name;
                temperature.textContent=`${data.main.temp}°C`;
                description.textContent=data.weather[0].description;
            }
        })
        .catch(error=>{
            alert("Error fetching data!");
        });
    }else{
        alert("please enter a city!");
    }
    
})