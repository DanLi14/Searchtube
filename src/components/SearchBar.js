import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInput = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    // Callback prop from parent component required.
  };

  render() {
    return (
      <div className="ui segment">
        <h1>SearchTube</h1>
        <form className="ui search" onSubmit={this.onFormSubmit}>
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
