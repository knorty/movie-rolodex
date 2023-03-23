import React, { Component } from 'react';
import qs from 'qs';
import axios from 'axios';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      defaultMovies: [],
      searchField: ''
    }
  }

  componentDidMount() {
    const query = qs.stringify({
      api_key: 'ffa9544f9617b768fcb7fde474d40490',
      language: 'en-US',
      page: 1,
      include_adult: false
    });
    axios.get(`https://api.themoviedb.org/3/movie/popular?${query}`)
      .then(response => this.setState({ movies: response.data.results, defaultMovies: response.data.results }))
      .then(console.log(this.state.movies))
  }

  getType = type => {
    const query = qs.stringify({
      api_key: 'ffa9544f9617b768fcb7fde474d40490',
      language: 'en-US',
      page: 1,
      include_adult: false
    });

    axios.get(`https://api.themoviedb.org/3/movie/${type}?${query}`)
      .then(response => this.setState({ movies: response.data.results }))
  }

  handleSearch = e => {
    this.setState({ searchField: e });
    const query = qs.stringify({
      api_key: 'ffa9544f9617b768fcb7fde474d40490',
      language: 'en-US',
      page: 1,
      include_adult: false,
      query: e
    });
    axios.get(`https://api.themoviedb.org/3/search/movie?${query}`)
      .then(response => this.setState({ movies: response.data.results }))
  }
  render() {
    return (
      <div className="App">
        <h1>Movie Rolodex</h1>
        <SearchBox handleSearch={this.handleSearch} placeholder="search movies" />
        <button onClick={() => this.getType('top_rated')}>Top Rated</button>
        <button onClick={() => this.getType('upcoming')}>Upcoming</button>
        <button onClick={() => this.getType('now_playing')}>Now Playing</button>
        <button onClick={() => this.getType('popular')}>Popular</button>
        {this.state.searchField === '' ? <CardList movies={this.state.defaultMovies} /> : <CardList movies={this.state.movies} />}
      </div>
    )
  }
}

export default App;
