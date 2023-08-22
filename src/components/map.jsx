import React from "react";

class Map extends React.Component {
  render() {
    const { location, apiKey } = this.props; // Pass the location and API key as props

    if (!location) {
      return null; // If location is not available, return null (or you can show an error message)
    }

    const staticMapUrl = `https://maps.locationiq.com/v3/staticmap?key=${apiKey}&center=${location.lat},${location.lon}&zoom=9`;

    return (
      <main>
        <section>
          <h2>Map</h2>
          <img src={staticMapUrl} alt="Map" />
        </section>
      </main>
    );
  }
}

export default Map;