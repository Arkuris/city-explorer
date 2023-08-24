import React from 'react';

const API_KEY = import.meta.env.VITE_city_explorer_api_key;

class Explorer extends React.Component {

  render() {

    let { location } = this.props;
    let lat = location ? location.lat : '';
    let lon = location ? location.lon : '';
    const staticMapUrl = `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${lat},${lon}&zoom=10`;
    return (
      <main>
        <section>
          <h2>Maps</h2>
          <p>{this.props.query}</p>
          <p>City: {location ? location.display_name : 'No location set'}</p>
          <img src={location ? staticMapUrl : "" }alt="" />
        </section>
      </main>
    )
  }
}

export const test = '';

export default Explorer;