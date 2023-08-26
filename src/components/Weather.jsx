import React from 'react';

class WeatherComponent extends React.Component {

  render() {
    const { weatherData } = this.props;

    return (
      <div>
       {weatherData.map((forcast, idx) => {
          return <p key={idx}>The weather for {forcast.description} {forcast.date} </p>
        })}
      </div>
    );
  }
}

export default WeatherComponent;