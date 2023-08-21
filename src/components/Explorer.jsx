import React from 'react';

class Explorer extends React.Component {

  render() {

    let { location } = this.props;

    return (
      <main>
        <section>
          <h2>Maps</h2>
          <p>{this.props.query}</p>
          <p>City: {location ? location.display_name : 'No location set'}</p>
          <img src={location ? location.icon : "https://placehold.co/600x400" }alt="placeholder map image" />
        </section>
      </main>
    )
  }
}

export const test = 'banana';

export default Explorer;