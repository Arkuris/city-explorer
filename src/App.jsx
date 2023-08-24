
import React from 'react';
import './App.css'
import Explorer from './components/Explorer.jsx';
import axios from 'axios';
// import Map from './components/Map.jsx'; 

// Vites way of loading files from a .env file -> requires "VITE_" to be used at the beginning of your key
const API_KEY = import.meta.env.VITE_city_explorer_api_key;
const serverUrl = import.meta.env.VITE_city_explorer_server_url;

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      searchQuery: '',
      location: null,
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
        axios.get(serverUrl+`/weather?lat=${lat}&lon=${lon}`)
      }).catch(error => {
        console.log('UGH OOOOH:', error);
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
        <header>
          <h1>Welcome to City Explorer!</h1>
        </header>
          <form onSubmit={this.handleForm}>
            <input placeholder="Enter City Name" type="text" name="city" onChange={this.handleChange} />
            <button type='submit'>
              Search
            </button>
          </form>
          <Explorer location={this.state.location} query={this.state.searchQuery} />
          <p>Latitude: {this.state.location ? this.state.location.lat: null}</p>
          <p>Longitude: {this.state.location ? this.state.location.lon: null}</p>
      </>
    )
  }
}

export default App