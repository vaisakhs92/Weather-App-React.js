import React from "react";

class Weather extends React.Component {
  render() {
    return (

        <div className="weather__info">
        {
          this.props.temperature &&
          <p className="weather__key"> Temperature: <span className="weather__value">
          {this.props.temperature}</span>
          </p>
        }

        {
          this.props.humidity &&
          <p className="weather__key"> humidity: <span className="weather__value">
          {this.props.humidity}</span>
          </p>
        }
        {
          this.props.desc &&
          <p className="weather__key"> Condition:<span className="weather__value">
          {this.props.desc}</span>
          </p>
        }
        {
          this.props.error &&
           <p className="weather__error"> {this.props.error}</p>
        }
        </div>

    );
  }
};

export default Weather;
