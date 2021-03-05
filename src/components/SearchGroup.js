import SearchFields from "./SearchFields";
import FilterRange from './FilterRange'

function SearchGroup() { 
  return (         
    <div className="search-group-container">
      <FilterRange />
      <SearchFields />
    </div>
  )
}

export default SearchGroup