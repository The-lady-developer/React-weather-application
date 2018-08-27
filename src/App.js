import React from "react";
import Title from "./Components/Title";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY = "22def18b6105d1f58cc35c1b51c23eb4";

class App extends React.Component {
  //to display data on screen
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humdity: undefined,
    description: undefined,
    error: undefined
  }
  //API Call
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
   
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
  const data = await api_call.json();
  console.log(data);
  //updating the value 
  this.setState({
    temperature:data.main.temp,
    city: data.name,
    country: data.sys.country,
    humidity:data.main.humidity,
    description: data.weather[0].description,
    error: ""

  });
  }
  render(){
    return(
      <div>
       <Title/>
       <Form getWeather={this.getWeather}/>
       <Weather temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}
       
       
       
       />
      </div>
    );
  }
}

export default App;