import React, { useState } from 'react';

const SearchBar = ({ onSearchSubmit }) => {
  const [term, setTerm] = useState('');

  const onInput = (e) => {
    setTerm(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(term);
  };

  return (
    <div className="ui segment">
      <h1>SearchTube</h1>
      <form className="ui search" onSubmit={onFormSubmit}>
        <div className="ui icon input">
          <input className="prompt" type="text" placeholder="Search..." value={term} onChange={onInput}></input>
          <i className="search icon"></i>
        </div>
        <div className="results"></div>
      </form>
    </div>
  );
};

export default SearchBar;
