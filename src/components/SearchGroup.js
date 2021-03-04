import SearchFields from "./SearchFields";
import Filter from './Filter'

function SearchGroup() { 
  return (         
    <div className="search-group-container">
      <Filter />
     <SearchFields />
    </div>
  )
}

export default SearchGroup