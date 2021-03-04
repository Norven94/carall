import { useContext } from "react"
import { FilterContext } from "../contexts/FilterContext" 

function SearchFields() {
  const { search } = useContext(FilterContext);
  const handleSearch = (e) => {
    search(e.target.value)
  }


  return (
    <div className="search-container">
    <div>
      <input onChange={handleSearch} type="text" placeholder="search" name="search" />
    </div>
   
  </div>
  )
}

export default SearchFields
