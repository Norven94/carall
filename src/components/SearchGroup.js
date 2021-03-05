import SearchFields from "./SearchFields";
import Filter from './filter'

function SearchGroup() { 
  return (         
    <div className="search-group-container">
      <Filter />
     <SearchFields />
    </div>
  )
}

export default SearchGroup