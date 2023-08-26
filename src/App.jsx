
import React from 'react';
import './App.css'
import Explorer from './components/Explorer.jsx';
import Header from './components/Header';
import Footer from './components/Footer';
import axios from 'axios';
import WeatherComponent from './components/Weather';
import MovieComponent from './components/Movie';
// import Map from './components/Map.jsx'; 

// Vites way of loading files from a .env file -> requires "VITE_" to be used at the beginning of your key
const API_KEY = import.meta.env.VITE_city_explorer_api_key;
const serverUrl = import.meta.env.VITE_server_url;

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      location: null,
      weather: null,
      movies: null,
      error: null,
    }
  }

  setSearchQuery = (query) => {
    this.setState({ searchQuery: query });
  }

  handleForm = (e) => {
    console.log('Form Submitted');
    e.preventDefault();
    console.log(API_KEY);

      axios.get(`https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${this.state.searchQuery}&format=json`)
        .then(response => {
        console.log('SUCCESS: ', response.data);
        this.setState({ location: response.data[0] });
        const {lat,lon} = response.data[0];
        // const {searchQuery} = response.data[0];

      axios.get(serverUrl+`/weather?lat=${lat}&lon=${lon}`)
        .then(response => {
          console.log('WE FOUND THE WEATHER', response.data)
          this.setState({ weatherData: response.data });

      axios.get(serverUrl+`/movie?query=${location}`)
          .then(response => {
            console.log('MOVIES DATA', response.data);
            this.setState({ movie: response.data })
          })

        })
      }).catch(error => {
        console.log('Something Went Wrong!:', error);
      });
  }

  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  }

  render() {
    // no JS statement can go here
    // only JS expression are allowed in the return.
    console.log('CITY EXPLORER', this.state);
    return (
      <>
          <Header />
          <form onSubmit={this.handleForm}>
            <input placeholder="Enter City Name" type="text" name="city" onChange={this.handleChange} />
            <button type='submit'>
              Search
            </button>
          </form>
          <div>
            {this.state.weatherData && <WeatherComponent weatherData={this.state.weatherData} />}

            <Explorer location={this.state.location} query={this.state.searchQuery} />

            {this.state.movieData && <MovieComponent movieData={this.state.movieData} />}

            <p>Latitude: {this.state.location ? this.state.location.lat: null}</p>
            <p>Longitude: {this.state.location ? this.state.location.lon: null}</p>
          </div>
      </>
    )
  }
}

export default App