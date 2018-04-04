import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Titles from "./components/Titles";
import Forms from "./components/Forms";
import Weather from "./components/Weather";
const API_KEY = "061c437a3cd3f8a85c92c9f48c96206e";

class App extends Component {

    state = {
      temperature: undefined,
      city: undefined,
      humidity: undefined,
      desc: undefined,
      error: undefined
    }

    getWeather =  async (e) => {
      e.preventDefault();
      const city = e.target.elements.city.value;
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=061c437a3cd3f8a85c92c9f48c96206e&units=metric`);
      const data = await api_call.json();
      console.log(data);
      // this.setState({
      //   temperature: data.list[0].main.temp,
      //   city: data.name,
      //   humidity: data.list[0].main.humidity,
      //   desc: data.list[0].weather[0].description,
      //   error: ""
      // });
      if(city) {
        console.log(data);
        this.setState({
          temperature: data.list[0].main.temp,
          city: data.name,
          humidity: data.list[0].main.humidity,
          desc: data.list[0].weather[0].description,
          error: ""
        });
      }
        else {
          this.setState({
            temperature: undefined,
            city: undefined,
            humidity: undefined,
            desc: undefined,
            error: "Please enter value"
          });
        }


    }

  render() {
    return (
      <div className="wrapper">
       <div className="main">
        <div className="container">
          <div className="row">

            <div className="col-xs-5 title-container">
              <Titles/>
            </div>

            <div className="col-xs-6 form-container">
              <Forms getWeather={this.getWeather}/>
              <Weather
                temperature= {this.state.temperature}
                city= {this.state.city}
                humidity= {this.state.humidity}
                desc= {this.state.desc}
                error= {this.state.error}
              />
            </div>

            </div>
          </div>
         </div>
        </div>
    );
  }
}

export default App;
