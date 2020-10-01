import React, { Component } from 'react';
import axios from 'axios';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      searchField: ''
    }
  }

  componentDidMount() {
    axios.post('http://localhost:3001/retrieve', { type: 'popular' })
      .then(response => this.setState({ movies: response.data.results }))
  }

  getType = query => {
    axios.post('http://localhost:3001/retrieve', { type: query })
      .then(response => this.setState({ movies: response.data.results }))
  }

  handleSearch = e => {
    axios.post('http://localhost:3001/search-movies', { e })
      .then(response => this.setState({ movies: response.data.results }))
  }
  render() {
    return (
      <div className="App">
        <SearchBox handleSearch={this.handleSearch} placeholder="search movies" />
        <button onClick={() => this.getType('top_rated')}>Top Rated</button>
        <button onClick={() => this.getType('upcoming')}>Upcoming</button>
        <button onClick={() => this.getType('now_playing')}>Now Playing</button>
        <button onClick={() => this.getType('popular')}>Popular</button>
        <CardList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
