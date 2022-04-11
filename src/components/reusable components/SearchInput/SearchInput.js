import React from 'react'
import { IoSearch } from "react-icons/io5";
import './SearchInput.scss'

const SearchInput = ({search, setSearch}) => {
  return (
      <div className='search__row'>
          <IoSearch size={28} style={{fontWeight: 500, opacity: .7, padding: 10}}/>
          <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
           className='search__input' 
           placeholder='search'/>
      </div>
  )
}

export default SearchInput  