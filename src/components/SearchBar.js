import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  render() {
    return (
      <div className="ui segment">
        <h1>SearchTube</h1>
        <form className="ui search">
          <div className="ui icon input">
            <input
              className="prompt"
              type="text"
              placeholder="Search..."
              value={this.state.term}
              onChange={this.onInput}
            ></input>
            <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
