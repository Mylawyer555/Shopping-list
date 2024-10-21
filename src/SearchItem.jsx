import React from 'react'

const SearchItem = ({searchItem, setSearchItem}) => {
  return (
      <form  className='searchbar' onSubmit={(e) => preventDefault()}>
          <label htmlFor="search"></label>
          <input
              id='search'
              type="text"
              placeholder='Search items'
              role='searchbox'
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
              

          />
    </form>
  )
}

export default SearchItem