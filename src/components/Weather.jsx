import React from 'react';


class WeatherComponent extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     weatherData: null,
  //   };
  // }


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