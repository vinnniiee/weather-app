export const getWeatherInfo= async (city)=>{

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=145673b1519161888db4ab06e306bdcb`)
    const data = await response.json();
    // console.log(`temp: ${(data.main.temp-273.15).toFixed(0)} , humidity: ${data.main.humidity}% , wind speed: ${data.wind.speed} Km/Hr ` );
    return { weather:{
        temp:{
            celcius:(data.main.temp-273).toFixed(0),
            farenheit: (((data.main.temp-273)*1.8)+32).toFixed(0)
        },
        humidity:data.main.humidity,
        wind:{
            kmph:data.wind.speed,
            mph: (data.wind.speed/1.609).toFixed(2)
        }
    } }
    }catch(e){
        console.log(e);
        // return {error: "Could not fetch data!"};
    }
}