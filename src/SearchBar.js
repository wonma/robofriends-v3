import React from 'react';
import './SearchBar.css';

const SearchBar = ({searchInput, onInputChange}) => {
    return (
        <div className="tc searchBar">
            <input 
                type="search" 
                placeholder="Type the robot's name."
                value={searchInput}
                onChange={onInputChange}
                className="input-reset ba b--black-20 pa2 mb2 dib mb4"
            />
        </div>
    );
}

export default SearchBar;