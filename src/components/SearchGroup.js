import SearchFields from "./SearchFields";
import FilterRange from './FilterRange'
import Sort from "./Sort";

function SearchGroup() { 
  return (         
    <div className="search-group-container">
      <FilterRange />
      <Sort /> 
      <SearchFields />
    </div>
  )
}

export default SearchGroup