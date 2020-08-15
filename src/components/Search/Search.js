import React, { useState } from "react";
import './Search.scss'

const Search = (search) => {
  const [searchVal, setSearchVal] = useState(""); 

  const handleSearchInputChanges = (e) => {
    setSearchVal(e.target.value);
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    search.search(searchVal);
  }

  return (
    <form className="form-inline search">
      <div className="form-group mr-3 mb-2">
        <input 
          type="text" 
          className="form-control" 
          id="searchText" 
          value={searchVal}
          onChange={handleSearchInputChanges}
          placeholder="pokemon"
        />
      </div>
      <button type="submit" className="btn btn-outline-primary mb-2" onClick={callSearchFunction}>Search</button>
    </form>    
  )
}

export default Search;