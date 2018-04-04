import React from "react";

class Forms extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="city">

        </input>
        
        <button>Get Weather</button>
      </form>
    );
  }
}

export default Forms;
