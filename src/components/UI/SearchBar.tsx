import React from 'react'
import "./Search.css"
const SearchBar = () => {
  return (
    <div className='searchbar'>
      <input type="text" placeholder='Where To ?' />
      <img src="/assets/search.svg" />
    </div>
  )
}

export default SearchBar
