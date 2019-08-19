import React from 'react';
import './search-box.styles.css'

export const SearchBox = ({ handleChange, placeholder }) => {
  return (
    <div className='search'>
      <input
        className='input'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}></input>
    </div>
  )
}