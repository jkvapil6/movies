import React, { useState } from 'react'
import { Link } from 'react-router-dom'

///
/// Search Form Component 
///
const SearchForm = () => {

  const [searchedTxt, setSearchedTxt] = useState("")

  const handleInputChange = (e) => {
    setSearchedTxt(e.target.value)
  }
  
  /////////////////////////////////////////////

  return (
    <form className="form-inline my-2 my-lg-0">
      <input 
        className="form-control mr-sm-2"
        style={{height: 42}} 
        type="text" 
        placeholder="Search" 
        value={searchedTxt} 
        onChange={handleInputChange} 
      />
      <Link to={`/search/${ searchedTxt }`}>
        <button 
          className="btn btn-secondary my-2 my-sm-0" 
          type="submit"
        >Search</button>
      </Link>
    </form>
  )
}

export default SearchForm
