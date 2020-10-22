import React from "react";

import './App.css';

import 'weather-icons/css/weather-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from "./app_component/weather.component";
import Form from "./app_component/form.component"

const API_key = "64bcacbbd7ced9a4d37d2eb973593989";

// Main App Component
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celcius: undefined,
      temp_min: undefined,
      temp_max: undefined,
      description: "",
      error: false
    };

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sprinkle",
      Rain: "wi-rain",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-cloudy"
    }
  }

  //Convert Fahrenheit to Celcius
  calCelcius(temp){
    let cell = Math.floor(temp - 273.15);
    return cell
  }
  //Choose the right weather Icon depending on the weather
  get_WeatherIcon(icons, rangeId){
    switch (true) {
      case rangeId >= 200 && rangeId <= 232: this.setState({icon: this.weatherIcon.Thunderstorm}); 
      break;
      case rangeId >= 300 && rangeId <= 321: this.setState({icon: this.weatherIcon.Drizzle}); 
      break;
      case rangeId >= 500 && rangeId <= 531: this.setState({icon: this.weatherIcon.Rain}); 
      break;
      case rangeId >= 600 && rangeId <= 622: this.setState({icon: this.weatherIcon.Snow}); 
      break;
      case rangeId >= 700 && rangeId <= 781: this.setState({icon: this.weatherIcon.Atmosphere}); 
      break;
      case rangeId === 800: this.setState({icon: this.weatherIcon.Clear}); 
      break;
      case rangeId >= 801 && rangeId <= 804: this.setState({icon: this.weatherIcon.Clouds}); 
      break;
      default: this.setState({icon: this.weatherIcon.Clouds}); 
    }
  }

  //Get Weather from the API 
  getWeather = async(event) => {

    event.preventDefault();

    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;

    if(city && country){
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`)

      const response = await api_call.json();
      
      console.log(response);
  
      this.setState({
        city: `${response.name},${response.sys.country}`,
        celcius: this.calCelcius(response.main.temp),
        temp_min: this.calCelcius(response.main.temp_min),
        temp_max: this.calCelcius(response.main.temp_max),
        description: response.weather[0].description,
        error: false
      });
  
      this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
    } else{
      this.setState({error: true})
    }

  };

  // Render the elements on screen using the JSX Weather component from weather.component.jsx
  render(){
    return(
      <div className="App">
      <Form 
        loadweather={this.getWeather}
        error={this.state.error}
      />
      <Weather 
        city={this.state.city} 
        country={this.state.country} 
        temp_celcius={this.state.celcius} 
        temp_min={this.state.temp_min} 
        temp_max={this.state.temp_max}
        description={this.state.description}
        weatherIcon={this.state.icon}
      />
    </div>
    )
  }
} 

export default App;
