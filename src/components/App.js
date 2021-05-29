import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';

class App extends React.Component {
  state = { video: [] };

  onSearchSubmit = async (term) => {
    const res = await youtube.get('/search', {
      params: { q: term },
    });
    console.log(res);
    this.setState({ video: res.data.results });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
