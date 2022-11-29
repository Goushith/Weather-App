const getWeatherData = (city) => {

    //HINT: Use template literals to create a url with input and an API key
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '4c33f6631amsh789182035304e6fp1522bajsn3df63fd1f3e1',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
      }
    };
  
  
    return fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
      .then(response => response.json())
      .then(data => data)
      .catch(err => console.error(err));
  
    //CODE GOES HERE
  }
  
  /**
   * Retrieve city input and get the weather data
   * HINT: Use the promise returned from getWeatherData()
   */
  const searchCity = async () => {
    const city = document.getElementById('city-input').value;
    console.log(city)
    const data = await getWeatherData(city)
    showWeatherData(data)
    // CODE GOES HERE
  
  }
  
  /**
   * Show the weather data in HTML
   * HINT: make sure to console log the weatherData to see how the data looks like
   */
  const showWeatherData = (weatherData) => {
    //CODE GOES HERE
    console.log(weatherData, 'cookiee')
    console.log(weatherData.main.temp)
    document.getElementById('temp').innerText = weatherData.main.temp
    document.getElementById('city-name').innerText = weatherData.name
    document.getElementById('weather-type').innerText = weatherData.weather[0].main
    document.getElementById('min-temp').innerText = weatherData.main.temp_min
    document.getElementById('max-temp').innerText = weatherData.main.temp_max
  }