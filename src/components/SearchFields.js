import { useContext } from "react"
import { FilterContext } from "../contexts/FilterContext" 
import styles from "../css/SearchFields.module.css"

function SearchFields() {
  const { search } = useContext(FilterContext);
  
  const handleSearch = (e) => {
    search(e.target.value)
  }

  return (
  <div className={styles.search}>
    <div>
      <input onChange={handleSearch} type="text" placeholder="Search..." name="search" />
    </div>
  </div>
  )
}

export default SearchFields
