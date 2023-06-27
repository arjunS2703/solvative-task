import React, { useState, useRef } from 'react';
import './SearchBox.css';

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  const handleKeyboardShortcut = (event) => {
    if (event.ctrlKey && event.key === '/') {
      event.preventDefault();
      inputRef.current.focus();
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Search Places</h1>
      <div className="searchBoxContainer">
        <form onSubmit={handleFormSubmit}>
          <div className="inputContainer">
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Enter a search term"
              className="searchBox"
              ref={inputRef}
              onKeyDown={handleKeyboardShortcut}
            />
            <button type="submit" className="searchButton">
              <span className="buttonText">ctrl + /</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
