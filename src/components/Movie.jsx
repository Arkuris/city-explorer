import React from 'react';

class MovieComponent extends React.Component {


  render() {
    const { movieData } = this.props;

    return (
      <div>
          {movieData.map((movie, idx) => {
            return <div key={idx}>
                  <img src={movie.image_url} alt="movie poster" />
                  <p>{movie.title}</p>
                  <p>{movie.overview}</p>
                  <p>{movie.averageVotes}</p>
                  <p>{movie.totalVotes}</p>
                  <p>{movie.popularity}</p>
                  <p>{movie.released_on}</p>
            </div>
          })}
      </div>
    );
  }
}

export default MovieComponent;