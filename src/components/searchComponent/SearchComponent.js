import React from 'react'
import "./SearchComponent.scss"
const SearchComponent = ({searchTerm, setSearchTerm, placeholder="Search by category"}) => {
  console.log(searchTerm)
  return (<>
    <input 
    className="searchBar" 
    placeholder={placeholder}
    value={searchTerm} 
    onChange={(e) => setSearchTerm(e.target.value)}
/>

</>
  )
}

export default SearchComponent